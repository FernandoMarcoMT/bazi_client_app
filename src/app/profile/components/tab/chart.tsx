"use client";

import ButtonShaped from "@/components/button-shaped";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React, { ReactNode, useState } from "react";

interface CollapsedItemProps {
  itemId: string;
  children: ReactNode;
  triggerText: string;
  onCollapse: (itemId: string) => void;
  collapse: string[];
}

function CollapsedItem({
  itemId,
  children,
  collapse,
  onCollapse,
  triggerText,
}: CollapsedItemProps) {
  return (
    <div className="flex flex-col border-2 border-secondary rounded-lg md:rounded-xl overflow-hidden">
      <div
        className="flex items-center justify-between py-2 px-3 md:p-4 xl:p-6 bg-secondary cursor-pointer"
        onClick={() => onCollapse(itemId)}
      >
        <p className="font-oswald font-bold text-lg md:text-xl xl:text-3xl text-black uppercase">
          {triggerText}
        </p>

        <ChevronDown
          className={cn(
            "text-black duration-200",
            collapse.includes(itemId) ? "rotate-180" : "rotate-0"
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-col md:flex-row justify-between gap-[14px] md:gap-7 duration-200",
          collapse.includes(itemId)
            ? "h-full p-[14px] md:p-8 opacity-100"
            : "h-0 p-0 opacity-20"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default function ChartTab() {
  const [collapse, setCollapse] = useState<string[]>(["1", "2", "3"]);

  function handleCollapseItem(item: string) {
    let newCollapse = collapse;

    if (newCollapse.includes(item)) {
      newCollapse = newCollapse.filter((col) => col !== item);
    } else {
      newCollapse.push(item);
    }

    setCollapse([...newCollapse]);
  }

  return (
    <div className="flex flex-col gap-12">
      <CollapsedItem
        itemId="1"
        triggerText="Day Master"
        collapse={collapse}
        onCollapse={handleCollapseItem}
      >
        {[...new Array(3)].map((item, key) => (
          <div
            key={key}
            className="flex flex-col items-center p-6 md:p-10 xl:p-14 border-2 border-secondary bg-white/5"
          >
            <div className="relative w-full max-w-[150px] md:max-w-[200px] h-[150px] md:h-[200px]">
              <Image
                src="/"
                fill
                sizes="200px"
                className="object-center object-cover"
                alt=""
              />
            </div>

            <div className="flex flex-col gap-1 w-full">
              <p className="text-xl font-oswald font-bold uppercase">
                Wu Earth
              </p>
              <p className="text-base font-light">
                The sacred mountain. Still, eternal, and wise. Through chaos,
                their silence echoes that all things shall pass.
              </p>
            </div>
          </div>
        ))}
      </CollapsedItem>

      <CollapsedItem
        itemId="2"
        triggerText="Chart"
        collapse={collapse}
        onCollapse={handleCollapseItem}
      >
        <p></p>
      </CollapsedItem>

      <CollapsedItem
        itemId="3"
        triggerText="Others"
        collapse={collapse}
        onCollapse={handleCollapseItem}
      >
        <div className="flex flex-col w-full gap-4 md:gap-6">
          <p className="font-oswald font-bold text-base md:text-2xl uppercase">
            Jump Back To:
          </p>

          <div className="flex flex-col md:flex-row gap-1 justify-between">
            <ButtonShaped
              text="Core Identity"
              variant="light"
              buttonClassName="scale-70 md:scale-100 w-fit -left-11 md:left-0 h-[50px] md:h-auto"
              textClassName="text-white! text-xl"
              greyscale
            />
            <ButtonShaped
              width={400}
              text="Inherent Strength and Shadow Aspect"
              variant="light"
              buttonClassName="scale-70 md:scale-100 w-fit -left-17 md:left-0 h-[50px] md:h-auto"
              textClassName="text-white! text-xl"
              greyscale
            />
            <ButtonShaped
              width={350}
              text="Personal and Professional Growth"
              variant="light"
              buttonClassName="scale-70 md:scale-100 w-fit -left-15 md:left-0 h-[50px] md:h-auto"
              textClassName="text-white! text-xl"
              greyscale
            />
          </div>
        </div>
      </CollapsedItem>
    </div>
  );
}
