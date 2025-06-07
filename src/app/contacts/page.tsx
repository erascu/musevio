import { ContactForm, Container } from "@/components/shared";
import Image from "next/image";
import React from "react";

export default function Contacts() {
  return (
    <Container className="px-4">
      <div className="w-[250px] border-b pb-3">
        <h1 className="playfair !text-4xl font-bold">Contacts</h1>
      </div>
      <div className="flex py-10 justify-center">
        <div className="flex max-h-[550px]">
          <Image
            src="/musevio-contact.jpg"
            alt="Modern oil on canvas-style painting of Musevio contacts section"
            width={400}
            height={500}
            className="rounded-l-md shadow-sm hidden min-[820px]:block"
          />
          <ContactForm />
        </div>
      </div>
    </Container>
  );
}
