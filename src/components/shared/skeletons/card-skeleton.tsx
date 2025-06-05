import { cn } from "@/lib/utils";
import React from "react";
import { Skeleton } from "@/components/ui"; // Assuming you have a Skeleton component

interface Props {
  className?: string;
}

export const CardSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("bg-card rounded-lg min-h-[350px] shadow-md", className)}
    >
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[165px] w-full rounded-t-lg" />
        <div className="space-y-2">
          <Skeleton className="h-4 ml-4 w-[250px] rounded-lg" />
          <Skeleton className="h-4 ml-4 w-[250px] rounded-lg" />
          <Skeleton className="h-4 ml-4 w-[150px] rounded-lg" />
          <Skeleton className="h-4 ml-4 w-[180px] rounded-lg" />
        </div>
      </div>
    </div>
  );
};
