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
      let mm = gsap.matchMedia();

      mm.add(
        "(max-width: 1280px) and (min-width: 640px)",
        () => {
          gsap.to(".character", {
            scrollTrigger: {
              trigger: ".character",
              start: "top center",
              end: "+=200 center",
              scrub: 1,
            },
            translateX: 80,
          });

          gsap.to(".chara-title", {
            scrollTrigger: {
              trigger: ".chara-title",
              start: "-80px center",
              end: "+=200 center",
              scrub: 1,
            },
            translateY: -100,
            translateX: -20,
          });

          gsap.to(".chara-hanzi-t", {
            scrollTrigger: {
              trigger: ".chara-hanzi-t",
              start: "-80px center",
              end: "+=358 center",
              scrub: 1,
            },
            scale: 0.6,
          });

          gsap.to(".chara-hanzi-desc", {
            scrollTrigger: {
              trigger: ".chara-hanzi-desc",
              start: "-136px center",
              end: "+=358 center",
              scrub: 1,
            },
            translateX: -20,
          });

          gsap.to(".chara-hanzi-b", {
            scrollTrigger: {
              trigger: ".chara-hanzi-b",
              start: "-306px center",
              end: "+=358 center",
              scrub: 1,
            },
            scale: 0.6,
            translateX: -80,
            translateY: -20,
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
        container
      );

      mm.add(
        "(min-width: 1280px)",
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
        container
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative md:overflow-hidden pt-[60px] pb-[80px] md:py-0"
    >
      <div className="chara-title flex md:hidden px-4">
        <p className="chara-hanzi-t font-zhi-mang-xing text-[110px] md:text-[160px] 2xl:text-[240px] text-white leading-[1em]">
          戊
        </p>
        <div className="flex flex-col pt-6 gap-2">
          <div className="chara-hanzi-desc flex flex-col gap-1">
            <p className="uppercase text-sm md:text-2xl text-white font-bold">
              Wu Earth
            </p>

            <p className="uppercase font-oswald font-bold text-2xl md:text-[44px] max-w-[140px] md:max-w-[240px] leading-[1.2em] border-l-2 border-white pl-3 lg:pl-6">
              The Mountain
            </p>
          </div>

          <p className="chara-hanzi-b font-zhi-mang-xing text-[110px] md:text-[160px] 2xl:text-[240px] text-white leading-[0.7em]">
            土
          </p>
        </div>
      </div>

      <img
        src="/images/Ten Day Master/Ding Fire.png"
        alt="Ten Day Master"
        className="character object-cover object-center md:object-[-240px_0] xl:object-[100px_0] 2xl:object-[150px_0] min-h-[490px] md:min-h-[750px] lg:min-h-[850px] mt-[-32px] md:mt-0"
      />

      <div className="chara-title hidden md:flex absolute top-28">
        <p className="chara-hanzi-t font-zhi-mang-xing text-[110px] md:text-[160px] 2xl:text-[240px] text-white leading-[1em]">
          戊
        </p>
        <div className="flex flex-col pt-14 gap-4">
          <div className="chara-hanzi-desc flex flex-col gap-4">
            <p className="uppercase text-lg md:text-2xl text-white font-bold">
              Wu Earth
            </p>

            <p className="uppercase font-oswald font-bold text-3xl md:text-[44px] max-w-[160px] md:max-w-[240px] leading-[1.2em] border-l-2 border-white pl-3 lg:pl-6">
              The Mountain
            </p>
          </div>

          <p className="chara-hanzi-b font-zhi-mang-xing text-[110px] md:text-[160px] 2xl:text-[240px] text-white leading-[0.7em]">
            土
          </p>
        </div>
      </div>

      <div className="chara-desc flex flex-col gap-2 md:absolute bottom-10 left-[24px] xl:left-0 xl:right-0 2xl:right-20 md:ml-auto max-w-[450px] md:opacity-0 px-6 md:px-0">
        <p className="font-bold font-oswald text-[20px] md:text-3xl text-white uppercase">
          Wu Earth
        </p>

        <div className="flex flex-col gap-4">
          <p className="text-white font-light text-sm md:text-base leading-[1.6em] md:leading-normal">
            Wu Earth ranks fifth among the Ten Heavenly Stems, representing
            shepherds and mediators. Wu Earth symbolizes mountains, earth, and
            riverbanks. Wu Earth's nature is yang—solid and steady.
          </p>

          <p className="text-white font-light text-sm md:text-base leading-[1.6em] md:leading-normal">
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
