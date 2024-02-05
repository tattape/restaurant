import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { useEffect, useRef, useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: 1, url: "#", section: "home", name: "Home", subMenu: [] },
    {
      id: 2,
      url: "#",
      section: "#",
      name: "Menu",
      subMenu: [
        { id: 1, section: "small-plates", name: "Small Plates" },
        { id: 2, section: "thai-street", name: "Thai Street" },
        { id: 3, section: "all-time-favorites", name: "All Time favorites" },
      ],
    },
    { id: 3, url: "#", section: "gift-card", name: "Gift Cards", subMenu: [] },
    { id: 4, url: "#", section: "ca-te-ring", name: "Ca Te Ring", subMenu: [] },
    { id: 5, url: "#", section: "gallery", name: "Gallery", subMenu: [] },
    { id: 6, url: "#", section: "#", name: "Delivery", subMenu: [] },
    { id: 7, url: "#", section: "#", name: "Reservation", subMenu: [] },
    { id: 8, url: "#", section: "#", name: "Pickup", subMenu: [] },
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

  useEffect(() => {
    document.addEventListener("mousedown", closeSidebar);
    return () => {
      document.removeEventListener("mousedown", closeSidebar);
    };
  }, []);
  return (
    <div
      ref={sidebarRef}
      className={`z-[999] fixed h-full text-white ${
        isOpen ? "w-64 bg-[#383838]" : "w-16"
      } transition-all duration-300 ease-in-out`}
    >
      <button
        className={clsx(isOpen ? "w-[50px]" : "w-[50px]", " h-[50px] p-2")}
        onClick={toggleSidebar}
      >
        {isOpen ? (
          <XMarkIcon className="text-white hover:opacity-50 " />
        ) : (
          <Bars3Icon className="text-white hover:opacity-50]" />
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
                <a
                  href={`#${menu.section}`}
                  className="text-sm font-syn hover:text-green-400 hover:font-bold cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToMenu(menu.section);
                  }}
                >
                  {menu.name}
                </a>
                {menu.subMenu.length > 0 && (
                  <div className="mt-2 ml-4 flex flex-col gap-2">
                    {menu.subMenu.map((subMenu, idx) => (
                      <a
                        key={idx}
                        href={`#${subMenu.section}`}
                        className="text-sm font-syn hover:text-green-400 hover:font-bold cursor-pointer"
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToMenu(subMenu.section);
                        }}
                      >
                        {subMenu.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
