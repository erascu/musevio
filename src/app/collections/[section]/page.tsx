"use client";
import { useParams } from "next/navigation";
import NotFound from "@/app/not-found";
import {
  ArtworkCard,
  Container,
  NoCollections,
  SavedColPanel,
} from "@/components/shared";
import { useFavItemsStore } from "@/stores/favItems-store";
import { useNewCollectionStore } from "@/stores/section-store";

export default function CollectionPage() {
  const newCollection = useNewCollectionStore((state) => state.newCollection);
  const favItems = useFavItemsStore((state) => state.favItems);

  const { section } = useParams<{ section: string }>();

  const notFoundPage = newCollection.some(
    (item) => item.toLowerCase() === decodeURIComponent(section?.toLowerCase())
  );

  const filteredItems = favItems.filter(
    (item) =>
      item.newCollectionSect?.toLowerCase() ===
      decodeURIComponent(section?.toLowerCase())
  );

  try {
    return (
      <Container className="px-4">
        {notFoundPage ? (
          <>
            <div className="w-[250px] border-b pb-3">
              <h1 className="playfair !text-4xl font-bold">Collections</h1>
            </div>
            <div className="flex flex-col lg:flex-row">
              <SavedColPanel />
              <div className="flex-1 lg:pl-5 pl-0 pb-10 mt-4.5 lg:mt-0">
                <div
                  className={
                    filteredItems.length > 0
                      ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                      : "flex justify-center items-center min-h-[350px]"
                  }
                >
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <ArtworkCard
                        key={item.id}
                        id={item.id ?? 0}
                        section={item.section}
                        imageUrl={item.imageUrl ?? ""}
                        title={item.title ?? ""}
                        classification={item.classification ?? ""}
                        dated={item.dated ?? ""}
                        editCards
                      />
                    ))
                  ) : (
                    <NoCollections />
                  )}
                </div>
              </div>
            </div>
          </>
        ) : (
          <NotFound />
        )}
      </Container>
    );
  } catch (error) {
    console.error("Failed to load antiquities:", error);

    return <NotFound />;
  }
}
