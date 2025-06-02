"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { Heart, Trash2 } from "lucide-react";
import { useFavItemsStore } from "@/stores/favItems-store";

interface Props {
  id: number;
  section: string;
  imageUrl: string;
  title: string;
  classification: string;
  dated: number | string;
  editCards?: boolean;
  className?: string;
}

export const ArtworkCard: React.FC<Props> = ({
  id,
  section,
  title,
  classification,
  dated,
  imageUrl,
  editCards,
  className,
}) => {
  // const addFavItem = useFavItemsStore((state) => state.addFavItem);
  const removeFavItem = useFavItemsStore((state) => state.removeFavItem);
  const toggleFavItem = useFavItemsStore((state) => state.toggleFavItem);
  const isActive = useFavItemsStore((state) => state.isActive(id, section));

  return (
    <div
      className={cn(
        "bg-card rounded-lg min-h-[350px] shadow-md  relative",
        className
      )}
    >
      <div className="relative h-[165px] w-[full]">
        <Image
          loading="lazy"
          src={imageUrl ? imageUrl : "no-img.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="rounded-t-lg object-cover"
          style={{ objectPosition: "center 25%" }}
        />
        <Button
          variant="fav"
          onClick={() => {
            toggleFavItem({
              id,
              section,
              title,
              classification,
              dated,
              imageUrl,
              editCards,
            });
          }}
          size="fav"
          className={`absolute group top-2.5 right-2.5 bg-card p-1 ${
            editCards && "hidden"
          }`}
        >
          <Heart
            strokeWidth={2}
            size={20}
            className={`group-hover:transition-all group-hover:text-wine group-active:text-wine group-active:fill-wine group-focus:fill-wine group-focus:text-wine ${
              isActive && "text-wine fill-wine"
            }`}
          />
        </Button>
      </div>
      <div className="px-5 py-2">
        <h2>
          <Link href={`/${section}/${id}`}>
            <span className="playfair font-bold hover:underline">
              {(!title ? "" : title.length > 75)
                ? title.substring(0, 65) + "..."
                : title}
            </span>
          </Link>
        </h2>
        <p className="!text-base text-ring italic">{classification}</p>
        <p className="!text-base">{dated}</p>
        {editCards && (
          <Button
            onClick={() => removeFavItem(id)}
            variant="ghost"
            size="fav"
            className="absolute right-4 bottom-4"
          >
            <Trash2 size={20} className="text-ring" />
          </Button>
        )}
      </div>
    </div>
  );
};
