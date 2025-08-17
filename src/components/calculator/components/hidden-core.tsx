import React from "react";

export default function HiddenCoreSection() {
  return (
    <section className="flex flex-col gap-[30px]">
      <p className="font-oswald font-bold uppercase text-[32px] md:text-[52px] xl:text-[96px] 2xl:text-[120px] leading-[1.2em] xl:leading-[1em]">
        Hidden Core Personality
      </p>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8 h-full md:min-h-[400px] 2xl:min-h-[500px]">
        {[...new Array(3)].map((item, key) => (
          <div
            key={key}
            className="flex flex-col justify-center gap-6 p-8 md:p-10 lg:p-12 2xl:p-15 relative border-[3px] border-collapse border-secondary"
          >
            <img
              src="/images/Hidden Core Personality/left-top.svg"
              alt="Border Top Left"
              className="absolute top-[-3px] left-[-3px] max-w-[30%]"
            />
            <img
              src="/images/Hidden Core Personality/right-top.svg"
              alt="Border Top Right"
              className="absolute top-[-3px] right-[-3px] max-w-[30%]"
            />
            <img
              src="/images/Hidden Core Personality/left-bottom.svg"
              alt="Border Bottom Left"
              className="absolute bottom-[-3px] left-[-3px] max-w-[30%]"
            />
            <img
              src="/images/Hidden Core Personality/right-bottom.svg"
              alt="Border Bottom Right"
              className="absolute bottom-[-3px] right-[-3px] max-w-[30%]"
            />

            <img
              src="/images/Hidden Core Personality/Element/fire.png"
              alt="Element"
              className="w-full max-w-[120px] md:max-w-[180px] xl:max-w-[220px] object-cover object-center mx-auto"
            />
            <div className="flex flex-col gap-2 md:gap-3">
              <p className="font-oswald font-bold text-xl md:text-3xl uppercase">
                Bing Earth
              </p>
              <p className="font-light md:font-normal text-sm md:text-base 2xl:text-xl">
                The sacred mountain. Still, eternal, and wise. Through chaos,
                their silence echoes that all things shall pass.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
