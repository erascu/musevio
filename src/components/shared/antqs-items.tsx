import { ArtworkCard } from "./";
import { getAntiquities } from "@/services/api";

export default async function AntqsItems({
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
  try {
    const { fetchedAntqs } = await getAntiquities(
      page,
      filter,
      sort,
      sortorder,
      searchQuery
    );
    return (
      <>
        {fetchedAntqs.map((item) => (
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
      </>
    );
  } catch (error) {
    console.error("Failed to load antiquities:", error);

    return (
      <div className="col-span-full text-center h-[400px] flex justify-center items-center text-sm text-wine">
        Something went wrong while loading the items.
      </div>
    );
  }
}
