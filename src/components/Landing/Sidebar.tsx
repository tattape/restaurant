import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

// Contact
import facebook from "../../images/facebook-logo.png";
import tiktok from "../../images/tik-tok-logo.png";
import threads from "../../images/threads-logo.png";
import instagram from "../../images/instagram-logo.png";

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: 1, url: "/", section: "home", name: "Home", subMenu: [] },
    {
      id: 2,
      url: "",
      section: "#",
      name: "Menu",
      subMenu: [
        { id: 1, section: "small-plates", name: "Small Plates" },
        { id: 2, section: "thai-street", name: "Thai Street" },
        { id: 3, section: "all-time-favorites", name: "All Time favorites" },
      ],
    },
    { id: 3, url: "", section: "gift-card", name: "Gift Cards", subMenu: [] },
    { id: 4, url: "", section: "ca-te-ring", name: "CaTeRing", subMenu: [] },
    { id: 5, url: "", section: "gallery", name: "Gallery", subMenu: [] },
    { id: 6, url: "/aboutus", section: "#", name: "About Us", subMenu: [] },
    {
      id: 7,
      url: "https://www.doordash.com/store/bai-tong-thai-restaurant-seattle-130667/en-US",
      section: "#",
      name: "Delivery",
      subMenu: [],
    },
    {
      id: 8,
      url: "https://www.yelp.com/reservations/bai-tong-thai-street-cafe-seattle",
      section: "#",
      name: "Reservation",
      subMenu: [],
    },
    {
      id: 9,
      url: "https://www.toasttab.com/baitong-thai-street-cafe/v3",
      section: "#",
      name: "Pick up",
      subMenu: [],
    }
  ];

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

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarRef = useRef(null);

  const closeSidebar = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !(sidebarRef.current as any).contains(event.target)
    ) {
      setIsOpen(false);
    }
  };

  const scrollToMenu = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const _handletoPage = (name: string, url: string) => {
    if (name === "Home" || name === "About Us") {
      router.push(url);
    } else if (
      name === "Delivery" ||
      name === "Reservation" ||
      name === "Pick up"
    ) {
      window.open(url, "_blank");
    }
  };

  const handleopenlink = (url: any) => {
    window.open(url, "_blank");
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeSidebar);
    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  }, []);
  return (
    <div
      ref={sidebarRef}
      className={`fixed h-full  text-white ${
        isOpen ? "w-64 bg-[#383838] z-[999]" : "w-16 z-[40]"
      } transition-all duration-300 ease-in-out`}
    >
      <button
        className={clsx(isOpen ? "w-[50px]" : "w-[50px]", " h-[50px] p-2")}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <XMarkIcon className="text-white hover:opacity-50" />
        ) : (
          <Bars3Icon className="text-white hover:opacity-50" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          {menus.map((menu) => (
            <div key={menu.id}>
              {menu.name === "Delivery" && (
                <div className="h-[2px] bg-[#4b4b4b]" />
              )}
              <div className="py-1">
                <button
                  className="text-sm font-syn hover:text-green-400 hover:font-bold cursor-pointer uppercase"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToMenu(menu.section);
                    _handletoPage(menu.name, menu.url);
                  }}
                >
                  {menu.name}
                </button>
                {menu.subMenu.length > 0 && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 items-start">
                    {menu.subMenu.map((subMenu, idx) => (
                      <button
                        key={idx}
                        className="text-sm font-syn hover:text-green-400 hover:font-bold cursor-pointer uppercase"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToMenu(subMenu.section);
                        }}
                      >
                        {subMenu.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="h-[2px] bg-[#4b4b4b]" />
          <div className="mt-3 grid grid-cols-4 gap-4">
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
                    "w-9 hover:border-none border border-white rounded-md !duration-300 cursor-pointer transition-all ease-in-out active:scale-[0.98]",
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
                  <div className="p-2 invert">
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
      )}
    </div>
  );
}
