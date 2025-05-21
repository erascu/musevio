import { Container } from "@/components/shared";
import Image from "next/image";

function NotFound() {
  return (
    <Container className="p-4 my-20 flex justify-center items-center flex-col md:flex-row">
      <Image
        src="/404.svg"
        alt="Not found"
        width={200}
        height={189}
        className="max-w-[180px] md:max-w-[200px]"
      />
      <div className="md:max-w-[400px] max-w-[300px] mt-3 md:ml-7">
        <h1 className="playfair font-bold md:!text-6xl !text-4xl text-center md:text-left">
          This page doesn’t exist
        </h1>
        <p className="mt-3 text-ring max-w-[300px] md:text-left text-center">
          Not all masterpieces can be found. Use the menu above to navigate.
        </p>
      </div>
    </Container>
  );
}

export default NotFound;
