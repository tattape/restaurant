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

type Props = {};

function LandingSection({}: Props) {
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
        <div className="main-bg bg-cover">
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
                <div className="relative flex justify-center p-40">
                  <Parallax speed={-5} scale={[1,1]} translateX= {[0, 100,'easeOutQuad']} easing="ease" >
                  <div className="absolute w-[600px] h-[600px] -bottom-[5px] -right-[370px]">
                    <Image src={tong1} alt={""}></Image>
                  </div>
                  </Parallax >
                  <div className="absolute w-[700px] h-[700px] top-[180px] left-[800px]">
                    <Image src={tong3} alt={""}></Image>
                  </div>
                  <div className="absolute w-[620px] h-[520px] top-[180px] right-[720px]">
                    <Image src={tong2} alt={""}></Image>
                  </div>
                 
                  <Parallax>
                    <div className="w-[500px] h-[500px] ">
                      <Image src={food} alt={""}></Image>
                    </div>
                  </Parallax>
                  <div className="absolute w-64 h-64 pt-24">
                    <Image src={thaiFood} alt={""}></Image>
                  </div>
                  <div className="absolute w-[500px] h-64 pt-[160px]">
                    <Image src={authentic} alt={""}></Image>
                  </div>
                </div>
              </Parallax>
          
          </div>

          <div className="h-screen"></div>
        </div>
        </ParallaxProvider>
      )}
    </>
  );
}

export default LandingSection;
