import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

export const WishlistProduct = () => {
  return (
    <div className=" max-w-[11rem] ">
      <div className="relative w-full h-[11rem] border rounded-md overflow-hidden">
        <Image
          src={"/prod-demo-1.webp"}
          alt={"jksnkj"}
          fill
          sizes="(max-width: 768px) 100vw, 200px"
          className="object-cover"
        />
        <Button
          variant={"outline"}
          className="absolute top-0 right-0 rounded-full"
        >
          <X />
        </Button>
      </div>
      <div className="mt-3">
        <p className="line-clamp-2 text-neutral-800">
          Bottle Grinder Set Ceramic Spice Mill 2 Pcs
        </p>
        <Button className="mt-2.5 w-full">ADD TO CART</Button>
      </div>
    </div>
  );
};
