"use client";

import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import SignInForm from "./components/form";

export default function SignIn() {
  return (
    <div className="relative flex flex-col overflow-hidden">
      <div className="hidden md:block absolute -top-26 h-full w-full">
        <img
          src="/images/bg-auth.png"
          alt="Background Auth"
          className="object-contain object-top"
        />
      </div>

      <div className="flex flex-col h-[calc(100vh-64px)] md:h-full px-[24px] xl:px-14 2xl:px-40 pt-10 xl:pt-20 pb-10 gap-14 xl:gap-4 justify-between z-[1]">
        <Link href="/" className="hidden xl:flex items-center gap-2 w-fit">
          <ChevronLeft className="size-10" />
          <p className="font-oswald uppercase font-bold text-3xl">Back</p>
        </Link>

        <div className="xl:border border-secondary md:bg-[#F4FAFF] md:p-9 rounded-md w-full max-w-[500px] mx-auto h-full">
          <div className="flex flex-col gap-3 md:gap-2 h-full">
            <p className="uppercase text-3xl font-bold font-oswald text-white md:text-black">
              Login
            </p>
            <p className="text-base md:text-lg text-white md:text-black font-light md:font-normal">
              Enter your login details to continue.
            </p>

            <SignInForm />

            <div className="flex flex-col w-full items-center gap-6 mt-4">
              <p className="text-lg text-white md:text-black">or</p>

              <div className="flex items-center gap-6">
                <div className="flex items-center justify-center w-13 h-13 border border-[#8E8E8E] rounded-full">
                  <IconBrandGoogleFilled className="text-white md:text-black" />
                </div>
                <div className="flex items-center justify-center w-13 h-13 border border-[#8E8E8E] rounded-full">
                  <IconBrandAppleFilled className="text-white md:text-black" />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center gap-1.5 text-white md:text-black text-sm md:text-lg mt-auto md:mt-10">
              <p>No account yet?</p>
              <Link href="/auth/sign-up" className="font-semibold">
                Sign up
              </Link>
              <p>here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
