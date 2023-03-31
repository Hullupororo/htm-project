import { useRef } from "react";

import Image from "next/image";

import second from "@/assets/pictures/aboutPage/second.png";

import third from "@/assets/pictures/aboutPage/third.png";

import main from "@/assets/pictures/main.gif";

import { Arrow } from "@/assets/icons/Arrow";

import { isNull } from "@/lib/utils/typeCheckers";

import { motion } from "framer-motion";

import { usePageTransition } from "@/lib/hooks/usePageTransition";

import styles from "@/styles/pages/About.module.scss";


export default function About() {
    const ref = useRef<HTMLDivElement>(null);

    const { variants } = usePageTransition();

    const scrollDown = () => {
        setTimeout(() => {
            if (!isNull(ref.current)) ref.current.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const points = [
        "Разработаем индивидуальную рекламную стратегию",
        "Подберем релевантный контент",
        "Эффективно проконтролируем бюджет",
        "Повысим узнаваемость"
    ];

    return (
        <>
            <motion.div
                className={styles.firstSection}
                variants={variants}
                initial="hidden"
                animate="enter"
                exit="exit"
                transition={{ type: "linear", duration: 0.9, ease: "easeInOut" }}
            >
                <motion.div
                    className={styles.logoHolder}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, type: "tween", ease: "easeInOut" }}
                >
                    <Image priority className={styles.logo} src={main} alt="image" quality={100}/>
                </motion.div>

                <div className={styles.arrowContainer}>
                    <motion.div
                        animate={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        <motion.div
                            className={styles.textContainer}
                        >
                            <p>ПОПАДЕМ</p>
                            <p>В ТВОЮ АУДИТОРИЮ</p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        onClick={scrollDown}
                        className={styles.arrowCircle}
                        animate={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
                    >
                        <Arrow />
                    </motion.div>
                </div>
            </motion.div>

            <motion.div
                ref={ref}
                className={styles.secondSection}
                animate={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
            >
                <motion.div
                    className={styles.secondText}
                    initial={{ x: -500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, type: "tween" }}
                    animate={{ x: -500, opacity: 0 }}
                >
                    <motion.p>HIT THE MARKET</motion.p>
                    <motion.p className={styles.secondaryText}>независимое<br/> SOCIAL & digital агентство</motion.p>
                </motion.div>


                <Image className={styles.image} fill src={second} alt="image" quality={100}/>
            </motion.div>

            <div className={styles.thirdSection}>
                <motion.div
                    animate={{ x: -300, opacity: 0 }}
                    initial={{ x: -300, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9, type: "tween", ease: "easeIn" }}
                >
                    <Image className={styles.qaImage} fill src={third} alt="image" quality={100}/>
                </motion.div>

                <motion.div
                    className={styles.description}
                    animate={{ x: 500, opacity: 0 }}
                    initial={{ x: 500, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, type: "tween", ease: "easeIn" }}
                >
                    <motion.p
                        initial={{ x: 500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", ease: "easeIn" }}
                        className={styles.thirdText}
                    >
                        HIT THE MARKET УВЕЛИЧИВАЕТ ПРОДАЖИ
                    </motion.p>

                    <motion.p
                        initial={{ x: 500, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ type: "tween", ease: "easeIn" }}
                        className={styles.secondaryText}
                    >
                        Наша цель не только предоставить стратегии
                        и инструменты, но и достичь результата вместе с вами :
                    </motion.p>

                    {points.map((point, index) => (
                        <motion.div
                            initial={{ x: 500, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, type: "tween", ease: "easeIn", staggerChildren: 1 }}
                            key={index}
                            className={styles.point}
                        >
                            <motion.p
                                key={index + 1}
                            >
                                {index + 1}
                            </motion.p>
                            <motion.p
                                key={point}
                                className={styles.secondaryText}
                            >
                                {point}
                            </motion.p>
                        </motion.div>
                    ))}

                </motion.div>

            </div>
        </>
    );
}
