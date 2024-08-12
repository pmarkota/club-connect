import Image from "next/image";
import ClientLogger from "@/components/ClientLogger";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default async function Home() {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
      <h1>User List</h1>
    </MaxWidthWrapper>
  );
}
