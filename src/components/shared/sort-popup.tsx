"use client";
import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import React, { useRef, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface Props {
  className?: string;
}

const sortItems = [
  { label: "views", value: { sort: "totalpageviews", sortorder: "desc" } },
  { label: "rank ↓", value: { sort: "rank", sortorder: "desc" } },
  { label: "rank ↑", value: { sort: "rank", sortorder: "asc" } },
  { label: "updated ↓", value: { sort: "createdate", sortorder: "desc" } },
  { label: "updated ↑", value: { sort: "createdate", sortorder: "asc" } },
];

export const SortPopup: React.FC<Props> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort");
  const currentOrder = searchParams.get("sortorder");

  const sortActive = sortItems.findIndex(
    (item) =>
      item.value.sort === currentSort && item.value.sortorder === currentOrder
  );

  const activeIndex = sortActive === -1 ? 0 : sortActive;

  const handleSortClick = (index: number) => {
    const { sort, sortorder } = sortItems[index].value;

    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", sort);
    params.set("sortorder", sortorder);
    params.set("page", "1");

    router.push(`?${params.toString()}`);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (sortRef.current && !e.composedPath().includes(sortRef.current)) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => document.body.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={cn("relative z-30", className)}>
      <div
        ref={sortRef}
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 pb-2 pt-2 min-[1100px]:pt-0 cursor-pointer"
      >
        <ArrowUpDown size={14} />
        <p className="!text-sm select-none">Sort by:</p>
        <span className="text-wine !text-sm select-none">
          {sortItems[sortActive]?.label || "views"}
        </span>
      </div>
      <div
        className={`absolute left-0 top-7 bg-background border border-wine shadow-lg overflow-hidden min-w-35 rounded-r-xl rounded-bl-xl ${
          open === false && "hidden"
        }`}
      >
        <ul className="overflow-hidden">
          {sortItems.map((item, i) => (
            <li
              key={i}
              onClick={() => handleSortClick(i)}
              className={`cursor-pointer px-3 py-1 text-wine hover:bg-wine hover:text-white transition-all select-none ${
                activeIndex === i ? "bg-wine !text-white hover:bg-wine/90" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
