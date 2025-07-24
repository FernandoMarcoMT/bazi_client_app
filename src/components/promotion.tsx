import React from "react";
import ButtonShaped from "./button-shaped";
import Image from "next/image";

export default function Promotion() {
  return (
    <div className="px-[24px] xl:px-14 2xl:px-40 bg-background py-5 lg:py-20">
      <div className="flex items-center py-12 xl:py-20 pl-8 xl:pl-16 pr-8 xl:pr-14 lg:gap-12 xl:gap-6 bg-[#F4FAFF] rounded-lg relative">
        <div className="flex flex-col gap-4 md:gap-2 w-full max-w-[600px]">
          <p className="font-oswald font-bold text-2xl lg:text-4xl xl:text-[42px] leading-[1.4em] lg:leading-[1.2em] text-black uppercase max-w-[240px] sm:max-w-full">
            Ready to understand yourself on a <br className="block sm:hidden" /> deeper level?
          </p>
          <p className="text-lg text-black">
            Click 'Calculate Now' to receive your personalised calculation.
          </p>

          <div className="relative -left-11 h-[42px] -top-7 xl:top-auto xl:left-auto xl:h-auto">
            <ButtonShaped
              text="Calculate Now"
              variant="light"
              buttonClassName="mt-6 xl:mt-4 scale-70 xl:scale-100"
            />
          </div>
        </div>

        <div className="hidden lg:block relative h-[200px] xl:h-[270px] w-full max-w-[700px]">
          <Image
            src="/images/promotion.png"
            alt="Bazi Wheel"
            fill
            sizes="1254px"
            className="object-cover object-center"
          />
        </div>

        <div className="lg:hidden absolute h-[75px] w-full max-w-[135px] top-[82px] sm:top-auto sm:bottom-0 right-10">
          <Image
            src="/images/promotion-mobile.png"
            alt="Bazi Wheel"
            fill
            sizes="1254px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
}
