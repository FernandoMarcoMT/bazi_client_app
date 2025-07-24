import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const accordionItems = [
  {
    title: "What is Bazi and how is it different from Western astrology?",
    description:
      "Bazi (Four Pillars of Destiny) is an ancient Chinese system that uses your exact birth date and time to map your elemental personality and life patterns. Unlike Western astrology's 12 signs, Bazi has over 25 million possible combinations, making it far more personalized and specific to your individual cosmic blueprint.",
  },
  {
    title: "How accurate do I need to be with my birth time?",
    description: "",
  },
  {
    title: "I'm completely new to Bazi. Where should I start?",
    description: "",
  },
  {
    title: "How is this different from fortune telling?",
    description: "",
  },
  {
    title: "What can I learn from my Bazi chart?",
    description: "",
  },
  {
    title: "Do I need to believe in Chinese metaphysics for this to work?",
    description: "",
  },
  {
    title: "Is this scientifically proven? ",
    description: "",
  },
  {
    title: "How long does it take to understand my chart? ",
    description: "",
  },
  {
    title: "Can my Bazi chart change?",
    description: "",
  },
];

export default function FAQ() {
  return (
    <div className="flex flex-col pt-28 lg:pt-20 xl:pt-60 pb-16 lg:pb-20 lg:gap-12 bg-linear-to-b from-transparent via-[90%] lg:via-[100%] via-background to-background">
      <p className="uppercase font-oswald font-bold text-2xl lg:text-[42px] lg:text-center px-6">
        FAQ
      </p>

      <Accordion type="single" collapsible className="px-[24px] xl:px-14 2xl:px-40">
        {accordionItems.map((item, key) => (
          <AccordionItem
            key={key}
            value={`item-${key + 1}`}
            className="border-b-typography/60"
          >
            <AccordionTrigger className="lg:font-semibold text-base lg:text-lg cursor-pointer py-3 lg:py-6">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="font-light text-pretty text-sm lg:text-lg">
              {item.description || "-"}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
