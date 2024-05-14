import Image from "next/image";

import ourServices from "@/assets/pictures/servicesPage/ourServices.png";

import { Theme } from "@/lib/types";

import { services } from "@/data/services";

import ServiceItem from "@/components/ui/ServiceItem/ServiceItem";

import Button from "@/components/ui/Button/Button";

import { useRouter } from "next/router";

import { motion, useInView } from "framer-motion";

import { ArrowScroll } from "@/components/ui/ArrowScroll/ArrowScroll";
import {
  listDelaySlideIn,
  opacityFromZeroToOne,
  slideInItem,
} from "@/lib/animaitons/animations";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import Head from "next/head";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { StylesContext } from "../_app";
import { LogoMiniLoader } from "@/assets/icons/LogoMiniLoader";
import { useSmoothScroll } from "@/lib/hooks/useSmoothScroll";

export default function Services() {
  const router = useRouter();
  const [inViewOnce, setInViewOnce] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const { scrollToSmoothly } = useSmoothScroll();

  const secondSectionRef = useRef<HTMLDivElement>(null);

  const { services: styles } = useContext(StylesContext);

  const { variants, transitionHandler } = usePageTransition();

  const onClick = (next: string) => () => {
    transitionHandler(router.pathname, next);
  };

  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) setInViewOnce(true);
  }, [isInView]);

  useEffect(() => {
    setTimeout(() => {
      if (!router.query.to) return;
      const el = document.querySelector(`#${router.query.to}`);
      scrollToSmoothly(el?.getBoundingClientRect()?.top ?? 0, 0);
    }, 600);
  }, []);

  return (
    <>
      <Head>
        <title>HTM: Услуги</title>
      </Head>

      <motion.div
        ref={secondSectionRef}
        className={styles.firstSection}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
      >
        <motion.div className={styles.textContainer} {...opacityFromZeroToOne}>
          <p className={styles.primaryText}>НАШИ</p>
          <p className={styles.primaryText}>УСЛУГИ</p>
        </motion.div>

        {!isImageLoaded && <LogoMiniLoader white />}

        <motion.div
          className={styles.imageWrapper}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            priority
            className={styles.image}
            fill
            src={ourServices}
            alt="image"
            quality={100}
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
        </motion.div>

        <ArrowScroll scrollTo={secondSectionRef} />
      </motion.div>

      <motion.div
        className={styles.secondSection}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{ type: "linear", duration: 0.7, ease: "easeIn" }}
      >
        <div ref={ref} className={styles.servicesContainer}>
          <motion.div
            className={styles.textWrapper}
            {...slideInItem("toRight", 0.2)}
            viewport={{ once: true }}
          >
            <p className={styles.primaryTextTwo}>ЧТО МЫ МОЖЕМ</p>
          </motion.div>
          <div className={styles.placeholder} />
          <div className={styles.placeholder} />
          <div className={styles.placeholder} />

          {services.map(({ title, icon, name }, index) => (
            <motion.div
              id={name}
              key={title}
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              animate={inViewOnce ? { opacity: 1 } : { opacity: 0 }}
              viewport={{ once: true }}
            >
              <ServiceItem
                onClick={onClick("/services/[service]")}
                name={name}
                key={title}
                title={title}
                icon={icon()}
              />
            </motion.div>
          ))}
          <div className={styles.casesWrapper}>
            <Link className={styles.contacts} href="/contacts#to">
              <Button title="КОНТАКТЫ" theme={Theme.Light} />
            </Link>
          </div>
        </div>
      </motion.div>
    </>
  );
}
