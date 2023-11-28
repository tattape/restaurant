import React from 'react'
import tugTug from "../../images/tug-tug.png";
import tung from "../../images/tung.png";
import nangrum from "../../images/nangrum.png";
import delivery from "../../images/deli-very.png";
import pickup from "../../images/pick-up.png";
import reservation from "../../images/reser-vation.png";
import Image from 'next/image';

type Props = {
    scroll: true | false;
}

function ButtonLanding({ scroll }: Props) {
    const layout = 'cursor-pointer z-[999] fixed'
    const hover = 'hover:scale-110 active:scale-100 transition-all ease-in-out duration-500'
    return (
        <>
            <div data-aos='fade-right' data-aos-delay='1500' className={`${layout} left-0 lg:left-20 top-32`}>
                <div className={`${hover} relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}>
                    <img src={tugTug.src} alt={""} loading="eager" />
                    <img className='absolute' src={delivery.src} alt={""} loading="eager" />
                </div>
            </div>

            <div data-aos='fade-left' data-aos-delay='1500' className={`${layout} flex justify-end right-0 lg:right-20 top-1/3`}>
                <div className={`${hover} relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}>
                    <img src={tung.src} alt={""} loading="eager" />
                    <img className='absolute' src={pickup.src} alt={""} loading="eager" />
                </div>
            </div>

            <div data-aos='fade-right' data-aos-delay='0' className={`${layout} left-0 lg:left-20 bottom-20 md:bottom-10`}>
                <div className={`${hover} relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}>
                    <img src={nangrum.src} alt={""} loading="eager" />
                    <img className='absolute' src={reservation.src} alt={""} loading="eager" />
                </div>
            </div>
        </>
    )
}

export default ButtonLanding