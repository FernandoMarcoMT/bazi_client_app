import ButtonShaped from "@/components/button-shaped";
import Link from "next/link";
import React from "react";

export default function HeroPeople() {
  return (
    <div className="relative flex items-center justify-center min-h-[580px] lg:min-h-[640px] xl:h-screen">
      <div className="absolute top-0 md:-top-5 h-[500px] lg:h-[600px] xl:h-full w-[650px] md:w-[1200px] xl:w-full">
        <video
          src="/video/floating-people.mp4"
          loop={true}
          autoPlay={true}
          muted
          playsInline
          className="w-auto md:w-[85%] h-full select-none pointer-events-none mx-auto mix-blend-screen opacity-70 relative top-20 lg:top-12 xl:top-0"
        />
        <div className="absolute top-0 w-full h-full bg-primary/50" />
      </div>

      <div className="absolute flex flex-col md:flex-row justify-center md:gap-40 lg:gap-80 top-20 md:top-7 w-full px-6">
        <p className="font-oswald font-bold uppercase text-[36px] md:text-[48px] xl:text-[120px] md:w-[200px] lg:w-[300px] xl:w-[500px] md:text-right leading-[1.2em]">
          Discover Your
        </p>
        <p className="relative font-oswald font-bold uppercase text-[36px] md:text-[48px] xl:text-[120px] md:w-[200px] lg:w-[300px] xl:w-[500px] leading-[1.2em] left-2 md:left-0 md:top-40">
          Cosmic Blueprint
        </p>
      </div>

      <Link
        href="/calculator"
        className="absolute -bottom-8 lg:bottom-28 xl:bottom-52"
      >
        <ButtonShaped text="Calculate Now" variant="light" />
      </Link>
    </div>
  );
}
