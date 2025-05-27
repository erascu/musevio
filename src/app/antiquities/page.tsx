import {
  Categories,
  Container,
  SortPopup,
  PaginationWithLinks,
} from "@/components/shared";
import { Input } from "@/components/ui";
import { Search } from "lucide-react";
import React from "react";
import { getAntiquities } from "@/app/services/api";
import AntqsItems from "@/components/shared/antqs-items";

const antiquityCats = [
  { name: "All", href: "" },
  { name: "Coins", href: "" },
  { name: "Sculptures", href: "" },
  { name: "Vessels", href: "" },
  { name: "Jewelery", href: "" },
  { name: "Seals", href: "" },
  { name: "Manuscripts", href: "" },
];

interface ItemsProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Antiquities({ searchParams }: ItemsProps) {
  const params = await searchParams;
  const currentPage = parseInt((params.page as string) || "1");
  const { fetchedAntqs, totalRecords } = await getAntiquities(currentPage);

  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">Antiquities</h1>
      </div>
      <div className="flex flex-col ">
        <div className="flex justify-between items-start flex-col min-[1100px]:flex-row min-[1100px]:items-center">
          <Categories categories={antiquityCats} />
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
        <AntqsItems fetchedAntqs={fetchedAntqs} />
      </div>
      <div className="pb-8">
        <PaginationWithLinks
          page={currentPage}
          pageSize={12}
          totalCount={totalRecords}
        />
      </div>
    </Container>
  );
}
