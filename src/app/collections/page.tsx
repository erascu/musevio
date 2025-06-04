"use client";
import {
  ArtworkCard,
  Container,
  NoCollections,
  SavedColPanel,
} from "@/components/shared";
import React from "react";
import { useFavItemsStore } from "@/stores/favItems-store";
import { useParams } from "next/navigation";

export default function Collections() {
  const favItems = useFavItemsStore((state) => state.favItems);

  const { section } = useParams<{ section: string }>();
  const activeSection = decodeURIComponent(section || "");

  const filteredItems = favItems.filter((item) =>
    activeSection
      ? item.newCollectionSect === activeSection
      : !item.newCollectionSect
  );

  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">Collections</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <SavedColPanel />
        <div className="flex-1 lg:pl-5 pl-0 pb-10 mt-4.5 lg:mt-0">
          <div
            className={
              filteredItems.length > 0
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                : "flex justify-center items-center min-h-[350px]"
            }
          >
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <ArtworkCard
                  key={item.id}
                  id={item.id}
                  section={item.section}
                  imageUrl={item.imageUrl ?? ""}
                  title={item.title ?? ""}
                  classification={item.classification ?? ""}
                  dated={item.dated ?? ""}
                  newCollectionSect={item.newCollectionSect}
                  collection={item.collection}
                  editCards
                />
              ))
            ) : (
              <NoCollections />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
