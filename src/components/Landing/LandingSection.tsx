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
import allTimeFavorite from "../../images/all-time-favorite.png";
import horapa1 from "../../images/horapa1.png";
import horapa2 from "../../images/horapa2.png";
import giftCardBG from "../../images/giftCardBG.png";
import giftCard from "../../images/gift-card.png";
import thongTong from "../../images/thongtong.png";
import heart from "../../images/heart.png";
import women from "../../images/women.png";
import fontC from "../../images/image-font-c.png";
import fontA from "../../images/image-font-A.png";
import fontR from "../../images/image-font-R.png";
import fontT from "../../images/image-font-t.png";
import fontE from "../../images/image-font-e.png";
import fontRingR from "../../images/image-font-R-head-ring.png";
import fontI from "../../images/image-font-i.png";
import fontN from "../../images/image-font-n.png";
import fontG from "../../images/image-font-g.png";
import fontW from "../../images/image-font-W.png";
import fontWedE from "../../images/image-font-E-wed.png";
import fontD from "../../images/image-font-D.png";
import fontDingD from "../../images/image-font-D-ding.png";
import fontDingI from "../../images/image-font-I-ding.png";
import fontDingN from "../../images/image-font-N-ding.png";
import fontDingG from "../../images/image-font-G-ding.png";
import camera from "../../images/camera.png";
import flower from "../../images/flower.png";
import cropPhoto from "../../images/crop-photo.png";
import date from "../../images/date.png";
import arch from "../../images/arch.png";

type Props = {};

