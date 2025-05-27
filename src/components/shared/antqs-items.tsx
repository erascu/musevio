import { ArtworkCard } from "./";
import { Antiquity } from "@/lib/types";

interface Props {
  fetchedAntqs: Antiquity["records"];
}

export default function AntqsItems({ fetchedAntqs }: Props) {
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
}
