"use client";

import { Input } from "@/components/ui/input";
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
      <div className="absolute -top-26 h-full w-full">
        <img
          src="/images/bg-auth.png"
          alt="Background Auth"
          className="object-contain object-top"
        />
      </div>

      <div className="flex flex-col h-full px-[24px] xl:px-14 2xl:px-40 pt-10 xl:pt-20 pb-10 gap-14 xl:gap-4 justify-between z-[1]">
        <Link href="/" className="hidden xl:flex items-center gap-2 w-fit">
          <ChevronLeft className="size-10" />
          <p className="font-oswald uppercase font-bold text-3xl">Back</p>
        </Link>

        <div className="border border-secondary bg-[#F4FAFF] p-10 rounded-md w-full max-w-[500px] mx-auto">
          <div className="flex flex-col gap-2">
            <p className="uppercase text-3xl font-bold font-oswald text-black">
              Login
            </p>
            <p className="text-lg text-black">
              Enter your login details to continue.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
              <div className="flex flex-col gap-1">
                <label htmlFor="email" className="font-semibold text-black">
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
                <label htmlFor="password" className="font-semibold text-black">
                  Password <span className="text-red-500">*</span>
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(e) =>
                    setInputValue((prevVal) => ({
                      ...prevVal,
                      email: e.target.value,
                    }))
                  }
                  className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
                />
                <p className="text-right text-black text-sm">Forget Password?</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
