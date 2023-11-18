import React from "react";
import { Parallax } from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";
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

type Props = {}

function HeaderSection({ }: Props) {
    return (
        <div className="h-screen">
            <div className="flex justify-center">
                <motion.div
                    initial={{ opacity: 0, translateY: -120 }}
                    animate={{ opacity: 1, translateY: 40 }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="w-[200px] md:w-[300px]"
                >
                    <Image src={Logo} width={300} height={150} alt="logo" />
                </motion.div>
            </div>
            <Parallax speed={10} translateY={[0, -50]}>
                <div className="relative flex justify-center mt-40">
                    <Parallax
                        speed={20}
                        translateY={[0, -30]}
                        translateX={[-17, -30]}
                        rotate={[-5, 10]}
                        className="absolute w-3/4 md:w-[900px]"
                    >
                        <motion.div
                            initial={{ rotate: -30, scale: 0.5, opacity: 0 }}
                            animate={{ rotate: 0, scale: 1, opacity: 1 }}
                            transition={{
                                stiffness: 130,
                                delay: 0.3,
                            }}
                        >
                            <Image src={tong1} alt={""}></Image>
                        </motion.div>
                    </Parallax>

                    <Parallax
                        speed={10}
                        translateY={[0, 50]}
                        translateX={[-10, 50]}
                        rotate={[-30, 45]}
                        className="absolute -top-[40px] m:-top-[50px] md:-top-44 m:w-full md:w-[1000px]"
                    >
                        <motion.div
                            initial={{ rotate: -20, opacity: 0, translateX: -100 }}
                            animate={{ rotate: 0, opacity: 1, translateX: 0 }}
                            transition={{
                                stiffness: 130,
                                delay: 0.37,
                            }}
                        >
                            <Image src={tong3} alt={""}></Image>
                        </motion.div>
                    </Parallax>

                    <Parallax speed={-20} rotate={[-50, 20]}>
                        <motion.div
                            initial={{ rotate: -20, opacity: 0, translateX: -100 }}
                            animate={{ rotate: 0, opacity: 1, translateX: 0 }}
                            transition={{
                                stiffness: 130,
                                delay: 0.4,
                            }}
                            className="absolute top-[100px] md:top-[400px] -right-[250px] md:right-[150px] w-[800px]"
                        >
                            <Image width={1000} height={500} src={sai} alt={""} />
                        </motion.div>
                    </Parallax>

                    <Parallax speed={-10} rotate={[-10, 10]}>
                        <motion.div
                            initial={{ opacity: 0, translateX: -50 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{
                                stiffness: 130,
                                delay: 0.52,
                            }}
                            className="absolute -right-[100px] md:-right-[220px] s:top-[150px] m:top-[200px] l:top-[220px] md:top-[530px] w-[200px] md:w-[400px]"
                        >
                            <Image width={600} height={200} src={oil} alt={""} />
                        </motion.div>
                    </Parallax>

                    <Parallax
                        speed={10}
                        translateY={[-40, 60]}
                        translateX={[10, -70]}
                        rotate={[-30, 45]}
                        className="absolute top-[20px] md:top-[93px] w-3/4 md:w-[900px]"
                    >
                        <motion.div
                            initial={{
                                opacity: 0,
                                translateX: 200,
                                translateY: -200,
                            }}
                            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                            transition={{
                                stiffness: 130,
                                delay: 0.35,
                            }}
                        >
                            <Image src={tong2} alt={""}></Image>
                        </motion.div>
                    </Parallax>
                    <Parallax
                        speed={-20}
                        rotate={[-30, 30]}
                        className="absolute w-3/4 md:w-[700px]"
                    >
                        <motion.div
                            initial={{ rotate: 180, scale: 0 }}
                            animate={{ rotate: 0, scale: 1 }}
                            transition={{
                                type: "spring",
                                damping: 23,
                                stiffness: 130,
                                duration: 20,
                            }}
                        >
                            <Image src={food} alt={""}></Image>
                        </motion.div>
                    </Parallax>

                    <Parallax
                        disabled
                        speed={40}
                        className="absolute s:top-[65px] m:top-[50px] sm:top-16 md:top-16 w-1/2 md:w-[500px]"
                    >
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                stiffness: 500,
                                duration: 0.5,
                                delay: 0.4,
                            }}
                        >
                            <Image src={thaiFood} alt={""}></Image>
                        </motion.div>
                    </Parallax>
                    <Parallax
                        disabled
                        speed={40}
                        className="absolute s:top-[105px] m:top-[102px] sm:top-[145px] md:top-[190px] w-1/2 md:w-[600px]"
                    >
                        <div className="brush-stroke">
                            <Image
                                className="w-full s:h-9 m:h-12 sm:h-16 md:h-24"
                                src={authentic}
                                alt={""}
                            />
                        </div>
                    </Parallax>
                </div>
            </Parallax >
        </div >
    )
}

export default HeaderSection