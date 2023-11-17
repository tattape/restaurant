import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import brife from "../../images/brife.png";
import chicken from "../../images/chicken.png";
import sanvid from "../../images/sanvid.png";
import allTimeFavorite from "../../images/all-time-favorite.png";
import horapa1 from "../../images/horapa1.png";
import horapa2 from "../../images/horapa2.png";

type Props = {}

function AlltimeFavSection({ }: Props) {
    const settings = {
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
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
        <div className="my-[120px]">
            <div className="relative">
                <Parallax speed={10}>
                    <div className="flex justify-center">
                        <div className="w-[670px]">
                            <Image
                                data-aos="fade-up"
                                data-aos-anchor-placement="center-center"
                                width={800}
                                height={100}
                                src={allTimeFavorite}
                                alt={""}
                            />
                        </div>
                    </div>
                </Parallax>
                <Parallax translateX={[0, 0]}>
                    <div className="absolute md:w-[200px] lg:w-[350px] -right-[150px] -top-[110px]">
                        <Image data-aos="fade-down-left" data-aos-anchor-placement="top-center" width={600} height={600} src={horapa1} alt={""} />
                    </div>
                </Parallax>
                <div data-aos="zoom-in-down" data-aos-anchor-placement="top-center" className="w-full">
                    <Slider
                        {...settings}
                        className="flex items-center justify-center"
                    >
                        {smallPlate.map((item, idx) => (
                            <div key={idx} className="outline-none cursor-grab">
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
                    <div className="absolute w-[400px] border-none object-contain -left-[180px] -top-[220px]">
                        <Image data-aos="fade-up-right" data-aos-anchor-placement="top-bottom" width={600} height={200} src={horapa2} alt={""} />
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default AlltimeFavSection