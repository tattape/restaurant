import Image from 'next/image'
import React from 'react'
import Logo from "../../images/slice6.png";
import footer from "../../images/Asset 28.png";

//contact
import facebook from "../../images/facebook-logo.png";
import twitter from "../../images/twitter-logo.png";
import whatapp from "../../images/whatsapp-logo.png";
import instagram from "../../images/instagram-logo.png";
import tel from "../../images/smartphone-logo.png";
import email from "../../images/mail-logo.png";
import message from "../../images/chat-logo.png";

type Props = {}

function Footer({ }: Props) {
    const contact = [
        {
            alt: "facebook",
            src: facebook,
        },
        {
            alt: "x",
            src: twitter,
        },
        {
            alt: "whatapp",
            src: whatapp,
        },
        {
            alt: "instagram",
            src: instagram,
        },
        {
            alt: "tel",
            src: tel,
        },
        {
            alt: "email",
            src: email,
        },
        {
            alt: "message",
            src: message,
        },
    ];
    return (
        <div className="mt-[200px]">
            <div className="relative flex justify-center items-center">
                <Image className="w-full" src={footer} alt={""} />
                <div className="absolute flex gap-2 2xl:top-[300px] xl:top-[200px] lg:top-[130px]">
                    {contact.map((item, index) => (
                        <div
                            key={index}
                            data-aos="flip-right"
                            data-aos-delay={index * 50}
                            className="w-16 h-16 bg-white flex justify-center items-center rounded-md hover:scale-110 transition-all ease-in-out"
                        >
                            <div className="w-10 h-10">
                                <Image
                                    className="w-full"
                                    width={64}
                                    height={64}
                                    src={item.src}
                                    alt={item.alt}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                <div className="absolute bg-fuchsia-800 w-full 2xl:h-[330px] xl:h-[230px] lg:h-[180px] py-8 px-[140px] flex justify-center items-center bottom-0">
                    <div className="2xl:w-[600px] 2xl:h-[200px] xl:w-[400px] xl:h-[150px] lg:w-[300px] lg:h-[100px]">
                        <Image
                            src={Logo}
                            width={600}
                            height={200}
                            alt="logo"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer