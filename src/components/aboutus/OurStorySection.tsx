import React from "react";
import { Parallax } from "react-scroll-parallax";

import { motion } from "framer-motion";

import thonggreen from "../../images/aboutus/green-banana-leaves.png";
import OurStoryImg from "../../images/aboutus/slice92.png";
import ChiefImg from "../../images/aboutus/slice93.png";

import number15 from "../../images/aboutus/slice94.png";
import stargreen from "../../images/aboutus/slice95.png";

import Image from "next/image";

export default function OurStorySection() {
  return (
    <section
      id="our-story"
      className="h-full w-full flex flex-col gap-16 items-center justify-center"
    >
      <div className="flex flex-col items-center">
        <div className="z-10">
          <div
            data-aos="fade-down"
            data-aos-once="true"
            data-aos-duration="1500"
            className="lg:w-full md:w-full w-[250px] flex justify-center"
          >
            <Image
              className=" hover:drop-shadow-[0_5px_5px_rgba(4,255,158,0.8)] !transition-all !ease-in-out opacity-75"
              width={400}
              height={400}
              src={OurStoryImg.src}
              alt={""}
              loading="eager"
              priority
            />
          </div>
        </div>
        <div className="mt-10 z-10">
          <div
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1500"
            className="lg:w-full md:w-full w-[250px] flex justify-center"
          >
            <p className="text-center font-semibold text-5xl text-white font-din">
              Our commitment <br /> to cooking truly authentic Thai food, <br />{" "}
              so that our customers <br /> can experience the same delicious
              recipes <br /> that Thai people enjoy in Thailand.
            </p>
          </div>
        </div>
        {/* baitong */}
        <Parallax speed={10} className="w-[500px] md:w-[800px] lg:w-[1500px]">
          <motion.div
            initial={{ opacity: 1, scale: 1.5 }}
            animate={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{
              duration: 1.5,
            }}
            className="-mt-[680px]"
          >
            <img
              width={1500}
              height={1000}
              src={thonggreen.src}
              alt=""
              loading="eager"
            />
          </motion.div>
        </Parallax>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <div className="h-[400px] flex flex-row justify-center items-center">
          <div
            data-aos="fade-right"
            data-aos-once="true"
            data-aos-duration="1000"
            className="lg:w-full md:w-full w-[250px] flex justify-center -mr-[70px]"
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
            className="lg:w-full md:w-full w-[250px] flex justify-center"
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
            className="lg:w-full lg:h-full md:w-full w-[250px] flex items-end -ml-[100px]"
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
          <p className="text-white text-xl font-uid text-center">
            After more than 15 years serving the authentic Thai food <br /> for
            the Seattle, the founder decided to hand the Bai Tong to the next
            generation of the family in 2005.
          </p>
        </div>
      </div>
    </section>
  );
}
