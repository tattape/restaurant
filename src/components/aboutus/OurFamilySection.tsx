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
      <div className="p-2 w-full flex flex-col gap-5">
        <div className="w-full flex lg:flex-nowrap flex-wrap gap-2">
          <div
            onClick={() =>
              window.open("https://www.baitongrestaurant.com/", "_blank")
            }
            data-aos="fade-left"
            data-aos-once="true"
            className="w-full h-full flex justify-center items-center cursor-pointer"
          >
            <Image
              className="lg:w-[396px] lg:h-[218px] md:w-[396px] md:h-[218px] w-[250px] h-[150px]"
              width={400}
              height={400}
              src={LogoImg1.src}
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
              className="lg:w-[550px] lg:h-[218px] md:w-[550px] md:h-[218px] w-[280px] h-[110px]"
              width={400}
              height={400}
              src={LogoImg3.src}
              alt={""}
              loading="eager"
              priority
            />
          </div>
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
      </div>
    </section>
  );
}
