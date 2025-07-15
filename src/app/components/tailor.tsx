import ButtonShaped from "@/components/button-shaped";
import Image from "next/image";
import React from "react";

export default function Tailor() {
  return (
    <div className="flex items-center justify-between pr-20">
      <div className="flex flex-col gap-3 w-full max-w-[690px]">
        <p className="font-oswald font-bold uppercase text-[42px] w-[460px] leading-[1.2em]">
          EXCLUSIVELY TAILORED TO WHO YOU ARE
        </p>

        <div className="flex flex-col gap-5">
          <p className="text-lg font-light leading-[1.5em]">
            With 25,920,000 possible combinations of animals and elements, each
            Bazi chart is completely unique to you. Our detailed reports analyze
            your unique chart to provide targeted guidance for career decisions,
            relationship compatibility, and life timing.
          </p>

          <p className="text-lg font-light leading-[1.5em]">
            Move beyond generic advice. We provide precision insight crafted for
            your one-in-25 million elemental blueprint.
          </p>
        </div>

        <ButtonShaped text="Explore Services" variant="light" />
      </div>

      <div className="relative h-[640px] w-full max-w-[660px]">
        <Image
          src="/images/tailored.png"
          alt="Bazi Wheel"
          fill
          sizes="1176px"
          className="object-cover object-center"
        />
      </div>
    </div>
  );
}
