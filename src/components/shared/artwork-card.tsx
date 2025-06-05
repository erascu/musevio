"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui";
import { Heart, Trash2 } from "lucide-react";
import { useFavItemsStore } from "@/stores/favItems-store";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNewCollectionStore } from "@/stores/section-store";

interface Props {
  id: number;
  section: string;
  imageUrl: string;
  title: string;
  classification: string;
  dated: number | string;
  editCards?: boolean;
  newCollectionSect?: string;
  collection?: string;
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
  newCollectionSect,
  collection,
  className,
}) => {
  // const addFavItem = useFavItemsStore((state) => state.addFavItem);
  const removeFavItem = useFavItemsStore((state) => state.removeFavItem);
  const toggleFavItem = useFavItemsStore((state) => state.toggleFavItem);
  const isActive = useFavItemsStore((state) => state.isActive(id, section));

  const newCollection = useNewCollectionStore((state) => state.newCollection);
  const moveToCollection = useFavItemsStore((state) => state.moveToCollection);

  return (
    <div
      className={cn(
        `bg-card rounded-lg ${
          newCollection.length > 0 && editCards
            ? "min-h-[400px]"
            : "min-h-[350px]"
        } shadow-md  relative`,
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
              collection,
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
            className={`group-hover:transition-all group-hover:text-wine group-active:text-wine group-active:fill-wine ${
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
        <div className="absolute right-14 bottom-4">
          {newCollection.length > 0 && editCards && (
            <Select
              value={newCollectionSect || ""}
              onValueChange={(value) => moveToCollection(id, value)}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Move to..." />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectItem value="Saved Works">Saved Works</SelectItem> */}
                  {newCollection
                    ? newCollection.map((col) => (
                        <SelectItem key={col} value={col}>
                          {col}
                        </SelectItem>
                      ))
                    : ""}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}
        </div>
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
