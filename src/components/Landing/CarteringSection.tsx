import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import { AnimatePresence, motion, Variants } from "framer-motion";

import fontC from "../../images/image-font-c.png";
import fontA from "../../images/image-font-A.png";
import fontR from "../../images/image-font-R.png";
import fontT from "../../images/image-font-t.png";
import fontE from "../../images/image-font-e.png";
import fontRingR from "../../images/image-font-R-head-ring.png";
import fontI from "../../images/image-font-i.png";
import fontN from "../../images/image-font-n.png";
import fontG from "../../images/image-font-g.png";
import fontW from "../../images/image-font-W.png";
import fontWedE from "../../images/image-font-E-wed.png";
import fontD from "../../images/image-font-D.png";
import fontDingD from "../../images/image-font-D-ding.png";
import fontDingI from "../../images/image-font-I-ding.png";
import fontDingN from "../../images/image-font-N-ding.png";
import fontDingG from "../../images/image-font-G-ding.png";
import camera from "../../images/camera.png";
import flower from "../../images/flower.png";
import cropPhoto from "../../images/crop-photo.png";
import date from "../../images/date.png";
import arch from "../../images/arch.png";

type Props = {};

function CarteringSection({}: Props) {
  const rtolVariants: Variants = {
    onscreen: {
      translateX: [100, 30],
      transition: {
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  const ltorVariants: Variants = {
    onscreen: {
      translateX: [-100, 30],
      transition: {
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <section id="ca-te-ring" className="-mt-[5px]">
      <div className="flex flex-col items-center ">
        {/* camera and sunflower */}
        <div className="flex l:-mr-[250px] m:-mr-[240px] -mr-[120px] scale-[0.45] md:scale-75">
          <Parallax opacity={[0, 1]} translateY={[0, 30]}>
            <div className="w-[200px] -mt-24">
              <img
                className="hover:animate-shake1"
                width={300}
                height={300}
                src={camera.src}
                alt={""}
                loading="eager"
              />
            </div>
          </Parallax>
          <Parallax opacity={[0, 1]} translateY={[0, 30]}>
            <div className="w-[70px] justify-self-end self-end">
              <img
                className="hover:animate-shake"
                width={300}
                height={300}
                src={flower.src}
                alt={""}
                loading="eager"
              />
            </div>
          </Parallax>
        </div>

        {/* cAR te Ring */}
        <div className="flex gap-5 lg:mt-12 md:mt-4 m:-mt-[40px] s:-mt-[60px] scale-[0.3] m:scale-[0.4] l:scale-[0.45] md:scale-75 lg:scale-100 ">
          <div className="flex gap-1 items-end ">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="w-[65px]" variants={ltorVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontC.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="w-[100px]" variants={rtolVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontA.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              {/* <motion.div className="w-[120px]" variants={ltorVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontR.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div> */}
            </motion.div>
          </div>
          <div className="flex gap-1 items-end">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="w-[50px]" variants={rtolVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontT.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="w-[50px]" variants={ltorVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontE.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div>
            </motion.div>
          </div>
          <div className="flex gap-1">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="w-[130px]" variants={rtolVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontRingR.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="w-[40px] -mt-10" variants={ltorVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontI.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="w-[65px]" variants={rtolVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontN.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div>
            </motion.div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="w-[70px]" variants={ltorVariants}>
                <img
                  width={300}
                  height={300}
                  src={fontG.src}
                  alt={""}
                  loading="eager"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* pic and paragraph */}
        <div className="flex ml-10 flex-col md:flex-row">
          {/* paragraph */}
          <div
            data-aos="fade-up"
            className="flex z-10 flex-col gap-5 text-white text-lg ml-10 l:ml-0 "
          >
            <div className="font-bold text-2xl font-din">
              Looking for
              <br />
              catering service
              <br />
              for
              <br />
              your upcoming event?
            </div>
            <div className="font-arial">
              We offer an extensive menu
              <br />
              selection and can accommodate
              <br />
              most dietary needs.Menu
              <br />
              planning including bar service,
              <br />
              floral and table decoration as
              <br />
              well as rental needs can all be
              <br />
              handled by our team, leaving
              <br />
              you time to relax.
            </div>
            <div className="">
              For more information,
              <br />
              please email us at :
              <br />
              catering@baitongfamily.com
            </div>
          </div>
          {/* wedding and frame image */}
          <div className="-mt-24 -ml-10 scale-75 l:-mt-5 md:scale-100">
            <Parallax translateY={[-5, 10]} opacity={[0.5, 1]}>
              <div className="flex flex-col gap-10">
                <div className="flex">
                  <div className="w-[137px]">
                    <img
                      width={300}
                      height={300}
                      src={fontW.src}
                      alt={""}
                      loading="eager"
                    />
                  </div>
                  <div className="w-[78px]">
                    <img
                      width={300}
                      height={300}
                      src={fontWedE.src}
                      alt={""}
                      loading="eager"
                    />
                  </div>
                  <div className="w-[89px]">
                    <img
                      width={300}
                      height={300}
                      src={fontD.src}
                      alt={""}
                      loading="eager"
                    />
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[90px]">
                    <img
                      width={300}
                      height={300}
                      src={fontDingD.src}
                      alt={""}
                      loading="eager"
                    />
                  </div>
                  <div className="w-[41.6px]">
                    <img
                      width={300}
                      height={300}
                      src={fontDingI.src}
                      alt={""}
                      loading="eager"
                    />
                  </div>
                  <div className="w-[88px]">
                    <img
                      width={300}
                      height={300}
                      src={fontDingN.src}
                      alt={""}
                      loading="eager"
                    />
                  </div>
                  <div className="w-[87px]">
                    <img
                      width={300}
                      height={300}
                      src={fontDingG.src}
                      alt={""}
                      loading="eager"
                    />
                  </div>
                </div>
              </div>
            </Parallax>
            <div className="flex flex-col items-end ml-10 mt-10">
              <Parallax>
                <div className="w-[400px]">
                  <img
                    width={450}
                    height={450}
                    src={arch.src}
                    alt={""}
                    loading="eager"
                  />
                </div>
              </Parallax>
              <Parallax rotate={[10, -20]}>
                <div className="w-[280px] -mt-[320px] mr-5 ">
                  <img
                    width={350}
                    height={350}
                    src={cropPhoto.src}
                    alt={""}
                    loading="eager"
                  />
                </div>
              </Parallax>
              <Parallax rotate={[0, 180]}>
                <div className="w-[120px] -mt-10 mr-10">
                  <img
                    className="hover:animate-[spin_2s_ease-in-out]"
                    width={300}
                    height={300}
                    src={date.src}
                    alt={""}
                    loading="eager"
                  />
                </div>
              </Parallax>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CarteringSection;
