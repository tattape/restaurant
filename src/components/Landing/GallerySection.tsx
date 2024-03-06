import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import GalleryImg from "../../Utils/GalleryImg";

//image
import galleryheader from "../../images/gallery.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";
import clsx from "clsx";
import Image from "next/image";
import GalleryImageSwiper from "./GalleryImageSwiper";
import BtnGalleryNavi from "./BtnGalleryNavi";

export default function GallerySection() {
  const swipernavigation = useSwiper();
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section
      id="gallery"
      className="mt-[100px] h-full w-full flex flex-col gap-16 items-center justify-center"
    >
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="w-[200px] m:w-[250px] md:w-[300px] lg:w-[400px] flex justify-center"
      >
        <Image
          className=" hover:drop-shadow-[0_5px_10px_rgba(4,255,158,0.8)] !transition-all !ease-in-out"
          width={400}
          height={300}
          src={galleryheader.src}
          alt={""}
          loading="eager"
          priority
        />
      </div>
      <div className="w-full">
        {/* <GalleryImageSwiper/> */}

        <Swiper
          loop
          effect={"coverflow"}
          grabCursor={true}
          initialSlide={activeIndex}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
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
          modules={[Autoplay, EffectCoverflow, Navigation, Pagination]}
          className="!w-full !z-[40] !relative"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          <BtnGalleryNavi className="absolute top-1/2 -translate-y-1/2"/>
          {GalleryImg.concat(GalleryImg).map((image: any, idx: number) => {
            const isActive = idx === activeIndex;
            const Opacity = isActive
              ? "hover:!scale-[1.15] !transition-all"
              : "brightness-50";

            return (
              <SwiperSlide
                key={idx}
                className={`pb-1 !flex !flex-col !justify-center !w-[200px] !h-[200px] md:!w-[300px] md:!h-[300px] lg:!w-[500px] lg:!h-[600px] ${Opacity}`}
              >
                <div
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  data-aos-once="true"
                  className={clsx(
                    "relative bg-white  rounded-lg flex flex-col gap-2 justify-center",
                    "lg:w-[500px] lg:h-[500px]",
                    "md:w-[300px] md:h-[300px]",
                    "w-[200px] h-[200px]"
                  )}
                >
                  <img
                    width={500}
                    height={500}
                    alt=""
                    src={image.src}
                    loading="eager"
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
            );
          })}
          
        </Swiper>
      </div>
    </section>
  );
}
