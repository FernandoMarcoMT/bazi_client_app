import React from "react";
import { cn } from "@/lib/utils";

interface ButtonShapedProps {
  text: string;
  variant: string | undefined;
  buttonClassName?: string;
  textClassName?: string;
  greyscale?: boolean;
  height?: number;
  width?: number;
  disabled?: boolean;
}

export default function ButtonShaped({
  text,
  variant = "system",
  buttonClassName,
  textClassName,
  greyscale,
  width = 253,
  height = 62,
  disabled = false,
}: ButtonShapedProps) {
  const innerWidth = width - 20;
  const innerHeight = height - 16;

  return (
    <button
      className={cn(
        "relative w-fit flex items-center justify-center cursor-pointer group",
        buttonClassName
      )}
      disabled={disabled}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
      >
        <path
          d={`M1 ${height - 11}.1097C6.40327 ${height - 11}.1097 10.7825 ${
            height - 7
          }.5371 10.7825 ${height - 1}H${width - 11}.218C${width - 11}.218 ${
            height - 7
          }.5371 ${width - 7}.597 ${height - 11}.1097 ${width - 1} ${
            height - 11
          }.1097V10.8903C${width - 7}.597 10.8903 ${width - 11}.218 6.46285 ${
            width - 11
          }.218 1H10.7825C10.7825 6.46285 6.40327 10.8903 1 10.8903V51.1097Z`}
          className={cn(
            (greyscale || disabled) && "grayscale-100",
            variant === "system"
              ? "stroke-outer-stroke duration-200"
              : variant === "light"
              ? "dark:stroke-light-outer-stroke not-dark:stroke-[#CB8F19] duration-200"
              : "stroke-dark-outer-stroke group-hover:stroke-dark-outer-stroke/60 duration-200"
          )}
          strokeMiterlimit="10"
        />
      </svg>

      <div className="absolute w-[95%] flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={innerWidth}
          height={innerHeight}
          viewBox={`0 0 ${innerWidth} ${innerHeight}`}
          fill="none"
        >
          <path
            d={`M221.698 ${innerHeight - 1}H11.3021C11.3021 ${
              innerHeight - 7
            }.${innerHeight - 2} 6.69029 ${innerHeight - 12}.9338 1 ${
              innerHeight - 12
            }.9338V11.0662C6.69029 11.0662 11.3021 6.55997 11.3021 1L${
              innerWidth - 12
            }.698 1C${innerWidth - 12}.698 6.55997 ${
              innerWidth - 7
            }.31 11.0662 ${innerWidth - 1} 11.0662V${innerHeight - 12}.9338C${
              innerWidth - 7
            }.31 ${innerHeight - 12}.9338 ${innerWidth - 12}.698 ${
              innerHeight - 7
            }.${innerHeight - 2} ${innerWidth - 12}.698 ${innerHeight - 1}Z`}
            className={cn(
              (greyscale || disabled) && "grayscale-100",
              variant === "system"
                ? "stroke-inner-stroke fill-inner-fill duration-200"
                : variant === "light"
                ? "dark:stroke-light-outer-stroke not-dark:stroke-[#CB8F19] dark:fill-light-inner-fill not-dark:fill-[#E9B562] duration-200"
                : "stroke-dark-outer-stroke fill-dark-inner-fill group-hover:fill-dark-inner-fill/60 duration-200"
            )}
            strokeMiterlimit="10"
          />
        </svg>
      </div>

      <p
        className={cn(
          "absolute text-typography font-semibold leading-none",
          textClassName,
          variant === "light" ? "text-black" : "text-typography"
        )}
      >
        {text}
      </p>
    </button>
  );
}
