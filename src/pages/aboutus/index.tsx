import ButtonLanding from "@/components/Landing/ButtonLanding";
import Footer from "@/components/Landing/Footer";
import React, { useEffect, useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";

type Props = {};
export default function index({}: Props) {
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

  return (
    <ParallaxProvider>
      <ButtonLanding scroll={isScrolling} isAboutUs />
      <div className="overflow-x-hidden">
        {/* footer */}
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
