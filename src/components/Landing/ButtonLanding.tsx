import React from "react";
import tugTug from "../../images/tug-tug.png";
import tung from "../../images/tung.png";
import nangrum from "../../images/nangrum.png";
import delivery from "../../images/deli-very.png";
import pickup from "../../images/pick-up.png";
import reservation from "../../images/reser-vation.png";
import Image from "next/image";
import AudioButton from "./AudioButton";
import Sidebar from "./Sidebar";

type Props = {
  scroll: true | false;
  isAboutUs: true | false;
};

function ButtonLanding({ scroll, isAboutUs }: Props) {
  const layout = "cursor-pointer z-[990] fixed";
  const hover =
    "hover:animate-shake active:scale-[0.98] transition-all ease-in-out duration-500";

  return (
    <>
      <div className={`flex justify-end top-0 right-0 lg:right-0`}>
        <Sidebar />
      </div>

      {!isAboutUs && (
        <>
          <div
            data-aos="fade-right"
            data-aos-delay="1400"
            data-aos-once="true"
            className={`${layout} left-0 lg:left-20 top-32`}
          >
            <div
              onClick={() =>
                window.open(
                  "https://www.doordash.com/store/bai-tong-thai-restaurant-seattle-130667/en-US",
                  "_blank"
                )
              }
              className={`${hover} relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}
            >
              <img src={tugTug.src} alt={""} loading="eager" />
              <img
                className="absolute"
                src={delivery.src}
                alt={""}
                loading="eager"
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1400"
            data-aos-once="true"
            className={`${layout} flex justify-end right-0 lg:right-20 top-1/3`}
          >
            <div
              onClick={() =>
                window.open(
                  "https://www.toasttab.com/baitong-thai-street-cafe/v3",
                  "_blank"
                )
              }
              className={`${hover} relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}
            >
              <img src={tung.src} alt={""} loading="eager" />
              <img
                className="absolute"
                src={pickup.src}
                alt={""}
                loading="eager"
              />
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="1400"
            data-aos-once="true"
            className={`${layout} left-0 lg:left-20 top-3/4`}
          >
            <div
              onClick={() =>
                window.open(
                  "https://www.yelp.com/reservations/bai-tong-thai-street-cafe-seattle",
                  "_blank"
                )
              }
              className={`${hover} relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}
            >
              <img src={nangrum.src} alt={""} loading="eager" />
              <img
                className="absolute"
                src={reservation.src}
                alt={""}
                loading="eager"
              />
            </div>
          </div>

          <div
            className={`${layout} flex justify-end right-0 lg:right-20 bottom-10`}
          >
            <AudioButton />
          </div>
        </>
      )}
    </>
  );
}

export default ButtonLanding;
