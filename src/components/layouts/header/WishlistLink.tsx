"use client";

import { useGetWishlists } from "@/hooks/useWishlists";
import { Heart } from "lucide-react";
import Link from "next/link";

const WishlistLink = () => {
  const { data } = useGetWishlists();

  const wishlists = data?.wishlists.products ?? [];

  return (
    <Link href={"/wishlist"} className="relative">
      <Heart />
      <div className="absolute size-[1.1rem] text-sm grid font-semibold place-items-center rounded-full -top-1 -right-1 text-neutral-700 bg-neutral-100">
        {wishlists.length}
      </div>
    </Link>
  );
};

export default WishlistLink;
