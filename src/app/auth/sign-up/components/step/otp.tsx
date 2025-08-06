import ButtonShaped from "@/components/button-shaped";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import Link from "next/link";

interface StepOTPProps {
  setStep: Dispatch<SetStateAction<"email" | "otp" | "detail">>;
}

export default function StepOTP({ setStep }: StepOTPProps) {
  const [otpValue, setOTPValue] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStep("detail");
  };

  return (
    <div className="flex flex-col gap-3 md:gap-2 h-full">
      <p className="uppercase text-3xl font-bold font-oswald text-white md:text-black">
        Verify Email
      </p>
      <p className="text-base md:text-lg text-white md:text-black font-light md:font-normal">
        Verification code has been sent to your email.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        <InputOTP
          maxLength={6}
          value={otpValue}
          onChange={(value) => setOTPValue(value)}
          pattern={REGEXP_ONLY_DIGITS}
          autoFocus
        >
          <InputOTPGroup className="flex justify-between w-full">
            {[...new Array(6)].map((item, key) => (
              <InputOTPSlot
                key={key}
                index={key}
                className="bg-[#A8A8A8]/10! border! border-[#898888]! rounded! md:rounded-md! w-12 md:w-15 h-15 md:h-17 text-black! text-2xl!"
              />
            ))}
          </InputOTPGroup>
        </InputOTP>

        <div className="flex items-center gap-1.5 text-white md:text-black text-sm md:text-base">
          <p>Didn't receive the code?</p>
          <p className="font-semibold" onClick={() => alert("sent")}>
            Resend
          </p>
        </div>

        <ButtonShaped
          text="Continue"
          variant="light"
          buttonClassName="w-full mt-2 hidden sm:flex"
          width={426}
          disabled={otpValue.length < 6}
        />

        <ButtonShaped
          text="Continue"
          variant="light"
          buttonClassName="w-full mt-2 flex sm:hidden"
          width={426}
          height={70}
          disabled={otpValue.length < 6}
        />
      </form>
    </div>
  );
}
