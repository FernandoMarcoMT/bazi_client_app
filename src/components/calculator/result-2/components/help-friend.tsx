import ButtonShaped from "@/components/button-shaped";
import Link from "next/link";
import React from "react";

export default function HelpFriend() {
  return (
    <div className="py-15 md:py-20 px-[24px] xl:px-14 2xl:px-40">
      <div className="flex justify-between bg-white rounded-xl w-full py-12 xl:py-24 px-9 xl:px-18">
        <div className="flex flex-col justify-center gap-3 w-full max-w-[400px] xl:max-w-[540px]">
          <p className="uppercase text-black font-oswald font-bold text-2xl lg:text-4xl leading-[1.2em] text-balance">
            HELP A FRIEND GAIN A BETTER UNDERSTANDING OF THEMSELVES
          </p>

          <p className="text-black leading-[1.4em] lg:hidden">
            Click 'Calculate Now' to receive their personalised calculation.
          </p>

          <p className="text-black leading-[1.4em] hidden lg:block">
            Click 'Calculate Now' to receive their personalised calculation.
            Rest assured, your own result won't be overwritten once you are
            logged in.
          </p>

          <Link
            href="/calculator"
            className="relative -left-9 h-[42px] -top-7 lg:top-auto lg:left-auto lg:h-auto w-fit"
          >
            <ButtonShaped
              text="Calculate Now"
              variant="light"
              buttonClassName="mt-6 lg:mt-4 scale-70 lg:scale-100"
            />
          </Link>
        </div>

        <div className="w-full hidden md:flex items-center justify-end">
          <img
            src="/images/help-friend.png"
            alt="Help Friends"
            className="object-center object-cover w-full max-w-[500px] max-h-[170px] lg:max-h-[240px]"
          />
        </div>
      </div>
    </div>
  );
}
