import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const NoCollections: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("", className)}>
      <Container className="p-4 my-20 flex flex-col items-center">
        <div className="flex lg:flex-row flex-col items-center">
          <Image
            src="/no-fav-items.svg"
            alt="No favorite items yet"
            width={142}
            height={139}
          />
          <div className="min-[1100px]:max-w-[550px] min-[1024px]:max-w-[450px] max-w-[400px] mt-3 lg:ml-7 ml-0">
            <h2 className="playfair font-bold min-[1100px]:!text-6xl min-[1024px]:!text-5xl !text-4xl lg:text-left text-center">
              You haven’t saved any artworks yet
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p className="mt-3 text-ring lg:!text-base lg:max-w-[650px] max-w-[335px] text-center">
            Start curating your personal collection by exploring antiquities and
            fine art. Tap the heart icon on any piece to save.
          </p>
        </div>
      </Container>
    </div>
  );
};
