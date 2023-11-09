import React from 'react'
import Logo from '../../images/slice6.png'
import Image from 'next/image'
import "aos/dist/aos.css";
import { AnimatePresence, motion } from 'framer-motion';
type Props = {
    Loading: boolean;
}

function LoadingScreen({ Loading }: Props) {
    return (
        <AnimatePresence>
            {Loading &&
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`z-[999] absolute w-full h-screen flex justify-center items-center bg-black`}
                >
                    <Image className='animate-[bounce_2s_ease-in-out_infinite]' src={Logo} width={300} height={150} alt='logo' />
                </motion.div>
            }
        </AnimatePresence>
    )
}

export default LoadingScreen