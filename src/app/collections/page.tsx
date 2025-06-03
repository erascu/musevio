"use client";
import {
  ArtworkCard,
  Container,
  NoCollections,
  SavedColPanel,
} from "@/components/shared";
import React from "react";
import { useFavItemsStore } from "@/stores/favItems-store";

export default function Collections() {
  const favItems = useFavItemsStore((state) => state.favItems);

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
              favItems.length > 0
                ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                : "flex justify-center items-center min-h-[350px]"
            }
          >
            {favItems.length > 0 ? (
              favItems.map((item) => (
                <ArtworkCard
                  key={item.id}
                  id={item.id}
                  section={item.section}
                  imageUrl={item.imageUrl ?? ""}
                  title={item.title ?? ""}
                  classification={item.classification ?? ""}
                  dated={item.dated ?? ""}
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
