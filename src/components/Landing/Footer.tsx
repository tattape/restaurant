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
import mapRestaurant from "../../images/map.png";
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
    <section
      id="footer"
      className="mt-[400px] flex flex-col items-center justify-center"
    >
      {/* contacts */}
      <div className="flex flex-col items-center justify-center gap-10 z-20 xl:-mb-[600px] lg:-mb-[400px] md:-mb-[200px]">
        <div className="w-full flex items-center justify-center">
          <div className="grid grid-cols-4 md:flex gap-5 z-20">
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
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="grid xl:grid-cols-2 lg:grid-cols-2 gap-5 z-10 p-4">
            <div
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/Su49xKnRWFm9vYz76",
                  "_blank"
                )
              }
              className="cursor-pointer flex items-center justify-center"
            >
              <Image
                className="rounded-md w-full bg-white p-2"
                alt=""
                src={mapRestaurant.src}
                width={600}
                height={200}
                priority
              />
            </div>
            <div className="bg-white rounded-lg p-4 flex flex-col gap-4 items-center">
              <p className="text-center text-yellow-500 text-2xl font-syn font-bold">
                Location & Hours
              </p>
              <div className="flex flex-col items-start justify-center">
                <p className="text-lg font-medium">
                  1121 E Pike St, Seattle, WA 98122 ​
                </p>
                <p className="text-lg font-font-bold">Call: 206.787.8448</p>
                <p className="text-lg font-medium">
                  Email: info@baitongthaistreetcafe.com
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="">
                  <p className="text-lg font-bold">Monday to Thursday</p>
                  <p className="text-lg font-medium">12.00 pm - 3.00 pm</p>
                  <p className="text-lg font-medium">4.30 pm - 9.00 pm</p>
                </div>
                <div className="">
                  <p className="text-lg font-bold">Friday</p>
                  <p className="text-lg font-medium">12.00 pm - 3.00 pm</p>
                  <p className="text-lg font-medium">4.30 pm - 10.00 pm</p>
                </div>
                <div className="">
                  <p className="text-lg font-bold">Saturday</p>
                  <p className="text-lg font-medium">12.00 pm - 3.00 pm</p>
                  <p className="text-lg font-medium">4.30 pm - 10.00 pm</p>
                </div>
                <div className="">
                  <p className="text-lg font-bold">Sunday</p>
                  <p className="text-lg font-medium">12.00 pm - 8.30 pm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bg */}
      <Image className="w-full" src={footer} alt={""} />

      {/* footer */}
      <div className="z-20 bg-fuchsia-800 w-full flex justify-center py-10">
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
    </section>
  );
}

export default Footer;
