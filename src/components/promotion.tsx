import React from "react";
import ButtonShaped from "./button-shaped";
import Image from "next/image";

export default function Promotion() {
  return (
    <div className="px-6 xl:px-14 2xl:px-40 bg-background py-20">
      <div className="flex items-center py-20 pl-16 pr-14 gap-28 bg-[#F4FAFF] rounded-lg">
        <div className="flex flex-col gap-2 w-full max-w-[600px]">
          <p className="font-oswald font-bold text-[42px] leading-[1.2em] text-black uppercase">
            Ready to understand yourself on a deeper level?
          </p>
          <p className="text-black">
            Click 'Calculate Now' to receive your personalised calculation.
          </p>

          <ButtonShaped
            text="Calculate Now"
            variant="light"
            buttonClassName="mt-4"
          />
        </div>

        <div className="relative h-[270px] w-full max-w-[700px]">
          <Image
            src="/images/promotion.png"
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
