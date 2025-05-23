"use client";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { ChevronRight, Heart, Menu } from "lucide-react";
import React from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Link from "next/link";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

interface Props {
  className?: string;
}

const menuItems: {
  name: string;
  href: string;
}[] = [
  { name: "Home", href: "/" },
  { name: "Antiquities", href: "/antiquities" },
  { name: "Fine Art", href: "/fineart" },
  { name: "About", href: "/about" },
  { name: "Contacts", href: "/contacts" },
];

export const BurgerMenu: React.FC<Props> = ({ className }) => {
  const pathname = usePathname();

  return (
    <div className={cn("relative", className)}>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon">
            <Menu className="text-wine" size="30" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="bg-wine flex flex-col">
          <DialogTitle className="sr-only">Musevio navigation menu</DialogTitle>
          <DialogDescription className="sr-only">
            Use this menu to navigate to the main sections of the site.
          </DialogDescription>
          <div className="absolute top-5 left-5">
            <Link href="/collections">
              <Button
                variant="favnav"
                className="flex items-center text-lg font-[300] w-[165px]"
              >
                <Heart size={18} />
                Collections
              </Button>
            </Link>
          </div>
          <nav className="pt-20">
            {menuItems.map((item, i) => {
              const isActive = pathname === item.href;
              return (
                <SheetClose key={i} asChild>
                  <Link
                    href={item.href}
                    className={`relative w-full flex justify-center items-center h-[70px] text-center !text-[22px] font-[300] text-white ${
                      isActive && "bg-[#4B0C23]"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <ChevronRight
                        size={22}
                        className="text-white absolute top-1/2 -translate-1/2 left-20"
                      />
                    )}
                  </Link>
                </SheetClose>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};
