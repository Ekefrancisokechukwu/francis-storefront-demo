"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { productService } from "@/services/productService";
import { ProductQueryParams } from "@/types/product";
// import type { Product } from "@/types/product";

// Query keys for products
export const productKeys = {
  all: ["products"] as const,
  featured: ["featured"],
  lists: (params?: ProductQueryParams) =>
    [...productKeys.all, "list", params] as const,
  list: (filters: Record<string, unknown>) =>
    [...productKeys.lists(), { filters }] as const,
  categories: () => [...productKeys.all, "categories"] as const,
  category: (category: string) =>
    [...productKeys.categories(), category] as const,
  details: () => [...productKeys.all, "detail"] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
  filters: ["all_filters"] as const,
};

// Hook for fetching all products
export function useProducts(params: ProductQueryParams) {
  return useQuery({
    queryKey: productKeys.lists(params),
    queryFn: () => productService.getAll(params),
    placeholderData: keepPreviousData,
  });
}

// hook fetching the landing page featured products
export function useFeaturedProducts() {
  return useQuery({
    queryKey: productKeys.featured,
    queryFn: () => productService.getFeaturedProducts(),
  });
}

// get all products filters
export function useGetAllFilters() {
  return useQuery({
    queryKey: productKeys.filters,
    queryFn: () => productService.getAllFilters(),
  });
}

// get all products categories
export function useGetCategories() {
  return useQuery({
    queryKey: productKeys.categories(),
    queryFn: () => productService.getCategories(),
    staleTime: Infinity,
  });
}
