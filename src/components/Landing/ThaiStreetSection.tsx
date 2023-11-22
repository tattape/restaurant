import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ThaiStreetImg from "../../Utils/ThaiStreetImg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper/modules";

import thaiStreet from "../../images/thai-street.png";
import thongRed from "../../images/thong-red.png";
import thisIsSoYum from "../../images/this-is-so-yum.png";
import pick from "../../images/pick.png";

import { motion } from "framer-motion";

type Props = {};

function ThaiStreetSection({ }: Props) {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(ThaiStreetImg.length / 4)
  );
  const [activeIndex2, setActiveIndex2] = useState(
    Math.floor(ThaiStreetImg.length / 4)
  );

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <Parallax speed={-5} className="z-10">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="700"
            className="w-[90px] md:w-[150px] -ml-[200px] md:-ml-[420px] -mb-80 md:-mb-96"
          >
            <Image width={500} height={800} src={pick} alt="" />
          </div>
        </Parallax>
        <div className="flex flex-col-reverse items-center justify-center z-10">
          <div className="w-[200px] m:w-[250px] md:w-[300px] lg:w-[400px]">
            <Image
              data-aos="fade-up"
              data-aos-once="true"
              width={400}
              height={300}
              src={thaiStreet}
              alt=""
            />
          </div>
          <div className="w-[180px] md:w-[300px] lg:w-[440px] rotate-[30deg] md:rotate-0 -mb-10 md:-mb-28 lg:-mb-32 -mr-[200px] md:-mr-[450px] lg:-mr-[650px] z-10">
            <Image
              data-aos="fade-up"
              data-aos-anchor-placement="top-center"
              data-aos-once="true"
              width={500}
              height={30}
              src={thisIsSoYum}
              alt=""
            />
          </div>
        </div>
        <Parallax speed={10} className="w-[1200px] md:w-[1800px] lg:w-[2200px]">
          <motion.div
            initial={{ opacity: 1, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 4.5,
              //   ease: [0, 0.5, 1, 2.2],
            }}
            className="-mt-20"
          >
            <Image width={3500} height={1000} src={thongRed} alt="" />
          </motion.div>
        </Parallax>
        <div
          className="-mt-[450px] md:-mt-[700px] lg:-mt-[1000px]"
          data-aos="zoom-in-down"
          data-aos-once="true"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={activeIndex}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 200,
              modifier: 3,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="!w-full"
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {ThaiStreetImg.slice(0, 8).map((image: any, idx: number) => {
              const isActive = idx === activeIndex;
              const Opacity = isActive
                ? "hover:!scale-[1.02] !transition-all"
                : "brightness-50";

              return (
                <SwiperSlide
                  key={idx}
                  className={`pb-1 !flex !flex-col !justify-end !w-[200px] !h-[200px] md:!w-[300px] md:!h-[300px] lg:!w-[500px] lg:!h-[500px] ${Opacity}`}
                >
                  <Image width={500} height={500} alt="" src={image.src} />
                  {isActive && (
                    <p
                      data-aos="zoom-in"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-once="true"
                      className="text-white text-center text-base md:text-2xl lg:text-3xl font-uid"
                    >
                      {image.name}
                    </p>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div
          className="mt-10 lg:-mt-10"
          data-aos="zoom-in-down"
          data-aos-once="true"
        >
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={activeIndex}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 200,
              modifier: 3,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="!w-full"
            onSlideChange={(swiper) => setActiveIndex2(swiper.activeIndex)}
          >
            {ThaiStreetImg.slice(8, 17).map((image: any, idx: number) => {
              const isActive = idx === activeIndex2;
              const Opacity = isActive
                ? "hover:!scale-[1.02] !transition-all"
                : "brightness-50";

              return (
                <SwiperSlide
                  key={idx}
                  className={`pb-1 !flex !flex-col !justify-end !w-[200px] !h-[200px] md:!w-[300px] md:!h-[300px] lg:!w-[500px] lg:!h-[500px] ${Opacity}`}
                >
                  <Image width={500} height={500} alt="" src={image.src} />
                  {isActive && (
                    <p
                      data-aos="zoom-in"
                      data-aos-anchor-placement="top-bottom"
                      data-aos-once="true"
                      className="text-white text-center text-base md:text-2xl lg:text-3xl font-uid"
                    >
                      {image.name}
                    </p>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ThaiStreetSection;
