"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input, Button } from "@/components/ui";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const inputRef = useRef<HTMLInputElement | null>(null);

  const initialSearch = searchParams.get("keyword") || "";
  const [search, setSearch] = useState(initialSearch);

  useEffect(() => {
    setSearch(searchParams.get("keyword") || "");
  }, [searchParams]);

  const clearInput = () => {
    setSearch("");
    const newParams = new URLSearchParams(searchParams.toString());
    newParams.delete("keyword");
    newParams.set("page", "1");
    router.push(`?${newParams.toString()}`);
    inputRef.current?.focus();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = e.target.value;
    setSearch(newSearch);

    const newParams = new URLSearchParams(searchParams.toString());
    if (newSearch) {
      newParams.set("keyword", newSearch);
    } else {
      newParams.delete("keyword");
    }
    newParams.set("page", "1");
    router.push(`?${newParams.toString()}`);
  };

  return (
    <div className={cn("relative", className)}>
      <label htmlFor="searchInput" className="sr-only">
        Search
      </label>
      <Input
        id="searchInput"
        ref={inputRef}
        placeholder="Search"
        value={search}
        onChange={onChange}
        className="!text-sm text-wine pl-8 pr-5 w-[100%] min-[370px]:w-[335px]"
      />
      {search && (
        <Button
          size="searchClose"
          variant="ghost"
          className="absolute top-1/4 right-0"
          onClick={clearInput}
          aria-label="Clear search input"
        >
          <X strokeWidth={1.5} className="text-ring" />
        </Button>
      )}
      <Search
        strokeWidth={1.5}
        className="text-ring absolute top-[5px] left-[7px]"
        aria-hidden="true"
      />
    </div>
  );
};
