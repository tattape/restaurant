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
    const layout = 'cursor-pointer hover:!scale-110 active:!scale-95 transition-all z-[999] fixed duration-700'
    return (
        <>
            <div data-aos='fade-right' data-aos-delay='300' className={`${layout} left-0 lg:left-20 top-32`}>
                <div className={`relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}>
                    <Image src={tugTug} alt={""} />
                    <Image className='absolute' src={delivery} alt={""} />
                </div>
            </div>

            <div data-aos='fade-left' data-aos-delay='300' className={`${layout} flex justify-end right-0 lg:right-20 top-1/3`}>
                <div className={`relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}>
                    <Image src={tung} alt={""} />
                    <Image className='absolute' src={pickup} alt={""} />
                </div>
            </div>

            <div data-aos='fade-right' data-aos-delay='300' className={`${layout} left-0 lg:left-20 bottom-40 md:bottom-10`}>
                <div className={`relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}>
                    <Image src={nangrum} alt={""} />
                    <Image className='absolute' src={reservation} alt={""} />
                </div>
            </div>
        </>
    )
}

export default ButtonLanding