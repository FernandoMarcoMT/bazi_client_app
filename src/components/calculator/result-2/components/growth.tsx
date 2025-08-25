import ButtonShaped from "@/components/button-shaped";
import { Input } from "@/components/ui/input";
import {
  IconBrandAppleFilled,
  IconBrandGoogleFilled,
} from "@tabler/icons-react";
import { Lock, Plus } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function Growth() {
  const [email, setEmail] = useState("");
  const [popupClose, setPopupClose] = useState(false);

  return (
    <div className="pt-[80px] relative">
      <div className="flex relative h-[800px]">
        <div className="flex flex-col gap-3 px-[24px] xl:px-14 2xl:px-40 z-[1]">
          <p className="text-white font-bold font-oswald text-[36px] md:text-[48px] xl:text-[120px] max-w-[750px] uppercase text-balance leading-[1.2em]">
            Personal and Professional Growth
          </p>
          <p className="text-white w-[376px]">
            Choose one and explore the growth area you’re interested in.
          </p>
        </div>

        <div className="absolute top-6 right-0 flex flex-col items-end">
          <img
            src="/images/Professional Growth/bg-tree.png"
            alt="Background Tree"
            className="object-cover object-center max-w-[95%]"
          />

          <div className="relative top-[-90px] -left-40 w-fit flex gap-10">
            <img
              src="/images/Professional Growth/professional-landscape.png"
              alt="Professional Landscape"
              className="object-cover object-center h-[470px] w-auto relative"
            />
            <img
              src="/images/Professional Growth/relationship-dynamic.png"
              alt="Relationship Dynamic"
              className="object-cover object-center h-[470px] w-auto relative top-[-75px]"
            />
            <img
              src="/images/Professional Growth/prosperity-outlook.png"
              alt="Prosperity Outlook"
              className="object-cover object-center h-[470px] w-auto relative top-[-157px]"
            />
            <img
              src="/images/Professional Growth/growth-journey.png"
              alt="Growth Journey"
              className="object-cover object-center h-[470px] w-auto relative top-[-115px]"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 w-full h-full flex items-center justify-center bg-black/60 z-[2]">
        {!popupClose ? (
          <div className="bg-white p-5 rounded-3xl relative flex">
            <div className="flex flex-col justify-between">
              <img
                src="/images/Professional Growth/corner-popup.png"
                alt="Corner Popup"
                className="max-w-[90px]"
              />
              <img
                src="/images/Professional Growth/corner-popup.png"
                alt="Corner Popup"
                className="max-w-[90px] scale-[-1] rotate-90"
              />
            </div>
            <div className="flex flex-col gap-2 items-center w-full max-w-[600px] py-4">
              <div className="max-w-[400px] font-oswald font-bold text-center text-black uppercase text-5xl leading-[1.2em]">
                Get Access To Additional Results
              </div>

              <p className="text-lg text-black w-full">
                Join us to unlock additional insights that reveal more about
                yourself.
              </p>

              <form className="flex flex-col w-full gap-3 mt-3">
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
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
                />

                <ButtonShaped
                  text="Continue With Email"
                  variant="light"
                  buttonClassName="w-full"
                  width={600}
                />
              </form>

              <div className="flex flex-col w-full items-center gap-5 mt-3">
                <p className="text-white md:text-black">or</p>

                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center w-12 h-12 border border-[#8E8E8E] rounded-full">
                    <IconBrandGoogleFilled className="text-white md:text-black size-7" />
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 border border-[#8E8E8E] rounded-full">
                    <IconBrandAppleFilled className="text-white md:text-black size-7" />
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center gap-1.5 text-white md:text-black text-sm md:text-base mt-auto md:mt-7">
                <p>By creating an account, you agree to our</p>
                <Link href="/auth/terms-service" className="font-semibold">
                  Terms of Service
                </Link>
                <p>and</p>
                <Link href="/auth/privacy-policy" className="font-semibold">
                  Privacy Policy
                </Link>
                .
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <img
                src="/images/Professional Growth/corner-popup.png"
                alt="Corner Popup"
                className="max-w-[90px] rotate-90"
              />
              <img
                src="/images/Professional Growth/corner-popup.png"
                alt="Corner Popup"
                className="max-w-[90px] scale-[-1]"
              />
            </div>

            <div
              className="absolute -top-6 -right-6 rotate-45 bg-[#FFC03A] w-12 h-12 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-secondary duration-300"
              onClick={() => setPopupClose(true)}
            >
              <Plus className="size-10 text-black stroke-1" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 max-w-[450px]">
            <p className="font-oswald font-bold text-white text-5xl uppercase">
              Content Locked
            </p>
            <p className="text-white text-center font-light text-lg">
              Want to continue on your Personal and Professional Growth? Join us
              to unlock more insights about yourself.
            </p>

            <img
              src="/images/Professional Growth/locked.png"
              alt="Locked"
              className="max-w-[100px] my-2"
            />

            <ButtonShaped text="Join Us Now" variant="light" />
          </div>
        )}
      </div>
    </div>
  );
}
