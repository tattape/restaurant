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
  const slideright =
    "transition-transform duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-[-25%]";
  const slideleft =
    "transition-transform duration-300 ease-in-out transform translate-x-0 group-hover:translate-x-[25%]";

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
            onClick={() =>
              window.open(
                "https://www.doordash.com/store/bai-tong-thai-restaurant-seattle-130667/en-US",
                "_blank"
              )
            }
          >
            <div
              className={`group transition-all ease-in-out duration-500 relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}
            >
              <img
                src={tugTug.src}
                alt={""}
                loading="eager"
                className="z-[50]"
              />
              <p
                className={`absolute ${slideleft} drop-shadow-lg bottom-3 right-[-15px] text-4xl text-white font-semibold font-serif z-[60]`}
                style={{
                  textShadow:
                    "0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000",
                }}
              >
                Delivery
              </p>
              <div className="absolute bottom-[-10px] right-[-20px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:bg-[#00a97a] group-hover:opacity-100 w-20 h-20 rounded-full"></div>
            </div>
          </div>

          <div
            data-aos="fade-left"
            data-aos-delay="1400"
            data-aos-once="true"
            className={`${layout} flex justify-end right-0 lg:right-20 top-1/3`}
            onClick={() =>
              window.open(
                "https://www.toasttab.com/baitong-thai-street-cafe/v3",
                "_blank"
              )
            }
          >
            <div
              className={`group relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}
            >
              <img src={tung.src} alt={""} loading="eager" className="z-[50]" />
              <p
                className={`absolute ${slideleft} drop-shadow-lg bottom-3 right-[-15px] text-4xl text-white font-semibold font-serif z-[60]`}
                style={{
                  textShadow:
                    "0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000",
                }}
              >
                Pickup
              </p>
              <div className="absolute bottom-[-10px] right-[-20px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:bg-[#00a97a] group-hover:opacity-100 w-20 h-20 rounded-full"></div>
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="1400"
            data-aos-once="true"
            className={`${layout} left-0 lg:left-20 top-3/4`}
            onClick={() =>
              window.open(
                "https://www.yelp.com/reservations/bai-tong-thai-street-cafe-seattle",
                "_blank"
              )
            }
          >
            <div
              className={`group relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[150px]`}
            >
              <img
                src={nangrum.src}
                alt={""}
                loading="eager"
                className="z-[50]"
              />
              <p
                className={`absolute ${slideleft} drop-shadow-lg bottom-[-10px] right-[-15px] text-4xl text-white font-semibold font-serif z-[60]`}
                style={{
                  textShadow:
                    "0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000",
                }}
              >
                Reser
                <br />
                Vation
              </p>
              <div className="absolute bottom-[-10px] right-[-20px] transition-opacity duration-500 ease-in-out opacity-0 group-hover:bg-[#00a97a] group-hover:opacity-100 w-20 h-20 rounded-full"></div>
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
