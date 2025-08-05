import ButtonShaped from "@/components/button-shaped";
import { Input } from "@/components/ui/input";
import React, { FormEvent, useState } from "react";

export default function SignUpForm() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
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

      <ButtonShaped
        text="Sign Up"
        variant="light"
        buttonClassName="w-full mt-2 hidden sm:flex"
        width={426}
        disabled={!inputValue.email}
      />

      <ButtonShaped
        text="Sign Up"
        variant="light"
        buttonClassName="w-full mt-2 flex sm:hidden"
        width={426}
        height={70}
        disabled={!inputValue.email}
      />
    </form>
  );
}
