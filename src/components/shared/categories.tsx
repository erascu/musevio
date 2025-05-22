import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  className?: string;
}

interface Category {
  name: string;
  href: string;
}

const cats: Category[] = [
  { name: "All", href: "" },
  { name: "Coins", href: "" },
  { name: "Sculptures", href: "" },
  { name: "Vessels", href: "" },
  { name: "Jewelery", href: "" },
  { name: "Seals", href: "" },
  { name: "Manuscripts", href: "" },
];

const activeIndex: number = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "inline-flex gap-[7px] py-2 w-[100%] overflow-y-auto",
        className
      )}
    >
      {cats.map((cat, i) => (
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
