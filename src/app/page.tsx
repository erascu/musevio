import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <Container className="px-4 lg:py-4 pt-4 pb-10 lg:pt-30">
      <section className="flex justify-center">
        <div className="flex justify-center lg:flex-row flex-col-reverse items-center lg:items-start max-w-[585px] lg:max-w-[100%]">
          <div className="max-w-[675px] lg:pr-4 lg:pt-0 pt-4">
            <h1 className="playfair font-bold sm:!text-6xl !text-4xl">
              Step into Musevio, where antiquities & fine art come alive.
            </h1>
            <p className="mt-4 text-primary text-lg">
              Browse virtual exhibitions, save your favorite pieces, and create
              collections that reflect your unique taste.
            </p>
            <Link href="/about">
              <Button className="text-lg font-[300] !gap-1 !pr-7 relative group lg:mt-8.5 mt-7">
                Learn More
                <ChevronRight
                  strokeWidth={1.75}
                  size={20}
                  className="absolute right-2 transition group-hover:translate-x-1"
                />
              </Button>
            </Link>
          </div>
          <div>
            <Image
              src="/musevio-main.jpg"
              alt="Museum gallery"
              width={585}
              height={389}
              className="rounded-lg lg:min-w-[450px] max-w-[100%]"
            />
          </div>
        </div>
      </section>
    </Container>
  );
}
