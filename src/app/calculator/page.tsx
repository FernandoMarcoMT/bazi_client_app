"use client";

import { useState, useContext } from "react";
import { BaziCalculatorContext } from "@/context/BaziCalculatorContext";
import { BaziCalculatorProvider } from "@/context/BaziCalculatorContext";
import BaziForm from "@/components/calculator/form";
import BaziResultChart from "@/components/calculator/result";

// Child component to use context
const CalculatorContent = () => {
  const context = useContext(BaziCalculatorContext);

  if (!context) {
    throw new Error(
      "CalculatorContent must be wrapped in BaziCalculatorProvider"
    );
  }

  const { results } = context;
  const [step, setStep] = useState<number>(0);

  const onSubmit = () => {
    console.log("=====> Changing page");
    setStep(1);
  };

  return (
    <>
      {step === 0 && <BaziForm onSubmit={onSubmit} />}
      {step === 1 && results && (
        <BaziResultChart lunar={results} gender={context.gender} />
      )}
      {step === 1 && !results && <p>Calculating or no results yet...</p>}
    </>
  );
};

export default function BaziCalculator() {
  return (
    <BaziCalculatorProvider>
      <CalculatorContent />
    </BaziCalculatorProvider>
  );
}
