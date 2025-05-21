"use client";

import Link from "next/link";
import { Availability } from "./Availability";
import { Price } from "./Price";
import { Colors } from "./Color";
import { Brands } from "./Brand";
import { ProductType } from "./ProductType";
import { useGetAllFilters } from "@/hooks/useProducts";
import { FilterLoading } from "./Loading";
import { StockStats } from "@/types/product";
import { Suspense } from "react";
// import { useUrlParams } from "@/hooks/useUrlParams";

export const Filter = () => {
  const { data: filters, isLoading } = useGetAllFilters();
  // const { getParam } = useUrlParams();

  if (isLoading) {
    return <FilterLoading />;
  }

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

      <div className="mt-8 space-y-6">
        <Suspense fallback={<div>Loading...</div>}>
          <Availability availability={filters?.stockStats as StockStats} />
          <Price maxPrice={filters?.productHighestPrice ?? 0} />
          <Colors colors={filters?.colors ?? []} />

          <ProductType tags={filters?.tags ?? []} />
          <Brands brands={filters?.brands ?? []} />
        </Suspense>
      </div>
    </div>
  );
};
