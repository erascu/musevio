import { Container } from "@/components/shared";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">About</h1>
      </div>
      <div className="pt-8 pb-12 flex flex-col items-center lg:items-start lg:flex-row">
        <div className="lg:w-[50%] max-w-[600px]">
          <div>
            <div>
              <h2 className="playfair !text-3xl font-bold min-[420px]:!text-4xl">
                Welcome to Musevio
              </h2>
              <h3 className="font-[300]">
                Your Curated Gateway to the Past and the Sublime.
              </h3>
            </div>
            <p className="mt-7 font-[300]">
              <span className="font-normal text-wine mr-1.5">
                Musevio (Museum Visual Information Online)
              </span>
              is more than just a digital gallery — it’s a carefully curated
              journey through the echoes of civilisation and the strokes of
              artistic brilliance. Our mission is to bring antiquities and fine
              art to life in a way that is both visually stunning and deeply
              personal.
            </p>
            <p className="mt-4.5 font-[300]">
              In an age where culture is just a click away, we believe the
              experience should remain profound. Whether you are captivated by
              ancient coins, timeless sculptures, delicate manuscripts, or
              masterful paintings, Musevio invites you to explore and engage
              with collections that span history and style.
            </p>
            <p className="mt-4.5 font-[300]">
              Musevio was built for explorers — those who appreciate the beauty
              of the past and seek to create their own unique paths through it.
              With every artwork you favourite and every custom collection you
              create, you shape a museum experience that is truly your own.
            </p>
          </div>
          <div>
            <div className="mt-10">
              <h2 className="playfair !text-3xl font-bold min-[420px]:!text-4xl">
                How to use Musevio
              </h2>
            </div>
            <ul className="mt-3.5 font-[300]">
              <li className="flex items-center">
                • Browse exhibitions in the Antiquities and Fine Art sections
              </li>
              <li className="flex items-center mt-2">
                • Use filters, search, and sort to find pieces that inspire you
              </li>
              <li className="flex items-center mt-2">
                • Click the heart icon to save your favourite artworks
              </li>
              <li className="flex items-center mt-2">
                • Create and manage custom collections in the Collections
                section
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:ml-15 ml-0 lg:w-[50%] max-w-[600px] mt-10 lg:mt-0">
          <div>
            <div className="flex items-center">
              <h2 className="playfair !text-3xl font-bold min-[420px]:!text-4xl">
                Explore the Code
              </h2>
              <Link
                href="https://github.com/erascu/musevio"
                target="_blank"
                className="transition-all hover:-translate-y-1 ml-2 min-[396px]:block hidden"
              >
                <Image
                  src="/git.svg"
                  alt="GitHub Logo"
                  width={32}
                  height={32}
                />
              </Link>
            </div>
            <p className="font-[300] mt-3">
              Interested in how Musevio was developed?
            </p>
            <p className="font-[300]">
              Visit the
              <Link href="https://github.com/erascu/musevio" target="_blank">
                <span className="text-wine underline font-normal transition-all hover:opacity-80 mx-1.5">
                  GitHub repository
                </span>
              </Link>
              to explore the source code or contribute.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="playfair !text-3xl font-bold min-[420px]:!text-4xl">
              Built with
            </h2>
            <p className="font-[300] mt-3">
              Modern web technologies to deliver a seamless and immersive
              experience.
            </p>
            <div>
              <div className="flex items-center">
                <div className="w-[260px] flex flex-col items-end">
                  <div className="flex items-center">
                    <Link href="https://nextjs.org/" target="_blank">
                      <Image
                        src="/nextjs.svg"
                        alt="NextJS Logo"
                        width={107}
                        height={64}
                        className="transition-all hover:-translate-y-1"
                      />
                    </Link>
                    <div className="ml-5">
                      <Link
                        href="https://www.typescriptlang.org/"
                        target="_blank"
                      >
                        <Image
                          src="/ts.svg"
                          alt="TypeScript Logo"
                          width={54}
                          height={54}
                          className="transition-all hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                    <div className="ml-5">
                      <Link href="https://ui.shadcn.com/" target="_blank">
                        <Image
                          src="/shadcn.svg"
                          alt="Shadcn Logo"
                          width={52}
                          height={52}
                          className="transition-all hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="flex items-center mt-3">
                    <Link href="https://lucide.dev/" target="_blank">
                      <Image
                        src="/lucide.svg"
                        alt="Lucide Logo"
                        width={59}
                        height={54}
                        className="transition-all hover:-translate-y-1"
                      />
                    </Link>
                    <div className="ml-5">
                      <Link href="https://tailwindcss.com/" target="_blank">
                        <Image
                          src="/tailwind.svg"
                          alt="Tailwind Css Logo"
                          width={61}
                          height={37}
                          className="transition-all hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                    <div className="ml-5">
                      <Link href="https://vercel.com/" target="_blank">
                        <Image
                          src="/vercel.svg"
                          alt="Vercel Logo"
                          width={56}
                          height={49}
                          className="transition-all hover:-translate-y-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="https://zustand-demo.pmnd.rs/" target="_blank">
                  <Image
                    src="/zustand.svg"
                    alt="Zustand Logo"
                    width={162}
                    height={123}
                    className="transition-all hover:-translate-y-1"
                  />
                </Link>
              </div>
              <div className="flex items-center mt-3">
                <Link href="https://www.clevelandart.org/home" target="_blank">
                  <Image
                    src="/clevland.svg"
                    alt="The Cleveland Museum of Art Logo"
                    width={172}
                    height={23}
                    className="transition-all hover:-translate-y-1"
                  />
                </Link>
                <div className="ml-5">
                  <Link href="https://harvardartmuseums.org/" target="_blank">
                    <Image
                      src="/harvard.svg"
                      alt="Harvard Art Museums Logo"
                      width={180}
                      height={42}
                      className="transition-all hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
