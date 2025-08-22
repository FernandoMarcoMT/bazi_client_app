"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function TenGod() {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.to(".character", {
        scrollTrigger: {
          trigger: ".character",
          start: "top 116px",
          end: "center 330px",
          scrub: 1,
          pin: true,
        },
        translateX: -260,
      });

      gsap.to(".chara-title", {
        scrollTrigger: {
          trigger: ".chara-title",
          start: "-80px 116px",
          end: "+=358 330px",
          scrub: 1,
          pin: true,
        },
      });

      gsap.to(".chara-hanzi-t", {
        scrollTrigger: {
          trigger: ".chara-hanzi-t",
          start: "-80px 116px",
          end: "+=358 330px",
          scrub: 1,
        },
        scale: 0.6,
      });

      gsap.to(".chara-hanzi-desc", {
        scrollTrigger: {
          trigger: ".chara-hanzi-desc",
          start: "-136px 116px",
          end: "+=358 330px",
          scrub: 1,
        },
        translateX: -40,
      });

      gsap.to(".chara-hanzi-b", {
        scrollTrigger: {
          trigger: ".chara-hanzi-b",
          start: "-306px 116px",
          end: "+=358 330px",
          scrub: 1,
        },
        scale: 0.6,
        translateX: -100,
        translateY: -40,
      });

      gsap.to(".chara-desc", {
        scrollTrigger: {
          trigger: ".chara-desc",
          start: "-200px center",
          end: "+=30 center",
          scrub: 1,
        },
        opacity: 1,
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="relative">
      <img
        src="/images/Ten Day Master/Ding Fire.png"
        alt="Ten Day Master"
        className="character object-cover object-[100px_0] 2xl:object-[150px_0] min-h-[850px]"
      />

      <div className="chara-title flex absolute top-28">
        <p className="chara-hanzi-t font-zhi-mang-xing text-[240px] text-white leading-[1em]">
          戊
        </p>
        <div className="flex flex-col pt-14 gap-4">
          <div className="chara-hanzi-desc flex flex-col gap-4">
            <p className="uppercase text-2xl text-white font-bold">Wu Earth</p>

            <p className="uppercase font-oswald font-bold text-[44px] w-[240px] leading-[1.2em] border-l-2 border-white pl-6">
              The Mountain
            </p>
          </div>

          <p className="chara-hanzi-b font-zhi-mang-xing text-[240px] text-white leading-[0.7em]">
            土
          </p>
        </div>
      </div>

      <div className="chara-desc flex flex-col gap-2 absolute bottom-10 right-[24px] xl:right-14 2xl:right-40 ml-auto max-w-[450px] opacity-0">
        <p className="font-bold font-oswald text-3xl text-white uppercase">
          Wu Earth
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-white font-light">
            Wu Earth ranks fifth among the Ten Heavenly Stems, representing
            shepherds and mediators. Wu Earth symbolizes mountains, earth, and
            riverbanks. Wu Earth's nature is yang—solid and steady.
          </p>

          <p className="text-white font-light">
            Steady, principled, not easily changing their minds, sometimes
            giving an impression of stubbornness. Upright and honest,
            trustworthy, reliable. Can remain calm under pressure and are good
            at controlling the big picture. Possess a sense of responsibility,
            are doers, quietly contributing and protecting loved ones. Though
            not particularly skilled at expressing emotions, they are very
            suitable for everyday life.
          </p>
        </div>
      </div>
    </div>
  );
}
