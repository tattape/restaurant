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
import footer from '../../images/Asset 28.png';

type Props = {};

function LandingSection({ }: Props) {
  const [Loading, setLoading] = useState(true);
  const [Ready, setReady] = useState(false);

  useEffect(() => {
    const preload = setInterval(() => {
      setLoading(false);
    }, 2500);
    const Ready = setInterval(() => {
      setReady(true);
    }, 3000);
    return () => {
      clearInterval(preload);
      clearInterval(Ready);
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
              <div className="flex justify-center">
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

              <Parallax speed={10} >
                <div className="relative flex justify-center mt-40">
                  <Parallax speed={20} className="absolute">
                    <Image src={tong1} alt={""}></Image>
                  </Parallax>
                  {/* <Parallax speed={-20} className="absolute">
                    <Image src={tong2} alt={""}></Image>
                  </Parallax> */}

                  {/* <Parallax speed={20} className="absolute">
                    <Image src={food} alt={""}></Image>
                  </Parallax>

                  <Parallax speed={20} className="absolute">
                    <Image src={thaiFood} alt={""}></Image>
                  </Parallax>
                  <Parallax speed={20} className="absolute">
                    <Image src={authentic} alt={""}></Image>
                  </Parallax> */}
                </div>
              </Parallax>
            </div>
            <div className="h-screen">

            </div>

            <Image className="w-full" src={footer} alt={""}></Image>
          </div >
        </ParallaxProvider >
      )
      }
    </>
  );
}

export default LandingSection;
