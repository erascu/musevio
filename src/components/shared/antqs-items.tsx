"use client";
import { useState, useEffect } from "react";
import { ArtworkCard, CardSkeleton } from "./";
import { getAntiquities } from "@/services/api";

interface Antiquity {
  id: number;
  section: string;
  primaryimageurl?: string;
  title: string;
  classification: string;
  dated: string | number;
}

export default function AntqsItems({
  page,
  filter,
  sort,
  sortorder,
  searchQuery,
}: {
  page: number;
  filter: string;
  searchQuery?: string;
  sort: string;
  sortorder: string;
}) {
  const [antqsItems, setAntqsItems] = useState<Antiquity[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const fetchAntiquities = async () => {
      try {
        const data = await getAntiquities(
          page,
          filter,
          sort,
          sortorder,
          searchQuery
        );
        setAntqsItems(data.fetchedAntqs);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAntiquities();
  }, [page, filter, sort, sortorder, searchQuery]);

  return (
    <>
      {isLoading
        ? [...new Array(8)].map((_, i) => <CardSkeleton key={i} />)
        : antqsItems.map((item) => (
            <ArtworkCard
              key={item.id}
              id={item.id}
              section="antiquities"
              imageUrl={
                item?.primaryimageurl
                  ? `${item.primaryimageurl}?width=500`
                  : "no-img.svg"
              }
              title={item.title}
              classification={item.classification}
              dated={item.dated}
            />
          ))}
      {error && <div>Digidon</div>}
    </>
  );
}
