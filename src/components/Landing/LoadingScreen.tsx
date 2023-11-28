import React, { useEffect, useState } from "react";
import Logo from "../../images/slice6.png";
import Image from "next/image";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  Loading: boolean;
};

function LoadingScreen({ Loading }: Props) {
  return (
    <div className={`z-[999] absolute w-full h-screen flex justify-center items-center bg-main`}>
      <AnimatePresence>
        {Loading && (
          <motion.div
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 2.2,
              ease: [0, 0.5, 1, 2.2],
              scale: {
                type: "spring",
                damping: 15,
                stiffness: 200,
              },
            }}
            className="bg-main"
          >
            <img
              className=""
              src={Logo.src}
              width={300}
              height={150}
              alt="logo"
              loading="eager"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default LoadingScreen;
