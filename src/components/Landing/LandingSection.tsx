import React, { useEffect, useState } from 'react'
import Logo from '../../images/slice6.png'
import Image from 'next/image'
import AOS from 'aos'
import "aos/dist/aos.css";
import { ParallaxProvider, Parallax, ParallaxBanner } from 'react-scroll-parallax';
import BGImage from '../../images/bg.jpg'
import { AnimatePresence, motion } from 'framer-motion';
type Props = {}

function LandingSection({ }: Props) {
    const [preloading, setPreloading] = useState(true)
    useEffect(() => {
        AOS.init();
    }, [])
    console.log(preloading)

    useEffect(() => {
        const preload = setInterval(() => {
            setPreloading(false)
        }, 3000);
        return () => {
            clearInterval(preload);
        }
    }, []);

    return (
        <>
            <AnimatePresence>
                {preloading &&
                    <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`z-[999] absolute w-full h-screen flex justify-center items-center bg-black`}
                    >
                        <Image data-aos='fade-up' data-aos-duration='1000' className='animate-[bounce_2s_ease-in-out_infinite]' src={Logo} width={300} height={150} alt='logo' />
                    </motion.div>
                }
            </AnimatePresence>
            <ParallaxProvider>
                <Image className='w-full h-full object-cover brightness-75 opacity-60' src={BGImage} alt="Parallax Background" />
                <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-80'>
                    <Parallax speed={10}>
                        <Image data-aos='fade-up' data-aos-duration='2000' className='' src={Logo} width={300} height={150} alt='logo' />
                    </Parallax>
                </div>
                <div className='absolute text-white border top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>test</div>
            </ParallaxProvider>
        </>
    )
}

export default LandingSection