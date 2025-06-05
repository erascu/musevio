"use client";
import { useState, useEffect } from "react";
import { ArtworkCard, CardSkeleton } from "./";

interface FineArt {
  id: number;
  title: string;
  type: string;
  creation_date: number | string;
  technique: string;
  department: string;
  collection: string;
  images: {
    web: {
      url: string;
    };
  };
}

export default function FineArtItems({
  page,
  filter,
  searchQuery,
}: {
  page: number;
  filter: string;
  searchQuery?: string;
}) {
  const filterLogic = filter && filter !== "All" ? `&filter=${filter}` : "";
  const searchQ = searchQuery ? `&q=${encodeURIComponent(searchQuery)}` : "";

  const [fineArtItems, setFineArtItems] = useState<FineArt[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const fetchFineArt = async () => {
      try {
        const res = await fetch(
          `/api/fineart?page=${page}${filterLogic}${searchQ}`
        );
        const { data } = await res.json();
        setFineArtItems(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFineArt();
  }, [page, filter, searchQuery, filterLogic, searchQ]);

  return (
    <>
      {isLoading
        ? [...new Array(8)].map((_, i) => <CardSkeleton key={i} />)
        : fineArtItems.map((item) => (
            <ArtworkCard
              key={item.id}
              id={item.id}
              section="fineart"
              imageUrl={item.images.web?.url}
              title={item.title}
              classification={item.type}
              dated={item.creation_date}
            />
          ))}
      {error && <div>Digidon</div>}
    </>
  );
}
