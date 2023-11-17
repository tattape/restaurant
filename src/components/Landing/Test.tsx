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
    const [activeIndex, setActiveIndex] = useState(4);
    return (
        <div className=''>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                initialSlide={activeIndex}
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
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            >
                {SmallPlateImg.map((image: any, idx: number) => {
                    const isActive = idx === activeIndex;
                    const Opacity = isActive ? '' : 'brightness-50';

                    return (
                        <SwiperSlide key={idx} className={`!flex !flex-col !justify-end !w-[300px] !h-[300px] ${Opacity}`}>
                            <Image width={300} height={300} alt='' src={image.src} />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    );
}

export default Test;