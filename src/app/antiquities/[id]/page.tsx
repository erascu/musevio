"use client";
// import NotFound from "@/app/not-found";
import { getItem } from "@/services/api";
import { Container } from "@/components/shared";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import { InfoSkeleton } from "@/components/shared";

interface AntqsItem {
  id: number;
  title: string;
  classification: string;
  medium: string;
  period: string;
  dated: string | number;
  department: string;
  primaryimageurl: string;
  description?: string;
}

export default function ItemPage() {
  const [antqsItem, setAntqsItem] = useState<AntqsItem>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const { id } = useParams<{ id: string }>();
  const smallImg = `${antqsItem.primaryimageurl}?width=500`;

  useEffect(() => {
    setIsLoading(true);
    setError(false);
    const fetchAntqsInfo = async () => {
      try {
        const data = await getItem(id);
        setAntqsItem(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAntqsInfo();
  }, [id]);

  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">Antiquities</h1>
      </div>
      {isLoading ? (
        <InfoSkeleton />
      ) : (
        <>
          {!error && (
            <>
              <div className="max-w-7xl flex flex-col-reverse lg:flex-row lg:gap-16 gap-5 py-8 items-center lg:items-start">
                <div className="lg:w-1/2 self-start text-left">
                  <h2 className="playfair !text-3xl font-bold">
                    {antqsItem.title}
                  </h2>
                  <h3 className="italic !text-lg text-ring">
                    {antqsItem.classification}
                  </h3>
                  <h3 className="!text-base mt-3 text-ring">
                    <span className="text-black">Medium:</span>{" "}
                    {antqsItem.medium}
                  </h3>
                  <h3 className="!text-base text-ring">
                    <span className="text-black">Period:</span>{" "}
                    {antqsItem.period}
                  </h3>
                  <h3 className="!text-base text-ring">
                    <span className="text-black">Dated:</span> {antqsItem.dated}
                  </h3>
                  <h3 className="!text-base text-ring">
                    <span className="text-black">Department:</span>{" "}
                    {antqsItem.department}
                  </h3>
                  <p className="mt-4">{antqsItem.description}</p>
                </div>
                <div className="h-full min-[580px]:w-[500px] max-w-[500px] lg:max-h-[550px] min-[500px]:max-h-[400px] max-h-[300px] overflow-hidden bg-gray-100 flex items-start justify-center rounded-xl">
                  <img
                    src={
                      antqsItem.primaryimageurl
                        ? smallImg
                        : !error
                        ? "/no-img.svg"
                        : undefined
                    }
                    alt={antqsItem.title}
                    className="h-auto w-full object-contain"
                  />
                </div>
              </div>
            </>
          )}
        </>
      )}
      {error && <div>Digidon</div>}
    </Container>
  );
}
