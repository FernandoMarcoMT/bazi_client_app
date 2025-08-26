import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import React from "react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

const chartData = [
  { month: "Emotional\nIntelligence", desktop: 186 },
  { month: "Ambition", desktop: 305 },
  { month: "Values & Beliefs", desktop: 237 },
  { month: "Core Traits", desktop: 273 },
  { month: "Social\nInteraction", desktop: 209 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const CustomPolarAngleLabel = (props: any) => {
  const { x, y, cx, cy, payload, key, initialPadding = 10 } = props;
  const labelText = payload.value;
  const index = payload.index;

  // The amount of "padding" you want to add.
  // You might need to adjust this value based on your chart size.
  const padding = labelText.includes("Emotional")
    ? initialPadding + 5
    : initialPadding;

  // Calculate the distance from the center (cx, cy) to the original label position (x, y)
  const dx = x - cx;
  const dy = y - cy;
  const distance = Math.sqrt(dx * dx + dy * dy);

  // Calculate the ratio to extend the line outwards.
  // We're extending the original distance by the padding amount.
  const ratio = (distance + padding) / distance;

  // Calculate the new, padded position for the text.
  const newX = cx + dx * ratio;
  const newY = cy + dy * ratio;

  // Let's assume the labelText is "Long\nSubject"
  const lines = labelText.split("\n");

  return (
    <text
      x={newX}
      y={newY}
      textAnchor={
        index > 0 && index < chartData.length / 2
          ? "start"
          : index > 0 && index > chartData.length / 2
          ? "end"
          : "middle"
      }
      dominantBaseline="middle"
    >
      {lines.map((line: any, index: any) => (
        <tspan
          key={index}
          x={x}
          dy={index === 0 ? 0 : "1.2em"}
          className="text-xs md:text-xl xl:text-3xl font-oswald font-bold fill-white uppercase"
        >
          {line}
        </tspan>
      ))}
    </text>
  );
};

export default function Personality() {
  return (
    <div className="flex flex-col gap-8 md:gap-12 xl:gap-20 border-l-2 border-white pl-[30px] xl:pl-[60px]">
      <div className="flex flex-col gap-3 xl:max-w-[350px]">
        <p className="text-white font-oswald font-bold text-xl md:text-3xl uppercase">
          Personality Profile
        </p>

        <p className="text-white text-sm md:text-base xl:text-lg font-light text-balance">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          pretium fermentum nunc, in pellentesque dolor convallis vitae.
        </p>
      </div>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full h-full max-h-[533px] hidden xl:block"
      >
        <RadarChart data={chartData} cy={305}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis
            dataKey="month"
            className="fill-[#BCBCBC]"
            tick={<CustomPolarAngleLabel initialPadding={45} />}
          />
          <PolarGrid />
          <Radar dataKey="desktop" fill="#4A4A4A" fillOpacity={0.5} />
        </RadarChart>
      </ChartContainer>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full h-full max-h-[333px] hidden md:block xl:hidden"
      >
        <RadarChart data={chartData} cy={190}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis
            dataKey="month"
            className="fill-[#BCBCBC]"
            tick={<CustomPolarAngleLabel initialPadding={25} />}
          />
          <PolarGrid />
          <Radar dataKey="desktop" fill="#4A4A4A" fillOpacity={0.5} />
        </RadarChart>
      </ChartContainer>

      <ChartContainer
        config={chartConfig}
        className="mx-auto aspect-square w-full h-full max-h-[183px] md:hidden"
      >
        <RadarChart data={chartData} cy={100}>
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
          <PolarAngleAxis
            dataKey="month"
            className="fill-[#BCBCBC]"
            tick={<CustomPolarAngleLabel />}
          />
          <PolarGrid />
          <Radar dataKey="desktop" fill="#4A4A4A" fillOpacity={0.5} />
        </RadarChart>
      </ChartContainer>
    </div>
  );
}
