import Link from "next/link";
import { Availability } from "./Availability";
import { Price } from "./Price";
import { Color } from "./Color";
import { Brand } from "./Brand";
import { ProductType } from "./ProductType";
import { X } from "lucide-react";

export const Filter = () => {
  return (
    <div className="border-r pr-5 lg:block hidden">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Filter:</span>
        <Link
          href={"/collections"}
          className="text-neutral-800 underline underline-offset-1 hover:no-underline transition-all duration-300 text-sm"
        >
          REMOVE ALL
        </Link>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <button className="cursor-pointer text-sm flex items-center gap-x-1">
          <span className="p-0.5 rounded-full bg-rose-400 text-white">
            <X size={13} />
          </span>
          Sofa
        </button>
      </div>
      <div className="mt-8 space-y-6">
        <Availability />
        <Price />
        <ProductType />
        <Color />
        <Brand />
      </div>
    </div>
  );
};
