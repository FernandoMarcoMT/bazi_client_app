import ButtonShaped from "@/components/button-shaped";
import React from "react";

export default function HeroPeople() {
  return (
    <div className="relative flex items-center justify-center h-screen">
      <div className="absolute -top-5 h-full w-full">
        <video
          src="/video/floating-people.mp4"
          loop={true}
          autoPlay={true}
          muted
          className="w-[85%] h-full select-none pointer-events-none mx-auto mix-blend-lighten opacity-70"
        />
        <div className="absolute top-0 w-full h-full bg-background/50" />
      </div>

      <div className="absolute flex justify-center gap-80 top-7 w-full">
        <p className="font-oswald font-bold uppercase text-[120px] w-[500px] text-right leading-[1.2em]">
          Discover Your
        </p>
        <p className="relative font-oswald font-bold uppercase text-[120px] w-[500px] leading-[1.2em] top-40">
          Cosmic Blueprint
        </p>
      </div>

      <div className="absolute bottom-52">
        <ButtonShaped text="Calculate Now" variant="light" />
      </div>
    </div>
  );
}
