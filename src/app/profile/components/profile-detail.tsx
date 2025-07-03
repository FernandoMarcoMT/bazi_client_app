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
    <section className="flex flex-col gap-6">
      <h1 className="uppercase font-bold text-4xl font-oswald">Profile</h1>

      <div className="flex gap-12 p-9 rounded-xl border-secondary/20 border-4 bg-primary">
        <Image
          src="/images/profile-user.png"
          width={200}
          height={200}
          className="object-center object-cover rounded-full bg-zinc-50/20"
          alt="Avatar Profile User"
        />

        <div className="flex flex-col gap-4 pt-1">
          <p className="text-2xl font-medium">Anthony</p>

          <div className="flex flex-col gap-3">
            <p className="text-lg font-light">Gmail: anthony@gmail.com</p>

            <div className="flex items-center gap-2">
              <p className="text-lg font-light">Affiliate Code: EARLY123</p>
              {isCopy ? (
                <CheckSquare className="size-5" />
              ) : (
                <Tooltip>
                  <TooltipTrigger onClick={handleCopyClipboard}>
                    <Copy className="size-5 cursor-pointer" />
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
            buttonClassName="h-[60px] mt-auto"
            textClassName="text-lg"
          />
        </div>
      </div>
    </section>
  );
}
