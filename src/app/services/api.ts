import { Antiquity, ItemProps } from "@/lib/types";

const apiKey: string = "e33e0c2d-531f-4088-a7b8-7f27ccf0b27d";

export async function getAntiquities(
  page: number,
  filter: string,
  sort: string,
  sortorder: string,
  searchQuery?: string
) {
  const defaultFilters: string =
    "Coins|Sculpture|Vessels|Jewelry|Seals|Manuscripts";
  const appliedFilter = filter && filter !== "All" ? filter : defaultFilters;
  const searchParam = searchQuery
    ? `&q=${encodeURIComponent(searchQuery)}`
    : "";

  const res = await fetch(
    `https://api.harvardartmuseums.org/object?apikey=${apiKey}&hasimage=1&page=${page}&size=12&classification=${appliedFilter}&sort=${sort}&sortorder=${sortorder}${searchParam}`
  );
  const getAntqs: Antiquity = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const totalRecords = getAntqs.info.totalrecords;
  const recordsInfo = getAntqs.info;
  const fetchedAntqs = getAntqs.records;
  return { fetchedAntqs, totalRecords, recordsInfo };
}

export async function getItem(id: number | string) {
  const res = await fetch(
    `https://api.harvardartmuseums.org/object?apikey=${apiKey}&id=${id}`
  );
  const fetchedItem: ItemProps = await res.json();
  const itemInfo = fetchedItem.records;
  return itemInfo[0];
}
