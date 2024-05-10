import thankyou from "@/assets/pictures/thankyou.png";

import { useContext, useEffect, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion } from "framer-motion";

import SocialMediaList from "@/components/widgets/SocialMediaList/SocialMediaList";

import FeedbackForm from "@/components/widgets/FeedbackForm/FeedbackForm";
import { usePageTransition } from "@/lib/hooks/usePageTransition";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { isMobile } from "react-device-detect";
import { StylesContext } from "./_app";

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const [heightlosed, heightOpen] = isMobile
    ? ["1200px", "1640px"]
    : ["120vh", "180vh"];

  const { contacts: styles } = useContext(StylesContext);

  const { variants } = usePageTransition();

  useEffect(() => {
    if (!isMobile) return;
    setTimeout(() => window.scrollTo(0, 0), 300);
  }, []);

  return (
    <motion.div
      className={`${styles.pageWrapper} ${
        !isMobile && submitted ? styles.submitted : ""
      }`}
      animate={{
        height: submitted ? "100vh" : isOpen ? heightOpen : heightlosed,
      }}
    >
      <Head>
        <title>HTM: Контакты</title>
      </Head>

      <motion.div
        className={`${styles.firstSection} ${
          !isMobile && submitted ? styles.submittedFirstSection : ""
        }`}
        variants={variants}
        initial="hidden"
        animate="enter"
        exit="exit"
        transition={{
          type: "linear",
          duration: 0.6,
          ease: "easeInOut",
          delay: router.asPath.includes("to") ? 0.3 : 0,
        }}
      >
        <AnimatePresence initial={false} mode="wait">
          {submitted ? (
            <motion.div
              className={styles.container}
              key="thankYou"
              animate={{ y: -20, opacity: 0 }}
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, type: "tween", ease: "easeIn" }}
            >
              <Image className={styles.image} src={thankyou} alt="thankyou" />

              <div className={styles.thankYouText}>
                <p>СПАСИБО</p>
                <p>
                  Наши специалисты свяжутся
                  <br />с Вами в ближайшее время!
                </p>

                <SocialMediaList />
                <Link href="tel:+79919711717" className={styles.numberWrapper}>
                  <p className={styles.number}>
                    +7 991&nbsp; 971&nbsp; 17&nbsp; 17
                  </p>
                </Link>
              </div>
            </motion.div>
          ) : (
            <motion.div
              className={styles.containerLeft}
              key="text"
              exit={{ opacity: 0, y: 300 }}
              transition={{
                type: "linear",
                duration: 0.5,
                ease: "easeInOut",
              }}
            >
              <div className={styles.leftSection}>
                <p className={styles.text}>ПОПАДЕМ В ТВОЮ АУДИТОРИЮ</p>
                <SocialMediaList />

                <Link href="tel:+79919711717" className={styles.numberWrapper}>
                  <p className={styles.number}>
                    +7&nbsp; 991&nbsp; 971&nbsp; 17&nbsp; 17
                  </p>
                </Link>
              </div>

              <FeedbackForm setIsOpen={setIsOpen} setSubmitted={setSubmitted} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
