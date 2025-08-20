"use client";

import React, { useContext, useEffect, useState } from "react";

import { CalendarIcon, ChevronLeft, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BaziCalculatorContext } from "@/context/BaziCalculatorContext";
import Link from "next/link";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import dayjs from "dayjs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import ButtonShaped from "../button-shaped";

type BaziFormProps = {
  onSubmit: () => void;
};

const BaziForm = (props: BaziFormProps) => {
  const context = useContext(BaziCalculatorContext);
  if (!context) {
    throw new Error(
      "Check if the component is wrapped around BaziCalculatorContextProvider"
    );
  }
  const {
    fullname,
    email,
    gender,
    setFullName,
    setEmail,
    setGender,
    setYear,
    setMonth,
    setDay,
    setHour,
    setMinutes,
    submitForm,
    error, // Destructure the error state
  } = context;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await submitForm();
    console.log("--------> Done");
    props.onSubmit();
  };

  const [date, setDate] = useState<Date>();
  const [daylightCheck, setDaylightCheck] = useState(false);
  const [openPopover, setOpenPopover] = useState({
    date: false,
    gender: false,
  });

  return (
    <div className="flex flex-col h-full xl:h-[calc(100vh_-_116px)] px-[24px] xl:px-14 2xl:px-40 pt-10 xl:pt-20 pb-10 gap-14 xl:gap-0 justify-between">
      <Link href="/" className="hidden xl:flex items-center gap-2 w-fit">
        <ChevronLeft className="size-10" />
        <p className="font-oswald uppercase font-bold text-3xl">Back</p>
      </Link>

      <div className="flex flex-col xl:flex-row items-center gap-5 xl:gap-20 2xl:gap-40 h-full">
        <div className="w-full 2xl:max-w-[640px] flex flex-col gap-3">
          <p className="font-bold font-oswald uppercase text-3xl xl:text-4xl">
            How It Works
          </p>
          <p className="text-base xl:text-lg font-light">
            Please provide accurate details to receive your precise calculation.
          </p>
        </div>

        <div className="flex flex-col w-full xl:bg-[#F4FAFF] rounded-lg h-fit xl:p-9 gap-4">
          <p className="hidden xl:block uppercase font-bold font-oswald text-2xl text-black">
            Basic Information
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-white xl:text-black font-semibold"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Name"
                onChange={(e) => setFullName(e.target.value)}
                className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-white xl:text-black font-semibold"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black text-sm! xl:text-base! focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:ring-0 transition-all duration-200"
                required
              />
            </div>

            <div className="flex flex-col xl:flex-row gap-3">
              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="calendar"
                  className="text-white xl:text-black font-semibold"
                >
                  Birth Date <span className="text-red-500">*</span>
                </label>
                <Popover
                  open={openPopover.date}
                  onOpenChange={(val) =>
                    setOpenPopover((prevVal) => ({ ...prevVal, date: val }))
                  }
                >
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      data-empty={!date}
                      className={cn(
                        "h-12 flex items-center justify-between data-[empty=true]:text-muted-foreground cursor-pointer text-black hover:text-black text-sm! xl:text-base!",
                        openPopover.date
                          ? "bg-[#F6F6F0]! border-secondary!"
                          : "bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] text-black"
                      )}
                    >
                      {date ? (
                        dayjs(date).format("DD/MM/YYYY")
                      ) : (
                        <span className="text-sm xl:text-base">DD/MM/YYYY</span>
                      )}
                      <CalendarIcon className="size-5" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent
                    side="bottom"
                    className="w-[var(--radix-popover-trigger-width)]! p-0 border-secondary"
                  >
                    <Calendar
                      id="calendar"
                      mode="single"
                      captionLayout="dropdown"
                      selected={date}
                      onSelect={(val) => {
                        let selectedDate = dayjs(val);

                        setDate(selectedDate.toDate());
                        setDay(selectedDate.get("day").toString());
                        setMonth(selectedDate.get("month").toString());
                        setYear(selectedDate.get("year").toString());

                        setOpenPopover((prevVal) => ({
                          ...prevVal,
                          date: false,
                        }));
                      }}
                      className="w-full bg-[#F6F6F0]! rounded-sm"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div className="flex flex-col gap-2 w-full">
                <label
                  htmlFor="time"
                  className="text-white xl:text-black font-semibold"
                >
                  Birth Hour <span className="text-red-500">*</span>
                </label>
                <input
                  id="time"
                  type="time"
                  onChange={(e) => {
                    let selectedTime = dayjs(e.target.valueAsDate).subtract(
                      7,
                      "hour"
                    );

                    setHour(selectedTime.get("hour").toString());
                    setMinutes(selectedTime.get("minute").toString());
                  }}
                  className="h-12 p-3 rounded-md bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border border-[#898888] data-[empty=true]:text-muted-foreground! text-black focus-within:bg-[#F6F6F0]! focus-within:border-secondary! focus-visible:outline-none transition-all duration-200 [&::-webkit-calendar-picker-indicator]:size-6 dark:[&::-webkit-calendar-picker-indicator]:invert-[30%]"
                />
                <label
                  htmlFor="daylight"
                  className="flex items-center gap-2 text-sm text-white xl:text-black w-fit"
                >
                  <input
                    id="daylight"
                    type="checkbox"
                    defaultValue={new Date().getTime()}
                    checked={daylightCheck}
                    onChange={(e) => setDaylightCheck(e.target.checked)}
                  />
                  Daylight Saving Time
                </label>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-white xl:text-black font-semibold"
              >
                Gender <span className="text-red-500">*</span>
              </label>
              <Select
                open={openPopover.gender}
                onOpenChange={(val) =>
                  setOpenPopover((prevVal) => ({ ...prevVal, gender: val }))
                }
                onValueChange={(val) => setGender(val)}
              >
                <SelectTrigger
                  className={cn(
                    "h-12! focus-visible:ring-0 w-full text-black text-sm! xl:text-base! transition-all duration-200",
                    openPopover.gender
                      ? "bg-[#F6F6F0]! border-secondary!"
                      : "bg-[#F4FAFF]! xl:bg-[#A8A8A8]/10! border-[#898888] "
                  )}
                >
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent className="bg-[#F6F6F0]! border-secondary">
                  <SelectItem value="male" className="text-black!">
                    Male
                  </SelectItem>
                  <SelectItem value="female" className="text-black!">
                    Female
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <ButtonShaped
              text="Start Calculating"
              variant="light"
              height={62}
              width={282}
              buttonClassName="mt-10 xl:mt-2 mx-auto xl:mx-0 xl:ml-auto"
              disabled={!fullname || !email || !gender || !date}
            />
          </form>
        </div>
      </div>

      <p className="text-xs xl:text-base font-light italic text-center">
        Your data is safe and only used for your calculation results.
      </p>
    </div>
  );
};

export default BaziForm;
