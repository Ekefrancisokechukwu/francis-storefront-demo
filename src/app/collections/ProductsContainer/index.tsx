"use client";

import Product from "@/components/Product";
import { ProductSkeleton } from "@/components/Product/Skeleton";
import { PaginationBtns } from "@/components/ui/PaginationBtns";
import { useProducts } from "@/hooks/useProducts";
import { useSearchParams } from "next/navigation";

export const ProductsContianer = () => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const queryParams = {
    limit: 2,
    page: currentPage,
  };

  const { data, isLoading, error } = useProducts(queryParams);
  const products = data?.products ?? [];

  if (isLoading) {
    return (
      <div className="grid md:grid-cols-4 gap-2.5 sm:grid-cols-3 grid-cols-2">
        {Array.from({ length: 8 }).map((_, i) => (
          <ProductSkeleton key={i} />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {products.map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <PaginationBtns totalPages={data?.totalPages ?? 0} />
      </div>
    </div>
  );
};
