"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface FooterItemProps {
  title: string;
  items: {
    text: string;
    href: string;
  }[];
}

function FooterItem({ title, items }: FooterItemProps) {
  return (
    <div className="flex flex-col gap-3 lg:gap-6">
      <p className="text-lg lg:text-xl font-semibold uppercase font-oswald">
        {title}
      </p>

      <div className="flex flex-col gap-3">
        {items.map((item, key) => (
          <Link
            key={key}
            href={item.href}
            className="text-sm lg:text-base w-fit hover:text-secondary duration-300 font-light"
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function FooterSection() {
  const pathname = usePathname();
  const [element] = useState("wood");
  const [elementBg, setElementBg] = useState("");

  useEffect(() => {
    switch (element) {
      case "fire":
        setElementBg("bg-result-fire");
        return;
      case "wood":
        setElementBg("bg-result-wood");
        return;
      case "earth":
        setElementBg("bg-result-earth");
        return;
      case "metal":
        setElementBg("bg-result-metal");
        return;
      case "water":
        setElementBg("bg-result-water");
        return;
      default:
        setElementBg("bg-result-fire");
        return;
    }
  }, [element]);

  return (
    <div
      className={cn(
        "flex flex-col py-16 lg:py-10 px-[24px] xl:px-14 2xl:px-40 relative",
        pathname.includes("other-result") ? elementBg : "bg-background"
      )}
    >
      {pathname.includes("calculator") && (
        <div className="absolute top-0 left-0 h-full w-full overflow-hidden">
          <div className="h-[2000%] w-full">
            <Image
              src="/images/Hidden Core Personality/bg-texture.png"
              alt="Background Landing Page"
              fill
              sizes="2880px"
              className="object-[0_-3800px] opacity-50 h-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      <div className="flex flex-col lg:flex-row justify-between gap-6">
        <div className="flex flex-col gap-5">
          <div className="relative w-32 lg:w-64 h-12 lg:h-32 bg-zinc-300"></div>

          <div className="hidden lg:flex w-full items-center gap-8 justify-between">
            <Link href="#">
              <IconBrandFacebook stroke={1.3} />
            </Link>
            <Link href="#">
              <IconBrandInstagram stroke={1.3} />
            </Link>
            <Link href="#">
              <IconBrandLinkedin stroke={1.3} />
            </Link>
            <Link href="#">
              <IconBrandX stroke={1.3} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col flex-wrap sm:flex-row justify-between gap-6 lg:gap-[96px]">
          <FooterItem
            title="About Us"
            items={[
              { text: "About Chinese Metaphysics", href: "#" },
              { text: "About Bazi", href: "#" },
              { text: "About Ten Gods", href: "#" },
              { text: "About Ten Day Masters", href: "#" },
            ]}
          />

          <FooterItem
            title="Product And Services"
            items={[
              { text: "Birth Chart Calculation", href: "#" },
              { text: "Premium Calculation", href: "#" },
              { text: "About Ten Gods", href: "#" },
              { text: "About Ten Day Masters", href: "#" },
            ]}
          />

          <FooterItem
            title="Help And Support"
            items={[
              { text: "Contact Us", href: "#" },
              { text: "FAQ", href: "#" },
            ]}
          />
        </div>

        <div className="flex lg:hidden w-full items-center gap-3 sm:gap-8">
          <Link href="#">
            <IconBrandFacebook stroke={1.3} />
          </Link>
          <Link href="#">
            <IconBrandInstagram stroke={1.3} />
          </Link>
          <Link href="#">
            <IconBrandLinkedin stroke={1.3} />
          </Link>
          <Link href="#">
            <IconBrandX stroke={1.3} />
          </Link>
        </div>
      </div>

      <hr className="border-typography mt-8 lg:mt-12 mb-3 lg:mb-6" />

      <div className="flex justify-between items-center">
        <p className="text-sm">Company Copyright</p>
        <p className="text-sm">Privacy and Terms</p>
      </div>
    </div>
  );
}
