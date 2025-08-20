"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { useScroll, motion } from "motion/react";

export default function Result2() {
  return (
    <section className="flex flex-col relative">
      <div className="relative top-[-116px] w-full h-full flex flex-col items-center justify-center">
        <div className="sticky top-0 h-screen w-full z-[-1]">
          <Image
            src="/images/bg-mountain.png"
            alt="Background Mountain"
            sizes="1920px"
            fill
            className="object-center object-cover"
          />

          <div className="absolute top-0 w-full h-full bg-primary/20" />
        </div>

        <div
          className={cn(
            `absolute top-0 flex items-center h-screen justify-center duration-1000 px-[24px] xl:px-14 2xl:px-40 border-t`
          )}
        >
          <p className="text-black text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em]">
            "River or lake being protected by un-wavering Earth. <br /> Rather
            when the negative emerges shows mountains being covered by heavy
            mist giving mysterious fill for person"
          </p>
        </div>

        <div className="flex flex-col gap-12 h-screen items-center justify-center duration-1000 delay-[1000ms] px-[24px] xl:px-14 2xl:px-40">
          <p className="text-black text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em]">
            Your Day Pillar is the most significant aspect of your Bazi Chart:
          </p>

          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <img
                src={`/images/Bazi Chart/element-overlay/Desktop/fire.png`}
                alt="Element Overlay"
                className="absolute w-auto h-[115px] top-[-15px] right-[-2px] z-[-1]"
              />
              <p className="font-zhi-mang-xing text-[120px] text-[#4D0404] leading-[1em] [text-shadow:_0_0_14px_#AC0404]">
                丙
              </p>
            </div>

            <p className="font-oswald font-bold text-[#4D0404] text-4xl uppercase">
              Bing Fire
            </p>
          </div>
        </div>

        <div className="flex items-center h-screen justify-center duration-1000 delay-[2000ms] px-[24px] xl:px-14 2xl:px-40">
          <p className="text-black text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em]">
            Before we continue with the Day Pillar, let's take a look at the Day
            Master — the element that defines your inner core.
          </p>
        </div>
      </div>
    </section>
  );
}
