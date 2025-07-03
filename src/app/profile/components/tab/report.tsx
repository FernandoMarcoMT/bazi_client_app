import ButtonShaped from "@/components/button-shaped";
import React from "react";

export default function ReportTab() {
  return (
    <div className="flex flex-col gap-6">
      {[...new Array(2)].map((item, key) => (
        <div
          key={key}
          className="flex flex-col p-12 gap-6 rounded-lg bg-primary border-secondary/20 border-4"
        >
          <p className="uppercase text-2xl font-bold font-oswald">
            Personal Calculation Report
          </p>

          <div className="flex items-center gap-28">
            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold">Detail</p>
              <p className="text-base max-w-[220px]">
                Full calculation of personal report
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-base font-semibold">Date</p>
              <p className="text-base max-w-[150px]">10 January 2025</p>
            </div>

            <ButtonShaped
              text="Download Report"
              variant="light"
              buttonClassName="h-14 ml-auto"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
