import React from "react";
import Image from "next/image";

import foodcicle from "../../images/aboutUS/slice97.png";
import ciclepurple from "../../images/aboutUS/slice96.png";
import stargreen from "../../images/aboutUS/slice95.png";
import baithong from "../../images/aboutUS/green-banana-leaves.png";

interface Props {}

export default function OurVisionSection({}: Props) {
  return (
    <section
      id="our-vision"
      className="mt-40 mb-40 h-full w-full flex flex-col gap-16 items-center justify-center"
    >
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="flex flex-row items-center">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
            className="z-20 xl:-mr-[455px] lg:-mr-[350px] md:-mr-[250px] l:-mr-[300px]"
          >
            <Image
              className="opacity-75"
              width={400}
              height={400}
              src={stargreen.src}
              alt={""}
              loading="eager"
              priority
            />
          </div>
          <div
            data-aos="fade-down-right"
            data-aos-once="true"
            data-aos-duration="1000"
            className="xl:-mr-[730px] xl:mt-[500px] lg:-mr-[480px] lg:mt-[300px] md:-mr-[380px] md:mt-[250px] l:-mr-[250px] l:mt-[100px] z-0"
          >
            <Image
              className="opacity-75 -rotate-[140deg]"
              width={800}
              height={400}
              src={baithong.src}
              alt={""}
              loading="eager"
              priority
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            data-aos-duration="1500"
            className="flex justify-center z-10 xl:w-full lg:w-[1500px] md:w-[1500px] l:w-[1000px]"
          >
            <Image
              width={1500}
              height={1000}
              src={foodcicle.src}
              alt=""
              loading="eager"
              priority
            />
          </div>
        </div>
        <div
          data-aos="zoom-out"
          data-aos-once="true"
          data-aos-duration="1800"
          className="relative xl:w-full lg:w-[450px] md:w-[350px] l:w-[200px] flex flex-col items-center justify-center z-20 xl:-mt-[750px] lg:-mt-[500px] md:-mt-[400px] l:-mt-[220px]"
        >
          <Image
            className="opacity-70"
            width={650}
            height={500}
            src={ciclepurple.src}
            alt=""
            loading="eager"
            priority
          />
          <p className="absolute text-white xl:text-5xl lg:text-3xl md:text-xl l:text-sm text-center font-semibold font-serif ">
            Our vision <br /> is to bring you <br /> the best Thai dining <br />{" "}
            experience <br /> and <br /> be your favorite <br /> Thai place.
          </p>
        </div>
      </div>
    </section>
  );
}
