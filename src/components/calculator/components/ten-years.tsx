import Image from "next/image";
import React from "react";

export default function TenYears() {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-10">
          <p className="font-oswald font-bold uppercase text-[32px] md:text-[52px] xl:text-[96px] 2xl:text-[120px] leading-[1.2em] w-full text-balance">
            10 Years Luck Cycle
          </p>

          <div className="relative w-full h-[650px] overflow-hidden">
            <Image
              src="/images/Ten Day Master/Bing Fire.png"
              alt="Ten Day Master"
              fill
              sizes="1920px"
              className="object-cover object-[-250px_-40px] scale-[1.2]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-16">
          <div className="flex items-center justify-center w-full h-[240px] relative">
            <div className="bg-[#FFF2E3] h-[70%] text-black p-5 flex items-center justify-center px-20 border-y-[10px] border-secondary">
              This chart maps your life in 10-year periods, showing the changing
              elemental energies that influence your opportunities and
              challenges. Each decade brings different cosmic support for
              career, wealth, relationships, and personal growth.
            </div>
            <img
              src="/images/Bazi Chart/scroll-textured.svg"
              alt="Scroll Textured"
              className="absolute left-0 top-0"
            />
            <img
              src="/images/Bazi Chart/scroll-textured.svg"
              alt="Scroll Textured"
              className="absolute right-0 top-0 scale-x-[-1]"
            />
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-center relative max-h-[95px]">
              <div className="h-[75%] bg-[#FFF2E3] flex items-center justify-center p-8 w-[98%]">
                <p className="text-black font-oswald font-bold uppercase text-3xl">
                  20 To 30
                </p>
              </div>
              <img
                src="/images/Bazi Chart/scroll-non-textured.svg"
                alt="Scroll Non Textured"
                className="absolute top-0 left-0 w-auto h-full"
              />
              <img
                src="/images/Bazi Chart/scroll-non-textured.svg"
                alt="Scroll Non Textured"
                className="absolute top-0 right-0 w-auto h-full scale-[-1]"
              />
            </div>

            <div className="flex gap-8">
              <div className="flex items-center justify-center relative max-h-[95px] w-full">
                <div className="h-[75%] bg-[#FFF2E3] flex items-center justify-center p-8 w-[95%]">
                  <p className="text-black font-oswald font-bold uppercase text-2xl">
                    Luck Pillars
                  </p>
                </div>
                <img
                  src="/images/Bazi Chart/scroll-non-textured.svg"
                  alt="Scroll Non Textured"
                  className="absolute top-0 left-0 w-auto h-full"
                />
                <img
                  src="/images/Bazi Chart/scroll-non-textured.svg"
                  alt="Scroll Non Textured"
                  className="absolute top-0 right-0 w-auto h-full scale-[-1]"
                />
              </div>

              <div className="flex items-center justify-center relative max-h-[95px] w-full">
                <div className="h-[75%] bg-[#FFF2E3] flex items-center justify-center p-8 w-[95%]">
                  <p className="text-black font-oswald font-bold uppercase text-2xl">
                    Hidden Stems
                  </p>
                </div>
                <img
                  src="/images/Bazi Chart/scroll-non-textured.svg"
                  alt="Scroll Non Textured"
                  className="absolute top-0 left-0 w-auto h-full"
                />
                <img
                  src="/images/Bazi Chart/scroll-non-textured.svg"
                  alt="Scroll Non Textured"
                  className="absolute top-0 right-0 w-auto h-full scale-[-1]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
