import { Container, NoCollections } from "@/components/shared";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";
import { ArtworkCard } from "@/components/shared";
import Link from "next/link";
import React from "react";

const newCollection: string[] = ["Venus & Cupid"];

export default function Collections() {
  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">Collections</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[250px] flex-0 items-end lg:block flex overflow-y-auto lg:overflow-visible">
          <Link href="">
            <Button
              variant="default"
              className="w-[186px] h-[50px] mt-3 font-[300] lg:inline-flex hidden"
            >
              Saved Works
            </Button>
            <Button
              variant="default"
              size="custom"
              className="mt-3 font-[300] lg:hidden inline-flex"
            >
              Saved Works
            </Button>
          </Link>
          {newCollection &&
            newCollection?.map((item, i) => (
              <div key={i} className="flex mt-3 ml-3 lg:ml-0">
                <Link href="">
                  <Button
                    variant="outline"
                    className="w-[186px] h-[50px] font-normal lg:inline-flex hidden"
                  >
                    {item}
                  </Button>
                  <Button
                    variant="outline"
                    size="custom"
                    className="font-normal inline-flex lg:hidden"
                  >
                    {item}
                  </Button>
                </Link>
                <Link href="">
                  <Button
                    variant="add"
                    className="w-[50px] h-[50px] ml-2 lg:inline-flex hidden"
                  >
                    <Trash2 />
                  </Button>
                  <Button
                    variant="add"
                    size="fav"
                    className="w-[33.75px] h-[33.75px] ml-2 inline-flex lg:hidden"
                  >
                    <Trash2 size={16} strokeWidth={1.75} />
                  </Button>
                </Link>
              </div>
            ))}
          <Link href="">
            <Button
              variant="add"
              className="w-[186px] h-[50px] mt-3 font-normal lg:inline-flex hidden"
            >
              +Add New
            </Button>
            <Button
              variant="add"
              size="fav"
              className="w-[33.75px] h-[33.75px] ml-2 flex lg:hidden"
            >
              <Plus />
            </Button>
          </Link>
        </div>
        <div className="flex-1 lg:pl-5 pl-0 pb-10 mt-4.5 lg:mt-0">
          {/* This section ↓↓ and the lower one */}
          {/* <div className="flex justify-center items-center min-h-[350px]">
            <NoCollections />
          </div> */}
          {/* ↓↓ Should be tied together using if else operator to show the one it's needed */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            <ArtworkCard
              id={0}
              imageUrl="https://ids.lib.harvard.edu/ids/view/462508322?width=500"
              section="collections"
              title="This is my own Artwork"
              dated="1990"
              classification="Vasilicas"
              editCards
            />
            <ArtworkCard
              id={0}
              imageUrl="https://ids.lib.harvard.edu/ids/view/457650285?width=500"
              section="collections"
              title="This is my own Artwork"
              dated="1990"
              classification="Vasilicas"
              editCards
            />
            <ArtworkCard
              id={0}
              imageUrl="https://ids.lib.harvard.edu/ids/view/457600517?width=500"
              section="collections"
              title="This is my own Artwork"
              dated="1990"
              classification="Vasilicas"
              editCards
            />
            <ArtworkCard
              id={0}
              imageUrl="https://ids.lib.harvard.edu/ids/view/18726310?width=500"
              section="collections"
              title="This is my own Artwork"
              dated="1990"
              classification="Vasilicas"
              editCards
            />
            <ArtworkCard
              id={0}
              imageUrl="https://ids.lib.harvard.edu/ids/view/43164273?width=500"
              section="collections"
              title="This is my own Artwork"
              dated="1990"
              classification="Vasilicas"
              editCards
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
