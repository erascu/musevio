import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React from "react";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 pb-2 pt-2 min-[1100px]:pt-0 cursor-pointer",
        className
      )}
    >
      <ArrowUpDown size={14} />
      <p className="!text-sm">Sort by:</p>
      <p className="text-wine !text-sm">views</p>
    </div>
  );
};
