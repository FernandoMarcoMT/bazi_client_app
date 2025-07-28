"use client";

import ButtonShaped from "@/components/button-shaped";
import { cn } from "@/lib/utils";
import React, { useState } from "react";
import PurchaseTab from "./tab/purchase";
import ReportTab from "./tab/report";
import ChartTab from "./tab/chart";
import OthersTab from "./tab/others";

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
    <section className="flex flex-col gap-5 md:gap-6">
      <div className="flex gap-3 md:gap-6 items-center border-b-2 border-secondary/20">
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
                "text-[10px] md:text-lg  duration-200",
                item.value === tab
                  ? "opacity-100 font-semibold"
                  : "opacity-30 hover:opacity-50"
              )}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>

      {tab === "chart" && <ChartTab />}
      {tab === "purchase" && <PurchaseTab />}
      {tab === "report" && <ReportTab />}
      {tab === "other" && <OthersTab />}
    </section>
  );
}
