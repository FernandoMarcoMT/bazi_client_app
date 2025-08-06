import ButtonShaped from "@/components/button-shaped";
import { Input } from "@/components/ui/input";
import React, { Dispatch, FormEvent, SetStateAction, useState } from "react";
import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepDetailProps {
  name: string;
  password: string;
  confirmPassword: string;
  referral: string;
  handleInputChange: (name: string, val: string) => void;
}

export default function StepDetail({
  name,
  password,
  confirmPassword,
  referral,
  handleInputChange,
}: StepDetailProps) {
  const [show, setShow] = useState({
    password: false,
    confirmPassword: false,
  });
  const [error, setError] = useState({
    confirmPassword: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError({
        confirmPassword: "Confirm password value is not valid",
      });
    }
  };

  return (
    <div className="flex flex-col gap-3 md:gap-2 h-full">
      <p className="uppercase text-3xl font-bold font-oswald text-white md:text-black">
        Account Details
      </p>
      <p className="text-base md:text-lg text-white md:text-black font-light md:font-normal">
        Please fill in the required information to create an account.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
        <div className="flex flex-col gap-1">
          <label
            htmlFor="name"
            className="font-semibold text-white md:text-black"
          >
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
            autoFocus
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="font-semibold text-white md:text-black"
          >
            Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input
              id="password"
              type={show.password ? "text" : "password"}
              placeholder="Set password"
              value={password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200 pr-14"
              autoFocus
            />

            <div
              className="absolute top-0 right-0 w-14 h-12 flex items-center justify-center text-black cursor-pointer"
              onClick={() =>
                setShow((prevVal) => ({ ...prevVal, password: !show.password }))
              }
            >
              {show.password ? (
                <Eye className="size-5" />
              ) : (
                <EyeClosed className="size-5" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="confirm-password"
            className="font-semibold text-white md:text-black"
          >
            Confirm Password <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <Input
              id="confirm-password"
              type={show.confirmPassword ? "text" : "password"}
              placeholder="Set password"
              value={confirmPassword}
              onChange={(e) => {
                handleInputChange("confirmPassword", e.target.value);
                if (password === e.target.value) {
                  setError((prevVal) => ({ ...prevVal, confirmPassword: "" }));
                }
              }}
              className={cn(
                "h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200 pr-14",
                error.confirmPassword && "border-red-500!"
              )}
              autoFocus
            />

            {error.confirmPassword && (
              <small className="text-red-500">{error.confirmPassword}</small>
            )}

            <div
              className="absolute top-0 right-0 w-14 h-12 flex items-center justify-center text-black cursor-pointer"
              onClick={() =>
                setShow((prevVal) => ({
                  ...prevVal,
                  confirmPassword: !show.confirmPassword,
                }))
              }
            >
              {show.confirmPassword ? (
                <Eye className="size-5" />
              ) : (
                <EyeClosed className="size-5" />
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="referral"
            className="font-semibold text-white md:text-black"
          >
            Referral Code (Optional)
          </label>
          <Input
            id="referral"
            type="text"
            placeholder="Enter referral code"
            value={referral}
            onChange={(e) => handleInputChange("referral", e.target.value)}
            className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
            autoFocus
          />
        </div>

        <ButtonShaped
          text="Create Account"
          variant="light"
          buttonClassName="w-full mt-2 hidden sm:flex"
          width={426}
          disabled={!name || !password || !confirmPassword}
        />

        <ButtonShaped
          text="Create Account"
          variant="light"
          buttonClassName="w-full mt-2 flex sm:hidden"
          width={426}
          height={70}
          disabled={!name || !password || !confirmPassword}
        />
      </form>
    </div>
  );
}
