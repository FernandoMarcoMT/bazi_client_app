import Image from "next/image";
import React from "react";

export default function BaziWheel() {
  return (
    <div className="flex items-center gap-36 pl-10">
      <div className="relative h-[640px] w-full max-w-[660px]">
        <Image
          src="/images/bazi-wheel.png"
          alt="Bazi Wheel"
          fill
          sizes="850px"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-3 w-full max-w-[660px]">
        <p className="font-oswald font-bold uppercase text-[42px]">
          Start Your Journey With Us
        </p>

        <div className="flex flex-col gap-5">
          <p className="text-lg font-light leading-[1.5em]">
            Bazi is an ancient Chinese system that maps your personality and
            life patterns using your exact birth time. Think of it as your
            elemental DNA — revealing why you make decisions the way you do,
            your natural strengths, and optimal timing for major life choices.
            Our step-by-step approach makes this powerful wisdom accessible to
            complete newcomers.
          </p>

          <p className="text-lg font-light leading-[1.5em]">
            Start with our free Day Master guide to discover your core elemental
            personality and natural behavioral patterns.
          </p>
        </div>
      </div>
    </div>
  );
}
