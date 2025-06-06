import { Antiquity, ItemProps, FineArt, FineArtItemProps } from "@/lib/types";

const apiKey = process.env.NEXT_PUBLIC_HARVARD_API_KEY!;

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
    ? `&title=${encodeURIComponent(searchQuery)}`
    : "";

  const res = await fetch(
    `https://api.harvardartmuseums.org/object?apikey=${apiKey}&hasimage=1&page=${page}&size=12&classification=${
      searchParam.length > 0 ? defaultFilters : appliedFilter
    }&sort=${sort}&sortorder=${sortorder}${searchParam}`
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

export async function getFineArt(
  page: number,
  filter: string,
  searchQuery?: string
) {
  const pageNr = (page - 1) * 12;
  const filterLogic = filter && filter !== "All" ? `&type=${filter}` : "";
  const searchQ = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : "";

  const res = await fetch(
    `https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=12&skip=${pageNr}${
      searchQ.length > 0 ? "" : filterLogic
    }${searchQ && `&q=${searchQ}`}`
  );
  const getFineArt: FineArt = await res.json();
  const fineArtInfo = getFineArt.info;
  const fetchedFineArt = getFineArt.data;
  return { fineArtInfo, fetchedFineArt };
}

export async function getFineArtItem(id: number | string) {
  const res = await fetch(
    `https://openaccess-api.clevelandart.org/api/artworks/${id}`
  );
  const fetchedItem: FineArtItemProps = await res.json();
  const fineArtItemInfo = fetchedItem.data;
  return fineArtItemInfo;
}
