import ButtonShaped from "@/components/button-shaped";
import CollapsedItem from "../collapsed-item";
import { useState } from "react";

export default function OthersTab() {
  const [collapse, setCollapse] = useState<string[]>(["1"]);

  function handleCollapseItem(item: string) {
    let newCollapse = collapse;

    if (newCollapse.includes(item)) {
      newCollapse = newCollapse.filter((col) => col !== item);
    } else {
      newCollapse.push(item);
    }

    setCollapse([...newCollapse]);
  }

  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <CollapsedItem
        itemId="1"
        triggerText="Others"
        collapse={collapse}
        onCollapse={handleCollapseItem}
      >
        <div className="flex flex-col w-full gap-4 md:gap-6">
          <p className="font-oswald font-bold text-base md:text-2xl uppercase">
            Jump Back To:
          </p>

          <div className="flex flex-col md:flex-row gap-1 justify-between">
            <ButtonShaped
              text="Core Identity"
              variant="light"
              buttonClassName="scale-70 md:scale-100 w-fit -left-11 md:left-0 h-[50px] md:h-auto"
              textClassName="text-white! text-xl"
              greyscale
            />
            <ButtonShaped
              width={400}
              text="Inherent Strength and Shadow Aspect"
              variant="light"
              buttonClassName="scale-70 md:scale-100 w-fit -left-17 md:left-0 h-[50px] md:h-auto"
              textClassName="text-white! text-xl"
              greyscale
            />
            <ButtonShaped
              width={350}
              text="Personal and Professional Growth"
              variant="light"
              buttonClassName="scale-70 md:scale-100 w-fit -left-15 md:left-0 h-[50px] md:h-auto"
              textClassName="text-white! text-xl"
              greyscale
            />
          </div>
        </div>
      </CollapsedItem>
    </div>
  );
}
