import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

import giftCardBG from "../../images/giftCardBG.png";
import giftCard from "../../images/gift-card.png";
import thongTong from "../../images/thongtong.png";
import heart from "../../images/heart.png";
import women from "../../images/women.png";
import clsx from "clsx";

type Props = {};

function GiftCardSection({ }: Props) {
  return (
    <section id="gift-card" className="my-[100px]">
      <div className="flex flex-col items-center">
        {/* Thong Muang */}
        <Parallax translateX={[-10, 0]}>
          <div
            className={clsx(
              "2xl:w-full 2xl:left-[70px]",
              "xl:w-full xl:-left-[10px]",
              "lg:w-full",
              "md:w-full",
              "l:w-[700px]",
              "m:w-[600px]",
              "w-[500px]"
            )}
          >
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
        <div
          className={clsx(
            "flex",
            "2xl:mt-[-630px]",
            "xl:mt-[-480px]",
            "lg:mt-[-350px] lg:mr-[200px]",
            "md:mt-[-250px] md:mr-[300px]",
            "l:mt-[-270px] l:mr-[290px]",
            "m:mt-[-230px] m:mr-[280px]",
            "mt-[-195px] mr-[260px]"
          )}
        >
          <div
            className={clsx(
              "flex flex-col z-10",
              "2xl:mt-[60px] 2xl:mr-[-210px] 2xl:gap-20",
              "xl:mt-[30px] xl:mr-[-160px] xl:gap-16",
              "lg:mt-[25px] lg:mr-[-150px] lg:gap-14",
              "md:mt-[8px] md:mr-[-120px] md:gap-9",
              "l:mr-[-160px] l:gap-32",
              "m:mr-[-200px] m:gap-28",
              "mr-[-200px] gap-20"
            )}
          >
            {/* Gift Card */}
            <Parallax translateX={[-10, 10]}>
              <div
                className={clsx(
                  "2xl:ml-[20px] 2xl:w-[400px]",
                  "xl:ml-[100px] xl:w-[350px]",
                  "lg:ml-[190px] lg:w-[250px]",
                  "md:ml-[250px] md:w-[200px]",
                  "l:ml-[295px] l:w-[150px]",
                  "m:ml-[280px] m:w-[100px]",
                  "ml-[270px] w-[100px]"
                )}
              >
                <Image width={600} height={100} src={giftCard} alt={""} />
              </div>
            </Parallax>
            {/* Description */}
            <div className={clsx("flex flex-col w-[520px] items-end font-uid")}>
              <Parallax translateX={[10, -10]}>
                <p
                  className={clsx(
                    "text-white 2xl:text-2xl xl:text-xl lg:text-base md:text-sm l:text-sm m:text-sm text-xs"
                  )}
                >
                  Give your loved ones the gift of dining
                </p>
              </Parallax>
              <Parallax translateX={[-50, 50]}>
                <p
                  className={clsx(
                    "text-white 2xl:text-2xl xl:text-xl lg:text-base md:text-sm l:text-sm m:text-sm text-xs"
                  )}
                >
                  with Bai Tong gift card.
                </p>
              </Parallax>
            </div>
          </div>

          <div className="flex">
            {/* Cicle */}
            <Parallax translateX={[0, 10]}>
              <div
                className={clsx(
                  "bg-[#9f00a3] border-none rounded-full opacity-70",
                  "2xl:w-[480px] 2xl:h-[480px]",
                  "xl:w-[350px] xl:h-[350px]",
                  "lg:w-[280px] lg:h-[280px]",
                  "md:h-[200px] md:w-[200px] md:mt-0",
                  "l:w-[180px] l:h-[180px] l:mt-[45px]",
                  "m:w-[160px] m:h-[160px] m:mt-[20px]",
                  "w-[140px] h-[140px] mt-[20px]"
                )}
              ></div>
            </Parallax>
            {/* thongtong */}
            <Parallax translateY={[10, -10]} className="z-20">
              <div
                className={clsx(
                  "2xl:ml-[-340px] 2xl:mt-[65px] 2xl:w-[280px]",
                  "xl:ml-[-250px] xl:mt-[65px] xl:w-[200px]",
                  "lg:ml-[-200px] lg:mt-[40px] lg:w-[160px]",
                  "md:ml-[-150px] md:mt-[20px] md:w-[120px]",
                  "l:ml-[-140px] l:mt-[80px] l:w-[120px]",
                  "m:ml-[-120px] m:mt-[55px] m:w-[100px]",
                  "ml-[-100px] mt-[55px] w-[80px]"
                )}
              >
                <Image className="hover:drop-shadow-[0_5px_10px_rgba(217,163,0,1)] hover:brightness-150 hover:rotate-3 hover:scale-110 transition-all duration-700 ease-in-out" width={500} height={30} src={thongTong} alt={""} />
              </div>
            </Parallax>
            {/* Heart */}
            <Parallax translateY={[-10, 0]} className="z-10">
              <div
                className={clsx(
                  "2xl:mt-[180px] 2xl:ml-[-120px] 2xl:w-[200px]",
                  "xl:mt-[120px] xl:ml-[-100px] xl:w-[180px]",
                  "lg:mt-[100px] lg:ml-[-80px] lg:w-[120px]",
                  "md:mt-[70px] md:ml-[-60px] md:w-[80px]",
                  "l:mt-[110px] l:ml-[-40px] l:w-[60px]",
                  "m:mt-[75px] m:ml-[-40px] m:w-[60px]",
                  "ml-[-40px] mt-[60px] w-[60px]"
                )}
              >
                <Image width={500} height={30} src={heart} alt={""} />
              </div>
            </Parallax>
          </div>

          {/* Woman */}
          <Parallax speed={-5}>
            <div
              className={clsx(
                "2xl:ml-[-80px] 2xl:mt-[-50px] 2xl:w-[330px]",
                "xl:ml-[-80px] xl:mt-[-50px] xl:w-[260px]",
                "lg:ml-[-35px] lg:mt-[-5px] lg:w-[160px]",
                "md:ml-[-20px] md:mt-[-5px] md:w-[120px]",
                "l:ml-[-25px] l:mt-[25px] l:w-[120px]",
                "m:ml-[-25px] m:mt-[10px] m:w-[110px]",
                "mt-[15px] ml-[-20px] w-[80px]"
              )}
            >
              <Image width={500} height={800} src={women} alt={""} />
            </div>
          </Parallax>
        </div>
      </div>
    </section>
  );
}

export default GiftCardSection;
