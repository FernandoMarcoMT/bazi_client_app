"use client";

import ButtonShaped from "@/components/button-shaped";
import { Input } from "@/components/ui/input";
import {
  IconBrandAppleFilled,
  IconBrandGoogle,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function SignIn() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

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

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="font-semibold text-white md:text-black"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  onChange={(e) =>
                    setInputValue((prevVal) => ({
                      ...prevVal,
                      email: e.target.value,
                    }))
                  }
                  className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="password"
                  className="font-semibold text-white md:text-black"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) =>
                    setInputValue((prevVal) => ({
                      ...prevVal,
                      password: e.target.value,
                    }))
                  }
                  className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
                />
                <p className="text-right text-white xl:text-black text-sm">
                  Forget Password?
                </p>
              </div>

              <ButtonShaped
                text="Log In"
                variant="light"
                buttonClassName="w-full mt-2 hidden sm:flex"
                width={426}
                disabled={!inputValue.email || !inputValue.password}
              />

              <ButtonShaped
                text="Log In"
                variant="light"
                buttonClassName="w-full mt-2 flex sm:hidden"
                width={426}
                height={70}
                disabled={!inputValue.email || !inputValue.password}
              />
            </form>

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

            <div className="flex justify-center items-center gap-1.5 text-white md:text-black text-lg mt-auto md:mt-10">
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
