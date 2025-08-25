import Image from "next/image";
import React from "react";

export default function Depth() {
  return (
    <div className="flex flex-col relative gap-4 lg:gap-6">
      <div className="flex flex-col gap-2 w-full z-[1]">
        <p className="uppercase font-bold font-oswald text-white text-3xl 2xl:text-[120px] leading-none">
          Analytical Depth
        </p>
        <p className="uppercase font-bold font-oswald text-white text-3xl 2xl:text-[120px] leading-none lg:ml-auto">
          Decision Paralysis
        </p>
      </div>

      <div className="w-full max-w-[680px] h-[280px] lg:h-[600px] bg-zinc-700 mx-auto relative lg:-top-20">
        <Image
          src="/"
          alt="Image Depth"
          fill
          sizes="1000px"
          className="object-cover object-center"
        />

        <div className="hidden lg:flex flex-col gap-2 absolute top-24 left-[-300px] max-w-[350px]">
          <p className="text-white font-bold font-oswald text-[30px] uppercase">
            Inherit Strength
          </p>

          <p className="text-white font-light">
            Picture a mountain that has weathered countless storms yet remains
            unmoved, Wu Zi individuals stand firmly on their principles. Their
            ethical foundation isn't easily shaken by changing circumstances or
            social pressure.
          </p>
        </div>

        <div className="hidden lg:flex flex-col gap-2 absolute bottom-[-30px] right-[-260px] max-w-[350px]">
          <p className="text-white font-bold font-oswald text-[30px] uppercase">
            Shadown Aspect
          </p>

          <p className="text-white font-light">
            Yet this same steadfastness can manifest as emotional reserve—a
            protective boundary that keeps others at a distance. Like a mountain
            lake reflecting only what's on the surface while concealing its
            depths, they may appear composed even when powerful emotions run
            beneath.
          </p>
        </div>
      </div>

      <div className="flex lg:hidden flex-col gap-2">
        <p className="text-white font-bold font-oswald text-xl uppercase">
          Inherit Strength
        </p>

        <p className="text-white font-light text-sm leading-[1.6em]">
          Picture a mountain that has weathered countless storms yet remains
          unmoved, Wu Zi individuals stand firmly on their principles. Their
          ethical foundation isn't easily shaken by changing circumstances or
          social pressure.
        </p>
      </div>

      <div className="flex lg:hidden flex-col gap-2">
        <p className="text-white font-bold font-oswald text-xl uppercase">
          Shadown Aspect
        </p>

        <p className="text-white font-light text-sm leading-[1.6em]">
          Yet this same steadfastness can manifest as emotional reserve—a
          protective boundary that keeps others at a distance. Like a mountain
          lake reflecting only what's on the surface while concealing its
          depths, they may appear composed even when powerful emotions run
          beneath.
        </p>
      </div>
    </div>
  );
}
