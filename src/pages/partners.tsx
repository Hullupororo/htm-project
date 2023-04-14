import Image from "next/image";

import handshake from "@/assets/pictures/partnersPage/handshake.png";

import { logos } from "@/data/partnerLogos";

import { animate, motion, useInView, useMotionValue, useTransform } from "framer-motion";

import { usePageTransition } from "@/lib/hooks/usePageTransition";

import { ParallaxText } from "@/components/widgets/Parallax/Parallax";
import { useContext, useEffect, useRef } from "react";
import { StylesContext } from "./_app";
import Head from "next/head";

export default function Partners() {
    const { variants } = usePageTransition();

    const { partners: styles } = useContext(StylesContext);

    const count = useMotionValue(1);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            animate(count, 57, { duration: 2, delay: 0.9 });
        }
    }, [count, inView]);



    return (
        <>
            <Head>
                <title>HTM: Партнеры</title>
            </Head>

            <motion.div
                className={styles.firstSection}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear", duration: 1, ease: "easeInOut" }}
            >

                <motion.span
                    className={styles.counter}
                    ref={ref}
                >
                    {rounded}
                </motion.span>

                <div className={styles.partnersButton}>
                    <p>НАШИ ПАРТНЕРЫ</p>
                </div>

                <div className={styles.secondaryText}>
                    <p>Число компаний, сделавших правильный выбор</p>
                </div>


            </motion.div>

            <motion.div
                className={styles.secondSection}
            >
                <Image className={styles.logo} fill src={handshake} alt="image" quality={100}/>

                <motion.div
                    className={styles.parallax}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ type: "tween", ease: "easeIn" }}
                >
                    <ParallaxText baseVelocity={-1}>Buy I side Digital Hypers</ParallaxText>
                    <ParallaxText baseVelocity={1}>Совкомбанк Pink Hairlab</ParallaxText>
                </motion.div>

                <div className={styles.logosContainer}>
                    {logos.map((logo, index) => (
                        <motion.div
                            key={logo.src}
                            className={styles.wrapper}
                            initial={{ y: -100, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: (index + 1) / 10, type: "tween", duration: 0.6 }}
                            animate={{ y: -100, opacity: 0 }}
                        >
                            <Image fill className={styles.partnerLogo} key={logo.src} src={logo} alt="image" quality={100}/>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </>
    );
}
