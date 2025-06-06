"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface Props {
  className?: string;
}

export const Footer: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("py-8 px-4 border-t", className)}>
      <Container>
        <p className="!text-[11px] sm:!text-sm text-ring font-light text-center lg:text-left">
          ©2025 Musevio – art. history. online. All Rights Reserved.
        </p>
      </Container>
    </footer>
  );
};