function LandingSection({}: Props) {
  const [Loading, setLoading] = useState(true);
  const [Ready, setReady] = useState(false);
  const [NumOfDish, setNumOfDish] = useState(5);

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

  useEffect(() => {
    const checkScreenSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 1025) {
        setNumOfDish(3);
      } else {
        setNumOfDish(5);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  });

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: NumOfDish,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
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

                  <Parallax speed={-20} rotate={[-50, 20]}>
                    <motion.div
                      initial={{ rotate: -20, opacity: 0, translateX: -100 }}
                      animate={{ rotate: 0, opacity: 1, translateX: 0 }}
                      transition={{
                        stiffness: 130,
                        delay: 0.4,
                      }}
                      className="absolute top-[400px] right-[150px] w-[800px]"
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
            <div className="h-[800px] md:pt-[120px] lg:pt-0">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="absolute flex flex-col gap-6 items-center w-[180px] md:w-[300px] lg:w-[500px]">
                    <Image src={menu} alt={""} />
                    <Image src={smallPlates} alt={""} />
                  </div>
                </div>
                <Parallax speed={-10}>
                  <div className="absolute md:top-[350px] lg:top-[500px] left-[250px] md:w-[250px] lg:w-[300px]">
                    <Image width={300} height={300} src={bitong} alt={""} />
                  </div>
                </Parallax>
                <div className="absolute w-full md:top-[300px] lg:top-[400px]">
                  <Slider
                    {...settings}
                    className="flex items-center justify-center"
                  >
                    {smallPlate.map((item, idx) => (
                      <div className="outline-none cursor-grab">
                        <Image
                          width={500}
                          height={500}
                          key={idx}
                          src={item.src}
                          alt={item.alt}
                          className="p-3 hover:scale-[1.05] transition-all object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <Parallax translateX={[50, 0]}>
                  <div className="absolute md:top-[150px] lg:top-[220px] right-[0px] md:w-[200px] lg:w-[350px]">
                    <Image width={600} height={600} src={handblack} alt={""} />
                  </div>
                </Parallax>
              </div>
            </div>
            {/* small plate */}
            {/* thai street */}
            <div className=" h-[800px] md:pt-[100px] lg:pt-0">
              <div className="relative">
                <Parallax speed={5}>
                  <Parallax speed={-10}>
                    <div className="absolute w-full">
                      <Image
                        className="w-full"
                        width={2200}
                        height={800}
                        src={thongRed}
                        alt={""}
                      />
                    </div>
                  </Parallax>
                </Parallax>
                <div className="flex justify-center">
                  <div className="absolute md:-top-5 2xl:top-10 flex md:w-[250px] xl:w-[400px]">
                    <Image width={400} height={300} src={thaiStreet} alt={""} />
                  </div>
                  <div className="absolute md:right-[50px] lg:right-[180px] 2xl:right-[390px] md:-top-[10px] 2xl:top-[50px] md:w-[280px] xl:w-[440px]">
                    <Image width={500} height={30} src={thisIsSoYum} alt={""} />
                  </div>
                  <Parallax speed={-5}>
                    <div className="absolute w-[100px] xl:w-[150px] -left-[300px] xl:-left-[440px] -top-[70px] xl:-top-[60px]">
                      <Image width={500} height={800} src={pick} alt={""} />
                    </div>
                  </Parallax>
                </div>

                <div className="absolute w-full md:top-[150px] lg:top-[200px] xl:top-[300px] 2xl:top-[400px]">
                  <Slider
                    {...settings}
                    className="flex items-center justify-center"
                  >
                    {smallPlate.map((item, idx) => (
                      <div className="outline-none cursor-grab">
                        <Image
                          width={500}
                          height={500}
                          key={idx}
                          src={item.src}
                          alt={item.alt}
                          className="p-3 hover:scale-[1.05] transition-all object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>{" "}
            {/* thai street */}
            {/* all time favorite */}
            <div className=" h-[800px]">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="absolute justify-center top-10 flex">
                    <div className="absolute w-[670px] -left-[210px]">
                      <Image
                        width={800}
                        height={100}
                        src={allTimeFavorite}
                        alt={""}
                      />
                    </div>
                  </div>
                </div>
                <Parallax translateX={[0, 0]}>
                  <div className="absolute md:top-[150px] -right-[170px] lg:top-[220px] md:w-[200px] lg:w-[350px] ">
                    <Image width={600} height={600} src={horapa1} alt={""} />
                  </div>
                </Parallax>

                <div className="absolute w-full top-[360px]">
                  <Slider
                    {...settings}
                    className="flex items-center justify-center"
                  >
                    {smallPlate.map((item, idx) => (
                      <div className="outline-none cursor-grab">
                        <Image
                          width={500}
                          height={500}
                          key={idx}
                          src={item.src}
                          alt={item.alt}
                          className="p-3 hover:scale-[1.05] transition-all object-contain"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>

                <Parallax speed={-5}>
                  <div className="absolute w-[400px] -left-[210px] top-[260px] border-none  object-contain">
                    <Image width={600} height={200} src={horapa2} alt={""} />
                  </div>
                </Parallax>
              </div>
            </div>
            {/* all time favorite */}
            {/* gift card && Car te Ring */}
            <div className=" h-[1500px]">
              <div className="relative">
                <Parallax speed={5} translateX={[0, -10]}>
                  <div className="absolute w-full 2xl:left-[28px] xl:-left-[10px]">
                    <Image
                      width={1400}
                      height={800}
                      src={giftCardBG}
                      alt={""}
                    />
                  </div>
                </Parallax>
                <Parallax translateX={[0, -40]}>
                  <div className="">
                    <div className="absolute rounded-full bg-[#9f00a3] opacity-70 2xl:top-[50px] 2xl:right-[190px] xl:top-[50px] xl:-right-[90px] border-none w-[380px] h-[380px]"></div>
                  </div>
                </Parallax>
                <Parallax translateX={[-40, 0]}>
                  <div className="absolute 2xl:top-[120px] 2xl:right-[0px] 2xl:left-[350px] xl:top-[120px] xl:right-[0px] xl:left-[360px] w-[300px] h-[200px] ">
                    <Image width={600} height={100} src={giftCard} alt={""} />
                  </div>
                </Parallax>
                <Parallax speed={-10}>
                  <div className="absolute h-[240px] w-[240px] 2xl:left-[960px] 2xl:-top-[80px] xl:left-[960px] xl:-top-[55px]">
                    <Image width={500} height={800} src={women} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateY={[-20, 0]}>
                  <div className="absolute w-[160px] h-[160px] 2xl:left-[860px] 2xl:top-[215px] xl:left-[860px] xl:top-[215px]">
                    <Image width={500} height={30} src={heart} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[0, 10]}>
                  <div className="absolute w-[240px] h-[240px] 2xl:left-[480px] 2xl:top-[100px] xl:left-[535px] xl:top-[110px]">
                    <Image width={500} height={30} src={thongTong} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[0, 10]}>
                  <div className="absolute text-lg 2xl:left-[220px] 2xl:top-[320px] xl:left-[260px] xl:top-[325px]">
                    <div className="text-white">
                      Give your loved ones the gift of dining
                    </div>
                  </div>
                </Parallax>
                <Parallax translateX={[10, 0]}>
                  <div className="absolute text-lg 2xl:left-[510px] 2xl:top-[350px] xl:left-[530px] xl:top-[355px]">
                    <div className="text-white">with Bai Tong gift card.</div>
                  </div>
                </Parallax>
                {/* Car te Ring */}
                <Parallax>
                  <div className="absolute top-[460px] left-[740px] w-[200px]">
                    <Image width={300} height={300} src={camera} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[100, 0]}>
                  <div className="absolute top-[671px] left-[400px] w-[70px]">
                    <Image width={300} height={300} src={fontC} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[-30, 0]}>
                  <div className="absolute top-[640px] left-[460px] w-[100px]">
                    <Image width={300} height={300} src={fontA} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[100, 0]}>
                  <div className="absolute top-[640px] left-[570px] w-[120px]">
                    <Image width={300} height={300} src={fontR} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[-30, 0]}>
                  <div className="absolute top-[665px] left-[720px] w-[40px]">
                    <Image width={300} height={300} src={fontT} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[100, 0]}>
                  <div className="absolute top-[703px] left-[755px] w-[40px]">
                    <Image width={300} height={300} src={fontE} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[-30, 0]}>
                  <div className="absolute 2xl:top-[645px] 2xl:right-[965px] xl:top-[645px] xl:right-[520px] w-[110px]">
                    <Image width={300} height={300} src={fontRingR} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[100, 0]}>
                  <div className="absolute 2xl:top-[592px] 2xl:right-[900px] xl:top-[592px] xl:right-[453px] w-[50px]">
                    <Image width={300} height={300} src={fontI} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[100, 0]}>
                  <div className="absolute 2xl:top-[560px] 2xl:right-[870px] xl:top-[560px] xl:right-[420px] w-[70px]">
                    <Image width={300} height={300} src={flower} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[-30, 0]}>
                  <div className="absolute 2xl:top-[645px] 2xl:right-[810px] xl:top-[645px] xl:right-[360px] w-[85px]">
                    <Image width={300} height={300} src={fontN} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[100, 0]}>
                  <div className="absolute 2xl:top-[645px] 2xl:right-[730px] xl:top-[645px] xl:right-[275px] w-[85px]">
                    <Image width={300} height={300} src={fontG} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[750px] 2xl:left-[670px] xl:top-[743px] xl:left-[658px] w-[160px]">
                    <Image width={300} height={300} src={fontW} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[750px] 2xl:left-[820px] xl:top-[743px] xl:left-[820px] w-[90px]">
                    <Image width={300} height={300} src={fontWedE} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[750px] 2xl:right-[870px] xl:top-[743px] xl:right-[410px] w-[105px]">
                    <Image width={300} height={300} src={fontD} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute top-[880px] left-[680px] w-[105px]">
                    <Image width={300} height={300} src={fontDingD} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute top-[880px] left-[790px] w-[49px]">
                    <Image width={300} height={300} src={fontDingI} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[880px] 2xl:right-[950px] xl:top-[880px] xl:right-[495px] w-[100px]">
                    <Image width={300} height={300} src={fontDingN} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[880px] 2xl:right-[850px] xl:top-[880px] xl:right-[395px] w-[100px]">
                    <Image width={300} height={300} src={fontDingG} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[1030px] 2xl:right-[730px] xl:top-[1030px] xl:right-[280px] w-[400px]">
                    <Image width={350} height={350} src={arch} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[980px] 2xl:right-[750px] xl:top-[980px] xl:right-[300px] w-[300px]">
                    <Image width={250} height={250} src={cropPhoto} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[1215px] 2xl:right-[820px] xl:top-[1215px] xl:right-[350px] w-[140px]">
                    <Image width={300} height={300} src={date} alt={""} />
                  </div>
                </Parallax>
                <div className="absolute text-3xl left-[440px] top-[800px] text-[#ffe200]">
                  <Parallax>
                    <div className="">Looking for</div>
                  </Parallax>
                  <Parallax>
                    <div className="">catering service</div>
                  </Parallax>
                  <Parallax>
                    <div className="">for</div>
                  </Parallax>
                  <Parallax>
                    <div className="">your upcoming event?</div>
                  </Parallax>
                </div>
                <div className="absolute text-lg left-[440px] top-[1000px] text-[#ffe200]">
                  <Parallax>
                    <div className="">We offer an extensive menu</div>
                  </Parallax>
                  <Parallax>
                    <div className="">selection and can accommodate</div>
                  </Parallax>
                  <Parallax>
                    <div className="">most dietary needs.Menu</div>
                  </Parallax>
                  <Parallax>
                    <div className="">planning including bar service,</div>
                  </Parallax>
                  <Parallax>
                    <div className="">floral and table decoration as</div>
                  </Parallax>
                  <Parallax>
                    <div className="">well as rental needs can all be</div>
                  </Parallax>
                  <Parallax>
                    <div className="">handled by our team, leaving</div>
                  </Parallax>
                  <Parallax>
                    <div className="">you time to relax.</div>
                  </Parallax>
                </div>
                <div className="absolute text-lg left-[440px] top-[1250px] text-[#ffe200]">
                  <Parallax>
                    <div className="">For more information,</div>
                  </Parallax>
                  <Parallax>
                    <div className="">please email us at :</div>
                  </Parallax>
                  <Parallax>
                    <div className="">catering@baitongfamily.com</div>
                  </Parallax>
                </div>
              </div>
            </div>
            {/* gift card */}
            {/* footer */}
            <Image className="w-full" src={footer} alt={""}></Image>
            {/* footer */}
          </div>
        </ParallaxProvider>
      )}
    </>
  );
}

export default LandingSection;
