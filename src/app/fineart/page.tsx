import {
  Categories,
  Container,
  PaginationWithLinks,
  SearchInput,
  // SortPopup,
} from "@/components/shared";
import React from "react";
import { getFineArt } from "@/services/api";
import NotFound from "../not-found";
import FineArtItems from "@/components/shared/fineArt-items";

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
        <FineArtItems
          page={currentPage}
          filter={filter}
          searchQuery={searchQuery}
        />
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
}
