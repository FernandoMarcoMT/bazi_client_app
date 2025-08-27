import Image from "next/image";
import React from "react";

export default function Resilient() {
  return (
    <div className="relative lg:py-20">
      <img
        src="/images/resilient.png"
        alt="Resilient Backgorund"
        className="object-cover object-center absolute top-0 h-full w-full hidden lg:block"
      />

      <div className="absolute top-0 w-full h-full dark:bg-black/40 hidden lg:block" />

      <div className="flex flex-col relative gap-4 lg:gap-10 xl:gap-15 px-[24px] xl:px-14 2xl:px-40">
        <div className="flex flex-col gap-2 w-full z-[1]">
          <p className="uppercase font-bold font-oswald text-3xl lg:text-[44px] xl:text-[88px] 2xl:text-[120px] leading-none">
            Resilient Determination /
          </p>
          <p className="uppercase font-bold font-oswald text-3xl lg:text-[44px] xl:text-[88px] 2xl:text-[120px] leading-none xl:ml-auto">
            Internal Conflict
          </p>
        </div>

        <div className="flex flex-col w-full gap-3">
          <div className="relative h-[250px] w-full flex lg:hidden">
            <Image
              src="/images/resilient.png"
              fill
              sizes="1024px"
              alt="Resilient Background"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-2 xl:max-w-[350px]">
            <p className="font-bold font-oswald text-xl lg:text-3xl uppercase">
              Inherit Strength
            </p>

            <p className="font-light text-sm lg:text-base leading-[1.6em]">
              You possess a natural creativity that generates brilliant
              solutions where others see only dead ends. This gift shines
              brightest when you're working behind the scenes, enabling others
              to succeed through your insights. Yet your signature
              self-deprecating humor, while endearing, often conceals your true
              brilliance.
            </p>
          </div>

          <div className="flex flex-col gap-2 xl:max-w-[350px] xl:ml-auto">
            <p className="font-bold font-oswald text-xl lg:text-3xl uppercase">
              Shadown Aspect
            </p>

            <p className="font-light text-sm lg:text-base leading-[1.6em]">
              You instinctively downplay your contributions with jokes that make
              you non-threatening — creating a fascinating paradox where people
              are drawn to your warmth while underestimating the strategic mind
              behind your disarming smile.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
