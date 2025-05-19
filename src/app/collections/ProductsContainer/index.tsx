"use client";

import Product from "@/components/Product";
import { ProductSkeleton } from "@/components/Product/Skeleton";
import { PaginationBtns } from "@/components/ui/PaginationBtns";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/useProducts";
import { useUrlParams } from "@/hooks/useUrlParams";
import { ProductQueryParams } from "@/types/product";

export const ProductsContianer = () => {
  const getParam = useUrlParams().getParam;
  const currentPage = Number(getParam("page")) || 1;
  const availabilityParam = getParam("availability") || "";
  const minPrice = getParam("price.from") || "";
  const maxPrice = getParam("price.to") || "";
  const brands = getParam("brands") || "";
  const colors = getParam("colors") || "";

  const tags = getParam("tags") || "";
  const selectedSort = getParam("sort_by") || "newest";

  // debounce
  const debouncedMinPrice = useDebounce(minPrice);
  const debouncedMaxPrice = useDebounce(maxPrice);

  const queryParams: ProductQueryParams = {
    minPrice: debouncedMinPrice,
    maxPrice: debouncedMaxPrice,
    page: currentPage,
    availability: availabilityParam,
    sort: selectedSort,
    brands,
    tags,
    colors,
    limit: 5,
  };

  const { data, isLoading, error, isFetching } = useProducts(queryParams);
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

  if (error) {
    return (
      <div className="mt-10 text-center">
        <h1 className="font-semibold text-xl text-red-500">Error Occurred</h1>
        <p className="mt-2 text-sm text-gray-600">
          {error.message || "Something went wrong while fetching products."}
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {isFetching && (
        <div className="absolute bg-white/70 z-20 left-0 top-0 h-full w-full"></div>
      )}

      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {products.map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </div>

      <div className="mt-10 flex justify-center">
        {data?.totalPages
          ? data.totalPages > 1 && (
              <PaginationBtns totalPages={data?.totalPages ?? 0} />
            )
          : null}
      </div>
    </div>
  );
};
