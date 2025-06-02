import NotFound from "@/app/not-found";
import { getFineArtItem } from "@/services/api";
import { Container } from "@/components/shared";

export default async function ItemPage({
  params,
}: {
  params: Promise<{ id: number | string }>;
}) {
  try {
    const itemId = (await params).id;
    const itemInfo = await getFineArtItem(itemId);

    return (
      <Container className="px-4">
        <div className="w-[250px] border-b pb-3">
          <h1 className="playfair !text-4xl font-bold">Fine Art</h1>
        </div>
        <div className="max-w-7xl flex flex-col-reverse lg:flex-row lg:gap-16 gap-5 py-8 items-center lg:items-start">
          <div className="lg:w-1/2 self-start text-left">
            <h2 className="playfair !text-3xl font-bold">{itemInfo.title}</h2>
            <h3 className="!text-xl">{itemInfo.creators[0].description}</h3>
            <h3 className="italic !text-lg text-ring">{itemInfo.type}</h3>
            <h3 className="!text-base mt-3 text-ring">
              <span className="text-black">Medium:</span> {itemInfo.technique}
            </h3>
            <h3 className="!text-base text-ring">
              <span className="text-black">Dated:</span>{" "}
              {itemInfo.creation_date}
            </h3>
            <h3 className="!text-base text-ring">
              <span className="text-black">Department:</span>{" "}
              {itemInfo.department}
            </h3>
            <p className="mt-4">{itemInfo.description}</p>
          </div>
          <div className="h-full min-[580px]:w-[500px] max-w-[500px] lg:max-h-[550px] min-[500px]:max-h-[400px] max-h-[300px] overflow-hidden bg-gray-100 flex items-start justify-center rounded-xl">
            <img
              src={
                itemInfo.images.web.url
                  ? itemInfo.images.web.url
                  : "/no-img.svg"
              }
              alt={itemInfo.title}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </Container>
    );
  } catch (error) {
    console.error("Failed to load antiquities:", error);

    return <NotFound />;
  }
}
