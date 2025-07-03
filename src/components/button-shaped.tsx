import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import React, { HTMLAttributes } from "react";

interface ButtonShapedProps {
  text: string;
  variant: string | undefined;
  customClass?: string;
}

export default function ButtonShaped({
  text,
  variant = "system",
  customClass,
}: ButtonShapedProps) {
  const { systemTheme } = useTheme();

  return (
    <button
      className={cn(
        "relative flex items-center justify-center cursor-pointer",
        customClass
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 253 62"
        fill="none"
      >
        <path
          d="M1 51.1097C6.40327 51.1097 10.7825 55.5371 10.7825 61H242.218C242.218 55.5371 246.597 51.1097 252 51.1097V10.8903C246.597 10.8903 242.218 6.46285 242.218 1H10.7825C10.7825 6.46285 6.40327 10.8903 1 10.8903V51.1097Z"
          stroke={
            variant === "light"
              ? "#FFC447"
              : variant === "system"
              ? systemTheme === "light"
                ? "#FFDFB6"
                : "#647CA3"
              : "#647CA3"
          }
          strokeMiterlimit="10"
        />
      </svg>
      <div className="absolute w-[90%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 233 46"
          fill="none"
        >
          <path
            d="M221.698 45H11.3021C11.3021 39.44 6.69029 34.9338 1 34.9338V11.0662C6.69029 11.0662 11.3021 6.55997 11.3021 1L221.698 1C221.698 6.55997 226.31 11.0662 232 11.0662V34.9338C226.31 34.9338 221.698 39.44 221.698 45Z"
            fill={
              variant === "light"
                ? "#FFDFB6"
                : variant === "system"
                ? systemTheme === "light"
                  ? "#FFDFB6"
                  : "#263B43"
                : "#263B43"
            }
            stroke={
              variant === "light"
                ? "#FFC447"
                : variant === "system"
                ? systemTheme === "light"
                  ? "#FFDFB6"
                  : "#647CA3"
                : "#647CA3"
            }
            strokeMiterlimit="10"
          />
        </svg>
      </div>

      <p className="absolute text-typography">{text}</p>
    </button>
  );
}
