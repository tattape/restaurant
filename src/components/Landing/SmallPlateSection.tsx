import React, { useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SmallPlateImg from "../../Utils/SmallPlateImg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow } from "swiper/modules";

import menu from "../../images/menu.png";
import smallPlates from "../../images/small-plate.png";
import handblack from "../../images/hand-black.png";
import bitong from "../../images/bitong.png";
import { motion, Variants } from "framer-motion";

type Props = {};

function SmallPlateSection({}: Props) {
  const [activeIndex, setActiveIndex] = useState(
    Math.floor(SmallPlateImg.length / 2)
  );
  const rtolVariants: Variants = {
    onscreen: {
      translateX: [100, 30],
      transition: {
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const ttobVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      translateY: 20,
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const btotVariants: Variants = {
    offscreen: {
      opacity: 0,
    },
    onscreen: {
      translateY: -20,
      opacity: 1,
      transition: {
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const textswiperVariants: Variants = {
    offscreen: {
      opacity: 0,
      translateY: 0,
    },
    onscreen: {
      opacity: 1,
      translateY: -5,
      transition: {
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };
  const swiperVariants: Variants = {
    offscreen: {
    },
    onscreen: {
      translateY: 100,
      transition: {
        bounce: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <div className="mt-0 md:mt-[300px]">
      <div className="flex flex-col items-center">
        <div className="flex justify-center">
          <div className="flex flex-col gap-1 items-center w-[180px] md:w-[300px] lg:w-[500px]">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div
                className="flex justify-center w-[100px] md:w-[300px] lg:w-[500px]"
                variants={btotVariants}
              >
                <Image src={menu} alt={""} />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div
                className="flex justify-center w-[180px] md:w-[300px] lg:w-[500px]"
                variants={ttobVariants}
              >
                <Image src={smallPlates} alt={""} />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="w-full flex justify-end -mt-20 md:-mt-40">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div
              className="w-[150px] md:w-[200px] lg:w-[350px]"
              variants={rtolVariants}
            >
              <Image width={600} height={600} src={handblack} alt={""} />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="mt-0 md:mt-10 lg:-mt-24"
        >
          <motion.div variants={swiperVariants}>
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
              {SmallPlateImg.map((image: any, idx: number) => {
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
                      <motion.div
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: 0.8 }}
                      >
                        <motion.p
                          variants={textswiperVariants}
                          className="text-white text-center text-base md:text-2xl lg:text-3xl font-uid"
                        >
                          {image.name}
                        </motion.p>
                      </motion.div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </motion.div>
        </motion.div>
        <div className="w-full mt-5 md:mt-0 pl-5 md:pl-10 lg:pl-60">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <motion.div
              className="w-[150px] md:w-[200px] lg:w-[300px]"
              variants={ttobVariants}
            >
              <Image
                //   data-aos="fade-down"
                //   data-aos-duration="500"
                width={300}
                height={300}
                src={bitong}
                alt={""}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SmallPlateSection;
