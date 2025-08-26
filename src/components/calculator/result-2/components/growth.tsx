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
    <div className="pt-[80px] pb-[80px] xl:pb-0 relative">
      <div className="flex flex-col xl:flex-row relative gap-8 xl:gap-0 min-h-[800px]">
        <div className="flex flex-col gap-3 px-[24px] xl:px-14 2xl:px-40 z-[1]">
          <p className="text-white font-bold font-oswald text-3xl lg:text-[36px] xl:text-[48px] 2xl:text-[120px] max-w-[750px] uppercase text-balance leading-[1.2em]">
            Personal and Professional Growth
          </p>
          <p className="text-sm md:text-base text-white md:w-[376px]">
            Choose one and explore the growth area you’re interested in.
          </p>
        </div>

        <div className="hidden xl:absolute xl:top-6 right-0 xl:flex flex-col items-end">
          <img
            src="/images/Professional Growth/bg-tree.png"
            alt="Background Tree"
            className="object-cover object-center max-w-[95%]"
          />

          <div className="relative xl:top-[-90px] right-8 xl:-left-40 w-fit flex gap-8 xl:gap-10">
            <img
              src="/images/Professional Growth/professional-landscape.png"
              alt="Professional Landscape"
              className="object-cover object-center h-[250px] xl:h-[470px] w-auto relative top-[-55px] xl:top-auto"
            />
            <img
              src="/images/Professional Growth/relationship-dynamic.png"
              alt="Relationship Dynamic"
              className="object-cover object-center h-[250px] xl:h-[470px] w-auto relative top-[-95px] xl:top-[-75px]"
            />
            <img
              src="/images/Professional Growth/prosperity-outlook.png"
              alt="Prosperity Outlook"
              className="object-cover object-center h-[250px] xl:h-[470px] w-auto relative top-[-147px] xl:top-[-157px]"
            />
            <img
              src="/images/Professional Growth/growth-journey.png"
              alt="Growth Journey"
              className="object-cover object-center h-[250px] xl:h-[470px] w-auto relative top-[-105px] xl:top-[-125px]"
            />
          </div>
        </div>

        <div className="flex flex-col xl:hidden relative overflow-hidden">
          <img
            src="/images/Professional Growth/mobile-tree.png"
            alt="Background Tree"
            className="object-cover object-center w-full max-w-[90%] lg:max-w-[70%] ml-auto"
          />

          <div className="-mt-17 md:-mt-36 relative md:right-8 lg:right-40 flex items-center justify-evenly md:justify-center w-full lg:w-fit md:gap-64 lg:gap-70 ml-auto">
            <img
              src="/images/Professional Growth/professional-landscape.png"
              alt="Professional Landscape"
              className="object-cover object-center h-[280px] xl:h-[470px] w-auto relative"
            />
            <img
              src="/images/Professional Growth/relationship-dynamic.png"
              alt="Relationship Dynamic"
              className="object-cover object-center h-[280px] xl:h-[470px] w-auto relative"
            />
          </div>
        </div>

        <div className="flex flex-col xl:hidden relative overflow-hidden">
          <img
            src="/images/Professional Growth/mobile-tree.png"
            alt="Background Tree"
            className="object-cover object-center w-full max-w-[90%] lg:max-w-[70%] mr-auto scale-x-[-1]"
          />

          <div className="-mt-17 md:-mt-36 relative md:left-8 lg:left-40 flex items-center justify-evenly md:justify-center w-full lg:w-fit md:gap-64 lg:gap-70">
            <img
              src="/images/Professional Growth/prosperity-outlook.png"
              alt="Prosperity Outlook"
              className="object-cover object-center h-[280px] xl:h-[470px] w-auto relative"
            />
            <img
              src="/images/Professional Growth/growth-journey.png"
              alt="Growth Journey"
              className="object-cover object-center h-[280px] xl:h-[470px] w-auto relative"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-0 w-full h-full flex items-center justify-center bg-black/60 z-[2] px-6">
        {!popupClose ? (
          <div className="bg-white p-2 md:p-5 rounded-md md:rounded-3xl relative flex justify-center w-full md:w-auto h-full md:h-auto max-h-[500px] md:max-h-full">
            <div className="flex flex-col justify-between mr-auto md:mr-0">
              <img
                src="/images/Professional Growth/corner-popup.png"
                alt="Corner Popup"
                className="max-w-[50px] md:max-w-[65px] xl:max-w-[90px]"
              />
              <img
                src="/images/Professional Growth/corner-popup.png"
                alt="Corner Popup"
                className="max-w-[50px] md:max-w-[65px] xl:max-w-[90px] scale-[-1] rotate-90"
              />
            </div>

            <div className="absolute top-0 md:top-auto md:relative h-full flex flex-col gap-2 items-center justify-center w-full max-w-[290px] md:max-w-[400px] lg:max-w-[600px] py-4">
              <div className="max-w-[440px] xl:max-w-[500px] font-oswald font-bold text-center text-black uppercase text-2xl md:text-4xl xl:text-5xl leading-[1.2em] text-balance">
                Get Access To Additional Results
              </div>

              <p className="text-sm md:text-base xl:text-lg text-black w-full text-center md:text-left">
                Join us to unlock additional insights that reveal more about
                yourself.
              </p>

              <form className="flex flex-col w-full gap-3 mt-3">
                <label htmlFor="email" className="font-semibod text-black">
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
                  buttonClassName="w-full hidden xl:flex"
                  width={600}
                />
                <ButtonShaped
                  text="Continue With Email"
                  variant="light"
                  buttonClassName="w-full hidden md:flex xl:hidden"
                  width={400}
                />
                <ButtonShaped
                  text="Continue With Email"
                  variant="light"
                  buttonClassName="w-full md:hidden"
                  textClassName="text-sm"
                  width={290}
                />
              </form>

              <div className="flex flex-col w-full items-center gap-3 md:gap-5 md:mt-3">
                <p className="text-black">or</p>

                <div className="flex items-center gap-6">
                  <div className="flex items-center justify-center p-2 border border-[#8E8E8E] rounded-full">
                    <IconBrandGoogleFilled className="text-black size-4 md:size-7" />
                  </div>
                  <div className="flex items-center justify-center p-2 border border-[#8E8E8E] rounded-full">
                    <IconBrandAppleFilled className="text-black size-4 md:size-7" />
                  </div>
                </div>
              </div>

              <div className="text-black text-center text-sm md:text-base mt-3 md:mt-7 whitespace-pre-wrap break-words">
                <p className="inline break-words">
                  By creating an account, you agree to our
                </p>{" "}
                <Link
                  href="/auth/terms-service"
                  className="font-semibold inline break-words"
                >
                  Terms of Service
                </Link>{" "}
                <p className="inline">and</p>{" "}
                <Link
                  href="/auth/privacy-policy"
                  className="font-semibold inline break-words"
                >
                  Privacy Policy
                </Link>
                .
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <img
                src="/images/Professional Growth/corner-popup.png"
                alt="Corner Popup"
                className="max-w-[50px] md:max-w-[65px] xl:max-w-[90px] rotate-90"
              />
              <img
                src="/images/Professional Growth/corner-popup.png"
                alt="Corner Popup"
                className="max-w-[50px] md:max-w-[65px] xl:max-w-[90px] scale-[-1]"
              />
            </div>

            <div
              className="absolute -top-3 md:-top-5 xl:-top-6 -right-3 md:-right-5 xl:-right-6 rotate-45 bg-[#FFC03A] p-1 flex items-center justify-center cursor-pointer hover:shadow-lg hover:shadow-secondary duration-300"
              onClick={() => setPopupClose(true)}
            >
              <Plus className="size-4 md:size-8 xl:size-10 text-black stroke-1" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4 max-w-[450px]">
            <p className="font-oswald font-bold text-white text-2xl md:text-4xl xl:text-5xl uppercase">
              Content Locked
            </p>
            <p className="text-white text-center font-light text-sm md:text-base md:hidden text-balance">
              Want to explore on the remaining content? Join us to unlock more
              insights about yourself.
            </p>
            <p className="text-white text-center font-light text-sm md:text-base xl:text-lg hidden md:block">
              Want to continue on your Personal and Professional Growth? Join us
              to unlock more insights about yourself.
            </p>

            <img
              src="/images/Professional Growth/locked.png"
              alt="Locked"
              className="max-w-[60px] md:max-w-[100px] my-2"
            />

            <ButtonShaped
              text="Join Us Now"
              variant="light"
              buttonClassName="scale-80 md:scale-100"
            />
          </div>
        )}
      </div>
    </div>
  );
}
