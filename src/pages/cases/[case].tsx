import { Theme } from "@/lib/types";

import Button from "@/components/ui/Button/Button";

import { Carousel } from "react-responsive-carousel";

import Image from "next/image";

import { GetStaticProps } from "next";

import { motion } from "framer-motion";

import { cases } from "@/data/cases/cases";

import { getImages } from "@/data/cases/getImages";
import { useIsMobile } from "@/lib/hooks/useIsMobile";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../_app";
import { LogoMiniLoader } from "@/assets/icons/LogoMiniLoader";

export const getStaticPaths = async () => {
  const paths = cases.map(({ id }) => ({ params: { case: id } }));
  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const images = await getImages(context.params?.case as string);

  return { props: { images, id: context.params?.case } };
};

export default function Case({ images, id }: { images: string[]; id: string }) {
  const { casestyle: styles } = useContext(StylesContext);
  const router = useRouter();
  const isMobile = useIsMobile();

  const saveSelectedImageQuery = (selectedSlide: number) => {
    router.push({
      // pathname: `/cases/${currentCase?.id}`,
      // query: { slide: selectedSlide ?? 0 },
      hash: String(selectedSlide),
    });
  };

  const [currentCase, setCurrentCase] = useState<(typeof cases)[0]>();
  const [isCaseLoaded, setIsCaseLoaded] = useState(false);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      router.push({
        query: { to: id },
      });
    });
  }, []);

  useEffect(() => {
    if (!isCaseLoaded) {
      window.scrollTo(0, 0);

      setCurrentCase(
        cases.find((item) => item.id === router.query.case) as (typeof cases)[0]
      );
      if (router.query.case) setIsCaseLoaded(true);
    }
  }, [router.query.case]);

  const { variants } = usePageTransition();

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      <Head>
        <title>HTM: Кейсы</title>
        <meta name="referrer" content="no-referrer"></meta>
      </Head>
      {!isCaseLoaded ? (
        <div className={styles.loaderWrapper}>
          <LogoMiniLoader />
        </div>
      ) : (
        <div>
          <motion.div
            ref={ref}
            className={styles.firstSection}
            variants={variants}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "linear", duration: 0.5, ease: "easeInOut" }}
          >
            <div className={styles.leftSection}>
              <Carousel
                selectedItem={Number(router.asPath.split("#")[1] ?? 0) ?? 0}
                onChange={saveSelectedImageQuery}
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                className={styles.carousel}
              >
                {images.map((image) => (
                  <div key={image}>
                    <Image
                      className={styles.image}
                      src={`/static/images/${currentCase?.id}/${image}`}
                      alt="image"
                      width={592}
                      height={592}
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className={styles.descriptionSection}>
              <div className={styles.descriptionContainer}>
                <p className={styles.serviceText}>{currentCase?.service}</p>

                <p className={styles.title}>{currentCase?.name}</p>

                <p className={styles.secondaryText}>
                  {currentCase?.description}
                </p>
              </div>

              <p
                className={styles.description}
                dangerouslySetInnerHTML={{
                  __html: currentCase?.text.header ?? "",
                }}
              ></p>
            </div>

            {isMobile && (
              <div className={styles.secondSection}>
                <p
                  className={styles.bottomDescription}
                  dangerouslySetInnerHTML={{
                    __html: currentCase?.text.body ?? "",
                  }}
                ></p>
                {currentCase?.videos && (
                  <div className={styles.videos}>
                    {currentCase?.videos?.map((video, index) => (
                      <video
                        // preload={index === 0 ? undefined : "none"}
                        key={video}
                        className={styles.video}
                        height={500}
                        width={600}
                        controls
                      >
                        <source src={video} type="video/mp4" />
                      </video>
                    ))}
                  </div>
                )}
                <div className={styles.buttons}>
                  <Link href="/cases">
                    <Button theme={Theme.Light} title="К кейсам" />
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
          {!isMobile && (
            <div className={styles.secondSection}>
              <p
                className={styles.bottomDescription}
                dangerouslySetInnerHTML={{
                  __html: currentCase?.text.body ?? "",
                }}
              ></p>
              <div className={styles.videos}>
                {currentCase?.videos?.map((video, index) => (
                  <video
                    // preload={index === 0 ? undefined : "none"}
                    key={video}
                    className={styles.video}
                    height={500}
                    width={600}
                    controls
                  >
                    <source src={video} type="video/mp4" />
                  </video>
                ))}
              </div>
              <div className={styles.buttons}>
                <Link href="/cases">
                  <Button theme={Theme.Light} title="К кейсам" />
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
