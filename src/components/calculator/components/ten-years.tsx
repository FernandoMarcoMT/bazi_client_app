import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { HTMLAttributes, ReactNode } from "react";

interface SectionItemProps {
  hanzi: string;
  title: string;
  element?: ReactNode;
  hanziClassName?: string;
}

function SectionItem({
  hanzi,
  title,
  element,
  hanziClassName,
}: SectionItemProps) {
  return (
    <div className="flex items-center gap-6">
      <div className="border-2 border-secondary relative">
        <div className="border-2 border-secondary rounded-full p-1.5 bg-primary scale-[1.15]">
          <div className="flex items-center justify-center w-[80px] h-[80px] border-2 border-secondary rounded-full relative">
            {element}
            <p className={cn("font-zhi-mang-xing text-[48px]", hanziClassName)}>
              {hanzi}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-full w-full relative">
        <hr className="w-[60%] absolute -top-4 left-10 border-[1.5px] border-secondary" />
        <hr className="w-[90%] absolute top-0 left-0 border-[1.5px] border-secondary" />
        <p className="uppercase font-oswald font-bold text-[24px]">{title}</p>
        <hr className="w-full absolute bottom-0 left-0 border-[1.5px] border-secondary" />
        <hr className="w-[70%] absolute -bottom-4 left-10 border-[1.5px] border-secondary" />
      </div>
    </div>
  );
}

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
              <div className="flex flex-col gap-14 w-full">
                <div className="flex items-center justify-center relative max-h-[95px]">
                  <div className="h-[75%] bg-[#FFF2E3] flex items-center justify-center p-8 w-[95%]">
                    <p className="text-black font-oswald font-bold uppercase text-[26px]">
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

                <div className="flex flex-col gap-16">
                  <SectionItem
                    hanzi="丙"
                    title="Bing Fire"
                    element={
                      <img
                        src={`/images/Bazi Chart/element-overlay/Desktop/fire.png`}
                        alt="Element Overlay"
                        className="absolute w-auto h-[45px] top-2 right-4 z-[-1]"
                      />
                    }
                    hanziClassName="text-[#FFD6D3]"
                  />

                  <SectionItem hanzi="戌" title="Dog" />
                </div>
              </div>

              <div className="flex flex-col gap-14 w-full">
                <div className="flex items-center justify-center relative max-h-[95px]">
                  <div className="h-[75%] bg-[#FFF2E3] flex items-center justify-center p-8 w-[95%]">
                    <p className="text-black font-oswald font-bold uppercase text-[26px]">
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

                <div className="flex flex-col gap-16">
                  <SectionItem
                    hanzi="戊"
                    title="Wu Earth"
                    element={
                      <img
                        src={`/images/Bazi Chart/element-overlay/Desktop/earth.png`}
                        alt="Element Overlay"
                        className="absolute w-auto h-[45px] bottom-4 -right-2 z-[-1]"
                      />
                    }
                    hanziClassName="text-[#F8CD96]"
                  />

                  <SectionItem hanzi="丁" title="Ding Fire" />
                  <SectionItem hanzi="辛" title="Xin Metal" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
