"use client";

import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import TenGod from "./components/ten-god";

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

        <div className="flex flex-col gap-[160px] px-[24px] xl:px-14 2xl:px-40">
          <TenGod />

          <div className="flex flex-col gap-6 mt-[-80px]">
            <div className="chara-hanzi-desc flex flex-col gap-4">
              <p className="uppercase text-2xl text-white font-bold">
                Core Identity
              </p>

              <p className="uppercase font-oswald font-bold text-[44px] w-[360px] leading-[1.2em] border-l-2 border-white pl-6">
                The Mysterious Guardian
              </p>
            </div>

            <div className="flex items-end pl-[104px] gap-[80px]">
              <div className="w-full h-[600px] bg-zinc-700">
                <Image
                  src="/"
                  alt="Image Core Identity"
                  fill
                  sizes="1000px"
                  className="object-cover object-center"
                />
              </div>

              <div className="chara-hanzi-desc flex flex-col gap-4 max-w-[500px]">
                <p className="uppercase text-2xl text-white font-bold">
                  Inheritenly Trustworthy
                </p>

                <div className="flex flex-col gap-4 pl-6 border-l-2 border-white">
                  <p className="text-white font-light">
                    You embody a rare form of reliability that extends beyond
                    mere consistency into profound moral integrity. Your word
                    becomes an absolute guarantee, creating a foundation of
                    trust that others come to depend upon completely in both
                    personal and professional relationships. This unshakable
                    dependability emerges naturally rather than through
                    conscious effort or strategic calculation.
                  </p>
                  <p className="text-white font-light">
                    This quality manifests the Earth-Rat partnership—Wu Earth's
                    mountain-like stability combined with the Rat's shrewd
                    discernment, creating someone who provides safe harbor for
                    important confidences while navigating life's complexities
                    with remarkable wisdom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col relative gap-6">
            <div className="flex flex-col w-full z-[1]">
              <p className="uppercase font-bold font-oswald text-white text-[120px] leading-none">
                Analytical Depth
              </p>
              <p className="uppercase font-bold font-oswald text-white text-[120px] leading-none ml-auto">
                Decision Paralysis
              </p>
            </div>

            <div className="w-full max-w-[680px] h-[600px] bg-zinc-700 mx-auto relative -top-20">
              <Image
                src="/"
                alt="Image Depth"
                fill
                sizes="1000px"
                className="object-cover object-center"
              />

              <div className="flex flex-col gap-2 absolute top-24 left-[-300px] max-w-[350px]">
                <p className="text-white font-bold font-oswald text-3xl uppercase">
                  Inherit Strength
                </p>

                <p className="text-sm font-light">
                  Picture a mountain that has weathered countless storms yet
                  remains unmoved, Wu Zi individuals stand firmly on their
                  principles. Their ethical foundation isn't easily shaken by
                  changing circumstances or social pressure.
                </p>
              </div>

              <div className="flex flex-col gap-2 absolute bottom-[-30px] right-[-260px] max-w-[350px]">
                <p className="text-white font-bold font-oswald text-3xl uppercase">
                  Shadown Aspect
                </p>

                <p className="text-sm font-light">
                  Yet this same steadfastness can manifest as emotional
                  reserve—a protective boundary that keeps others at a distance.
                  Like a mountain lake reflecting only what's on the surface
                  while concealing its depths, they may appear composed even
                  when powerful emotions run beneath.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
