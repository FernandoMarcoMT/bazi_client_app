import ButtonShaped from "@/components/button-shaped";
import React from "react";

export default function HeroPeople() {
  return (
    <div className="relative flex items-center justify-center min-h-[580px] lg:min-h-[640px] xl:h-screen overflow-hidden">
      <div className="absolute top-0 md:-top-5 h-[440px] lg:h-[600px] xl:h-full w-[650px] md:w-[1200px] xl:w-full">
        <video
          src="/video/floating-people.mp4"
          loop={true}
          autoPlay={true}
          muted
          playsInline
          className="w-auto md:w-[85%] h-full select-none pointer-events-none mx-auto mix-blend-screen opacity-70 relative top-24 lg:top-12 xl:top-0"
        />
        <div className="hidden xl:block absolute top-0 w-full h-full bg-primary/50" />
      </div>

      <div className="absolute flex flex-col md:flex-row justify-center md:gap-40 lg:gap-80 md:top-7 top-16 w-full px-6">
        <p className="font-oswald font-bold uppercase text-[36px] md:text-[48px] xl:text-[120px] md:w-[200px] lg:w-[300px] xl:w-[500px] md:text-right leading-[1.2em]">
          Discover Your
        </p>
        <p className="relative font-oswald font-bold uppercase text-[36px] md:text-[48px] xl:text-[120px] md:w-[200px] lg:w-[300px] xl:w-[500px] leading-[1.2em] left-2 md:left-0 md:top-40">
          Cosmic Blueprint
        </p>
      </div>

      <div className="absolute bottom-0 lg:bottom-28 xl:bottom-52">
        <ButtonShaped
          text="Calculate Now"
          variant="light"
          buttonClassName="scale-80"
        />
      </div>
    </div>
  );
}
