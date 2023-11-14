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
import thongPeple from "../../images/thong-peple.png";
import giftCard from "../../images/gift-card.png";
import thongTong from "../../images/thongtong.png";
import heart from "../../images/heart.png";
import women from "../../images/women.png";
import photo from "../../images/photo.png";

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
            {/* gift card */}
            <div className=" h-[1500px]">
              <div className="relative">
                <Parallax speed={5}>
                  <div className="absolute w-full">
                    <Image
                      width={1400}
                      height={800}
                      src={thongPeple}
                      alt={""}
                    />
                  </div>
                </Parallax>
                <div className=" flex justify-center">
                  <div className="">
                    <div className="absolute rounded-full bg-[#9f00a3] opacity-70 top-[120px] left-[640px] border-none w-[450px] h-[450px]"></div>
                  </div>
                  <div className="absolute top-[220px] right-[0px] left-[425px] w-[300px] h-[200px] ">
                    <Image width={600} height={100} src={giftCard} alt={""} />
                  </div>
                  <Parallax speed={-10}>
                    <div className="absolute h-[300px] w-[300px] left-[140px] top-[5px]">
                      <Image width={500} height={800} src={women} alt={""} />
                    </div>
                  </Parallax>
                  <div className="absolute w-[200px] h-[200px] right-[750px] top-[280px]">
                    <Image width={500} height={30} src={heart} alt={""} />
                  </div>
                  <div className="absolute w-[250px] h-[250px] left-[740px] top-[190px] ">
                    <Image width={500} height={30} src={thongTong} alt={""} />
                  </div>
                  <div className="absolute text-lg left-[460px] top-[420px]">
                    <div className="text-white">
                      Give your loved ones the gift of dining
                    </div>
                  </div>
                  <div className="absolute text-lg left-[580px] top-[450px]">
                    <div className="text-white">with Bai Tong gift card.</div>
                  </div>
                  <div className="absolute top-[580px]">
                    <Image height={700} width={700} src={photo} alt={""} />
                  </div>
                  <div className="absolute text-3xl left-[630px] top-[850px] text-[#ffe200]">
                    <div className="">Looking for</div>
                    <div className="">catering ser vice</div>
                    <div className="">for</div>
                    <div className="">your upcoming event?</div>
                  </div>
                  <div className="absolute text-lg left-[630px] top-[1030px] text-[#ffe200]">
                    <div className="">We offer an extensive menu</div>
                    <div className="">selection and can accommodate</div>
                    <div className="">most dietary needs.Menu</div>
                    <div className="">planning including bar service,</div>
                    <div className="">floral and table decoration as</div>
                    <div className="">well as rental needs can all be</div>
                    <div className="">handled by our team, leaving</div>
                    <div className="">you time to relax.</div>
                  </div>
                  <div className="absolute text-lg left-[630px] top-[1270px] text-[#ffe200]">
                    <div className="">For more information,</div>
                    <div className="">please email us at :</div>
                    <div className="">catering@baitongfamily.com</div>
                  </div>
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
