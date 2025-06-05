"use client";
import NotFound from "@/app/not-found";
import { Container } from "@/components/shared";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { InfoSkeleton } from "@/components/shared";

interface FineArtItems {
  id: number;
  title: string;
  type: string;
  creation_date: number | string;
  technique: string;
  department: string;
  collection: string;
  description: string;
  creators: [
    {
      description: string;
    }
  ];
  images: {
    web: {
      url: string;
    };
  };
}

export default function ItemPage() {
  // const itemId = (await params).id;
  // const itemInfo = await getFineArtItem(itemId);
  const [fineArtItems, setFineArtItems] = useState<FineArtItems>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const fetchFineArtInfo = async () => {
      try {
        const res = await fetch(`/api/fineart/info?id=${id}`);
        const { data } = await res.json();
        setFineArtItems(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchFineArtInfo();
  }, [id]);

  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">Fine Art</h1>
      </div>
      {isLoading ? (
        <InfoSkeleton />
      ) : !fineArtItems ? (
        <NotFound />
      ) : (
        <div className="max-w-7xl flex flex-col-reverse lg:flex-row lg:gap-16 gap-5 py-8 items-center lg:items-start">
          <div className="lg:w-1/2 self-start text-left">
            <h2 className="playfair !text-3xl font-bold">
              {fineArtItems?.title}
            </h2>
            <h3 className="!text-xl">
              {fineArtItems?.creators[0]?.description}
            </h3>
            <h3 className="italic !text-lg text-ring">{fineArtItems?.type}</h3>
            <h3 className="!text-base mt-3 text-ring">
              <span className="text-black">Medium:</span>
              {fineArtItems?.technique}
            </h3>
            <h3 className="!text-base text-ring">
              <span className="text-black">Dated:</span>
              {fineArtItems?.creation_date}
            </h3>
            <h3 className="!text-base text-ring">
              <span className="text-black">Department:</span>
              {fineArtItems?.department}
            </h3>
            <p className="mt-4">{fineArtItems?.description}</p>
          </div>
          <div className="h-full min-[580px]:w-[500px] max-w-[500px] lg:max-h-[550px] min-[500px]:max-h-[400px] max-h-[300px] overflow-hidden bg-gray-100 flex items-start justify-center rounded-xl">
            <img
              src={
                fineArtItems.images.web.url
                  ? fineArtItems.images.web.url
                  : "/no-img.svg"
              }
              alt={fineArtItems?.title}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      )}
      {error && <div>Oops, something went wrong, please try again</div>}
    </Container>
  );
}
