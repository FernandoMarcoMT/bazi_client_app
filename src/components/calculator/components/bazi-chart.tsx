import { EightChar } from "lunar-typescript";
import React, { Fragment } from "react";
import { tianganHanzi, zodiacHanzi } from "../BaziResultChart";

interface BaziChartProps {
  eightChar: any;
  pillars: string[];
}

export default function BaziChart({ eightChar, pillars }: BaziChartProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between">
        <p className="font-oswald font-bold uppercase text-[32px] md:text-[52px] xl:text-[96px] 2xl:text-[120px] leading-[1.2em] xl:leading-[1em] w-full">
          Bazi Chart
        </p>

        <div className="flex items-center justify-center w-full h-[240px] relative">
          <div className="bg-[#FFF2E3] h-[70%] text-black p-5 flex items-center justify-center px-20 border-y-[10px] border-secondary">
            Your personal energy blueprint based on your exact birth date and
            time. Think of it as your elemental DNA — showing the five natural
            elements (Wood, Fire, Earth, Metal, Water) that were present when
            you were born.
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
      </div>

      <div className="grid grid-cols-[95px_1fr] gap-9 w-full h-full">
        <div className="flex flex-col">
          <div className="min-h-[95px]"></div>
        </div>

        <div className="grid grid-cols-4">
          {["hour", "day", "month", "year"].map((column, key) => (
            <div
              key={key}
              className="flex items-center justify-center relative max-h-[95px]"
            >
              <div className="h-[75%] bg-[#FFF2E3] flex items-center justify-center p-5 w-[85%]">
                <p className="text-black font-oswald font-bold uppercase text-2xl">
                  {column}
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
                className="absolute top-0 right-0 w-auto h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[95px_1fr] gap-x-9 w-full h-full mt-3">
        {[...new Array(2)].map((_, row) => (
          <Fragment key={row}>
            <div className="flex items-start justify-center relative w-[274px] h-[274px] -rotate-90">
              <div className="bg-[#FFF2E3] flex items-center justify-center p-4 w-[85%] relative top-4">
                <p className="text-black font-oswald font-bold text-center uppercase text-xl whitespace-nowrap w-full">
                  {row === 0 ? "HEAVENLY STEM" : "EARTHLY BRANCHES"}
                </p>
              </div>
              <img
                src="/images/Bazi Chart/scroll-non-textured.svg"
                alt="Scroll Non Textured"
                className="absolute top-0 left-0 w-auto"
              />
              <img
                src="/images/Bazi Chart/scroll-non-textured.svg"
                alt="Scroll Non Textured"
                className="absolute top-0 right-0 w-auto scale-[-1]"
              />
            </div>

            <div className="grid grid-cols-4">
              {[...new Array(4)].map((_, col) => (
                <div
                  key={col}
                  className="border border-secondary border-collapse flex flex-col items-center justify-center relative"
                >
                  <p className="text-4xl font-oswald">
                    {row === 0
                      ? tianganHanzi[
                          pillars[3 - col][row] as keyof typeof tianganHanzi
                        ]
                      : zodiacHanzi[
                          pillars[3 - col][row] as keyof typeof zodiacHanzi
                        ]}
                  </p>
                  <p className="text-[120px] font-zhi-mang-xing">
                    {pillars[3 - col][row]}
                  </p>
                </div>
              ))}
            </div>
          </Fragment>
        ))}

        <div className="flex items-start justify-center relative w-[339px] h-[339px] -rotate-90">
          <div className="bg-[#FFF2E3] flex items-center justify-center p-4 w-[85%] relative top-4">
            <p className="text-black font-oswald font-bold text-center uppercase text-xl whitespace-nowrap w-full">
              Heavenly Stem
            </p>
          </div>
          <img
            src="/images/Bazi Chart/scroll-non-textured.svg"
            alt="Scroll Non Textured"
            className="absolute top-0 left-0 w-auto"
          />
          <img
            src="/images/Bazi Chart/scroll-non-textured.svg"
            alt="Scroll Non Textured"
            className="absolute top-0 right-0 w-auto scale-[-1]"
          />
        </div>

        <div className="grid grid-cols-4">
          {["hour", "day", "month", "year"].map((column, key) => {
            let data = [];

            if (column === "hour") {
              data = eightChar.getTimeHideGan();
            }
            if (column === "day") {
              data = eightChar.getDayHideGan();
            }
            if (column === "month") {
              data = eightChar.getMonthHideGan();
            }
            if (column === "year") {
              data = eightChar.getYearHideGan();
            }

            return (
              <div
                key={key}
                className="border border-secondary border-collapse"
              >
                <div className="flex flex-col items-center justify-center relative p-5">
                  <p className="text-2xl font-oswald">
                    {tianganHanzi[data[0] as keyof typeof tianganHanzi]}
                  </p>
                  <p className="text-[70px] font-zhi-mang-xing">{data[0]}</p>
                </div>

                <div className="grid grid-cols-2 border-t border-secondary">
                  <div className="flex flex-col gap-5 items-center justify-center relative p-5">
                    <p className="text-2xl font-oswald">
                      {tianganHanzi[data[1] as keyof typeof tianganHanzi]}
                    </p>
                    <p className="text-[70px] font-zhi-mang-xing leading-none">
                      {data[1]}
                    </p>
                  </div>
                  <div className="flex flex-col gap-5 items-center justify-center relative p-5 border-l border-secondary">
                    <p className="text-2xl font-oswald">
                      {data[2] &&
                        tianganHanzi[data[2] as keyof typeof tianganHanzi]}
                    </p>
                    <p className="text-[70px] font-zhi-mang-xing leading-none">
                      {data[2]}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
