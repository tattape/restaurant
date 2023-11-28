import React from "react";
import { Parallax } from "react-scroll-parallax";
import { motion } from "framer-motion";
import Image from "next/image";

import Logo from "../../images/slice6.png";

import thaiFood from "../../images/slice4.png";
import authentic from "../../images/slice5.png";
import food from "../../images/Asset 5.png";
import tong1 from "../../images/Asset 2.png";
import tong2 from "../../images/Asset 3.png";
import tong3 from "../../images/Asset 4.png";
import oil from "../../images/oil.png";
import sai from "../../images/slice27.png";

type Props = {
}

function HeaderSection({ }: Props) {
    return (
        <div className="h-screen mb-10">
            <div className="flex justify-center">
                <div data-aos='fade-down' data-aos-delay='500' className="my-14 w-[200px] md:w-[300px]">
                    <Image src={Logo.src} width={300} height={150} alt="logo" loading="eager" priority />
                </div>
            </div>
            <div className="relative flex flex-col justify-center items-center">
                <div className="flex">
                    <Parallax
                        speed={10}
                        className="absolute md:static rotate-45 l:rotate-0 md:-mr-[400px] w-3/5 md:w-[600px]"
                    >
                        <div data-aos='fade-up' data-aos-delay='1000'>
                            <Image width={1000} height={500} src={tong1.src} alt={""} loading="eager" priority />
                        </div>
                    </Parallax>
                    <Parallax
                        speed={5}
                        translateY={[-40, 40]}
                        rotate={[-45, 45]}
                        className="ml-12 -mt-[20px] md:ml-0 md:mt-0 z-20 w-3/4 md:w-[700px]"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ rotate: 180, scale: 1 }}
                            transition={{
                                delay: 0.5,
                                type: "spring",
                                stiffness: 300,
                                damping: 25
                            }}
                        >
                            <Image width={700} height={700} src={food.src} alt={""} loading="eager" priority />
                        </motion.div>
                    </Parallax>
                    <Parallax
                        speed={10}
                        translateY={[-60, 60]}
                        translateX={[-60, 60]}
                        rotate={[-45, 45]}
                        className="absolute md:static ml-[100px] mt-[30px] m:mt-[50px] md:-ml-[500px] md:mt-[170px] w-3/4 md:w-[700px]"
                    >
                        <div data-aos='fade-right' data-aos-delay='1000'>
                            <Image width={1000} height={500} src={tong3.src} alt={""} loading="eager" priority />
                        </div>
                    </Parallax>
                </div>

                <Parallax
                    speed={10}
                    translateY={[-60, 60]}
                    translateX={[60, -60]}
                    rotate={[-30, 30]}
                    className="-ml-[50px] -mt-[150px] m:-ml-[100px] m:-mt-[200px] md:-ml-[300px] md:-mt-[400px] z-10 w-3/5 md:w-[600px]"
                >
                    <div data-aos='fade-left' data-aos-delay='1000'>
                        <Image width={1000} height={500} src={tong2.src} alt={""} loading="eager" priority />
                    </div>
                </Parallax>

                <div className="-mt-[160px] m:-mt-[160px] l:-mt-[230px] md:-mt-[600px] z-30 flex flex-col justify-center items-center">
                    <Parallax
                        className="w-1/2 md:w-[500px]"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                delay: 0.8,
                                type: "spring",
                                stiffness: 260,
                                damping: 25
                            }}
                        >
                            <Image width={500} height={500} src={thaiFood.src} alt={""} loading="eager" priority />
                        </motion.div>
                    </Parallax>
                    <Parallax
                        className="-mt-[75px] m:-mt-[90px] l:-mt-[100px] md:-mt-[225px] w-1/2 md:w-[600px]"
                    >
                        <motion.div
                            initial={{ clipPath: 'polygon(0 0, 0 100%, 0 100%, 0 0)' }}
                            animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                            transition={{
                                duration: 0.8,
                                delay: 1,
                            }}
                        >
                            <Image width={600} height={600} className="w-full s:h-9 m:h-12 sm:h-16 md:h-24" src={authentic.src} alt={""} loading="eager" priority />
                        </motion.div>
                    </Parallax>
                </div>

                <Parallax
                    speed={10}
                    translateX={[0, 0]}
                    translateY={[0, 0]}
                    rotate={[-10, 45]}
                >
                    <motion.div
                        initial={{ opacity: 0, translateY: -20 }}
                        animate={{ opacity: 1, translateY: 0 }}
                        transition={{
                            delay: 1.2,
                        }}
                        className="ml-20 mt-[100px] m:mt-[90px] l:mt-[150px] md:mt-[220px] md:ml-0 w-1/2 md:w-[400px]"
                    >
                        <Image width={600} height={200} src={oil.src} alt={""} loading="eager" priority />
                    </motion.div>
                </Parallax>
                <Parallax speed={-30}>
                    <motion.div
                        initial={{ opacity: 0, rotate: -45, translateY: -100 }}
                        animate={{ opacity: 1, rotate: 0, translateY: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 1.3,
                        }}
                        className="-mt-[50px] md:-ml-[950px] md:-mt-[100px] md:w-[900px]"
                    >
                        <Image className="hover:invert transition-all ease-in-out" width={1000} height={500} src={sai.src} alt={""} loading="eager" priority />
                    </motion.div>
                </Parallax>
            </div>
        </div >
    )
}

export default HeaderSection