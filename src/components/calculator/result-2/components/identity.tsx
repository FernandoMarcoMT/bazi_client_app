import Image from "next/image";
import React, { ReactNode } from "react";

export default function CoreIdentity({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="chara-hanzi-desc flex flex-col gap-4">
        <p className="uppercase text-sm md:text-base lg:text-2xl font-bold">
          Core Identity
        </p>

        <p className="uppercase font-oswald font-bold text-2xl lg:text-[44px] w-[200px] lg:w-[360px] leading-[1.3em] border-l-2 border-typography pl-3 md:pl-6">
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

        {children}
      </div>
    </div>
  );
}
