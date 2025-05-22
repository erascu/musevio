import {
  ArtworkCard,
  Categories,
  Container,
  SortPopup,
} from "@/components/shared";
import { Input } from "@/components/ui";
import { Search } from "lucide-react";
import React from "react";

const fineartCats = [
  { name: "All", href: "" },
  { name: "Paintings", href: "" },
  { name: "Sculptures", href: "" },
  { name: "Drawings", href: "" },
  { name: "Prints", href: "" },
  { name: "Monotypes", href: "" },
  { name: "Miniatures", href: "" },
];

export default function FineArt() {
  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">Fine Art</h1>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between items-start flex-col min-[1100px]:flex-row min-[1100px]:items-center">
          <Categories categories={fineartCats} />
          <div className="relative">
            <Input
              placeholder="Search"
              className="!text-sm text-wine pl-8 w-[100%] min-[370px]:w-[335px]"
            />
            <Search
              strokeWidth={1.5}
              className="text-ring absolute top-[5px] left-[7px]"
            />
          </div>
        </div>
        <SortPopup />
      </div>
      <div className="pt-3 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ArtworkCard
          id={0}
          section="fineart"
          imageUrl="https://www.artic.edu/iiif/2/1bc27523-6b27-d9b1-4ea0-ec436d6fd95e/full/843,/0/default.jpg"
          title="Skyphos (Drinking Cup)"
          classification="Vessel"
          dated="410-400 BCE"
        />
      </div>
    </Container>
  );
}
