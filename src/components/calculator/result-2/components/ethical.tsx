import Image from "next/image";
import React from "react";

export default function Ethical() {
  return (
    <div className="relative lg:py-20">
      <img
        src="/images/ethical.png"
        alt="Ethical Backgorund"
        className="object-cover object-center absolute top-0 h-full w-full hidden lg:block"
      />

      <div className="absolute top-0 w-full h-full dark:bg-black/40 hidden lg:block" />

      <div className="flex flex-col relative gap-4 lg:gap-10 xl:gap-15 px-[24px] xl:px-14 2xl:px-40">
        <div className="flex flex-col gap-2 w-full z-[1]">
          <p className="uppercase font-bold font-oswald text-3xl lg:text-[44px] xl:text-[88px] 2xl:text-[120px] leading-none">
            Ethical Fortitude /
          </p>
          <p className="uppercase font-bold font-oswald text-3xl lg:text-[44px] xl:text-[88px] 2xl:text-[120px] leading-none xl:ml-auto">
            Emotional Guardedness
          </p>
        </div>

        <div className="flex flex-col w-full gap-3">
          <div className="relative h-[250px] w-full flex lg:hidden">
            <Image
              src="/images/ethical.png"
              fill
              sizes="1024px"
              alt="Ethical Background"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-2 xl:max-w-[350px]">
            <p className="font-bold font-oswald text-xl lg:text-3xl uppercase">
              Inherit Strength
            </p>

            <p className="font-light text-sm lg:text-base leading-[1.6em]">
              Picture a mountain that has weathered countless storms yet remains
              unmoved, Wu Zi individuals stand firmly on their principles. Their
              ethical foundation isn't easily shaken by changing circumstances
              or social pressure.
            </p>
          </div>

          <div className="flex flex-col gap-2 xl:max-w-[350px] xl:ml-auto">
            <p className="font-bold font-oswald text-xl lg:text-3xl uppercase">
              Shadown Aspect
            </p>

            <p className="font-light text-sm lg:text-base leading-[1.6em]">
              Yet this same steadfastness can manifest as emotional reserve—a
              protective boundary that keeps others at a distance. Like a
              mountain lake reflecting only what's on the surface while
              concealing its depths, they may appear composed even when powerful
              emotions run beneath.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
