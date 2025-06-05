import { cn } from "@/lib/utils";
import React from "react";
import { Skeleton } from "@/components/ui/";

interface Props {
  className?: string;
}

export const InfoSkeleton: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("min-h-[550px]", className)}>
      <div className="max-w-7xl flex flex-col-reverse lg:flex-row lg:gap-16 gap-5 py-8 items-center lg:items-start">
        <div className="space-y-2 lg:w-1/2 self-start w-full">
          <Skeleton className="h-6 min-[580px]:ml-4 ml-0 lg:max-w-[600px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-6 min-[580px]:ml-4 ml-0 lg:max-w-[600px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-6 min-[580px]:ml-4 ml-0 lg:max-w-[600px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-5 min-[580px]:ml-4 ml-0 max-w-[200px] rounded-lg" />
          <Skeleton className="mt-7 h-4 min-[580px]:ml-4 ml-0 max-w-[300px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 max-w-[300px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 max-w-[300px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 max-w-[300px] rounded-lg" />
          <Skeleton className="mt-7 h-4 min-[580px]:ml-4 ml-0 lg:max-w-[600px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 lg:max-w-[600px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 lg:max-w-[570px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 lg:max-w-[600px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 lg:max-w-[570px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 lg:max-w-[550px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 lg:max-w-[600px] max-w-[1000px] rounded-lg" />
          <Skeleton className="h-4 min-[580px]:ml-4 ml-0 lg:max-w-[600px] max-w-[1000px] rounded-lg" />
        </div>
        <div className="h-full min-[580px]:w-[500px] w-full lg:max-h-[550px] min-[500px]:max-h-[400px] max-h-[300px] overflow-hidden bg-gray-100 flex items-start justify-center rounded-xl">
          <Skeleton className="h-[550px] w-full rounded-t-lg" />
        </div>
      </div>
    </div>
  );
};
