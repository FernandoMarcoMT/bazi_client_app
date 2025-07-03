"use client";

import ButtonShaped from "@/components/button-shaped";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const tabItems = [
  {
    text: "Personal Chart",
    value: "chart",
  },
  {
    text: "Purchase History",
    value: "purchase",
  },
  {
    text: "Download Report",
    value: "report",
  },
  {
    text: "Others",
    value: "other",
  },
];

export default function ProfileTabs() {
  const [tab, setTab] = useState("chart");

  return (
    <section className="flex flex-col gap-6">
      <div className="flex gap-6 items-center border-b-2 border-secondary/20">
        {tabItems.map((item, key) => (
          <div
            key={key}
            className={cn(
              "flex pb-3 border-b-2 cursor-pointer duration-200 relative top-[2px]",
              item.value === tab ? "border-secondary" : "border-transparent"
            )}
            onClick={() => setTab(item.value)}
          >
            <p
              className={cn(
                "text-lg font-semibold duration-200",
                item.value === tab
                  ? "opacity-100"
                  : "opacity-30 hover:opacity-50"
              )}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {tab === "chart" && <div className="flex flex-col gap-12"></div>}
      {tab === "purchase" && (
        <div className="flex flex-col gap-6">
          {[...new Array(5)].map((item, key) => (
            <div
              key={key}
              className="flex flex-col p-12 gap-6 rounded-lg bg-primary border-secondary/20 border-4"
            >
              <p className="uppercase text-2xl font-bold font-oswald">
                Purchase ID: #0000{key + 1}
              </p>

              <div className="flex items-center gap-28">
                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold">Detail</p>
                  <p className="text-base max-w-[150px]">
                    Extra Consultation Subscription
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold">Date</p>
                  <p className="text-base max-w-[150px]">10 January 2025</p>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-base font-semibold">Amount</p>
                  <p className="text-base max-w-[150px]">$10</p>
                </div>

                <ButtonShaped
                  text="View Detail"
                  variant="light"
                  buttonClassName="h-14 ml-auto"
                />
              </div>
            </div>
          ))}
        </div>
      )}
      {tab === "report" && (
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
      )}
      {tab === "other" && <div className="flex flex-col"></div>}
    </section>
  );
}
