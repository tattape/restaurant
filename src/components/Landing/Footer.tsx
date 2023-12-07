import Image from "next/image";
import React from "react";
import Logo from "../../images/slice6.png";
import footer from "../../images/Asset 28.png";
import clsx from "clsx";

//contact
import facebook from "../../images/facebook-logo.png";
import twitter from "../../images/twitter-logo.png";
import whatapp from "../../images/whatsapp-logo.png";
import instagram from "../../images/instagram-logo.png";
import tel from "../../images/smartphone-logo.png";
import email from "../../images/mail-logo.png";
import message from "../../images/chat-logo.png";
import { Parallax } from "react-scroll-parallax";

type Props = {};

function Footer({}: Props) {
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
    <div className="mt-[500px]">
      <div className="flex flex-col items-center">
        {/* contacts */}
        <div className="grid grid-cols-4 md:flex gap-5 z-10 -mb-10 md:-mb-[200px] lg:-mb-[300px] xl:-mb-[400px] 2xl:-mb-[600px]">
          {contact.map((item, index) => (
            <div
              className=""
              key={index}
              data-aos="flip-right"
              data-aos-delay={index * 50}
              data-aos-anchor-placement="top-bottom"
            >
              <div
                className={clsx(
                  "w-14 bg-white rounded-md !duration-300 cursor-pointer transition-all ease-in-out active:scale-[0.98]",
                  item.alt === "facebook"
                    ? "hover:bg-gradient-to-tl from-blue-500 to-blue-600"
                    : item.alt === "x"
                    ? "hover:bg-gradient-to-br from-sky-400 to-cyan-300"
                    : item.alt === "whatapp"
                    ? "hover:bg-gradient-to-br from-green-500 to-green-700"
                    : item.alt === "instagram"
                    ? "hover:bg-gradient-to-bl from-pink-500 via-red-500 to-yellow-500"
                    : item.alt === "tel"
                    ? "hover:bg-gradient-to-tr from-rose-400 via-fuchsia-500 to-indigo-500"
                    : item.alt === "email"
                    ? "hover:bg-gradient-to-bl from-orange-500 to-yellow-300"
                    : "hover:bg-gradient-to-tl from-sky-400 to-blue-500"
                )}
              >
                <div className="p-2 hover:invert">
                  <img
                    className="w-full "
                    width={64}
                    height={64}
                    src={item.src.src}
                    alt={item.alt}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* bg */}
        <Image className="w-full" src={footer} alt={""} />

        {/* footer */}
        <div className="z-10 bg-fuchsia-800 w-full flex justify-center py-10">
          <div className="w-[150px] m:w-[250px] md:w-[400px]">
            <img
              src={Logo.src}
              width={600}
              height={200}
              alt="logo"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
