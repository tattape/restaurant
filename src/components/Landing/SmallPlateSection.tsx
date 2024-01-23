import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SmallPlateImg from "../../Utils/SmallPlateImg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";

import menu from "../../images/menu.png";
import star from "../../images/stargreen.png";
import smallPlates from "../../images/small-plate.png";
import handblack from "../../images/hand-black.png";
import bitong from "../../images/bitong.png";

type Props = {};

function SmallPlateSection({ }: Props) {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section id="small-plates" className="mt-0 md:mt-[500px]">
      <div className="flex flex-col items-center">
        <div className="flex justify-center mb-20">
          <div className="flex flex-col gap-6 items-center w-[180px] md:w-[300px] lg:w-[500px]">
            <div className="flex justify-center w-[100px] md:w-[300px] lg:w-[500px] lg:h-[150px] md:h-[120px] h-[40px]">
              <div
                className="flex items-start"
                data-aos="fade-down"
                data-aos-once="true"
              >
                <img
                  className="hover:animate-[spin_2s_ease-in-out]"
                  src={star.src}
                  alt={""}
                  loading="eager"
                />
              </div>
              <div className="flex items-end">
                <img
                  data-aos="fade-up"
                  data-aos-once="true"
                  src={menu.src}
                  alt={""}
                  loading="eager"
                />
              </div>
            </div>
            <div className="flex justify-center w-[180px] md:w-[300px] lg:w-[500px]">
              <img
                className="hover:invert hover:drop-shadow-[0_5px_10px_rgba(4,255,158,0.8)] !transition-all !ease-in-out"
                data-aos="fade-down"
                data-aos-once="true"
                src={smallPlates.src}
                alt={""}
                loading="eager"
              />
            </div>
          </div>
        </div>
        <div className="w-full flex justify-end -mt-20 md:-mt-40">
          <Parallax translateX={[100, -10]}>
            <div className="w-[150px] md:w-[200px] lg:w-[350px]">
              <img
                width={600}
                height={600}
                src={handblack.src}
                alt={""}
                loading="eager"
              />
            </div>
          </Parallax>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-once="true"
          className="mt-0 md:mt-10 lg:-mt-24"
        >
          <Swiper
            loop
            effect={"coverflow"}
            grabCursor={true}
            initialSlide={activeIndex}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 900,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
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
            {SmallPlateImg.concat(SmallPlateImg).map(
              (image: any, idx: number) => {
                const isActive = idx === activeIndex;
                const Opacity = isActive
                  ? "hover:!scale-[1.02] !transition-all"
                  : "brightness-50";

                return (
                  <SwiperSlide
                    key={idx}
                    className={`pb-1 !flex !flex-col !justify-end !w-[200px] !h-[200px] md:!w-[300px] md:!h-[300px] lg:!w-[500px] lg:!h-[500px] ${Opacity}`}
                  >
                    <img
                      width={500}
                      height={500}
                      alt=""
                      src={image.src}
                      loading="eager"
                    />
                    {isActive && (
                      <p
                        data-aos="zoom-in"
                        data-aos-anchor-placement="top-bottom"
                        data-aos-once="true"
                        className="text-white text-center text-base md:text-lg lg:text-xl font-syn"
                      >
                        {image.name}
                      </p>
                    )}
                  </SwiperSlide>
                );
              }
            )}
          </Swiper>
        </div>
        <div className="w-full mt-5 md:mt-0 pl-5 md:pl-10 lg:pl-60">
          <Parallax speed={-10}>
            <div className="w-[150px] md:w-[200px] lg:w-[300px]">
              <img
                data-aos="fade-down"
                data-aos-duration="500"
                data-aos-once="true"
                width={300}
                height={300}
                src={bitong.src}
                alt={""}
                loading="eager"
              />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

export default SmallPlateSection;
