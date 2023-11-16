import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
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
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="!py-12 !w-full"
            >
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-1.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-2.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-3.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-4.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-5.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-6.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-7.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-8.jpg" />
                </SwiperSlide>
                <SwiperSlide className='!bg-center !bg-cover !w-[300px] !h-[300px]'>
                    <Image width={300} height={300} alt='' src="https://swiperjs.com/demos/images/nature-9.jpg" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Test;