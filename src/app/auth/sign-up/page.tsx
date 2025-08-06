"use client";

import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import StepEmail from "./components/step/email";
import StepOTP from "./components/step/otp";
import StepDetail from "./components/step/detail";

export default function SignUp() {
  const [inputValue, setInputValue] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
    referral: "",
  });
  const [step, setStep] = useState<"email" | "otp" | "detail">("email");

  const handleInputChange = (name: string, val: string) => {
    setInputValue((prevVal) => ({
      ...prevVal,
      [name]: val,
    }));
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
          {step === "email" && (
            <StepEmail
              email={inputValue.email}
              handleInputChange={handleInputChange}
              setStep={setStep}
            />
          )}
          {step === "otp" && <StepOTP setStep={setStep} />}
          {step === "detail" && (
            <StepDetail
              name={inputValue.name}
              password={inputValue.password}
              confirmPassword={inputValue.confirmPassword}
              referral={inputValue.referral}
              handleInputChange={handleInputChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}
