import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import AlltimeFavImg from '../../Utils/AlltimeFavImg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { EffectCoverflow } from 'swiper/modules';

import allTimeFavorite from "../../images/all-time-favorite.png";
import horapa1 from "../../images/horapa1.png";
import horapa2 from "../../images/horapa2.png";

type Props = {}

function AlltimeFavSection({ }: Props) {
    const [activeIndex, setActiveIndex] = useState(Math.floor(AlltimeFavImg.length / 4));
    const [activeIndex2, setActiveIndex2] = useState(Math.floor(AlltimeFavImg.length / 4));

    return (
        <div className="mt-20">
            <div className="flex flex-col items-center">
                {/* baitong */}
                <Parallax speed={10}>
                    <div className="w-[350px] md:w-[470px] lg:w-[670px] ml-32 md:ml-44">
                        <Image data-aos="fade-up" data-aos-anchor-placement="center-center" width={800} height={100} src={allTimeFavorite} alt={""} />
                    </div>
                </Parallax>

                {/* props */}
                <div className="flex justify-between w-full">
                    <Parallax speed={-20} className="z-10">
                        <div className="w-[150px] md:w-[250px] lg:w-[400px] -ml-20 md:-ml-40 mt-40">
                            <Image data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" width={600} height={200} src={horapa2} alt={""} />
                        </div>
                    </Parallax>
                    <Parallax speed={-25}>
                        <div className="w-[150px] md:w-[250px] lg:w-[350px] delay-75 -mr-20 md:-mr-40">
                            <Image data-aos="fade-down-left" data-aos-anchor-placement="top-bottom" width={600} height={600} src={horapa1} alt={""} />
                        </div>
                    </Parallax>
                </div>

                {/* Foods */}
                <div className='-mt-[300px] lg:-mt-[500px]' data-aos="zoom-in-down" data-aos-anchor-placement="top-center">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        initialSlide={activeIndex}
                        centeredSlides={true}
                        slidesPerView={'auto'}
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
                        {AlltimeFavImg.slice(0, 9).map((image: any, idx: number) => {
                            const isActive = idx === activeIndex;
                            const Opacity = isActive ? 'hover:!scale-[1.02] !transition-all' : 'brightness-50';

                            return (
                                <SwiperSlide key={idx} className={`pb-1 !flex !flex-col !justify-end !w-[200px] !h-[200px] md:!w-[300px] md:!h-[300px] lg:!w-[500px] lg:!h-[500px] ${Opacity}`}>
                                    <Image width={500} height={500} alt='' src={image.src} />
                                    {isActive &&
                                        <p
                                            data-aos="zoom-in"
                                            data-aos-anchor-placement="top-bottom"
                                            className='text-white text-center text-base md:text-2xl lg:text-3xl'>
                                            {image.name}
                                        </p>
                                    }
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
                <div className='mt-10 lg:-mt-10' data-aos="zoom-in-down" data-aos-anchor-placement="top-center">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        initialSlide={activeIndex2}
                        centeredSlides={true}
                        slidesPerView={'auto'}
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
                        {AlltimeFavImg.slice(9, 18).map((image: any, idx: number) => {
                            const isActive = idx === activeIndex2;
                            const Opacity = isActive ? 'hover:!scale-[1.02] !transition-all' : 'brightness-50';

                            return (
                                <SwiperSlide key={idx} className={`pb-1 !flex !flex-col !justify-end !w-[200px] !h-[200px] md:!w-[300px] md:!h-[300px] lg:!w-[500px] lg:!h-[500px] ${Opacity}`}>
                                    <Image width={500} height={500} alt='' src={image.src} />
                                    {isActive &&
                                        <p
                                            data-aos="zoom-in"
                                            data-aos-anchor-placement="top-bottom"
                                            className='text-white text-center text-base md:text-2xl lg:text-3xl'>
                                            {image.name}
                                        </p>
                                    }
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default AlltimeFavSection