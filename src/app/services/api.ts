import { Antiquity } from "@/lib/types";

export async function getAntiquities(page: number) {
  const apiKey: string = "e33e0c2d-531f-4088-a7b8-7f27ccf0b27d";
  const defaultFilters: string =
    "Coins|Sculpture|Vessels|Jewelry|Seals|Manuscripts";

  const res = await fetch(
    `https://api.harvardartmuseums.org/object?apikey=${apiKey}&page=${page}&size=12&classification=${defaultFilters}&sort=totalpageviews&sortorder=desc`
  );
  const getAntqs: Antiquity = await res.json();
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const totalRecords = getAntqs.info.totalrecords;
  const fetchedAntqs = getAntqs.records;
  return { fetchedAntqs, totalRecords };
}
