import React, { useEffect, useState } from "react";
import Logo from "../../images/slice6.png";
import Image from "next/image";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
import menu from "../../images/menu.png";
import smallPlates from "../../images/small-plate.png";
import tugTug from "../../images/tug-tug.png";
import tung from "../../images/tung.png";
import nangrum from "../../images/nangrum.png";
import delivery from "../../images/deli-very.png";
import pickup from "../../images/pick-up.png";
import oil from "../../images/oil.png";
import reservation from "../../images/reser-vation.png";
import brife from "../../images/brife.png";
import chicken from "../../images/chicken.png";
import sanvid from "../../images/sanvid.png";
import sai from "../../images/slice27.png";
import handblack from "../../images/hand-black.png";
import thaiStreet from "../../images/thai-street.png";
import thongRed from "../../images/thong-red.png";
import thisIsSoYum from "../../images/this-is-so-yum.png";
import pick from "../../images/pick.png";
import bitong from "../../images/bitong.png";

type Props = {};

function LandingSection({ }: Props) {
  const [Loading, setLoading] = useState(true);
  const [Ready, setReady] = useState(false);
  const [readyTong, setReadyTong] = useState(false);

  useEffect(() => {
    const preload = setInterval(() => {
      setLoading(false);
    }, 2500);
    const Ready = setInterval(() => {
      setReady(true);
    }, 2750);

    return () => {
      clearInterval(preload);
      clearInterval(Ready);
    };
  }, []);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const smallPlate = [
    {
      src: sanvid,
      alt: "image1",
    },
    {
      src: chicken,
      alt: "image2",
    },
    {
      src: brife,
      alt: "image3",
    },
    {
      src: sanvid,
      alt: "image1",
    },
    {
      src: brife,
      alt: "image3",
    },
    {
      src: chicken,
      alt: "image2",
    },
    {
      src: sanvid,
      alt: "image1",
    },
    {
      src: chicken,
      alt: "image2",
    },
    {
      src: brife,
      alt: "image3",
    },
    {
      src: sanvid,
      alt: "image1",
    },
  ];

  return (
    <>
      {!Ready ? (
        <LoadingScreen Loading={Loading} />
      ) : (
        <ParallaxProvider>
          <div className="overflow-x-hidden">
            {/* heder */}
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
                  <AnimatePresence>
                    <motion.div
                      initial={{ opacity: 0, translateX: -50 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      transition={{
                        stiffness: 130,
                        delay: 0.52,
                      }}
                    >
                      <div className="absolute top-[650px] -left-[40px]">
                        <Image src={sai} alt={""} />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                  <Parallax speed={-10} rotate={[-10, 10]}>
                    <motion.div
                      initial={{ opacity: 0, translateX: -50 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      transition={{
                        stiffness: 130,
                        delay: 0.52,
                      }}
                      className="absolute -right-[220px] top-[530px] w-[400px]"
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
                    <AnimatePresence>
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
                        <Image
                          className="w-full s:h-9 m:h-12 sm:h-16 md:h-24"
                          src={authentic}
                          alt={""}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </Parallax>
                  {/* <div className="absolute flex justify-start left-52">
                    <Image src={tugTug} alt={""} />
                  </div>
                  <div className="absolute  right-[360px] top-[120px]">
                    <Image src={tung} alt={""} />
                  </div>
                  <div className="absolute left-[240px] top-[430px]">
                    <Image src={nangrum} alt={""} />
                  </div>
                  <div className="absolute  left-[240px] top-12 w-[140px] h-[90px]">
                    <Image src={delivery} alt={""} />
                  </div>
                  <div className="absolute  right-[370px] top-[180px] w-[140px] h-[90px]">
                    <Image src={pickup} alt={""} />
                  </div>
                  <div className="absolute  left-[260px] top-[580px] w-[180px] h-[80px]">
                    <Image src={reservation} alt={""} />
                  </div> */}
                </div>
              </Parallax>
            </div>
            {/* heder */}

            {/* small plate */}
            <div className=" h-screen  ">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="absolute flex flex-col gap-6 items-center ">
                    <Image src={menu} alt={""} />
                    <Image src={smallPlates} alt={""} />
                  </div>
                </div>
                <Parallax speed={-2}>
                  <div className="absolute top-[700px] left-[350px] w-[300px]">
                    <Image width={300} height={300} src={bitong} alt={""} />
                  </div>
                </Parallax>
                <div className="absolute w-full top-[500px]">
                  <Slider
                    {...settings}
                    className="flex items-center justify-center"
                  >
                    {smallPlate.map((item, idx) => (
                      <div className="h-full outline-none cursor-grab">
                        <Image
                          key={idx}
                          src={item.src}
                          alt={item.alt}
                          className="hover:scale-[1.03] transition-all object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className="absolute top-[280px] right-[0px]">
                  <Image src={handblack} alt={""} />
                </div>

              </div>
            </div>
            {/* small plate */}

            {/* thai street */}
            <div className=" h-screen">
              <div className="relative">

                <Parallax speed={5}>
                  <div className="absolute w-full">
                    <Image width={2200} height={800} src={thongRed} alt={""} />
                  </div>
                </Parallax>
                <div className="flex justify-center">
                  <div className="absolute top-10 flex w-[400px]">
                    <Image width={400} height={300} src={thaiStreet} alt={""} />
                  </div>
                  <div className="absolute w-[440px] right-[390px] top-[50px]">
                    <Image width={500} height={30} src={thisIsSoYum} alt={""} />
                  </div>
                  <Parallax speed={-10}>
                    <div className="absolute w-[150px] -left-[440px]">
                      <Image width={500} height={800} src={pick} alt={""} />
                    </div>
                  </Parallax>

                </div>

                <div className="absolute  w-full top-[300px]">
                  <Slider
                    {...settings}
                    className="flex items-center justify-center "
                  >
                    {smallPlate.map((item, idx) => (
                      <div className="h-full outline-none cursor-grab">
                        <Image
                          key={idx}
                          src={item.src}
                          alt={item.alt}
                          className="hover:scale-[1.03] transition-all object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

              </div>
            </div>
            {/* thai street */}

            {/* footer */}
            <Image className="w-full" src={footer} alt={""}></Image>
            {/* footer */}
          </div>
        </ParallaxProvider >
      )
      }
    </>
  );
}

export default LandingSection;
