import ButtonShaped from "@/components/button-shaped";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";

export default function Fortune() {
  return (
    <div className="flex items-center gap-14 pl-10 justify-between">
      <div className="relative h-[680px] w-full min-w-[680px]">
        <Image
          src="/images/fortune.png"
          alt="Bazi Wheel"
          fill
          sizes="950px"
          className="object-cover object-center"
        />
      </div>

      <div className="flex flex-col gap-3 w-full pt-20">
        <p className="font-oswald font-bold uppercase text-[42px] leading-[1.2em]">
          THIS GOES BEYOND FORTUNE TELLING
        </p>

        <div className="flex flex-col gap-3">
          <p className="font-light text-lg">
            Join our community of seekers who use ancient wisdom for modern
            self-discovery.
          </p>

          <p className="font-light text-lg">Get instant access to:</p>

          <ul className="list-disc pl-7 flex flex-col gap-3">
            <li className="font-light text-lg">
              A free deeper dive on personalized core identity insights
            </li>
            <li className="font-light text-lg">
              Weekly wisdom delivered to your inbox
            </li>
            <li className="font-light text-lg">
              Exclusive updates on new tools and resources
            </li>
          </ul>
        </div>

        <form className="flex flex-col mt-3 gap-6">
          <Input
            type="email"
            className="bg-white! h-12 text-black"
            placeholder="eg. name@example.com"
            required
          />

          <ButtonShaped
            text="Join Us"
            variant="light"
            buttonClassName="ml-auto"
          />
        </form>
      </div>
    </div>
  );
}
