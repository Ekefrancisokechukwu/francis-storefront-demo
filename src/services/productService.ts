import axiosClient from "@/lib/axios";
import { Product } from "@/types/product";

interface ProductApiResponse {
  products: Product[];
}

const ENDPOINTS = {
  PRODUCTS: "/products",
  PRODUCT: (idOrSlug: string) => `/products/${idOrSlug}`,
  PRODUCT_CATEGORY: (category: string) => `/products/category/${category}`,
};

export const productService = {
  // Get all products
  getAll: async (): Promise<ProductApiResponse> => {
    const response = await axiosClient.get(ENDPOINTS.PRODUCTS);
    return response.data;
  },

  // Get product by
  getProduct: async (idOrSlug: string): Promise<Product> => {
    const response = await axiosClient.get(ENDPOINTS.PRODUCT(idOrSlug));
    return response.data;
  },
};
