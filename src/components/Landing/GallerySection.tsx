import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SmallPlateImg from "../../Utils/SmallPlateImg";

//image
import galleryheader from "../../images/gallery.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";

// import required modules
import { EffectCoverflow, Autoplay } from "swiper/modules";
import clsx from "clsx";
import Image from "next/image";

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <section
      id="gallery"
      className="mt-[150px] h-full w-full flex flex-col gap-16 items-center justify-center"
    >
      <div data-aos="fade-up" data-aos-once="true" >
        <Image
          className=" hover:drop-shadow-[0_5px_10px_rgba(4,255,158,0.8)] !transition-all !ease-in-out"
          width={600}
          height={600}
          src={galleryheader.src}
          alt={""}
          loading="eager"
          priority
        />
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
          modules={[EffectCoverflow]}
          className="!w-full"
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {SmallPlateImg.concat(SmallPlateImg).map(
            (image: any, idx: number) => {
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
                      "relative bg-white p-4 w-[500px] h-[500px] rounded-lg flex flex-col gap-2 justify-center"
                    )}
                  >
                    <img
                      width={500}
                      height={500}
                      alt=""
                      src={image.src}
                      loading="eager"
                    />
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
