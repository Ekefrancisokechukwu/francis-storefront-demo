"use client";

import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { useRemoveCartItem, useUpdateCartItem_DEBUG } from "@/hooks/useCart";
import { useDebouncedCallback } from "@/hooks/useDebouncedCallback";
import { formatUSD } from "@/lib/utils";
import { CartItem as ICartItem } from "@/types/cart";
import { Loader2, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CartItemProps {
  item: ICartItem;
}

export const CartItem = ({ item }: CartItemProps) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);
  const { mutate, isPending: isRemoving } = useRemoveCartItem();
  // const { mutate: updateQty, isPending: isUpdating } = useUpdateCartItem();
  const { mutate: updateQty, isPending: isUpdating } =
    useUpdateCartItem_DEBUG();
  const debouncedUpdateQty = useDebouncedCallback(updateQty, 500);

  const buttonDisabled = isUpdating || isRemoving;

  const changeQuantity = (delta: 1 | -1) => {
    setQuantity((q) => {
      const next = Math.max(1, q + delta);
      console.log("→ calling updateQty", { itemId: item._id, next });
      debouncedUpdateQty({ itemId: item._id, quantity: next });
      return next;
    });
  };

  console.log(item);

  return (
    <div className=" grid min-[744px]:grid-cols-[1fr_15rem_10rem] grid-cols-[1fr_4rem] first:border-t py-4  items-start">
      <div className="flex items-start min-[500px]:gap-x-20 min-[390px]:gap-x-8 gap-x-3">
        <div className="relative size-[7rem]  rounded-md overflow-hidden">
          <Image
            src={item?.variant?.images[0] || item?.product?.images[0].url}
            alt={item?.product?.name || "product-placeholder"}
            fill
            sizes="(max-width: 768px) 100vw, 200px"
            className="object-cover"
          />
        </div>
        <div>
          <Link
            href={`/products/High-Hardness`}
            className="text-neutral-800 text-sm font-medium"
          >
            {item.product?.name}
          </Link>
          <p className="text-sm  text-neutral-500">
            {formatUSD(item?.unitPrice)}
          </p>

          <div className=" items-center gap-x-1.5 min-[744px]:hidden flex mt-3 justify-center ">
            <QuantitySelector
              quantity={quantity}
              min={1}
              onDecrease={() => changeQuantity(-1)}
              onIncrease={() => changeQuantity(1)}
              className="max-[380px]:w-24"
            />
            <Button disabled={buttonDisabled} onClick={() => mutate(item._id)}>
              {buttonDisabled ? (
                <Loader2 className="animate-spin" />
              ) : (
                <Trash2 />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div className=" items-center gap-x-1.5 min-[744px]:flex hidden">
        <QuantitySelector
          quantity={quantity}
          min={1}
          onDecrease={() => changeQuantity(-1)}
          onIncrease={() => changeQuantity(1)}
          isPending={buttonDisabled}
        />
        <Button disabled={buttonDisabled} onClick={() => mutate(item._id)}>
          {buttonDisabled ? <Loader2 className="animate-spin" /> : <Trash2 />}
        </Button>
      </div>
      <p className="font-semibold text-right sm:text-base text-sm">
        {" "}
        {formatUSD(item?.itemTotal)}
      </p>
    </div>
  );
};
