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
import bgImage from "../../images/bg.jpg";

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
        <div className="main-bg bg-cover">
          {/* heder */}
          <div className="h-screen flex justify-center">
            <motion.div
              initial={{ opacity: 0, translateY: -120 }}
              animate={{ opacity: 1, translateY: 40 }}
              transition={{
                duration: 0.5,
              }}
            >
              <Image src={Logo} width={300} height={150} alt="logo" />
            </motion.div>
            <div>
              <Image src={""} alt={""}></Image>
            </div>
          </div>

          <div className="h-screen"></div>
        </div>
      )}
    </>
  );
}

export default LandingSection;
