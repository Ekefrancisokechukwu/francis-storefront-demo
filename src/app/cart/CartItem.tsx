"use client";

import { Button } from "@/components/ui/button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const CartItem = () => {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  return (
    <div className=" grid min-[744px]:grid-cols-[1fr_15rem_10rem] grid-cols-[1fr_4rem] first:border-t py-4  items-start">
      <div className="flex items-start min-[500px]:gap-x-20 min-[390px]:gap-x-8 gap-x-3">
        <div className="relative size-[6rem]  rounded-md overflow-hidden">
          <Image
            src={"/prod-demo-1.webp"}
            alt={"jksnkj"}
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
            Laser Bed, High Hardness Steel Fast Heat Table
          </Link>
          <p className="text-sm  text-neutral-500">$250.00</p>
          <div className=" items-center gap-x-1.5 min-[744px]:hidden flex mt-3 justify-center ">
            <QuantitySelector
              quantity={quantity}
              min={1}
              onDecrease={decreaseQuantity}
              onIncrease={increaseQuantity}
              className="max-[380px]:w-24"
            />
            <Button>
              <Trash2 />
            </Button>
          </div>
        </div>
      </div>

      <div className=" items-center gap-x-1.5 min-[744px]:flex hidden">
        <QuantitySelector
          quantity={quantity}
          min={1}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
        />
        <Button>
          <Trash2 />
        </Button>
      </div>
      <p className="font-semibold text-right sm:text-base text-sm">$250.00</p>
    </div>
  );
};
