import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import GalleryImg from "../../Utils/GalleryImg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import { Pagination, Navigation, EffectCoverflow, Autoplay } from "swiper/modules";
import clsx from "clsx";

export default function GalleryImageSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        grabCursor={true}
        centeredSlides={true}
        effect={"coverflow"}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation, EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 10,
          depth: 200,
          modifier: 3,
          slideShadows: false,
        }}
        autoplay={{
            delay: 2500,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
        className="!w-full"
      >
        {GalleryImg.concat(GalleryImg).map((image: any, idx: number) => (
          <SwiperSlide
            key={idx}
            className={`!flex justify-center !w-full !h-[200px] md:!w-full md:!h-[300px] lg:!w-full lg:!h-[800px]`}
          >
            <img
              width={500}
              height={500}
              alt=""
              src={image.src}
              loading="eager"
              className="object-fill w-[1000px] h-[600px] rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
