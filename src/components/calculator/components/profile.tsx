import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import React from "react";
import { Pie, PieChart } from "recharts";

interface InnerProfile {
  natalElementPercentages: Record<string, string>;
}

export default function InnerProfile({
  natalElementPercentages,
}: InnerProfile) {
  const chartData = [...Object.keys(natalElementPercentages)].map((element) => {
    return {
      element: element.toLowerCase(),
      value: Number(natalElementPercentages[element].replace("%", "") || 0),
      fill:
        element.toLowerCase() === "earth"
          ? "#F5AE2B"
          : element.toLowerCase() === "fire"
          ? "#C72A3D"
          : element.toLowerCase() === "wood"
          ? "#286F1F"
          : element.toLowerCase() === "water"
          ? "#4363C4"
          : element.toLowerCase() === "metal"
          ? "#B2B7B8"
          : "#F5AE2B",
    };
  });

  let chartConfig: { value: { label: string; color?: string } } = {
    value: {
      label: "Value",
    },
  } satisfies ChartConfig;

  chartData.map((item) => {
    chartConfig[item.element as keyof typeof chartConfig] = {
      label: item.element,
      color: item.fill,
    };
  });

  const dominant = [...Object.keys(natalElementPercentages)]
    .find((element) =>
      natalElementPercentages[element].includes(
        Math.max(
          ...[...Object.keys(natalElementPercentages)].map((item) =>
            Number(natalElementPercentages[item].replace("%", "") || 0)
          )
        ).toString()
      )
    )
    ?.toLowerCase();

  return (
    <div className="flex flex-col gap-20 pl-15 pb-25 border-l-2 border-white">
      <div className="flex flex-col gap-4">
        <p className="font-oswald font-bold text-3xl uppercase">
          Inner Element Profile
        </p>
        <p className="text-xl max-w-[580px] text-[#F8F8F8]">
          This chart breaks down the five elements in your Bazi chart, showing
          which life themes dominate your personality. Each element represents
          different aspects in your life: creativity, wealth, power, resources,
          and companions.
        </p>
      </div>

      <div className="flex justify-around">
        <div className="h-[380px] flex items-center justify-start">
          <ChartContainer
            config={chartConfig}
            className="[&_.recharts-pie-label-text]:fill-foreground aspect-square h-full pb-0"
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent hideLabel />} />
              <Pie
                data={chartData}
                dataKey="value"
                innerRadius={120}
                outerRadius={150}
                paddingAngle={5}
                nameKey="element"
                label
                className="font-oswald font-bold text-xl"
              />
            </PieChart>
          </ChartContainer>
        </div>

        <div className="flex flex-col gap-10 min-w-fit">
          {[...new Set([...Object.keys(natalElementPercentages)])]
            .sort() // Sort elements alphabetically for consistency
            .map((element) => (
              <div key={element} className="flex items-center gap-5">
                <div
                  className={cn(
                    "w-[10px] h-[10px] rounded-full",
                    element.toLowerCase() === "earth" && "bg-[#F5AE2B]",
                    element.toLowerCase() === "fire" && "bg-[#C72A3D]",
                    element.toLowerCase() === "wood" && "bg-[#286F1F]",
                    element.toLowerCase() === "water" && "bg-[#4363C4]",
                    element.toLowerCase() === "metal" && "bg-[#B2B7B8]"
                  )}
                />

                <p className="text-2xl">
                  {element.toLowerCase() === "earth" && "Wealth (Earth)"}
                  {element.toLowerCase() === "fire" && "Output (Fire)"}
                  {element.toLowerCase() === "wood" && "Day Master (Wood)"}
                  {element.toLowerCase() === "water" && "Resource (Water)"}
                  {element.toLowerCase() === "metal" && "Power (Metal)"}
                </p>
              </div>
            ))}

          <p className="text-2xl italic">
            Dominant Structure: {dominant === "earth" && "Wealth (Earth)"}
            {dominant === "fire" && "Output (Fire)"}
            {dominant === "wood" && "Day Master (Wood)"}
            {dominant === "water" && "Resource (Water)"}
            {dominant === "metal" && "Power (Metal)"}
          </p>
        </div>
      </div>
    </div>
  );
}
