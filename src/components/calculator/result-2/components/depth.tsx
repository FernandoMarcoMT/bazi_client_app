import Image from "next/image";
import React from "react";

export default function Depth() {
  return (
    <div className="flex flex-col relative gap-4 xl:gap-6">
      <div className="flex flex-col gap-2 w-full z-[1]">
        <p className="uppercase font-bold font-oswald text-3xl lg:text-[44px] 2xl:text-[120px] leading-none">
          Analytical Depth
        </p>
        <p className="uppercase font-bold font-oswald text-3xl lg:text-[44px] 2xl:text-[120px] leading-none xl:ml-auto">
          Decision Paralysis
        </p>
      </div>

      <div className="w-full xl:max-w-[680px] h-[280px] lg:h-[440px] xl:h-[600px] bg-zinc-700 mx-auto relative xl:-top-20">
        <Image
          src="/"
          alt="Image Depth"
          fill
          sizes="1000px"
          className="object-cover object-center"
        />

        <div className="hidden xl:flex flex-col gap-2 absolute top-24 left-[-300px] max-w-[350px]">
          <p className="font-bold font-oswald text-[30px] uppercase">
            Inherit Strength
          </p>

          <p className="font-light">
            Picture a mountain that has weathered countless storms yet remains
            unmoved, Wu Zi individuals stand firmly on their principles. Their
            ethical foundation isn't easily shaken by changing circumstances or
            social pressure.
          </p>
        </div>

        <div className="hidden xl:flex flex-col gap-2 absolute bottom-[-30px] right-[-260px] max-w-[350px]">
          <p className="font-bold font-oswald text-[30px] uppercase">
            Shadown Aspect
          </p>

          <p className="font-light">
            Yet this same steadfastness can manifest as emotional reserve—a
            protective boundary that keeps others at a distance. Like a mountain
            lake reflecting only what's on the surface while concealing its
            depths, they may appear composed even when powerful emotions run
            beneath.
          </p>
        </div>
      </div>

      <div className="flex xl:hidden flex-col gap-2">
        <p className="font-bold font-oswald text-xl lg:text-[32px] uppercase">
          Inherit Strength
        </p>

        <p className="font-light text-sm lg:text-base leading-[1.6em]">
          Picture a mountain that has weathered countless storms yet remains
          unmoved, Wu Zi individuals stand firmly on their principles. Their
          ethical foundation isn't easily shaken by changing circumstances or
          social pressure.
        </p>
      </div>

      <div className="flex xl:hidden flex-col gap-2">
        <p className="font-bold font-oswald text-xl lg:text-[32px] uppercase">
          Shadown Aspect
        </p>

        <p className="font-light text-sm lg:text-base leading-[1.6em]">
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
