"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll } from "motion/react";

export default function Result2() {
  return (
    <section className="flex flex-col relative bg-[#2D0501] mt-[-64px] md:mt-[-96px] xl:mt-[-116px]">
      <div className="absolute top-0 left-0 h-full w-full min-h-screen z-[-1]">
        <Image
          src="/images/Hidden Core Personality/bg-texture.png"
          alt="Background Landing Page"
          fill
          sizes="2880px"
          className="object-cover object-top opacity-20"
          priority
        />
      </div>

      <div className="flex flex-col relative">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <div className="sticky top-0 h-screen w-full">
            <Image
              src="/images/bg-mountain.png"
              alt="Background Mountain"
              sizes="1920px"
              fill
              className="object-center object-cover"
            />

            <div className="absolute top-0 w-full h-full bg-primary/20" />
          </div>

          <div className="absolute top-0 flex h-screen items-center justify-center z-[1]">
            <motion.div
              className="flex flex-col gap-12 px-[24px] xl:px-14 2xl:px-40"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-black text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em]">
                "River or lake being protected by un-wavering Earth. <br />{" "}
                Rather when the negative emerges shows mountains being covered
                by heavy mist giving mysterious fill for person"
              </p>
            </motion.div>
          </div>

          <div className="flex h-screen items-center justify-center z-[1]">
            <motion.div
              className="flex flex-col gap-12 px-[24px] xl:px-14 2xl:px-40"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-black text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em]">
                Your Day Pillar is the most significant aspect of your Bazi
                Chart:
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
            </motion.div>
          </div>

          <div className="flex h-screen items-center justify-center z-[1]">
            <motion.div
              className="flex flex-col gap-12 px-[24px] xl:px-14 2xl:px-40"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-black text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em]">
                Before we continue with the Day Pillar, let's take a look at the
                Day Master — the element that defines your inner core.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="relative px-[24px] xl:px-14 2xl:px-40">
          <img
            src="/images/Ten Day Master/Ding Fire.png"
            alt="Ten Day Master"
            className="object-contain object-[200px_0] 2xl:object-[250px_0]"
          />

          <div className="flex absolute top-28">
            <p className="font-zhi-mang-xing text-[240px] text-white leading-[1em]">
              戊
            </p>
            <div className="flex flex-col pt-14 gap-4">
              <p className="uppercase text-2xl text-white font-bold">
                Wu Earth
              </p>

              <p className="uppercase font-oswald font-bold text-[44px] w-[240px] leading-[1.2em] border-l-2 border-white pl-6">
                The Mountain
              </p>

              <p className="font-zhi-mang-xing text-[240px] text-white leading-[0.7em]">
                土
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
