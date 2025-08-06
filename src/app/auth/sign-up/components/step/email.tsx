import ButtonShaped from "@/components/button-shaped";
import { Input } from "@/components/ui/input";
import React, { Dispatch, FormEvent, SetStateAction } from "react";
import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import Link from "next/link";

interface StepEmailProps {
  email: string;
  handleInputChange: (name: string, val: string) => void;
  setStep: Dispatch<SetStateAction<"email" | "otp" | "detail">>;
}

export default function StepEmail({
  email,
  handleInputChange,
  setStep,
}: StepEmailProps) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("otp");
  };

  return (
    <div className="flex flex-col gap-3 md:gap-2 h-full">
      <p className="uppercase text-3xl font-bold font-oswald text-white md:text-black">
        Sign Up
      </p>
      <p className="text-base md:text-lg text-white md:text-black font-light md:font-normal">
        Please fill in the required information to create an account.
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
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
            autoFocus
          />
        </div>

        <ButtonShaped
          text="Sign Up"
          variant="light"
          buttonClassName="w-full mt-2 hidden sm:flex"
          width={426}
          disabled={!email}
        />

        <ButtonShaped
          text="Sign Up"
          variant="light"
          buttonClassName="w-full mt-2 flex sm:hidden"
          width={426}
          height={70}
          disabled={!email}
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

      <div className="flex justify-center items-center gap-1.5 text-white md:text-black text-sm md:text-lg mt-auto md:mt-10">
        <p>Already have an account?</p>
        <Link href="/auth/sign-in" className="font-semibold">
          Log in
        </Link>
        <p>here</p>
      </div>
    </div>
  );
}
