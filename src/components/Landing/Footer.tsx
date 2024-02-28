import Image from "next/image";
import React from "react";
import Logo from "../../images/slice6.png";
import footer from "../../images/Asset 28.png";
import clsx from "clsx";

//contact
import facebook from "../../images/facebook-logo.png";
import tiktok from "../../images/tik-tok-logo.png";
import threads from "../../images/threads-logo.png";
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
      href: "https://www.facebook.com/baitongthaistreetcafe",
    },
    {
      alt: "tiktok",
      src: tiktok,
      href: "https://www.tiktok.com/@baitongthaistreetcafe",
    },
    {
      alt: "instagram",
      src: instagram,
      href: "https://www.instagram.com/baitongrestaurant/",
    },
    {
      alt: "threads",
      src: threads,
      href: "https://www.threads.net/@baitongrestaurant",
    },
  ];

  const handleopenlink = (url: any) => {
    window.open(url, "_blank");
  };
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
                  onClick={() => handleopenlink(item.href)}
                  className={clsx(
                    "w-14 bg-white rounded-md !duration-300 cursor-pointer transition-all ease-in-out active:scale-[0.98]",
                    item.alt === "facebook"
                      ? "hover:bg-gradient-to-tl from-blue-500 to-blue-600"
                      : item.alt === "tiktok"
                      ? "hover:bg-gradient-to-br from-gray-700 to-black"
                      : item.alt === "threads"
                      ? "hover:bg-gradient-to-br from-gray-500 to-black"
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
                className="rounded-md bg-white p-2"
                alt=""
                src={mapRestaurant.src}
                width={600}
                height={200}
                priority
              />
            </div>
            <div className="bg-white rounded-lg py-4 px-8 flex flex-col gap-4 items-start tracking-wide">
              <p className="text-start text-[#8aa774] text-2xl font-serif font-bold">
                Location & Hours
              </p>
              <div className="flex flex-col items-start justify-start">
                <p className="text-lg font-medium">
                  1121 E Pike St, Seattle, WA 98122 ​
                </p>
                <p className="text-lg font-font-bold">Call: 206.787.8448</p>
                <p className="text-lg font-medium">
                  Email: info@baitongthaistreetcafe.com
                </p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="">
                  <p className="lg:text-lg l:text-base m:text-sm s:text-xs font-bold">
                    Monday to Thursday
                  </p>
                  <p className="lg:text-lg m:text-sm s:text-xs font-medium">
                    12.00 pm - 3.00 pm
                  </p>
                  <p className="lg:text-lg m:text-sm s:text-xs font-medium">
                    4.30 pm - 9.00 pm
                  </p>
                </div>
                <div className="">
                  <p className="lg:text-lg l:text-base m:text-sm s:text-xs font-bold">
                    Friday
                  </p>
                  <p className="lg:text-lg m:text-sm s:text-xs font-medium">
                    12.00 pm - 3.00 pm
                  </p>
                  <p className="lg:text-lg m:text-sm s:text-xs font-medium">
                    4.30 pm - 10.00 pm
                  </p>
                </div>
                <div className="">
                  <p className="lg:text-lg l:text-base m:text-sm s:text-xs font-bold">
                    Saturday
                  </p>
                  <p className="lg:text-lg m:text-sm s:text-xs font-medium">
                    12.00 pm - 3.00 pm
                  </p>
                  <p className="lg:text-lg m:text-sm s:text-xs font-medium">
                    4.30 pm - 10.00 pm
                  </p>
                </div>
                <div className="">
                  <p className="lg:text-lg l:text-base m:text-sm s:text-xs font-bold">
                    Sunday
                  </p>
                  <p className="lg:text-lg m:text-sm s:text-xs font-medium">
                    12.00 pm - 8.30 pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bg */}
      <Image className="w-full" src={footer} alt={""} />

      {/* footer */}
      <div className="z-20 bg-[#2a4826] w-full flex justify-center py-10">
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
