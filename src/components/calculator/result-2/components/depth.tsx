import Image from "next/image";
import React from "react";

export default function Depth() {
  return (
    <div className="relative lg:py-20">
      <img
        src="/images/depth.png"
        alt="Depth Backgorund"
        className="object-cover object-center absolute top-0 h-full w-full hidden lg:block"
      />

      <div className="absolute top-0 w-full h-full dark:bg-black/40 hidden lg:block" />

      <div className="flex flex-col relative gap-4 lg:gap-10 xl:gap-15 px-[24px] xl:px-14 2xl:px-40">
        <div className="flex flex-col gap-2 w-full z-[1]">
          <p className="uppercase font-bold font-oswald text-3xl lg:text-[44px] xl:text-[88px] 2xl:text-[120px] leading-none">
            Analytical Depth /
          </p>
          <p className="uppercase font-bold font-oswald text-3xl lg:text-[44px] xl:text-[88px] 2xl:text-[120px] leading-none xl:ml-auto">
            Decision Paralysis
          </p>
        </div>

        <div className="flex flex-col w-full gap-3">
          <div className="relative h-[250px] w-full flex lg:hidden">
            <Image
              src="/images/depth.png"
              fill
              sizes="1024px"
              alt="Depth Background"
              className="object-cover object-center"
            />
          </div>

          <div className="flex flex-col gap-2 xl:max-w-[350px]">
            <p className="font-bold font-oswald text-xl lg:text-3xl uppercase">
              Inherit Strength
            </p>

            <p className="font-light text-sm lg:text-base leading-[1.6em]">
              The Wu Zi individual possesses remarkable analytical
              capabilities—like a mountain stream that finds every crevice and
              pathway through stone.  Wu Zi people naturally see beneath surface
              appearances, recognizing patterns and connections others might
              miss. Their minds work like flowing water—moving around obstacles,
              finding unexpected paths, and gradually shaping even the most
              resistant materials.
            </p>
          </div>

          <div className="flex flex-col gap-2 xl:max-w-[350px] xl:ml-auto">
            <p className="font-bold font-oswald text-xl lg:text-3xl uppercase">
              Shadown Aspect
            </p>

            <p className="font-light text-sm lg:text-base leading-[1.6em]">
              The ability to see multiple angles of any situation is both
              blessing and curse: The same penetrating insight that allows Wu Zi
              people to dissect complex problems can lead them into
              overthinking. Their ability to see multiple angles—like water
              viewing every possible path—creates both brilliant solutions and
              occasional indecision when seeking the perfect approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
