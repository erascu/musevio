import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <Container className="px-4">
      <section className="flex items-center justify-center">
        <div className="max-w-[675px]">
          <h1 className="playfair !text-6xl font-bold">
            Step into Musevio, where antiquities & fine art come alive.
          </h1>
          <p className="mt-4.5 text-primary text-lg">
            Browse virtual exhibitions, save your favorite pieces, and create
            collections that reflect your unique taste.
          </p>
          <Button className="text-lg font-[300] !gap-1 !pr-7 relative group mt-8.5">
            Learn More
            <ChevronRight
              strokeWidth={1.75}
              size={20}
              className="absolute right-2 transition group-hover:translate-x-1"
            />
          </Button>
        </div>
        <div>
          <Image
            src="/musevio-main.jpg"
            alt="Museum gallery"
            width={585}
            height={389}
            className="rounded-lg"
          />
        </div>
      </section>
    </Container>
  );
}
