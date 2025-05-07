"use client";

import { SlidersHorizontal, X } from "lucide-react";
import { Availability } from "./Availability";
import { Price } from "./Price";
import { ProductType } from "./ProductType";
import { Color } from "./Color";
import { Brand } from "./Brand";
import { SortNav } from "../SortNav";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const FilterAndSortSlider = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden flex  text-neutral-700 items-center gap-x-2 "
      >
        <SlidersHorizontal size={15} />{" "}
        <span className="font-medium">Filter and sort</span>
      </button>

      <div
        onClick={() => setIsOpen(false)}
        className={cn(
          "bg-black/50 w-full lg:hidden transition-all duration-100 block h-screen fixed z-[80] top-0 left-0",
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      ></div>
      <aside
        className={cn(
          "fixed top-0 transition-all translate-x-[100%] duration-200 ease-smush lg:hidden block right-0  max-w-[25rem] z-[80] h-screen w-full bg-white",
          isOpen ? "translate-x-0" : "translate-x-[100%]"
        )}
      >
        <div className="flex border-b py-3.5 items-center justify-between px-4">
          <div className="leading-1">
            <h1 className="font-semibold text-sm">FILTER</h1>
            <p className="text-neutral-600 text-sm">22 products</p>
          </div>
          <button onClick={() => setIsOpen(false)}>
            <X />
          </button>
        </div>
        <div className="mt-5 space-y-6 px-5 overflow-y-auto">
          <Availability />
          <Price />
          <ProductType />
          <Color />
          <Brand />
          <SortNav />
        </div>
      </aside>
    </div>
  );
};
