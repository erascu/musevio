import {
  Categories,
  Container,
  SortPopup,
  PaginationWithLinks,
  SearchInput,
} from "@/components/shared";
import React from "react";
import { getAntiquities } from "@/services/api";
import NotFound from "../not-found";
import AntqsItems from "@/components/shared/antqs-items";

const antiquityCats = [
  { name: "All", filterString: "All" },
  { name: "Coins", filterString: "Coins" },
  { name: "Sculptures", filterString: "Sculpture" },
  { name: "Vessels", filterString: "Vessels" },
  { name: "Jewelry", filterString: "Jewelry" },
  { name: "Seals", filterString: "Seals" },
  { name: "Manuscripts", filterString: "Manuscripts" },
];

interface ItemsProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Antiquities({ searchParams }: ItemsProps) {
  const params = await searchParams;
  const currentPage = parseInt((params.page as string) || "1");
  const filter = params.filterBy as string;
  const searchQuery = (params.keyword as string) || "";

  const sort = (params.sort as string) || "totalpageviews";
  const sortorder = (params.sortorder as string) || "desc";

  const { totalRecords, recordsInfo } = await getAntiquities(
    currentPage,
    filter,
    sort,
    sortorder,
    searchQuery
  );

  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">Antiquities</h1>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between items-start flex-col min-[1100px]:flex-row min-[1100px]:items-center">
          <Categories categories={antiquityCats} />
          <SearchInput />
        </div>
        <SortPopup />
      </div>
      {recordsInfo.page > recordsInfo.pages && <NotFound />}
      <div className="pt-3 pb-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recordsInfo.page === 0 && (
          <div className="flex justify-center items-center">
            No &apos;{searchQuery}&apos; records found
          </div>
        )}
        <AntqsItems
          page={currentPage}
          filter={filter}
          searchQuery={searchQuery}
          sort={sort}
          sortorder={sortorder}
        />
      </div>
      {!(recordsInfo.page > recordsInfo.pages || totalRecords === 0) && (
        <div className="pb-8">
          <PaginationWithLinks
            page={currentPage}
            pageSize={12}
            totalCount={totalRecords}
          />
        </div>
      )}
    </Container>
  );
}
