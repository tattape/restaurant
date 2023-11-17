import React from 'react'
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import menu from "../../images/menu.png";
import smallPlates from "../../images/small-plate.png";
import brife from "../../images/brife.png";
import chicken from "../../images/chicken.png";
import sanvid from "../../images/sanvid.png";
import handblack from "../../images/hand-black.png";
import bitong from "../../images/bitong.png";


type Props = {}

function SmallPlateSection({ }: Props) {
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
        <div className=" md:pt-[120px] lg:pt-0 my-[120px]">
            <div className="relative">
                <div className="flex justify-center">
                    <div className="flex flex-col gap-6 items-center w-[180px] md:w-[300px] lg:w-[500px]">
                        <Image data-aos="fade-up" src={menu} alt={""} />
                        <Image data-aos="fade-down" src={smallPlates} alt={""} />
                    </div>
                </div>
                <Parallax translateX={[10, 0]} translateY={[0, 0]} speed={10}>
                    <div className="absolute -top-[180px] right-[0px] md:w-[200px] lg:w-[350px] ">
                        <Image width={600} height={600} src={handblack} alt={""} />
                    </div>
                </Parallax>
                <div data-aos="zoom-in-down" className=" w-full md:top-[300px] lg:top-[400px]">
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
                <Parallax speed={-10}>
                    <div className="absolute -top-[50px] left-[435px] md:w-[250px] lg:w-[300px]">
                        <Image data-aos="fade-up" data-aos-duration="500" width={300} height={300} src={bitong} alt={""} />
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default SmallPlateSection