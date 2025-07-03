"use client";

import { CheckSquare, Copy } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { toast } from "sonner";
import ButtonShaped from "@/components/button-shaped";

export default function ProfileDetail() {
  const [isCopy, setIsCopy] = useState(false);

  function handleCopyClipboard() {
    navigator.clipboard.writeText("EARLY123");
    toast.success("Affiliate Code Coppied!");

    setIsCopy(true);
    setTimeout(() => setIsCopy(false), 1000);
  }

  return (
    <section className="flex flex-col gap-4 xl:gap-6">
      <h1 className="uppercase font-bold text-xl md:text-2xl xl:text-4xl font-oswald">
        Profile
      </h1>

      <div className="flex items-center gap-5 xl:gap-12 p-4 xl:p-9 rounded-lg xl:rounded-xl border-secondary/20 border md:border-2 xl:border-4 bg-primary">
        <div className="relative w-full max-w-[90px] md:max-w-[160px] xl:max-w-[200px] h-[90px] md:h-[160px] xl:h-[200px]">
          <Image
            src="/images/profile-user.png"
            fill
            sizes="200px"
            className="object-center object-cover rounded-full bg-zinc-50/20"
            alt="Avatar Profile User"
          />
        </div>

        <div className="flex flex-col items-start gap-1 md:gap-3 xl:gap-4 xl:pt-1 overflow-hidden">
          <p className="text-sm md:text-xl xl:text-2xl font-semibold">
            Anthony
          </p>

          <div className="flex flex-col gap-1 md:gap-2 xl:gap-3">
            <p className="text-[8px] md:text-base xl:text-lg font-light">
              Gmail: anthony@gmail.com
            </p>

            <div className="flex items-center gap-2">
              <p className="text-[8px] md:text-base xl:text-lg font-light">
                Affiliate Code: EARLY123
              </p>
              {isCopy ? (
                <CheckSquare className="size-2 md:size-5" />
              ) : (
                <Tooltip>
                  <TooltipTrigger onClick={handleCopyClipboard}>
                    <Copy className="size-2 md:size-5 cursor-pointer" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              )}
            </div>
          </div>

          <ButtonShaped
            text="Edit Profile"
            variant="light"
            buttonClassName="scale-50 md:scale-75 xl:scale-100 mt-auto relative -left-18 md:-left-9 xl:left-0 h-[45px] xl:h-auto"
            textClassName="xl:text-lg"
          />
        </div>
      </div>
    </section>
  );
}
