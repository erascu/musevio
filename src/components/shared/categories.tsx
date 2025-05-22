import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Category {
  name: string;
  href: string;
}

interface Props {
  className?: string;
  categories: Category[];
}

const activeIndex: number = 0;

export const Categories: React.FC<Props> = ({ categories, className }) => {
  return (
    <div
      className={cn(
        "inline-flex gap-[7px] py-2 w-[100%] overflow-y-auto",
        className
      )}
    >
      {categories.map((cat, i) => (
        <Link href={cat.href} key={i}>
          <Button
            variant={activeIndex === i ? "default" : "outline"}
            size="custom"
            className={cn("!text-sm", className)}
          >
            {cat.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};
