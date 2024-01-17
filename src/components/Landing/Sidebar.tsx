import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    { id: 1, section: "home", name: "Home" },
    { id: 2, section: "small-plates", name: "Small Plates" },
    { id: 3, section: "thai-street", name: "Thai Street" },
    { id: 4, section: "all-time-favorites", name: "All Time favorites" },
    { id: 5, section: "gift-card", name: "Gift Cards" },
    { id: 6, section: "car-te-ring", name: "Car te Ring" },
    { id: 7, section: "gallery", name: "Gallery" },
    { id: 8, section: "#", name: "Delivery" },
    { id: 9, section: "#", name: "Reservation" },
    { id: 10, section: "#", name: "Pickup" },
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
      className={`z-[999] fixed h-full  text-white ${
        isOpen ? "w-64 bg-gray-800" : "w-16"
      } transition-all duration-300 ease-in-out`}
    >
      <button className="w-[50px] h-[50px] p-2" onClick={toggleSidebar}>
        {isOpen ? (
          <XMarkIcon className="text-white hover:opacity-50" />
        ) : (
          <Bars3Icon className="text-white hover:opacity-50" />
        )}
      </button>
      {isOpen && (
        <div className="p-4">
          {menus.map((menu, index) => (
            <>
              {index === 7 && <div className="h-[2px] bg-slate-700" />}
              <div className="py-2 hover:text-green-400 hover:font-bold cursor-pointer">
                <a href={`#${menu.section}`} className="text-sm font-syn" onClick={(e) => {
                  e.preventDefault();
                  scrollToMenu(menu.section);
                }}>
                  {menu.name}
                </a>
              </div>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
