"use client";

import { useQuery } from "@tanstack/react-query";
import { productService } from "@/services/productService";
// import type { Product } from "@/types/product";

// Query keys for products
export const productKeys = {
  all: ["products"] as const,
  featured: ["featured"],
  lists: () => [...productKeys.all, "list"] as const,
  list: (filters: Record<string, unknown>) =>
    [...productKeys.lists(), { filters }] as const,
  categories: () => [...productKeys.all, "categories"] as const,
  category: (category: string) =>
    [...productKeys.categories(), category] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
};

// Hook for fetching all products
export function useProducts() {
  return useQuery({
    queryKey: productKeys.lists(),
    queryFn: () => productService.getAll(),
  });
}

// hook fetching the landing page featured products
export function useGetFeaturedProducts() {
  return useQuery({
    queryKey: productKeys.featured,
    queryFn: () => productService.getAll(),
  });
}
