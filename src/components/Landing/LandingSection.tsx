import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import AOS from "aos";
import "aos/dist/aos.css";

import LoadingScreen from "./LoadingScreen";

//section
import HeaderSection from "./HeaderSection";
import SmallPlateSection from "./SmallPlateSection";
import ThaiStreetSection from "./ThaiStreetSection";
import AlltimeFavSection from "./AlltimeFavSection";
import GiftCardSection from "./GiftCardSection";
import CarteringSection from "./CarteringSection";
import Footer from "./Footer";
import ButtonLanding from "./ButtonLanding";
import GallerySection from "./GallerySection";

type Props = {};

function LandingSection({}: Props) {
  const [Loading, setLoading] = useState(true);
  const [Ready, setReady] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timer: any;
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timer);
      timer = setTimeout(() => {
        setIsScrolling(false);
      }, 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const preload = setInterval(() => {
      setLoading(false);
    }, 1500);
    const Ready = setInterval(() => {
      setReady(true);
    }, 1750);

    return () => {
      clearInterval(preload);
      clearInterval(Ready);
    };
  }, []);

  useEffect(() => {
    //do smth

    const checkScreenSize = () => {
      // const screenWidth = window.innerWidth;
      // if (screenWidth < 1025) {
      //   setNumOfDish(3);
      // } else {
      //   setNumOfDish(3);
      // }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  });

  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease-in-out",
    });

    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <>
      {!Ready ? (
        <LoadingScreen Loading={Loading} />
      ) : (
        <ParallaxProvider>
          <ButtonLanding scroll={isScrolling} />
          <div className="overflow-x-hidden">
            {/* heder */}
            <HeaderSection />

            {/* small plate */}
            <SmallPlateSection />

            {/* thai street */}
            <ThaiStreetSection />

            {/* all time favorite */}
            <AlltimeFavSection />

            {/* gift card */}
            <GiftCardSection />

            {/* Car te Ring */}
            <CarteringSection />

            {/* Gallery */}
            <GallerySection />

            {/* footer */}
            <Footer />
          </div>
        </ParallaxProvider>
      )}
    </>
  );
}

export default LandingSection;
