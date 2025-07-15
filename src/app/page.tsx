"use client";

import { ScrollToSection } from "@/components/home/scrollToSection";
import HeroPeople from "./components/hero-people";
import Image from "next/image";
import BaziWheel from "./components/bazi-wheel";
import Tailor from "./components/tailor";
import Fortune from "./components/fortune";
import FAQ from "./components/faq";
import Promotion from "@/components/promotion";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="not-dark:hidden absolute w-full h-full min-h-screen z-[-1]">
        <Image
          src="/images/bg-lp-dark.png"
          alt="Background Landing Page"
          fill
          sizes="2880px"
          className="hidden md:block object-cover object-[0_-120px]"
          priority
        />
        <Image
          src="/images/bg-lp-dark-mobile.png"
          alt="Background Landing Page"
          fill
          sizes="563px"
          className="md:hidden object-cover object-[0_-100px]"
          priority
        />

        <div className="absolute w-full h-full bg-black/20 md:bg-black/40" />
      </div>

      <div className="dark:hidden absolute w-full h-full min-h-screen z-[-1]">
        <Image
          src="/images/bg-lp-light.png"
          alt="Background Landing Page"
          fill
          sizes="2880px"
          className="hidden md:block object-cover object-[0_-120px]"
          priority
        />
        <Image
          src="/images/bg-lp-light-mobile.png"
          alt="Background Landing Page"
          fill
          sizes="563px"
          className="md:hidden object-cover object-[0_-100px]"
          priority
        />

        <div className="absolute w-full h-full bg-black/10" />
      </div>

      <HeroPeople />

      <div className="flex flex-col px-6 xl:px-14 2xl:px-40 mt-48 md:mt-20 lg:mt-0 xl:mt-32 gap-28 md:gap-14 lg:gap-36 xl:gap-80">
        <BaziWheel />

        <Tailor />

        <Fortune />
      </div>

      <FAQ />

      <Promotion />

      <ScrollToSection />
    </div>
  );
}
