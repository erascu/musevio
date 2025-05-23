"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BurgerMenu } from "./index";
import { usePathname } from "next/navigation";
import { Container } from "./index";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

interface Props {
  className?: string;
}

interface LinkProps {
  href: string;
  title: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const links: LinkProps[] = [
    { href: "/", title: "Home" },
    { href: "/antiquities", title: "Antiquities" },
    { href: "/fineart", title: "Fine Art" },
    { href: "/about", title: "About" },
    { href: "/contacts", title: "Contacts" },
  ];

  const pathname = usePathname();

  return (
    <header className={cn("", className)}>
      <Container className="flex items-center justify-between py-8 px-4">
        <Link className="logo" href="/">
          <Image
            src="/logo.png"
            alt="Musevio Logo"
            className="min-w-[186px] hover:transition-all hover:opacity-90"
            width={186}
            height={39}
            priority
          />
        </Link>
        <div className="flex items-center">
          <BurgerMenu className="lg:hidden" />
          <nav className="hidden lg:block">
            <ul className="flex items-center">
              {links.map((item, i) => (
                <li className="flex items-center relative" key={i}>
                  <Link
                    href={item.href}
                    className={`inline-block mr-10 text-primary focus:text-wine hover:text-wine text-lg group text-nowrap ${
                      pathname === item.href && "text-wine"
                    }`}
                  >
                    {item.title}
                    {item.href === pathname ? (
                      <ChevronRight
                        size={16}
                        className="text-wine absolute left-[-20px] top-1/2 -translate-y-1/2"
                      />
                    ) : (
                      <ChevronRight
                        size={16}
                        className="absolute left-[-20px] top-1/2 -translate-y-1/2 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-wine pointer-events-none"
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/collections" className="hidden lg:block">
            <Button
              variant="default"
              className="flex items-center text-lg font-[300]"
            >
              <Heart size={18} />
              Collections
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};
