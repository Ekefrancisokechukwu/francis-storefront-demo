"use client";

import Product from "@/components/Product";
import { ProductSkeleton } from "@/components/Product/Skeleton";
import { Wrapper } from "@/components/ui/Wrapper";
import { useFeaturedProducts } from "@/hooks/useProducts";

const FeaturedProductSection = () => {
  const { data, error, isLoading } = useFeaturedProducts();

  const products = data?.products ?? [];

  if (isLoading) {
    return (
      <Wrapper className="mt-10">
        <h1 className="font-semibold text-xl">Featured products</h1>
        <div className="mt-5 grid sm:grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] gap-x-1.5 grid-cols-2 ">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
        </div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper className="mt-10 text-center">
        <h1 className="font-semibold text-xl text-red-500">Error Occurred</h1>
        <p className="mt-2 text-sm text-gray-600">
          {error.message || "Something went wrong while fetching products."}
        </p>
      </Wrapper>
    );
  }

  return (
    <Wrapper className="mt-10">
      <h1 className="font-semibold text-xl">Featured products</h1>
      <div className="mt-5 grid sm:grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] grid-cols-2 ">
        {products.slice(0, 12).map((product, i) => {
          return <Product key={i} product={product} />;
        })}
      </div>
    </Wrapper>
  );
};
export default FeaturedProductSection;
