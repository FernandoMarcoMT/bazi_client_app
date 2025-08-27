"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Discover() {
  const container = useRef(null);

  useGSAP(
    () => {
      let mm = gsap.matchMedia();

      mm.add(
        "(max-width: 1280px) and (min-width: 640px)",
        () => {
          gsap.to(".bowl", {
            scrollTrigger: {
              trigger: ".bowl",
              start: "80px 700px",
              end: "+=260 800px",
              scrub: 1,
            },
            rotate: -100,
          });

          gsap.to(".dot-1", {
            scrollTrigger: {
              trigger: ".bowl",
              start: "80px 700px",
              end: "+=260 800px",
              scrub: 1,
            },
            translateX: -400,
            translateY: 180,
          });

          gsap.to(".dot-2", {
            scrollTrigger: {
              trigger: ".bowl",
              start: "80px 700px",
              end: "+=260 800px",
              scrub: 1,
            },
            translateX: -370,
            translateY: 130,
          });

          gsap.to(".dot-3", {
            scrollTrigger: {
              trigger: ".bowl",
              start: "80px 700px",
              end: "+=260 800px",
              scrub: 1,
            },
            translateX: -300,
            translateY: 150,
          });
        },
        container
      );

      mm.add(
        "(min-width: 1280px)",
        () => {
          gsap.to(".bowl", {
            scrollTrigger: {
              trigger: ".bowl",
              start: "80px center",
              end: "+=260 center",
              scrub: 1,
            },
            rotate: -100,
          });

          gsap.to(".dot-1", {
            scrollTrigger: {
              trigger: ".bowl",
              start: "80px center",
              end: "+=260 center",
              scrub: 1,
            },
            translateX: -750,
            translateY: 400,
          });

          gsap.to(".dot-2", {
            scrollTrigger: {
              trigger: ".bowl",
              start: "80px center",
              end: "+=260 center",
              scrub: 1,
            },
            translateX: -670,
            translateY: 280,
          });

          gsap.to(".dot-3", {
            scrollTrigger: {
              trigger: ".bowl",
              start: "80px center",
              end: "+=260 center",
              scrub: 1,
            },
            translateX: -600,
            translateY: 300,
          });
        },
        container
      );
    },
    { scope: container }
  );

  return (
    <div className="flex flex-col">
      <p className="font-oswald font-bold text-2xl md:text-3xl lg:text-[44px] xl:text-[120px] uppercase leading-[1.2em] text-balance max-w-[200px] md:max-w-[300px] lg:max-w-[500px] xl:max-w-[800px]">
        Discover Your True Being
      </p>
      <div
        ref={container}
        className="flex w-fit ml-auto xl:mt-[-130px] relative right-4 lg:right-10 xl:right-[-40px]"
      >
        <img
          src="/images/bowl.png"
          alt="Bowl"
          className="bowl max-h-[200px] md:max-h-[240px] lg:max-h-[280px] xl:max-h-[550px] w-auto object-contain object-center"
        />

        <div className="dot-1 absolute left-18 top-18 md:left-20 md:top-22 lg:top-24 xl:left-50 xl:top-50">
          <img
            src="/images/bowl-ball.png"
            alt="Bowl Ball"
            className="size-7 md:size-8 lg:size-10 xl:size-20 object-contain object-center"
          />
        </div>
        <div className="dot-2 absolute left-26 top-10 md:left-30 lg:left-36 md:top-14 xl:left-auto xl:right-80 xl:top-30">
          <img
            src="/images/bowl-ball.png"
            alt="Bowl Ball"
            className="size-7 md:size-8 lg:size-10 xl:size-20 object-contain object-center"
          />
        </div>
        <div className="dot-3 absolute right-18 top-14 md:right-26 md:top-18 xl:right-50 xl:top-34">
          <img
            src="/images/bowl-ball.png"
            alt="Bowl Ball"
            className="size-7 md:size-8 lg:size-10 xl:size-20 object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
}
