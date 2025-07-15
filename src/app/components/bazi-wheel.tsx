import Image from "next/image";
import React from "react";

export default function BaziWheel() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-10 xl:gap-40 xl:pl-10">
      <p className="block lg:hidden font-oswald font-bold uppercase text-4xl lg:text-[42px] leading-[1.2em]">
        Start Your Journey With Us
      </p>

      <div className="relative h-[300px] lg:h-[440px] xl:h-[640px] w-full max-w-[660px]">
        <Image
          src="/images/bazi-wheel.png"
          alt="Bazi Wheel"
          fill
          sizes="850px"
          className="object-contain object-center"
        />
      </div>

      <div className="flex flex-col gap-3 w-full max-w-[660px] mt-3 lg:mt-0">
        <p className="hidden lg:block font-oswald font-bold uppercase lg:text-4xl xl:text-[42px]">
          Start Your Journey With Us
        </p>

        <div className="flex flex-col gap-5">
          <p className="text-lg leading-[1.5em]">
            Bazi is an ancient Chinese system that maps your personality and
            life patterns using your exact birth time. Think of it as your
            elemental DNA — revealing why you make decisions the way you do,
            your natural strengths, and optimal timing for major life choices.
            Our step-by-step approach makes this powerful wisdom accessible to
            complete newcomers.
          </p>

          <p className="text-lg leading-[1.5em]">
            Start with our free Day Master guide to discover your core elemental
            personality and natural behavioral patterns.
          </p>
        </div>
      </div>
    </div>
  );
}
