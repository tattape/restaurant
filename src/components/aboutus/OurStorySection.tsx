import React from "react";
import { Parallax } from "react-scroll-parallax";

import { motion } from "framer-motion";

import thonggreen from "../../images/aboutUS/green-banana-leaves.png";
import OurStoryImg from "../../images/aboutUS/slice92.png";
import ChiefImg from "../../images/aboutUS/slice93.png";

import number15 from "../../images/aboutUS/slice94.png";
import stargreen from "../../images/aboutUS/slice95.png";

import Image from "next/image";

export default function OurStorySection() {
  return (
    <section
      id="our-story"
      className=" h-full w-full flex flex-col gap-16 items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="z-10">
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            className="xl:w-full lg:w-[300px] md:w-[250px] l:w-[150px] m:w-[140px] w-[130px] flex justify-center"
          >
            <Image
              className=" hover:drop-shadow-[0_5px_5px_rgba(4,255,158,0.8)] !transition-all !ease-in-out"
              width={500}
              height={400}
              src={OurStoryImg.src}
              alt={""}
              loading="eager"
              priority
            />
          </div>
        </div>
        <div className="xl:mt-8 lg:mt-8 md:mt-5 l:mt-3 mt-3 z-10">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            className="xl:w-full md:w-full l:w-full flex justify-center"
          >
            <p className="text-center font-semibold xl:text-4xl lg:text-2xl md:text-xl l:text-sm text-xs text-white">
              Our commitment <br /> to cooking truly authentic Thai food, <br />{" "}
              so that our customers <br /> can experience the same delicious
              recipes <br /> that Thai people enjoy in Thailand.
            </p>
          </div>
        </div>
        {/* baitong */}
        <div className="w-[500px] lg:w-[1000px] md:w-[800px] xl:w-[1500px]">
          <motion.div
            initial={{ opacity: 1, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 1.5,
            }}
            className="xl:-mt-[570px] lg:-mt-[410px] md:-mt-[340px] l:-mt-[220px] -mt-[200px]"
          >
            <Image
              width={1500}
              height={1000}
              src={thonggreen.src}
              alt=""
              loading="eager"
              priority
            />
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col xl:gap-10 lg:gap-10 md:gap-4 l:gap-10 items-center">
        <div className="w-full xl:h-full lg:h-full md:h-full l:h-[200px] flex flex-row justify-center items-center">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
            className="xl:w-full lg:w-full md:w-[700px] l:w-[250px] w-[100px] flex justify-center z-10 xl:-mr-[70px] lg:-mr-[70px] md:-mr-[50px] l:-mr-[20px] -mr-[18px]"
          >
            <Image
              className="opacity-75"
              width={400}
              height={400}
              src={number15.src}
              alt={""}
              loading="eager"
              priority
            />
          </div>
          <div
            data-aos="zoom-in"
            data-aos-once="true"
            className="xl:w-full lg:w-full md:w-full l:w-full w-[200px] flex justify-center"
          >
            <Image
              width={400}
              height={400}
              src={ChiefImg.src}
              alt={""}
              loading="eager"
              priority
            />
          </div>
          <div
            data-aos="fade-left"
            data-aos-once="true"
            data-aos-duration="1500"
            className="xl:w-full xl:h-full lg:w-full lg:h-full md:w-full md:h-full l:w-full l:h-full w-[150px] flex items-end xl:-ml-[100px] lg:-ml-[100px] md:-ml-[100px] md:-mt-[20px] l:-ml-[100px] l:-mt-[30px] -ml-[60px]"
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
        </div>
        <div data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
          <p className="text-white xl:text-xl lg:text-xl md:text-lg l:text-xs text-center">
            After more than 15 years serving the authentic Thai food <br /> for
            the Seattle, the founder decided to hand the Bai Tong to the next
            generation of the family in 2005.
          </p>
        </div>
      </div>
    </section>
  );
}
