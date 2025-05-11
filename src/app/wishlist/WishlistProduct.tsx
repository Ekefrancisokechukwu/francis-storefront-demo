"use client";

import { Button } from "@/components/ui/button";
import { Wrapper } from "@/components/ui/Wrapper";
import { useGetWishlists, useRemoveFromWishLists } from "@/hooks/useWishlists";
import { X } from "lucide-react";
import Image from "next/image";

export const WishlistProduct = () => {
  const { data } = useGetWishlists();
  const { mutate: removeItem } = useRemoveFromWishLists();

  const wishlists = data?.wishlists.products ?? [];

  return (
    <Wrapper className="pt-[4rem]  grid lg:grid-cols-7 md:grid-cols-6  sm:grid-cols-4 min-[400px]:grid-cols-3  grid-cols-2 gap-5">
      {wishlists.map((item) => {
        return (
          <div
            key={item._id}
            className=" max-w-[11rem] flex flex-col justify-between"
          >
            <div className="relative w-full h-[11rem] border rounded-md overflow-hidden">
              <Image
                src={item.images[0].url}
                alt={"jksnkj"}
                fill
                sizes="(max-width: 768px) 100vw, 200px"
                className="object-cover"
              />
              <Button
                onClick={() => removeItem(item._id)}
                variant={"outline"}
                className="absolute top-0 right-0 rounded-full"
              >
                <X />
              </Button>
            </div>
            <div className="mt-3">
              <p className="line-clamp-2 text-neutral-800">{item.name}</p>
              <Button className="mt-2.5 w-full">ADD TO CART</Button>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};
