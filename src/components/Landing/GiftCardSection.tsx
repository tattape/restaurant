import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

import giftCardBG from "../../images/giftCardBG.png";
import giftCard from "../../images/gift-card.png";
import thongTong from "../../images/thongtong.png";
import heart from "../../images/heart.png";
import women from "../../images/women.png";

type Props = {};

function GiftCardSection({}: Props) {
  return (
    <div className="my-[200px]">
      <div className="flex flex-col items-center">
        {/* Thong Muang */}
        <Parallax>
          <div className="2xl:w-full xl:w-full lg:w-full md:w-full l:w-[700px] m:w-[600px] w-[500px] 2xl:left-[70px] xl:-left-[10px]">
            <Image
              width={2200}
              className="w-full"
              height={900}
              src={giftCardBG}
              alt={""}
            />
          </div>
        </Parallax>

        {/* All Images */}
        <div className="flex 2xl:mt-[-630px] xl:mt-[-480px] lg:mt-[-350px] lg:mr-[200px] md:mt-[-250px] md:mr-[300px] l:mt-[-270px] l:mr-[290px] m:mt-[-230px] m:mr-[280px] mt-[-195px] mr-[260px]">
          <div className="2xl:mt-[60px] 2xl:mr-[-210px] xl:mt-[30px] xl:mr-[-160px] lg:mt-[25px] lg:mr-[-150px] md:mt-[8px] md:mr-[-120px] l:mr-[-160px] m:mr-[-200px] mr-[-200px] flex flex-col 2xl:gap-20 xl:gap-16 lg:gap-14 md:gap-9 l:gap-32 m:gap-28 gap-20 z-10">
            {/* Gift Card */}
            <Parallax>
              <div className="2xl:ml-[20px] xl:ml-[100px] lg:ml-[190px] md:ml-[250px] l:ml-[295px] m:ml-[280px] ml-[270px] 2xl:w-[400px] xl:w-[350px] lg:w-[250px] md:w-[200px] l:w-[150px] m:w-[100px] w-[100px]">
                <Image width={600} height={100} src={giftCard} alt={""} />
              </div>
            </Parallax>
            {/* Description */}
            <div className="flex flex-col w-[520px] items-end">
              <Parallax>
                <p className="text-white 2xl:text-2xl xl:text-xl lg:text-base md:text-sm l:text-sm m:text-sm text-xs">
                  Give your loved ones the gift of dining
                </p>
              </Parallax>
              <Parallax>
                <p className="text-white 2xl:text-2xl xl:text-xl lg:text-base md:text-sm l:text-sm m:text-sm text-xs">
                  with Bai Tong gift card.
                </p>
              </Parallax>
            </div>
          </div>

          <div className="flex">
            {/* Cicle */}
            <Parallax>
              <div className="md:mt-0 l:mt-[45px] m:mt-[20px] mt-[20px] rounded-full bg-[#9f00a3] border-none opacity-70 2xl:w-[480px] 2xl:h-[480px] xl:w-[350px] xl:h-[350px] lg:w-[280px] lg:h-[280px] md:h-[200px] md:w-[200px] l:w-[180px] l:h-[180px] m:w-[160px] m:h-[160px] w-[140px] h-[140px]"></div>
            </Parallax>
            {/* thongtong */}
            <Parallax className="z-20">
              <div className="2xl:ml-[-340px] 2xl:mt-[65px] xl:ml-[-250px] xl:mt-[65px] lg:ml-[-200px] lg:mt-[40px] md:ml-[-150px] md:mt-[20px] l:ml-[-140px] l:mt-[80px] m:ml-[-120px] m:mt-[55px] ml-[-100px] mt-[55px] 2xl:w-[280px] xl:w-[200px] lg:w-[160px] md:w-[120px] l:w-[120px] m:w-[100px] w-[80px]">
                <Image width={500} height={30} src={thongTong} alt={""} />
              </div>
            </Parallax>
            {/* Heart */}
            <Parallax className="z-10">
              <div className="2xl:mt-[180px] 2xl:ml-[-120px] xl:mt-[120px] xl:ml-[-100px] lg:mt-[100px] lg:ml-[-80px] md:mt-[70px] md:ml-[-60px] l:mt-[110px] l:ml-[-40px] m:mt-[75px] m:ml-[-40px] ml-[-40px] mt-[60px] 2xl:w-[200px] xl:w-[180px] lg:w-[120px] md:w-[80px] l:w-[60px] m:w-[60px] w-[60px]">
                <Image width={500} height={30} src={heart} alt={""} />
              </div>
            </Parallax>
          </div>

          {/* Woman */}
          <Parallax>
            <div className="2xl:ml-[-80px] 2xl:mt-[-50px] xl:ml-[-80px] xl:mt-[-50px] lg:ml-[-35px] lg:mt-[-5px] md:ml-[-20px] md:mt-[-5px] l:ml-[-25px] l:mt-[25px] m:ml-[-25px] m:mt-[10px] mt-[15px] ml-[-20px] 2xl:w-[330px] xl:w-[260px] lg:w-[160px] md:w-[120px] l:w-[120px] m:w-[110px] w-[80px]">
              <Image width={500} height={800} src={women} alt={""} />
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
}

export default GiftCardSection;
