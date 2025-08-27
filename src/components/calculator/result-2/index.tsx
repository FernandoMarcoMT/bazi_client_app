"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import TenGod from "./components/ten-god";
import CoreIdentity from "./components/identity";
import Depth from "./components/depth";
import Personality from "./components/personality";
import Growth from "./components/growth";
import HelpFriend from "./components/help-friend";
import Discover from "./components/discover";
import TenGodZodiac from "./components/ten-god-zodiac";
import Promotion from "@/components/promotion";
import { cn } from "@/lib/utils";

export default function Result2() {
  const [element] = useState("wood");
  const [elementBg, setElementBg] = useState("");

  useEffect(() => {
    switch (element) {
      case "fire":
        setElementBg("bg-result-fire");
        return;
      case "wood":
        setElementBg("bg-result-wood");
        return;
      case "earth":
        setElementBg("bg-result-earth");
        return;
      case "metal":
        setElementBg("bg-result-metal");
        return;
      case "water":
        setElementBg("bg-result-water");
        return;
      default:
        setElementBg("bg-result-fire");
        return;
    }
  }, [element]);

  return (
    <section
      className={cn(
        "flex flex-col relative mt-[-64px] md:mt-[-96px] xl:mt-[-116px]",
        elementBg
      )}
    >
      <div className="absolute top-0 left-0 h-full w-full min-h-screen">
        <Image
          src="/images/Hidden Core Personality/bg-texture.png"
          alt="Background Landing Page"
          fill
          sizes="2880px"
          className="object-top opacity-50"
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
              <p className="text-black text-lg lg:text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em] max-w-[500px] lg:max-w-[700px] 2xl:max-w-full">
                <span className="hidden md:inline">
                  "River or lake being protected by un-wavering Earth.
                  <br /> Rather when the negative emerges shows mountains being
                  covered by heavy mist giving mysterious fill for person"
                </span>
                <span className="inline md:hidden">
                  "River or lake being protected by un-wavering Earth."
                </span>
              </p>
            </motion.div>
          </div>

          <div className="flex md:hidden h-screen items-center justify-center z-[1]">
            <motion.div
              className="flex flex-col gap-12 px-[24px] xl:px-14 2xl:px-40"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-black text-lg lg:text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em] max-w-[700px] 2xl:max-w-full">
                "Rather when the negative emerges shows mountains being covered
                by heavy mist giving mysterious fill for person"
              </p>
            </motion.div>
          </div>

          <div className="flex h-screen items-center justify-center z-[1]">
            <motion.div
              className="flex flex-col gap-6 lg:gap-12 px-[24px] xl:px-14 2xl:px-40"
              initial={{ opacity: 0, scale: 0.7, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-black text-lg lg:text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em]">
                Your Day Pillar is the most significant aspect of your Bazi
                Chart:
              </p>

              <div className="flex flex-col items-center gap-4 scale-75 lg:scale-100">
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
              <p className="text-black text-lg lg:text-2xl text-center font-semibold italic whitespace-break-spaces leading-[1.6em] max-w-[500px] lg:max-w-[700px] 2xl:max-w-full">
                Before we continue with the Day Pillar, let's take a look at the
                Day Master — the element that defines your inner core.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="block md:hidden">
          <TenGod element={element} />
        </div>

        <div className="flex flex-col gap-20 xl:gap-[160px] px-[24px] xl:px-14 2xl:px-40 mb-[80px]">
          <div className="hidden md:block">
            <TenGod element={element} />
          </div>
          <CoreIdentity>
            <div className="flex flex-col gap-3 lg:gap-4 lg:max-w-[500px]">
              <p className="uppercase text-xl lg:text-[32px] font-bold font-oswald">
                STRATEGICALLY PATIENT
              </p>

              <div className="flex flex-col gap-4 pl-3 md:pl-6 border-l-2 border-typography">
                <p className="text-sm md:text-base font-light leading-[1.6em] md:leading-normal">
                  You demonstrate an exceptional capacity for sustained effort
                  without external recognition or validation. Where others seek
                  immediate results or acknowledgment, you pursue your
                  objectives with methodical determination and remarkable
                  stamina. This quiet persistence allows you to accomplish what
                  others consider impossible through steady, unrelenting
                  progress rather than dramatic action.
                </p>
                <p className="text-sm md:text-base font-light leading-[1.6em] md:leading-normal">
                  This reflects the fundamental nature of Yang Earth—immovable
                  and enduring, accumulating strength through patience while
                  maintaining an unwavering focus on long-term objectives rather
                  than temporary setbacks.
                </p>
              </div>
            </div>
          </CoreIdentity>
          <div className="hidden md:block">
            <TenGodZodiac element={element} />
          </div>
        </div>

        <div className="block md:hidden">
          <TenGodZodiac element={element} />
        </div>

        <div className="flex flex-col gap-20 xl:gap-[160px] px-[24px] xl:px-14 2xl:px-40 mb-[80px] xl:mt-[80px]">
          <CoreIdentity>
            <div className="flex flex-col gap-3 lg:gap-4 lg:max-w-[500px]">
              <p className="uppercase text-xl lg:text-[32px] font-bold font-oswald">
                INHERENTLY TRUSTWORTHY
              </p>

              <div className="flex flex-col gap-4 pl-3 md:pl-6 border-l-2 border-typography">
                <p className="text-sm md:text-base font-light leading-[1.6em] md:leading-normal">
                  You embody a rare form of reliability that extends beyond mere
                  consistency into profound moral integrity. Your word becomes
                  an absolute guarantee, creating a foundation of trust that
                  others come to depend upon completely in both personal and
                  professional relationships. This unshakable dependability
                  emerges naturally rather than through conscious effort or
                  strategic calculation.
                </p>
                <p className="text-sm md:text-base font-light leading-[1.6em] md:leading-normal">
                  This quality manifests the Earth-Rat partnership—Wu Earth's
                  mountain-like stability combined with the Rat's shrewd
                  discernment, creating someone who provides safe harbor for
                  important confidences while navigating life's complexities
                  with remarkable wisdom.
                </p>
              </div>
            </div>
          </CoreIdentity>
          <CoreIdentity>
            <div className="flex flex-col gap-3 lg:gap-4 lg:max-w-[500px]">
              <p className="uppercase text-xl lg:text-[32px] font-bold font-oswald">
                PROFOUNDLY MYSTERIOUS
              </p>

              <div className="flex flex-col gap-4 pl-3 md:pl-6 border-l-2 border-typography">
                <p className="text-sm md:text-base font-light leading-[1.6em] md:leading-normal">
                  You possess an extraordinary ability to maintain an aura of
                  enigma that both intrigues and reassures others. Your depths
                  remain largely unexplored even by those closest to you, yet
                  this selective revelation creates a magnetic draw rather than
                  distance. This natural inscrutability gives you a unique
                  advantage in navigating complex social and professional
                  landscapes with remarkable effectiveness.
                </p>
                <p className="text-sm md:text-base font-light leading-[1.6em] md:leading-normal">
                  Like a Misty Mountain’s that perpetually stands silent, your
                  true nature remains partially veiled while your solid presence
                  provides unmistakable stability for those around you.
                </p>
              </div>
            </div>
          </CoreIdentity>
          <Depth />
          <Discover />
          <Personality />
        </div>

        <Growth />

        {/* <HelpFriend /> */}
        <Promotion />
      </div>
    </section>
  );
}
