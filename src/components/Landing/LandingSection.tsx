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
import ButtonLanding from "./ButtonLanding";

//contact
import facebook from "../../images/facebook-logo.png";
import twitter from "../../images/twitter-logo.png";
import whatapp from "../../images/whatsapp-logo.png";
import instagram from "../../images/instagram-logo.png";
import tel from "../../images/smartphone-logo.png";
import email from "../../images/mail-logo.png";
import message from "../../images/chat-logo.png";

type Props = {};

function LandingSection({}: Props) {
  const [Loading, setLoading] = useState(true);
  const [Ready, setReady] = useState(false);
  const [NumOfDish, setNumOfDish] = useState(3);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timer: any;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

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
        setNumOfDish(3);
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

  const contact = [
    {
      alt: "facebook",
      src: facebook,
    },
    {
      alt: "x",
      src: twitter,
    },
    {
      alt: "whatapp",
      src: whatapp,
    },
    {
      alt: "instagram",
      src: instagram,
    },
    {
      alt: "tel",
      src: tel,
    },
    {
      alt: "email",
      src: email,
    },
    {
      alt: "message",
      src: message,
    },
  ];

  return (
    <>
      {!Ready ? (
        <LoadingScreen Loading={Loading} />
      ) : (
        <ParallaxProvider>
          {/* <ButtonLanding scroll={isScrolling} /> */}
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
                </div>
              </Parallax>
            </div>
            {/* heder */}

            {/* small plate */}
            <div className=" md:pt-[120px] lg:pt-0 my-[120px]">
              <div className="relative">
                <div className="flex justify-center">
                  <div className="flex flex-col gap-6 items-center w-[180px] md:w-[300px] lg:w-[500px]">
                    <Image src={menu} alt={""} />
                    <Image src={smallPlates} alt={""} />
                  </div>
                </div>
                <Parallax translateX={[10, 0]} translateY={[0, 0]} speed={10}>
                  <div className="absolute -top-[180px] right-[0px] md:w-[200px] lg:w-[350px] ">
                    <Image width={600} height={600} src={handblack} alt={""} />
                  </div>
                </Parallax>
                <div className=" w-full md:top-[300px] lg:top-[400px]">
                  <Slider
                    {...settings}
                    className="flex items-center justify-center"
                  >
                    {smallPlate.map((item, idx) => (
                      <div key={idx} className="outline-none cursor-grab">
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
                <Parallax speed={-10}>
                  <div className="absolute -top-[50px] left-[435px] md:w-[250px] lg:w-[300px]">
                    <Image width={300} height={300} src={bitong} alt={""} />
                  </div>
                </Parallax>
              </div>
            </div>
            {/* small plate */}

            {/* thai street */}
            <div className="md:pt-[100px] lg:pt-0 my-[120px]">
              <div className="relative">
                <Parallax speed={-10}>
                  <div className="w-full z-0">
                    <Image
                      className="w-full"
                      width={2200}
                      height={800}
                      src={thongRed}
                      alt={""}
                    />
                  </div>
                </Parallax>
                <Parallax speed={-2}>
                  <div className="absolute w-[100px] xl:w-[150px] -top-[925px] left-[520px] z-[999]">
                    <Image width={500} height={800} src={pick} alt={""} />
                  </div>
                </Parallax>
                <div className="flex justify-center">
                  <div className="absolute md:-top-5 2xl:top-10 flex md:w-[250px] xl:w-[400px]">
                    <Image width={400} height={300} src={thaiStreet} alt={""} />
                  </div>
                  <div className="absolute md:right-[50px] lg:right-[180px] 2xl:right-[390px] md:-top-[10px] 2xl:top-[50px] md:w-[280px] xl:w-[440px]">
                    <Image width={500} height={30} src={thisIsSoYum} alt={""} />
                  </div>
                </div>
                {/* before md:top-[150px] after md:top-[100px] */}
                <div className="absolute w-full md:top-[100px] lg:top-[200px] xl:top-[300px] 2xl:top-[400px]">
                  <Slider
                    {...settings}
                    className="flex items-center justify-center"
                  >
                    {smallPlate.map((item, idx) => (
                      <div key={idx} className="outline-none cursor-grab">
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
            </div>
            {/* thai street */}

            {/* all time favorite */}
            <div className="my-[120px]">
              <div className="relative">
                <Parallax speed={10}>
                  <div className="flex justify-center">
                    <div className="w-[670px]">
                      <Image
                        width={800}
                        height={100}
                        src={allTimeFavorite}
                        alt={""}
                      />
                    </div>
                  </div>
                </Parallax>
                <Parallax translateX={[0, 0]}>
                  <div className="absolute md:w-[200px] lg:w-[350px] -right-[150px] -top-[110px]">
                    <Image width={600} height={600} src={horapa1} alt={""} />
                  </div>
                </Parallax>
                <div className="w-full">
                  <Slider
                    {...settings}
                    className="flex items-center justify-center"
                  >
                    {smallPlate.map((item, idx) => (
                      <div key={idx} className="outline-none cursor-grab">
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
                  <div className="absolute w-[400px] border-none object-contain -left-[180px] -top-[220px]">
                    <Image width={600} height={200} src={horapa2} alt={""} />
                  </div>
                </Parallax>
              </div>
            </div>
            {/* all time favorite */}

            {/* gift card */}
            <div className="h-[750px]">
              <div className="relative">
                <Parallax speed={5} translateX={[0, -10]}>
                  <div className="w-full 2xl:left-[70px] xl:-left-[10px] z-0">
                    <Image
                      width={2200}
                      className="w-full"
                      height={900}
                      src={giftCardBG}
                      alt={""}
                    />
                  </div>
                </Parallax>
                <Parallax translateX={[50, -250]}>
                  <div className="absolute rounded-full bg-[#9f00a3] opacity-70 2xl:top-[-650px] 2xl:right-[450px] xl:top-[-480px] xl:right-[515px] border-none 2xl:w-[480px] 2xl:h-[480px] xl:w-[350px] xl:h-[350px]"></div>
                </Parallax>
                <Parallax translateX={[-50, 238]}>
                  <div className="absolute 2xl:top-[-610px] 2xl:right-[0px] 2xl:left-[570px] xl:top-[-450px] xl:right-[0px] xl:left-[599px] 2xl:w-[500px] 2xl:h-[200px] xl:w-[350px] xl:h-[200px]">
                    <Image width={600} height={100} src={giftCard} alt={""} />
                  </div>
                </Parallax>
                <Parallax speed={-10}>
                  <div className="absolute h-[260px] w-[260px] 2xl:left-[1450px] 2xl:-top-[520px] xl:left-[1060px] xl:-top-[425px]">
                    <Image
                      width={500}
                      height={800}
                      src={women}
                      alt={""}
                      unoptimized
                    />
                  </div>
                </Parallax>
                <Parallax translateY={[-20, 0]}>
                  <div className="absolute 2xl:w-[200px] 2xl:h-[200px] xl:w-[150px] xl:h-[150px] 2xl:left-[1330px] 2xl:top-[-405px] xl:left-[985px] xl:top-[-320px]">
                    <Image width={500} height={30} src={heart} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[-85, 420]}>
                  <div className="absolute 2xl:w-[280px] 2xl:h-[280px] xl:w-[200px] xl:h-[200px] 2xl:left-[1060px] 2xl:top-[-530px] xl:left-[1050px] xl:top-[-400px]">
                    <Image width={500} height={30} src={thongTong} alt={""} />
                  </div>
                </Parallax>
                <Parallax translateX={[0, 10]}>
                  <div className="absolute 2xl:left-[650px] 2xl:top-[-280px] xl:left-[500px] xl:top-[-225px]">
                    <div className="text-white 2xl:text-3xl xl:text-xl">
                      Give your loved ones the gift of dining
                    </div>
                  </div>
                </Parallax>
                <Parallax translateX={[10, 0]}>
                  <div className="absolute 2xl:left-[730px] 2xl:top-[-245px] xl:left-[530px] xl:top-[-199px]">
                    <p className="text-white 2xl:text-3xl xl:text-xl">
                      with Bai Tong gift card.
                    </p>
                  </div>
                </Parallax>
              </div>
            </div>
            {/* gift card */}

            {/* Car te Ring */}
            <div className="h-[700px]">
              <div className="relative flex justify-center">
                <Parallax translateX={[-10, 0]}>
                  <div className="absolute top-[-20px] left-[290px] w-[200px]">
                    <Image width={300} height={300} src={camera} alt={""} />
                  </div>
                </Parallax>
                <div className="mt-[130px] flex flex-row items-center justify-center gap-2">
                  <Parallax>
                    <div className="absolute top-[-65px] left-[-45px] w-[60px] mt-[60px] ">
                      <Image width={300} height={300} src={fontC} alt={""} />
                    </div>
                  </Parallax>
                  <Parallax>
                    <div className="w-[120px]">
                      <Image width={300} height={300} src={fontA} alt={""} />
                    </div>
                  </Parallax>
                  <Parallax>
                    <div className="w-[140px]">
                      <Image width={300} height={300} src={fontR} alt={""} />
                    </div>
                  </Parallax>
                </div>
                <div className="mt-[130px] flex flex-row items-center justify-center">
                  <Parallax>
                    <div className="mt-[39px] w-[40px]">
                      <Image width={300} height={300} src={fontT} alt={""} />
                    </div>
                  </Parallax>
                  <Parallax>
                    <div className="mt-[75px] w-[40px]">
                      <Image width={300} height={300} src={fontE} alt={""} />
                    </div>
                  </Parallax>
                </div>
                <div className="mt-[130px] flex flex-row items-center justify-center gap-1">
                  <Parallax>
                    <div className="mt-[5px] w-[125px]">
                      <Image
                        width={300}
                        height={300}
                        src={fontRingR}
                        alt={""}
                      />
                    </div>
                  </Parallax>
                  <Parallax>
                    <div className="mb-[85px] w-[50px]">
                      <Image width={300} height={300} src={fontI} alt={""} />
                    </div>
                  </Parallax>
                  <Parallax>
                    <div className="mb-[25px] w-[85px]">
                      <Image width={300} height={300} src={fontN} alt={""} />
                    </div>
                  </Parallax>
                  <Parallax>
                    <div className="w-[85px]">
                      <Image width={300} height={300} src={fontG} alt={""} />
                    </div>
                  </Parallax>
                  <Parallax>
                    <div className="absolute -top-[160px] right-[150px] w-[90px]">
                      <Image width={300} height={300} src={flower} alt={""} />
                    </div>
                  </Parallax>
                </div>

                {/* WEDRING */}
                <div className="absolute top-[295px] 2xl:left-[810px] xl:left-[610px] flex flex-col gap-6">
                  {/* WED */}
                  <div className="flex flex-row gap-[2px]">
                    <Parallax>
                      <div className="w-[160px]">
                        <Image width={300} height={300} src={fontW} alt={""} />
                      </div>
                    </Parallax>
                    <Parallax>
                      <div className="w-[90px]">
                        <Image
                          width={300}
                          height={300}
                          src={fontWedE}
                          alt={""}
                        />
                      </div>
                    </Parallax>
                    <Parallax>
                      <div className="w-[105px]">
                        <Image width={300} height={300} src={fontD} alt={""} />
                      </div>
                    </Parallax>
                  </div>
                  {/* DING */}
                  <div className="flex flex-row gap-2">
                    <Parallax>
                      <div className="w-[105px]">
                        <Image
                          width={300}
                          height={300}
                          src={fontDingD}
                          alt={""}
                        />
                      </div>
                    </Parallax>
                    <Parallax>
                      <div className="w-[49px]">
                        <Image
                          width={300}
                          height={300}
                          src={fontDingI}
                          alt={""}
                        />
                      </div>
                    </Parallax>
                    <Parallax>
                      <div className="w-[100px]">
                        <Image
                          width={300}
                          height={300}
                          src={fontDingN}
                          alt={""}
                        />
                      </div>
                    </Parallax>
                    <Parallax>
                      <div className="w-[100px]">
                        <Image
                          width={300}
                          height={300}
                          src={fontDingG}
                          alt={""}
                        />
                      </div>
                    </Parallax>
                  </div>
                </div>

                <Parallax>
                  <div className="absolute 2xl:top-[570px] 2xl:right-[-10px] xl:top-[570px] xl:right-[-10px] 2xl:w-[500px] xl:w-[450px]">
                    <Image width={450} height={450} src={arch} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[528px] 2xl:right-[90px] xl:top-[528px] xl:right-[30px] w-[300px]">
                    <Image width={350} height={350} src={cropPhoto} alt={""} />
                  </div>
                </Parallax>
                <Parallax>
                  <div className="absolute 2xl:top-[820px] 2xl:right-[120px] xl:top-[820px] xl:right-[40px] w-[140px]">
                    <Image width={300} height={300} src={date} alt={""} />
                  </div>
                </Parallax>
                <div className="absolute text-3xl 2xl:left-[575px] 2xl:top-[360px] xl:left-[370px] xl:top-[360px] text-[#ffe200]">
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
                <div className="absolute text-lg 2xl:left-[575px] 2xl:top-[550px] xl:left-[370px] xl:top-[550px] text-[#ffe200]">
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
                <div className="absolute text-lg 2xl:left-[575px] 2xl:top-[790px] xl:left-[370px] xl:top-[790px] text-[#ffe200]">
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
            {/* Car te Ring */}

            {/* footer */}
            <div className="mt-[200px]">
              <div className="relative flex  justify-center items-center">
                <Image className="w-full" src={footer} alt={""} />
                <div className="absolute grid grid-cols-7 gap-2 2xl:top-[300px] xl:top-[200px] lg:top-[130px]">
                  {contact.map((item, index) => (
                    <div
                      key={index}
                      className="w-16 h-16 bg-white flex justify-center items-center"
                    >
                      <div className="w-10 h-10">
                        <Image
                          className="w-full"
                          width={64}
                          height={64}
                          src={item.src}
                          alt={item.alt}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="absolute bg-fuchsia-800 w-full 2xl:h-[330px] xl:h-[230px] lg:h-[180px] py-8 px-[140px] flex justify-center items-center bottom-0">
                  <div className="2xl:w-[600px] 2xl:h-[200px] xl:w-[400px] xl:h-[150px] lg:w-[300px] lg:h-[100px]">
                    <Image
                      src={Logo}
                      width={600}
                      height={200}
                      alt="logo"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* footer */}
          </div>
        </ParallaxProvider>
      )}
    </>
  );
}

export default LandingSection;
