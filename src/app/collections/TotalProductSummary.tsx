"use client";

import { useProducts } from "@/hooks/useProducts";

export const TotalProductSummary = () => {
  const { data } = useProducts({});

  const totalProducts = data?.totalItems ?? 0;
  const totalFilteredProducts = data?.filteredTotal ?? 0;

  return (
    <span className="font-semibold text-sm">
      {totalFilteredProducts !== totalProducts ? (
        <>{totalFilteredProducts} of </>
      ) : null}
      {totalFilteredProducts} products
    </span>
  );
};
