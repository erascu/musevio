import {
  ArtworkCard,
  Categories,
  Container,
  PaginationWithLinks,
  SearchInput,
  // SortPopup,
} from "@/components/shared";
import React from "react";
import { getFineArt } from "../services/api";
import NotFound from "../not-found";

const fineartCats = [
  { name: "All", filterString: "All" },
  { name: "Paintings", filterString: "Painting" },
  { name: "Sculptures", filterString: "Sculpture" },
  { name: "Drawings", filterString: "Drawing" },
  { name: "Prints", filterString: "Print" },
  { name: "Monotypes", filterString: "Monotype" },
  { name: "Miniatures", filterString: "Miniature" },
];

interface ItemsProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function FineArt({ searchParams }: ItemsProps) {
  try {
    const params = await searchParams;
    const currentPage = parseInt((params.page as string) || "1");
    const filter = (params.filterBy as string) || "";
    const searchQuery = (params.keyword as string) || "";

    const { fineArtInfo, fetchedFineArt } = await getFineArt(
      currentPage,
      filter,
      searchQuery
    );

    return (
      <Container className="px-4">
        <div className="w-[250px] border-b pb-3">
          <h1 className="playfair !text-4xl font-bold">Fine Art</h1>
        </div>
        <div className="flex flex-col ">
          <div className="flex justify-between items-start flex-col min-[1100px]:flex-row min-[1100px]:items-center">
            <Categories categories={fineartCats} />
            <SearchInput />
          </div>
          {/* <SortPopup /> */}
        </div>
        {fetchedFineArt.length === 0 && fineArtInfo.total > 0 && <NotFound />}
        <div className="pt-3 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fineArtInfo.total === 0 && searchQuery && (
            <div className="flex justify-center items-center">
              No &apos;{searchQuery}&apos; records found
            </div>
          )}
          {fetchedFineArt.map((fineart) => (
            <ArtworkCard
              key={fineart.id}
              id={fineart.id}
              section="fineart"
              imageUrl={fineart.images.web?.url}
              title={fineart.title}
              classification={fineart.type}
              dated={fineart.creation_date}
            />
          ))}
        </div>
        {!(fineArtInfo.total === 0 || fetchedFineArt.length === 0) && (
          <div className="pb-8">
            <PaginationWithLinks
              page={currentPage}
              pageSize={12}
              totalCount={fineArtInfo.total}
            />
          </div>
        )}
      </Container>
    );
  } catch (error) {
    console.error("Failed to load fineart:", error);

    return (
      <div className="col-span-full text-center h-[400px] flex justify-center items-center text-sm text-wine">
        Something went wrong while loading the items.
      </div>
    );
  }
}
