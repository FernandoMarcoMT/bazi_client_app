import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

interface CollapsedItemProps {
  itemId: string;
  children: ReactNode;
  triggerText: string;
  onCollapse: (itemId: string) => void;
  collapse: string[];
}

export default function CollapsedItem({
  itemId,
  children,
  collapse,
  onCollapse,
  triggerText,
}: CollapsedItemProps) {
  return (
    <div className="flex flex-col border-2 border-secondary rounded-lg md:rounded-xl overflow-hidden">
      <div
        className="flex items-center justify-between py-2 px-3 md:p-4 xl:p-6 bg-secondary cursor-pointer"
        onClick={() => onCollapse(itemId)}
      >
        <p className="font-oswald font-bold text-lg md:text-xl xl:text-3xl text-black uppercase">
          {triggerText}
        </p>

        <ChevronDown
          className={cn(
            "text-black duration-200",
            collapse.includes(itemId) ? "rotate-180" : "rotate-0"
          )}
        />
      </div>

      <div
        className={cn(
          "flex flex-col md:flex-row justify-between gap-[14px] md:gap-7 duration-200",
          collapse.includes(itemId)
            ? "h-full p-[14px] md:p-8 opacity-100"
            : "h-0 p-0 opacity-20"
        )}
      >
        {children}
      </div>
    </div>
  );
}
