import ButtonShaped from "@/components/button-shaped";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function Fortune() {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-10 xl:gap-40 xl:pl-10">
      <p className="block lg:hidden font-oswald font-bold uppercase text-4xl lg:text-[42px] leading-[1.2em]">
        THIS GOES BEYOND FORTUNE TELLING
      </p>

      <div className="relative h-[300px] lg:h-[440px] xl:h-[680px] w-full max-w-[680px]">
        <Image
          src="/images/fortune.png"
          alt="Bazi Wheel"
          fill
          sizes="950px"
          className="object-contain object-center"
        />
      </div>

      <div className="flex flex-col gap-3 w-full pt-5 lg:pt-20">
        <p className="hidden lg:block font-oswald font-bold uppercase lg:text-4xl xl:text-[42px] leading-[1.2em]">
          THIS GOES BEYOND FORTUNE TELLING
        </p>

        <div className="flex flex-col gap-3">
          <p className="text-lg">
            Join our community of seekers who use ancient wisdom for modern
            self-discovery.
          </p>

          <p className="text-lg">Get instant access to:</p>

          <ul className="list-disc pl-7 flex flex-col gap-3">
            <li className="text-lg">
              A free deeper dive on personalized core identity insights
            </li>
            <li className="text-lg">Weekly wisdom delivered to your inbox</li>
            <li className="text-lg">
              Exclusive updates on new tools and resources
            </li>
          </ul>
        </div>

        <form className="flex lg:flex-col mt-3 gap-3 lg:gap-6" suppressHydrationWarning>
          <Input
            type="email"
            className="bg-white! h-12 text-black"
            placeholder="eg. name@example.com"
            required
            suppressHydrationWarning
          />

          <div className="block lg:hidden relative h-12 w-full max-w-[100px]">
            <ButtonShaped
              text="Join Us"
              variant="light"
              width={200}
              height={84}
              textClassName="text-[24px]"
              buttonClassName="ml-auto flex lg:hidden scale-50 absolute -top-[20px] -left-[50px]"
            />
          </div>

          <ButtonShaped
            text="Join Us"
            variant="light"
            buttonClassName="ml-auto hidden lg:flex"
          />
        </form>
      </div>
    </div>
  );
}
