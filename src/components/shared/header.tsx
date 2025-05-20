import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./index";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Heart } from "lucide-react";

interface Props {
  className?: string;
}

interface LinkProps {
  link: string;
  title: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  const links: LinkProps[] = [
    { link: "", title: "Home" },
    { link: "", title: "Antiquities" },
    { link: "", title: "Fine Art" },
    { link: "", title: "About" },
    { link: "", title: "Contacts" },
  ];

  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8 px-4">
        <Link className="logo" href="/">
          <Image
            src="/logo.png"
            alt="Musevio Logo"
            className="min-w-[186px]"
            width={186}
            height={39}
            priority
          />
        </Link>
        <div className="flex items-center">
          <nav>
            <ul className="flex items-center">
              {links.map((link, i) => (
                <li className="flex items-center relative" key={i}>
                  <Link
                    href=""
                    className="inline-block pr-10 text-link hover:text-primary text-lg group text-nowrap"
                  >
                    {link.title}
                    <ChevronRight
                      size={16}
                      className="absolute left-[-20px] top-1/2 -translate-y-1/2 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-[#801336] pointer-events-none"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Button
            variant="default"
            className="flex items-center text-lg font-[300]"
          >
            <Heart size={18} />
            Collections
          </Button>
        </div>
      </Container>
    </header>
  );
};
