import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Skeleton } from "@/components/ui";

interface Props {
  className?: string;
}

export const HomeSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative w-[585px] h-[389px] bg-card rounded-lg",
        className
      )}
    >
      <Skeleton className="w-full h-full rounded-lg" />
      <Image
        src="img.svg"
        alt="Image loading icon"
        width={50}
        height={50}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
};
