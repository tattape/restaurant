import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SmallPlateImg from "../../Utils/SmallPlateImg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import clsx from "clsx";

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section
      id="gallery"
      className="mt-[150px] h-full w-full flex flex-col gap-16 items-center justify-center"
    >
      <div>
        <p className="text-4xl font-syn font-bold text-white">Gallery Baitong</p>
      </div>
      <div>
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
                  <div
                    className={clsx(
                      "relative bg-white p-4 w-[500px] h-[500px] rounded-lg flex flex-col gap-2 justify-center"
                    )}
                  >
                    <div className="absolute inset-0 hover:bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-[#3b3d49] z-10" />
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
                        className="text-black text-center text-base md:text-lg lg:text-xl font-syn"
                      >
                        {image.name}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </div>
    </section>
  );
}
