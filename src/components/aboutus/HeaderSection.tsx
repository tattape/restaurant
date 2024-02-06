import Image from "next/image";
import React from "react";

import Logo from "../../images/slice6.png";

interface Props {}

export default function HeaderSection({}: Props) {
  return (
    <section className="h-screen mb-10">
      <div className="flex justify-center">
        <div
          data-aos="fade-down"
          data-aos-delay="500"
          className="my-14 w-[200px] md:w-[300px]"
        >
          <Image
            src={Logo.src}
            width={300}
            height={150}
            alt="logo"
            loading="eager"
            priority
          />
        </div>
      </div>
    </section>
  );
}
