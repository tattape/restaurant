import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useRef, useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const menus = [
    "Home",
    "Small Plates",
    "Thai Street",
    "All Time favorites",
    "Gift Cards",
    "Car te Ring",
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
          {menus.map((menu) => (
            <div className="py-2 hover:text-green-400 hover:font-bold cursor-pointer">
              <p className="text-sm font-syn">{menu}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
