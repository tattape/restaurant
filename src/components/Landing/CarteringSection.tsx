import React, { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";
import Image from "next/image";

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

type Props = {}

function CarteringSection({ }: Props) {
    return (
        <div className="mt-60">
            <div className="flex flex-col items-center">
                {/* camera and sunflower */}
                <div className="flex -mr-[260px]">
                    <Parallax>
                        <div className="w-[200px] -mt-24">
                            <Image width={300} height={300} src={camera} alt={""} />
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="w-[70px] justify-self-end self-end">
                            <Image width={300} height={300} src={flower} alt={""} />
                        </div>
                    </Parallax>
                </div>

                {/* cAR te Ring */}
                <div className="flex gap-5">
                    <div className="flex gap-1 items-end">
                        <Parallax translateX={[-100, 30]}>
                            <div className="w-[65px]">
                                <Image width={300} height={300} src={fontC} alt={""} />
                            </div>
                        </Parallax>
                        <Parallax translateX={[100, -30]}>
                            <div className="w-[100px]">
                                <Image width={300} height={300} src={fontA} alt={""} />
                            </div>
                        </Parallax>
                        <Parallax translateX={[-100, 30]}>
                            <div className="w-[120px]">
                                <Image width={300} height={300} src={fontR} alt={""} />
                            </div>
                        </Parallax>
                    </div>
                    <div className="flex gap-1 items-end">
                        <Parallax translateX={[100, -30]}>
                            <div className="w-[50px]">
                                <Image width={300} height={300} src={fontT} alt={""} />
                            </div>
                        </Parallax>
                        <Parallax translateX={[-100, 30]}>
                            <div className="w-[50px]">
                                <Image width={300} height={300} src={fontE} alt={""} />
                            </div>
                        </Parallax>
                    </div>
                    <div className="flex gap-1">
                        <Parallax translateX={[100, -30]}>
                            <div className="w-[130px]">
                                <Image width={300} height={300} src={fontRingR} alt={""} />
                            </div>
                        </Parallax>
                        <Parallax translateX={[-100, 30]}>
                            <div className="w-[40px] -mt-10">
                                <Image width={300} height={300} src={fontI} alt={""} />
                            </div>
                        </Parallax>
                        <Parallax translateX={[100, -30]}>
                            <div className="w-[65px]">
                                <Image width={300} height={300} src={fontN} alt={""} />
                            </div>
                        </Parallax>
                        <Parallax translateX={[-100, 30]}>
                            <div className="w-[70px]">
                                <Image width={300} height={300} src={fontG} alt={""} />
                            </div>
                        </Parallax>
                    </div>
                </div>

                {/* pic and paragraph */}
                <div className="flex ml-10">
                    {/* paragraph */}
                    <div className="flex z-10 flex-col gap-5 text-[#EDD202] text-lg">
                        <div className="font-bold text-2xl">Looking for
                            <br />catering service
                            <br />for
                            <br />your upcoming event?
                        </div>
                        <div className="">
                            We offer an extensive menu
                            <br />selection and can accommodate
                            <br />most dietary needs.Menu
                            <br />planning including bar service,
                            <br />floral and table decoration as
                            <br />well as rental needs can all be
                            <br />handled by our team, leaving
                            <br />you time to relax.
                        </div>
                        <div className="">
                            For more information,
                            <br />please email us at :
                            <br />catering@baitongfamily.com
                        </div>
                    </div>
                    {/* wedding and frame image */}
                    <div className="-mt-5 -ml-10">
                        <Parallax>
                            <div className="flex flex-col gap-10">
                                <div className="flex">
                                    <div className="w-[137px]">
                                        <Image width={300} height={300} src={fontW} alt={""} />
                                    </div>
                                    <div className="w-[78px]">
                                        <Image width={300} height={300} src={fontWedE} alt={""} />
                                    </div>
                                    <div className="w-[90px]">
                                        <Image width={300} height={300} src={fontD} alt={""} />
                                    </div>

                                </div>
                                <div className="flex">
                                    <div className="w-[90px]">
                                        <Image width={300} height={300} src={fontDingD} alt={""} />
                                    </div>
                                    <div className="w-[42.3px]">
                                        <Image width={300} height={300} src={fontDingI} alt={""} />
                                    </div>
                                    <div className="w-[88px]">
                                        <Image width={300} height={300} src={fontDingN} alt={""} />
                                    </div>
                                    <div className="w-[87px]">
                                        <Image width={300} height={300} src={fontDingG} alt={""} />
                                    </div>
                                </div>
                            </div>
                        </Parallax>
                        <div className="flex flex-col items-end ml-10 mt-10">
                            <Parallax>
                                <div className="w-[400px]">
                                    <Image width={450} height={450} src={arch} alt={""} />
                                </div>
                            </Parallax>
                            <Parallax>
                                <div className="w-[280px] -mt-[320px] mr-5">
                                    <Image width={350} height={350} src={cropPhoto} alt={""} />
                                </div>
                            </Parallax>
                            <Parallax>
                                <div className="w-[120px] -mt-10 mr-10">
                                    <Image width={300} height={300} src={date} alt={""} />
                                </div>
                            </Parallax>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CarteringSection