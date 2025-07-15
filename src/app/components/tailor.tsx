import ButtonShaped from "@/components/button-shaped";
import Image from "next/image";
import React from "react";

export default function Tailor() {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center gap-3 lg:gap-10 xl:gap-40 xl:pl-10">
      <div className="flex flex-col gap-3 w-full max-w-[690px] mt-4 lg:mt-0">
        <p className="hidden lg:block font-oswald font-bold uppercase lg:text-4xl xl:text-[42px] w-[460px] leading-[1.2em]">
          EXCLUSIVELY TAILORED TO WHO YOU ARE
        </p>

        <div className="flex flex-col gap-5">
          <p className="text-lg leading-[1.5em]">
            With 25,920,000 possible combinations of animals and elements, each
            Bazi chart is completely unique to you. Our detailed reports analyze
            your unique chart to provide targeted guidance for career decisions,
            relationship compatibility, and life timing.
          </p>

          <p className="text-lg leading-[1.5em]">
            Move beyond generic advice. We provide precision insight crafted for
            your one-in-25 million elemental blueprint.
          </p>
        </div>

        <ButtonShaped text="Explore Services" variant="light" buttonClassName="mt-3 lg:-0 mx-auto lg:mx-0" />
      </div>

      <div className="relative h-[300px] lg:h-[440px] xl:h-[640px] w-full max-w-[660px]">
        <Image
          src="/images/tailored.png"
          alt="Bazi Wheel"
          fill
          sizes="1176px"
          className="object-contain object-center"
        />
      </div>

      <p className="block lg:hidden font-oswald font-bold uppercase text-4xl lg:text-[42px] leading-[1.2em]">
        EXCLUSIVELY TAILORED TO WHO YOU ARE
      </p>
    </div>
  );
}
