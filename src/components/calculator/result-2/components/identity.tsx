import Image from "next/image";
import React from "react";

export default function CoreIdentity() {
  return (
    <div className="flex flex-col gap-6 md:mt-[-80px]">
      <div className="chara-hanzi-desc flex flex-col gap-4">
        <p className="uppercase text-sm md:text-base lg:text-2xl text-white font-bold">Core Identity</p>

        <p className="uppercase font-oswald font-bold text-2xl lg:text-[44px] w-[200px] lg:w-[360px] leading-[1.3em] border-l-2 border-white pl-3 md:pl-6">
          The Mysterious Guardian
        </p>
      </div>

      <div className="flex flex-col lg:flex-row xl:items-end xl:pl-[104px] gap-[24px] xl:gap-[80px]">
        <div className="relative w-full h-[280px] md:h-[440px] xl:h-[600px] bg-zinc-700">
          <Image
            src="/"
            alt="Image Core Identity"
            fill
            sizes="1000px"
            className="object-cover object-center"
          />
        </div>

        <div className="chara-hanzi-desc flex flex-col gap-3 lg:gap-4 lg:max-w-[500px]">
          <p className="uppercase text-xl lg:text-[32px] text-white font-bold font-oswald">
            Inheritenly Trustworthy
          </p>

          <div className="flex flex-col gap-4 pl-3 md:pl-6 border-l-2 border-white">
            <p className="text-white text-sm md:text-base font-light leading-[1.6em] md:leading-normal">
              You embody a rare form of reliability that extends beyond mere
              consistency into profound moral integrity. Your word becomes an
              absolute guarantee, creating a foundation of trust that others
              come to depend upon completely in both personal and professional
              relationships. This unshakable dependability emerges naturally
              rather than through conscious effort or strategic calculation.
            </p>
            <p className="text-white text-sm md:text-base font-light leading-[1.6em] md:leading-normal">
              This quality manifests the Earth-Rat partnership—Wu Earth's
              mountain-like stability combined with the Rat's shrewd
              discernment, creating someone who provides safe harbor for
              important confidences while navigating life's complexities with
              remarkable wisdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
