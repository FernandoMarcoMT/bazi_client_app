"use client";

import React, { useContext, useEffect } from "react";

import { Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { BaziCalculatorContext } from "@/context/BaziCalculatorContext";
import { NavBar } from "../navBar";

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
    gender,
    year,
    month,
    day,
    hour,
    minutes,
    email,
    setFullName,
    setGender,
    setYear,
    setMonth,
    setDay,
    setHour,
    setMinutes,
    setEmail,
    getFormData,
    validateForm,
    submitForm,
    error, // Destructure the error state
  } = context;

  const handleSubmit = async () => {
    await submitForm();
    console.log("--------> Done");
    props.onSubmit();
  };

  useEffect(() => {
    if (month && year && day) {
      const maxDays = getDaysInMonth(month, year);
      const currentDay = parseInt(day, 10);
      if (currentDay > maxDays) {
        setDay(maxDays.toString()); // Set to the maximum valid day
      }
    }
  }, [month, year, day, setDay]);

  const getDaysInMonth = (month: string, year: string): number => {
    const monthNum = parseInt(month, 10);
    const yearNum = parseInt(year, 10);

    if (isNaN(monthNum) || isNaN(yearNum) || monthNum < 1 || monthNum > 12) {
      return 31; // Default for invalid inputs
    }

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (monthNum === 2) {
      const isLeapYear =
        (yearNum % 4 === 0 && yearNum % 100 !== 0) || yearNum % 400 === 0;
      return isLeapYear ? 29 : 28;
    }

    return daysInMonth[monthNum - 1];
  };

  const dayOptions = Array.from(
    { length: month && year ? getDaysInMonth(month, year) : 31 },
    (_, idx) => idx + 1
  );

  return (
    <div className="w-full flex flex-col grow gap-8 h-full items-center justify-center bg-white md:bg-[url('/images/background.jpg')] md:bg-gray-700 md:bg-blend-multiply bg-cover">
      <div>
        <h1 className="text-center text-2xl font-medium text-amber-600">
          FILL IN REQUIRED INFO TO PROCEED
        </h1>
        <p className="text-center text-black md:text-white font-light">
          Please provide accurate details to receive your precise calculation.
        </p>
      </div>

      <div className="w-full p-4 md:w-md space-y-6 md:border md:border-black/25 md:rounded-xl md:py-12 md:px-8 bg-white">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <div className="relative">
            <User className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="fullName"
              placeholder="Enter your full name"
              className="pl-10"
              value={fullname}
              onChange={(event) => setFullName(event.target.value)}
            />
          </div>
          {error.fullname && (
            <p className="text-red-500 text-sm">{error.fullname}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <Select value={gender} onValueChange={setGender}>
            <SelectTrigger id="gender">
              <SelectValue placeholder="Select your gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
            </SelectContent>
          </Select>
          {error.gender && (
            <p className="text-red-500 text-sm">{error.gender}</p>
          )}
        </div>

        <div className="space-y-2">
          <p className="font-medium text-sm">Date of Birth</p>
          <div className="flex gap-4">
            <div className="w-full">
              <Select value={year} onValueChange={setYear}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 120 }, (_, idx) => (
                    <SelectItem key={idx} value={`${2025 - idx}`}>
                      {2025 - idx}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {error.year && (
                <p className="text-red-500 text-sm">{error.year}</p>
              )}
            </div>

            <div className="w-full">
              <Select value={month} onValueChange={setMonth}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, idx) => (
                    <SelectItem key={idx} value={`${idx + 1}`}>
                      {idx + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {error.month && (
                <p className="text-red-500 text-sm">{error.month}</p>
              )}
            </div>

            <div className="w-full">
              <Select value={day} onValueChange={setDay}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {dayOptions.map((dayNum) => (
                    <SelectItem key={dayNum} value={`${dayNum}`}>
                      {dayNum}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {error.day && <p className="text-red-500 text-sm">{error.day}</p>}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-medium text-sm">Time of Birth</p>
          <div className="flex gap-4">
            <div className="w-full">
              <Select value={hour} onValueChange={setHour}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Hour" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 24 }, (_, idx) => (
                    <SelectItem key={idx} value={`${idx}`}>
                      {idx}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {error.hour && (
                <p className="text-red-500 text-sm">{error.hour}</p>
              )}
            </div>

            <div className="w-full">
              <Select value={minutes} onValueChange={setMinutes}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Minutes" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 60 }, (_, idx) => (
                    <SelectItem key={idx} value={`${idx}`}>
                      {idx}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {error.minutes && (
                <p className="text-red-500 text-sm">{error.minutes}</p>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="pl-10"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          {error.email && <p className="text-red-500 text-sm">{error.email}</p>}
        </div>

        <Button
          className="font-bold bg-amber-600 text-white w-full hover:bg-amber-700"
          onClick={handleSubmit}
        >
          Calculate
        </Button>
      </div>

      <div>
        <p className="text-center text-black italic md:text-white font-light">
          Your data is safe and only used for your calculation results.
        </p>
      </div>
    </div>
  );
};

export default BaziForm;
