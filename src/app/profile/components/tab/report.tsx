import ButtonShaped from "@/components/button-shaped";
import React from "react";

export default function ReportTab() {
  return (
    <div className="flex flex-col gap-6">
      {[...new Array(2)].map((item, key) => (
        <div
          key={key}
          className="flex flex-col p-4 md:p-10 xl:p-12 gap-[14px] md:gap-6 rounded-lg bg-primary border-secondary/20 border md:border-2 xl:border-4"
        >
          <p className="uppercase text-lg md:text-2xl font-bold font-oswald">
            Personal Calculation Report
          </p>

          <div className="flex flex-wrap justify-between sm:justify-normal md:items-center gap-4 md:gap-12 xl:gap-28">
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-xs md:text-base font-semibold">Detail</p>
              <p className="text-xs md:text-base max-w-[220px]">
                Full calculation of personal report
              </p>
            </div>

            <div className="flex flex-col gap-2 md:gap-3">
              <p className="text-xs md:text-base font-semibold">Date</p>
              <p className="text-xs md:text-base max-w-[150px]">
                10 January 2025
              </p>
            </div>

            <div className="h-[40px] sm:h-auto w-full sm:w-auto sm:ml-auto relative">
              <div className="absolute md:relative h-[40px] md:h-auto w-[154px] md:w-auto right-0">
                <ButtonShaped
                  text="Download Report"
                  variant="light"
                  buttonClassName="scale-60 md:scale-100 -translate-y-[12px] -translate-x-[50px] md:translate-0"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
