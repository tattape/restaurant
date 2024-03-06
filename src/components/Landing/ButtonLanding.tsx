import React from "react";
import tugTug from "../../images/tug-tug.png";
import tung from "../../images/tung.png";
import nangrum from "../../images/nangrum.png";
import qrcode from "../../images/qrcodebaithong.png";
import fontqrcode from "../../images/fontqrcode.png";
import AudioButton from "./AudioButton";
import Sidebar from "./Sidebar";
import clsx from "clsx";

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
              className={`group transition-all ease-in-out duration-500 relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[160px]`}
            >
              <img
                src={tugTug.src}
                alt={""}
                loading="eager"
                className="z-[50]"
              />
              <p
                className={`absolute ${slideleft} drop-shadow-lg bottom-3 right-[-15px] lg:text-4xl md:text-2xl text-white font-semibold font-serif z-[60] tracking-wide`}
                style={{
                  textShadow:
                    "0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000",
                }}
              >
                Delivery
              </p>
              <div
                className={clsx(
                  "absolute transition-opacity duration-500 ease-in-out opacity-0 group-hover:bg-[#F10058] group-hover:opacity-100 rounded-full",
                  "md:bottom-[-10px] md:right-[-20px] s:bottom-0 s:right-[-10px]",
                  "md:w-20 md:h-20 s:w-10 s:h-10"
                )}
              ></div>
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
              className={`group relative flex justify-center items-center w-[70px] md:w-[100px] lg:w-[170px]`}
            >
              <img src={tung.src} alt={""} loading="eager" className="z-[50]" />
              <p
                className={`absolute ${slideright} drop-shadow-lg bottom-3 right-[20px] lg:text-4xl md:text-2xl text-white font-semibold font-serif z-[60] tracking-wide`}
                style={{
                  textShadow:
                    "0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000",
                }}
              >
                Pick up
              </p>
              <div
                className={clsx(
                  "absolute  transition-opacity duration-500 ease-in-out opacity-0 group-hover:bg-[#00a97a] group-hover:opacity-100 rounded-full",
                  "md:bottom-[-10px] md:left-[-20px] s:bottom-0 s:left-[-10px]",
                  "md:w-20 md:h-20 s:w-10 s:h-10"
                )}
              ></div>
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
                className={`absolute ${slideleft} drop-shadow-lg bottom-[-10px] lg:right-[-45px] md:right-[-65px] right-[-40px] lg:text-4xl md:text-2xl text-white font-semibold font-serif z-[60] tracking-wide`}
                style={{
                  textShadow:
                    "0 0 3px #000, 0 0 3px #000, 0 0 3px #000, 0 0 3px #000",
                }}
              >
                Reservation
              </p>
              <div
                className={clsx(
                  "absolute transition-opacity duration-500 ease-in-out opacity-0 group-hover:bg-[#FCA919] group-hover:opacity-100 rounded-full",
                  "md:bottom-[-10px] md:right-[-20px] s:bottom-0 s:right-[-10px]",
                  "md:w-20 md:h-20 s:w-10 s:h-10"
                )}
              ></div>
            </div>
          </div>

          <div
            className={`${layout} flex justify-end items-center right-0 lg:right-20 bottom-0`}
          >
            <div onClick={() => window.open("https://qrco.de/bbX0o0", "_blank")} className="relative">
              <img
                src={qrcode.src}
                alt={""}
                loading="eager"
                className="z-[50] lg:w-[250px] md:w-[200px] w-[130px]"
              />
              <img
                src={fontqrcode.src}
                alt={""}
                loading="eager"
                className="absolute z-[50] lg:w-[250px] lg:-top-[65px] md:w-[200px] md:-top-[55px] w-[130px] -top-[35px] hover:animate-shake transition-all ease-in-out"
              />
            </div>
            <AudioButton />
          </div>
        </>
      )}
    </>
  );
}

export default ButtonLanding;
