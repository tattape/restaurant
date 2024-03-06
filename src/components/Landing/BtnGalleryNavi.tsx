import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import React from "react";
import { useSwiper } from "swiper/react";

interface Props {
  className: string;
}

export default function BtnGalleryNavi({ className }: Props) {
  const swiper = useSwiper();
  return (
    <div
      className={clsx(
        className,
        "w-full flex justify-between items-center z-[50] lg:px-10 md:px-6 px-2"
      )}
    >
      <button
        onClick={() => swiper?.slidePrev()}
        className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white bg-opacity-20 "
      >
        <ChevronLeftIcon className="text-[#6eff00]" />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white bg-opacity-20 "
      >
        <ChevronRightIcon className="text-[#6eff00]" />
      </button>
    </div>
  );
}
