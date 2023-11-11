import React, { useEffect, useState } from "react";
import Logo from "../../images/slice6.png";
import Image from "next/image";
import "aos/dist/aos.css";
import {
  ParallaxProvider,
  Parallax,
  ParallaxBanner,
} from "react-scroll-parallax";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import thaiFood from "../../images/slice4.png";
import authentic from "../../images/slice5.png";
import food from "../../images/Asset 5.png";
import tong1 from "../../images/Asset 2.png";
import tong2 from "../../images/Asset 3.png";
import tong3 from "../../images/Asset 4.png";
import footer from "../../images/Asset 28.png";

type Props = {};

function LandingSection({}: Props) {
  const [Loading, setLoading] = useState(true);
  const [Ready, setReady] = useState(false);
  const [readyTong, setReadyTong] = useState(false);

  useEffect(() => {
    const preload = setInterval(() => {
      setLoading(false);
    }, 2500);
    const Ready = setInterval(() => {
      setReady(true);
    }, 3000);
    const tongReady = setInterval(() => {
      setReadyTong(true);
    }, 3000);

    return () => {
      clearInterval(preload);
      clearInterval(Ready);
      clearInterval(tongReady);
    };
  }, []);
  return (
    <>
      {!Ready ? (
        <LoadingScreen Loading={Loading} />
      ) : (
        <ParallaxProvider>
          <div className="">
            {/* heder */}
            <div className="">
              <div className="flex justify-center w-full border">
                <motion.div
                  initial={{ opacity: 0, translateY: -120 }}
                  animate={{ opacity: 1, translateY: 40 }}
                  transition={{
                    duration: 0.5,
                  }}
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
                    className="absolute "
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
                    translateX={[-45, 100]}
                    rotate={[-30, 45]}
                    className="absolute -top-44 "
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
                  <Parallax
                    speed={10}
                    translateY={[-40, 60]}
                    translateX={[10, -70]}
                    rotate={[-30, 45]}
                    className="absolute top-[93px] "
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
                  <Parallax speed={-20} rotate={[-30, 30]} className="absolute">
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

                  <Parallax speed={40} className="absolute top-16">
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
                  <Parallax speed={30} className="absolute top-[198px]">
                    <motion.div
                      initial={{ width: "0%", opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      transition={{
                        type: "spring",
                        damping: 23,
                        stiffness: 130,
                        duration: 20,
                        delay: 0.45,
                      }}
                    >
                      <Image className="w-full h-24" src={authentic} alt={""} />
                    </motion.div>
                  </Parallax>
                </div>
              </Parallax>
            </div>
            <div className="h-screen"></div>
            <div className="h-screen"></div>

            <Image className="w-full" src={footer} alt={""}></Image>
          </div>
        </ParallaxProvider>
      )}
    </>
  );
}

export default LandingSection;
