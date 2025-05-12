import axiosClient from "@/lib/axios";
import { Product, ProductQueryParams } from "@/types/product";

interface ProductApiResponse {
  products: Product[];
}

const ENDPOINTS = {
  PRODUCTS: (queryString?: string) => `/products?${queryString}`,
  PRODUCTS_FEATURED: "/products/?featured=true",
  PRODUCT: (idOrSlug: string) => `/products/${idOrSlug}`,
  PRODUCT_CATEGORY: (category: string) => `/products/category/${category}`,
};

const buildQueryString = (params: ProductQueryParams) => {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      query.append(key, value);
    }
  });

  return query.toString();
};

export const productService = {
  // Get all products
  getAll: async (params: ProductQueryParams): Promise<ProductApiResponse> => {
    const query = buildQueryString(params);
    const response = await axiosClient.get(ENDPOINTS.PRODUCTS(query));
    return response.data;
  },

  getFeaturedProducts: async () => {
    const response = await axiosClient.get(ENDPOINTS.PRODUCTS_FEATURED);
    return response.data;
  },

  // Get product by
  getProduct: async (idOrSlug: string): Promise<Product> => {
    const response = await axiosClient.get(ENDPOINTS.PRODUCT(idOrSlug));
    return response.data;
  },
};
