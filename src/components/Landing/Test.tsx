import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SmallPlateImg from '../../Utils/SmallPlateImg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { EffectCoverflow } from 'swiper/modules';
import Image from 'next/image';

function Test() {
    return (
        <div className=''>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                initialSlide={4}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 10,
                    depth: 200,
                    modifier: 3,
                    slideShadows: false
                }}
                modules={[EffectCoverflow]}
                className="!py-12 !w-full"
            >
                {SmallPlateImg.map((image: any, idx: number) => {
                    return (
                        <SwiperSlide key={idx} className='!bg-center !flex !flex-col !justify-end !bg-cover !w-[300px] !h-[300px]'>
                            <Image width={300} height={300} alt='' src={image.src} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Test;