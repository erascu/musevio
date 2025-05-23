import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { Heart } from "lucide-react";

interface Props {
  id: number;
  section: string;
  imageUrl: string;
  title: string;
  classification: string;
  dated: number | string;
  className?: string;
}

export const ArtworkCard: React.FC<Props> = ({
  id,
  section,
  title,
  classification,
  dated,
  imageUrl,
  className,
}) => {
  return (
    <div
      className={cn("bg-card rounded-lg min-h-[350px] shadow-md", className)}
    >
      <div className="relative h-[165px] w-[full]">
        <Image
          loading="lazy"
          src={imageUrl ? imageUrl : "no-img.svg"}
          alt={title}
          fill
          sizes="100vw"
          className="rounded-t-lg object-cover"
        />
        <Button
          variant="fav"
          size="fav"
          className="absolute group top-2.5 right-2.5 bg-card p-1"
        >
          <Heart
            strokeWidth={2}
            size={20}
            className="group-hover:transition-all group-hover:text-wine"
          />
        </Button>
      </div>
      <div className="px-5 py-2">
        <h2>
          <Link href={`/${section}/${id}`}>
            <span className="playfair font-bold hover:underline">{title}</span>
          </Link>
        </h2>
        <p className="!text-base text-ring italic">{classification}</p>
        <p className="!text-base">{dated}</p>
      </div>
    </div>
  );
};
