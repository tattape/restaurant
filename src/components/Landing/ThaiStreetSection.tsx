import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import brife from "../../images/brife.png";
import chicken from "../../images/chicken.png";
import sanvid from "../../images/sanvid.png";
import thaiStreet from "../../images/thai-street.png";
import thongRed from "../../images/thong-red.png";
import thisIsSoYum from "../../images/this-is-so-yum.png";
import pick from "../../images/pick.png";

type Props = {}

function ThaiStreetSection({ }: Props) {
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
        <div className="md:pt-[100px] lg:pt-0 my-[120px]">
            <div className="relative">
                <Parallax speed={-10}>
                    <div className="w-full z-0">
                        <Image
                            className="w-full"
                            width={2200}
                            height={800}
                            src={thongRed}
                            alt={""}
                        />
                    </div>
                </Parallax>
                <Parallax speed={-2}>
                    <div className="absolute w-[100px] xl:w-[150px] -top-[925px] left-[520px] z-[999]">
                        <Image width={500} height={800} src={pick} alt={""} />
                    </div>
                </Parallax>
                <div className="flex justify-center">
                    <div className="absolute md:-top-5 2xl:top-10 flex md:w-[250px] xl:w-[400px]">
                        <Image data-aos="fade-up" width={400} height={300} src={thaiStreet} alt={""} />
                    </div>
                    <div className="absolute md:right-[50px] lg:right-[180px] 2xl:right-[390px] md:-top-[10px] 2xl:top-[50px] md:w-[280px] xl:w-[440px]">
                        <Image data-aos="fade-up" data-aos-anchor-placement="bottom-center" width={500} height={30} src={thisIsSoYum} alt={""} />
                    </div>
                </div>
                {/* before md:top-[150px] after md:top-[100px] */}
                <div data-aos="zoom-in-down" className="absolute w-full md:top-[100px] lg:top-[200px] xl:top-[300px] 2xl:top-[400px]">
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
            </div>
        </div>
    )
}

export default ThaiStreetSection