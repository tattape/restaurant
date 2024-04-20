import Image from "next/image";
import React from "react";

import OurFamilyImg from "../../images/aboutUS/slice98.png";
import LogoImg1 from "../../images/aboutUS/slice99.png";
import LogoImg2 from "../../images/aboutUS/slice100.png";
import LogoImg3 from "../../images/aboutUS/logo_baitong_thaistreet_cafe.png";

export default function OurFamilySection() {
  return (
    <section
      id="our-family"
      className="lg:mt-[350px] lg:mb-[0px] mb-[200px] h-full w-full flex flex-col gap-16 items-center justify-center"
    >
      <div
        data-aos="fade-up"
        data-aos-once="true"
        className="xl:w-full lg:w-[500px] md:w-[400px] l:w-[300px] w-[280px] flex justify-center"
      >
        <Image
          className=" hover:drop-shadow-[0_5px_5px_rgba(4,255,158,0.8)] !transition-all !ease-in-out"
          width={600}
          height={600}
          src={OurFamilyImg.src}
          alt={""}
          loading="eager"
          priority
        />
      </div>
      <div className="p-2 w-full grid lg:grid-cols-3 lg:gap-5 l:grid-cols-1 l:gap-8 grid-cols-1 gap-5">
        <div
          onClick={() =>
            window.open("https://www.baitongrestaurant.com/", "_blank")
          }
          data-aos="fade-left"
          data-aos-once="true"
          className="w-full h-full flex justify-center items-center cursor-pointer"
        >
          <Image
            className="lg:w-[500px] lg:h-[180px] md:w-[420px] md:h-[220px] w-[200px] h-[120px]"
            width={400}
            height={400}
            src={LogoImg1.src}
            alt={""}
            loading="eager"
            priority
          />
        </div>
        <div
          onClick={() =>
            window.open("https://www.noithaicuisine.com/", "_blank")
          }
          data-aos="zoom-in"
          data-aos-once="true"
          className="w-full h-full flex justify-center items-center cursor-pointer"
        >
          <Image
            className="xl:w-[350px] xl:h-[300px] lg:w-[300px] lg:h-[250px] md:w-[350px] md:h-[300px] w-[250px] h-[200px]"
            width={400}
            height={400}
            src={LogoImg2.src}
            alt={""}
            loading="eager"
            priority
          />
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="w-full h-full flex justify-center items-center cursor-pointer"
        >
          <Image
            className="2xl:w-[600px] 2xl:h-[220px] xl:w-[500px] xl:h-[180px] lg:w-[500px] lg:h-[150px] md:w-[480px] md:h-[200px] w-[280px] h-[110px]"
            width={400}
            height={400}
            src={LogoImg3.src}
            alt={""}
            loading="eager"
            priority
          />
        </div>
      </div>
    </section>
  );
}
