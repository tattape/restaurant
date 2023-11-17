import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";


import giftCardBG from "../../images/giftCardBG.png";
import giftCard from "../../images/gift-card.png";
import thongTong from "../../images/thongtong.png";
import heart from "../../images/heart.png";
import women from "../../images/women.png";

type Props = {}

function GiftCardSection({ }: Props) {
    return (
        <div className="h-[750px]">
            <div className="relative">
                <Parallax speed={5} translateX={[0, -10]}>
                    <div className="w-full 2xl:left-[70px] xl:-left-[10px] z-0">
                        <Image
                            width={2200}
                            className="w-full"
                            height={900}
                            src={giftCardBG}
                            alt={""}
                        />
                    </div>
                </Parallax>
                <Parallax translateX={[50, -250]}>
                    <div className="absolute rounded-full bg-[#9f00a3] opacity-70 2xl:top-[-650px] 2xl:right-[450px] xl:top-[-480px] xl:right-[515px] border-none 2xl:w-[480px] 2xl:h-[480px] xl:w-[350px] xl:h-[350px]"></div>
                </Parallax>
                <Parallax translateX={[-50, 238]}>
                    <div className="absolute 2xl:top-[-610px] 2xl:right-[0px] 2xl:left-[570px] xl:top-[-450px] xl:right-[0px] xl:left-[599px] 2xl:w-[500px] 2xl:h-[200px] xl:w-[350px] xl:h-[200px]">
                        <Image width={600} height={100} src={giftCard} alt={""} />
                    </div>
                </Parallax>
                <Parallax speed={-10}>
                    <div className="absolute h-[260px] w-[260px] 2xl:left-[1450px] 2xl:-top-[520px] xl:left-[1060px] xl:-top-[425px]">
                        <Image
                            width={500}
                            height={800}
                            src={women}
                            alt={""}
                            unoptimized
                        />
                    </div>
                </Parallax>
                <Parallax translateY={[-20, 0]}>
                    <div className="absolute 2xl:w-[200px] 2xl:h-[200px] xl:w-[150px] xl:h-[150px] 2xl:left-[1330px] 2xl:top-[-405px] xl:left-[985px] xl:top-[-320px]">
                        <Image width={500} height={30} src={heart} alt={""} />
                    </div>
                </Parallax>
                <Parallax translateX={[-85, 420]}>
                    <div className="absolute 2xl:w-[280px] 2xl:h-[280px] xl:w-[200px] xl:h-[200px] 2xl:left-[1060px] 2xl:top-[-530px] xl:left-[1050px] xl:top-[-400px]">
                        <Image width={500} height={30} src={thongTong} alt={""} />
                    </div>
                </Parallax>
                <Parallax translateX={[0, 10]}>
                    <div className="absolute 2xl:left-[650px] 2xl:top-[-280px] xl:left-[500px] xl:top-[-225px]">
                        <div className="text-white 2xl:text-3xl xl:text-xl">
                            Give your loved ones the gift of dining
                        </div>
                    </div>
                </Parallax>
                <Parallax translateX={[10, 0]}>
                    <div className="absolute 2xl:left-[730px] 2xl:top-[-245px] xl:left-[530px] xl:top-[-199px]">
                        <p className="text-white 2xl:text-3xl xl:text-xl">
                            with Bai Tong gift card.
                        </p>
                    </div>
                </Parallax>
            </div>
        </div>
    )
}

export default GiftCardSection