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
        <div className="h-[700px]">
            <div className="relative flex justify-center">
                <Parallax translateX={[-10, 0]}>
                    <div className="absolute top-[-20px] left-[290px] w-[200px]">
                        <Image width={300} height={300} src={camera} alt={""} />
                    </div>
                </Parallax>
                <div className="mt-[130px] flex flex-row items-center justify-center gap-2">
                    <Parallax>
                        <div className="absolute top-[-65px] left-[-45px] w-[60px] mt-[60px] ">
                            <Image width={300} height={300} src={fontC} alt={""} />
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="w-[120px]">
                            <Image width={300} height={300} src={fontA} alt={""} />
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="w-[140px]">
                            <Image width={300} height={300} src={fontR} alt={""} />
                        </div>
                    </Parallax>
                </div>
                <div className="mt-[130px] flex flex-row items-center justify-center">
                    <Parallax>
                        <div className="mt-[39px] w-[40px]">
                            <Image width={300} height={300} src={fontT} alt={""} />
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="mt-[75px] w-[40px]">
                            <Image width={300} height={300} src={fontE} alt={""} />
                        </div>
                    </Parallax>
                </div>
                <div className="mt-[130px] flex flex-row items-center justify-center gap-1">
                    <Parallax>
                        <div className="mt-[5px] w-[125px]">
                            <Image
                                width={300}
                                height={300}
                                src={fontRingR}
                                alt={""}
                            />
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="mb-[85px] w-[50px]">
                            <Image width={300} height={300} src={fontI} alt={""} />
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="mb-[25px] w-[85px]">
                            <Image width={300} height={300} src={fontN} alt={""} />
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="w-[85px]">
                            <Image width={300} height={300} src={fontG} alt={""} />
                        </div>
                    </Parallax>
                    <Parallax>
                        <div className="absolute -top-[160px] right-[150px] w-[90px]">
                            <Image width={300} height={300} src={flower} alt={""} />
                        </div>
                    </Parallax>
                </div>

                {/* WEDRING */}
                <div className="absolute top-[295px] 2xl:left-[810px] xl:left-[610px] flex flex-col gap-6">
                    {/* WED */}
                    <div className="flex flex-row gap-[2px]">
                        <Parallax>
                            <div className="w-[160px]">
                                <Image width={300} height={300} src={fontW} alt={""} />
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="w-[90px]">
                                <Image
                                    width={300}
                                    height={300}
                                    src={fontWedE}
                                    alt={""}
                                />
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="w-[105px]">
                                <Image width={300} height={300} src={fontD} alt={""} />
                            </div>
                        </Parallax>
                    </div>
                    {/* DING */}
                    <div className="flex flex-row gap-2">
                        <Parallax>
                            <div className="w-[105px]">
                                <Image
                                    width={300}
                                    height={300}
                                    src={fontDingD}
                                    alt={""}
                                />
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="w-[49px]">
                                <Image
                                    width={300}
                                    height={300}
                                    src={fontDingI}
                                    alt={""}
                                />
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="w-[100px]">
                                <Image
                                    width={300}
                                    height={300}
                                    src={fontDingN}
                                    alt={""}
                                />
                            </div>
                        </Parallax>
                        <Parallax>
                            <div className="w-[100px]">
                                <Image
                                    width={300}
                                    height={300}
                                    src={fontDingG}
                                    alt={""}
                                />
                            </div>
                        </Parallax>
                    </div>
                </div>

                <Parallax>
                    <div className="absolute 2xl:top-[570px] 2xl:right-[-10px] xl:top-[570px] xl:right-[-10px] 2xl:w-[500px] xl:w-[450px]">
                        <Image width={450} height={450} src={arch} alt={""} />
                    </div>
                </Parallax>
                <Parallax>
                    <div className="absolute 2xl:top-[528px] 2xl:right-[90px] xl:top-[528px] xl:right-[30px] w-[300px]">
                        <Image width={350} height={350} src={cropPhoto} alt={""} />
                    </div>
                </Parallax>
                <Parallax>
                    <div className="absolute 2xl:top-[820px] 2xl:right-[120px] xl:top-[820px] xl:right-[40px] w-[140px]">
                        <Image width={300} height={300} src={date} alt={""} />
                    </div>
                </Parallax>
                <div className="absolute text-3xl 2xl:left-[575px] 2xl:top-[360px] xl:left-[370px] xl:top-[360px] text-[#ffe200]">
                    <Parallax>
                        <div className="">Looking for</div>
                    </Parallax>
                    <Parallax>
                        <div className="">catering service</div>
                    </Parallax>
                    <Parallax>
                        <div className="">for</div>
                    </Parallax>
                    <Parallax>
                        <div className="">your upcoming event?</div>
                    </Parallax>
                </div>
                <div className="absolute text-lg 2xl:left-[575px] 2xl:top-[550px] xl:left-[370px] xl:top-[550px] text-[#ffe200]">
                    <Parallax>
                        <div className="">We offer an extensive menu</div>
                    </Parallax>
                    <Parallax>
                        <div className="">selection and can accommodate</div>
                    </Parallax>
                    <Parallax>
                        <div className="">most dietary needs.Menu</div>
                    </Parallax>
                    <Parallax>
                        <div className="">planning including bar service,</div>
                    </Parallax>
                    <Parallax>
                        <div className="">floral and table decoration as</div>
                    </Parallax>
                    <Parallax>
                        <div className="">well as rental needs can all be</div>
                    </Parallax>
                    <Parallax>
                        <div className="">handled by our team, leaving</div>
                    </Parallax>
                    <Parallax>
                        <div className="">you time to relax.</div>
                    </Parallax>
                </div>
                <div className="absolute text-lg 2xl:left-[575px] 2xl:top-[790px] xl:left-[370px] xl:top-[790px] text-[#ffe200]">
                    <Parallax>
                        <div className="">For more information,</div>
                    </Parallax>
                    <Parallax>
                        <div className="">please email us at :</div>
                    </Parallax>
                    <Parallax>
                        <div className="">catering@baitongfamily.com</div>
                    </Parallax>
                </div>
            </div>
        </div>
    )
}

export default CarteringSection