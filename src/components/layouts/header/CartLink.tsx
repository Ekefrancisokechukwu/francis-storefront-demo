"use client";

import { useGetCartItems } from "@/hooks/useCart";
import { formatUSD } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartLink = () => {
  const { data } = useGetCartItems();

  const cart = data?.cart;
  const totalItem = cart?.totalItems ?? 0;
  const totalPrice = cart?.totalPrice ?? 0;

  return (
    <Link href={"/cart"} className="flex items-center gap-x-3">
      <div className="grid place-items-center relative">
        <ShoppingBag />
        <div className="absolute size-[1.1rem] text-sm grid font-semibold place-items-center rounded-full -top-1 -right-1 text-neutral-700 bg-neutral-100">
          {totalItem}
        </div>
      </div>
      <div className="leading-0.5">
        <span className="text-sm block text-neutral-200/70">
          {formatUSD(totalPrice)}
        </span>
        <span className="font-semibold text-sm ">My Cart</span>
      </div>
    </Link>
  );
};
export default CartLink;
