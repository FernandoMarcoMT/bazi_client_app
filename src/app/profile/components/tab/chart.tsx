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
    <div className="flex flex-col border-2 border-secondary rounded-xl overflow-hidden">
      <div
        className="flex items-center justify-between p-6 bg-secondary cursor-pointer"
        onClick={() => onCollapse(itemId)}
      >
        <p className="font-oswald font-bold text-3xl text-black uppercase">
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
          "flex justify-between gap-7 duration-200",
          collapse.includes(itemId)
            ? "h-full p-8 opacity-100"
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
            className="flex flex-col items-center p-14 border-2 border-secondary bg-white/5"
          >
            <Image
              src="/"
              width={200}
              height={200}
              className="object-center object-cover"
              alt=""
            />

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
        <div className="flex flex-col w-full gap-6">
          <p className="font-oswald font-bold text-2xl uppercase">
            Jump Back To:
          </p>

          <div className="flex items-center justify-between">
            <ButtonShaped
              height={70}
              text="Core Identity"
              variant="light"
              textClassName="text-white! text-xl"
              greyscale
            />
            <ButtonShaped
              width={400}
              height={70}
              text="Inherent Strength and Shadow Aspect"
              variant="light"
              textClassName="text-white! text-xl"
              greyscale
            />
            <ButtonShaped
              width={350}
              height={70}
              text="Personal and Professional Growth"
              variant="light"
              textClassName="text-white! text-xl"
              greyscale
            />
          </div>
        </div>
      </CollapsedItem>
    </div>
  );
}
