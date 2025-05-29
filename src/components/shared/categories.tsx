"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface Category {
  name: string;
  filterString: string;
}

interface Props {
  className?: string;
  categories: Category[];
}

export const Categories: React.FC<Props> = ({ categories, className }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const currentFilter = searchParams.get("filterBy") || "All";

  const [activeFilter, setActiveFilter] = useState(currentFilter);

  const handleClick = (filter: string) => {
    setActiveFilter(filter);

    const newParams = new URLSearchParams(searchParams.toString());
    newParams.set("filterBy", filter);
    newParams.set("page", "1");
    router.push(`?${newParams.toString()}`);
  };

  useEffect(() => {
    setActiveFilter(currentFilter);
  }, [currentFilter]);

  return (
    <div
      className={cn(
        "inline-flex gap-[7px] py-2 w-[100%] overflow-y-auto",
        className
      )}
    >
      {categories.map((cat, i) => (
        <Button
          key={i}
          variant={cat.filterString === activeFilter ? "default" : "outline"}
          size="custom"
          className={cn("!text-sm", className)}
          onClick={() => handleClick(cat.filterString)}
        >
          {cat.name}
        </Button>
      ))}
    </div>
  );
};
