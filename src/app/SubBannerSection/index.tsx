import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/ui/Wrapper";
import Image from "next/image";

const SubBannerSection = () => {
  return (
    <Wrapper className="grid md:grid-cols-2  gap-5  mt-10">
      <div className="rounded-lg relative bg-neutral-100 flex md:h-[17rem] h-[15rem]">
        <a href="#" className="relative rounded-lg overflow-hidden w-full">
          <Image
            alt="Wooden chair"
            src="/sub-banner-1.webp"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="transition-all duration-500 hover:scale-110 ease-[cubic-bezier(.25,.46,.45,.94)]"
          />
        </a>
        <div className="max-w-[18rem] px-8 py-5 absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <p className="font-medium text-sm">CHAIR IS STURDY AND DURABLE</p>
          <h2 className="md:text-2xl text-lg mt-2 font-semibold ">
            Love dining natural wooden chair
          </h2>
          <p className="mt-1.5 md:text-base text-sm">
            There are many variations of passages lorem Ipsum available.
          </p>
          <Button
            variant={"link"}
            className="mt-2.5 font-semibold underline px-0"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
      <div className="rounded-lg relative bg-neutral-100 flex md:h-[17rem] h-[15rem]">
        <a href="#" className="relative rounded-lg overflow-hidden w-full">
          <Image
            alt="Wooden chair"
            src="/sub-banner-2.webp"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            className="transition-all duration-500 hover:scale-110 ease-[cubic-bezier(.25,.46,.45,.94)]"
          />
        </a>
        <div className="max-w-[18rem] px-8 py-5 absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <p className="font-medium text-sm">LIVING ROOM, BEDROOM</p>
          <h2 className="md:text-2xl text-lg mt-2 font-semibold ">
            Whispering homes pendant lamp
          </h2>
          <p className="mt-1.5 md:text-base text-sm">
            There are many variations of passages lorem Ipsum available.
          </p>
          <Button
            variant={"link"}
            className="mt-2.5 font-semibold underline px-0"
          >
            SHOP NOW
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};
export default SubBannerSection;
