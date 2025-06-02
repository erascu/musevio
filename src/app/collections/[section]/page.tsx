"use client";
import { useParams } from "next/navigation";
import NotFound from "@/app/not-found";
import { Container } from "@/components/shared";
import { useNewCollectionStore } from "@/stores/section-store";

export default function CollectionPage() {
  const newCollection = useNewCollectionStore((state) => state.newCollection);
  const { section } = useParams();
  try {
    return (
      <Container className="px-4">
        {newCollection.length > 0 ? <div>{section}</div> : <NotFound />}
      </Container>
    );
  } catch (error) {
    console.error("Failed to load antiquities:", error);

    return <NotFound />;
  }
}
