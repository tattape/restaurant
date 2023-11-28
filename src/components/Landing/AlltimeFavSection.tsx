import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AlltimeFavImg from "../../Utils/AlltimeFavImg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

import allTimeFavorite from "../../images/all-time-favorite.png";
import horapa1 from "../../images/horapa1.png";
import horapa2 from "../../images/horapa2.png";

type Props = {};

function AlltimeFavSection({ }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);
  const [activeIndex2, setActiveIndex2] = useState(1);

  return (
    <div className="mt-20">
      <div className="flex flex-col items-center">
        {/* baitong */}
        <Parallax speed={10}>
          <div className="w-[350px] md:w-[470px] lg:w-[670px] ml-32 md:ml-44 hover:ease-in-out hover:transition-all hover:duration-200">
            <img
              className="hover:invert hover:drop-shadow-[0_5px_10px_rgba(255,36,145,1)] !transition-all !ease-in-out"
              data-aos="fade-up"
              data-aos-anchor-placement="center-center"
              data-aos-once="true"
              width={800}
              height={100}
              src={allTimeFavorite.src}
              alt={""}
              loading="eager"
            />
          </div>
        </Parallax>
        {/* props */}
        <div className="flex justify-between w-full">
          <Parallax speed={-20} className="z-10">
            <div className="animate-[shake_3s_ease-in-out_infinite] transition-all ease-in-out w-[150px] md:w-[250px] lg:w-[400px] -ml-20 md:-ml-40 mt-40">
              <img
                data-aos="fade-up-right"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true"
                width={600}
                height={200}
                src={horapa2.src}
                alt={""}
                loading="eager"
              />
            </div>
          </Parallax>
          <Parallax speed={-25}>
            <div className="animate-[shake_3s_ease-in-out_infinite] transition-all ease-in-out w-[150px] md:w-[250px] lg:w-[350px] delay-75 -mr-20 md:-mr-40">
              <img
                data-aos="fade-down-left"
                data-aos-anchor-placement="top-bottom"
                data-aos-once="true"
                width={600}
                height={600}
                src={horapa1.src}
                alt={""}
                loading="eager"
              />
            </div>
          </Parallax>
        </div>

        {/* Foods */}
        <div
          className="-mt-[300px] lg:-mt-[530px]"
          data-aos="zoom-in-down"
          data-aos-anchor-placement="top-center"
          data-aos-once="true"
        >
          <Swiper
            loop
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={activeIndex}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 200,
              modifier: 3,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="!w-full"
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {AlltimeFavImg.slice(0, 9).concat(AlltimeFavImg.slice(0, 9)).map((image: any, idx: number) => {
              const isActive = idx === activeIndex;
              const Opacity = isActive
                ? "hover:!scale-[1.02] !transition-all"
                : "brightness-50";

              return (
                <SwiperSlide
                  key={idx}
                  className={`pb-1 !flex !flex-col !justify-end !w-[200px] !h-[200px] md:!w-[300px] md:!h-[300px] lg:!w-[500px] lg:!h-[500px] ${Opacity}`}
                >
                  <img width={500} height={500} alt="" src={image.src} loading="eager" />
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
          data-aos-anchor-placement="top-center"
          data-aos-once="true"
        >
          <Swiper
            loop
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={activeIndex2}
            centeredSlides={true}
            slidesPerView={'auto'}
            autoplay={{
              delay: 1500,
              pauseOnMouseEnter: true,
              reverseDirection: true,
              disableOnInteraction: false
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 10,
              depth: 200,
              modifier: 3,
              slideShadows: false,
            }}
            modules={[Autoplay, EffectCoverflow]}
            className="!w-full"
            onSlideChange={(swiper) => setActiveIndex2(swiper.realIndex)}
          >
            {AlltimeFavImg.slice(9, 18).concat(AlltimeFavImg.slice(9, 18)).map((image: any, idx: number) => {
              const isActive = idx === activeIndex2;
              const Opacity = isActive
                ? "hover:!scale-[1.02] !transition-all"
                : "brightness-50";

              return (
                <SwiperSlide
                  key={idx}
                  className={`pb-1 !flex !flex-col !justify-end !w-[200px] !h-[200px] md:!w-[300px] md:!h-[300px] lg:!w-[500px] lg:!h-[500px] ${Opacity}`}
                >
                  <img width={500} height={500} alt="" src={image.src} loading="eager" />
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

export default AlltimeFavSection;
