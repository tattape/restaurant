import React, { useEffect, useState } from 'react'
import Logo from '../../images/slice6.png'
import Image from 'next/image'
import AOS from 'aos'
import "aos/dist/aos.css";
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import BGImage from '../../images/bg.jpg'
type Props = {}

function LandingSection({ }: Props) {
    const [preloading, setPreloading] = useState(true)
    const [preloadingDelay, setPreloadingDelay] = useState(true)
    useEffect(() => {
        AOS.init();
    }, [])
    console.log(preloading)

    useEffect(() => {
        const preload = setInterval(() => {
            setPreloading(false)
        }, 5000);
        const delaypreload = setInterval(() => {
            setPreloadingDelay(false)
        }, 7000);
        return () => {
            clearInterval(preload);
            clearInterval(delaypreload);
        }
    }, []);

    return (
        <ParallaxProvider>
            {preloadingDelay &&
                <div className={`z-[999] absolute w-full h-screen flex justify-center items-center ${!preloading ? 'bg-transparent transition-all duration-1000' : 'bg-black'}`}>
                    <div data-aos="fade-up" data-aos-duration="1000" className={`${!preloading && 'transition-all'}`}>
                        <Image className='animate-[bounce_3s_ease-in-out_infinite]' src={Logo} width={300} height={150} alt='logo' />
                    </div>
                </div>
            }
            <Image className='w-full h-full object-cover brightness-75 opacity-60' src={BGImage} alt="Parallax Background" />
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-80'>
                <Parallax speed={10}>
                    <Image data-aos='fade-up' data-aos-duration='1000' className='' src={Logo} width={300} height={150} alt='logo' />
                </Parallax>
            </div>
            {/* <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                <p className="text-white">test</p>
            </div> */}
        </ParallaxProvider>
    )
}

export default LandingSection