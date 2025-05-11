import axiosClient from "@/lib/axios";
import { Product } from "@/types/product";

export interface WishlistAuthResponse {
  wishlists: { products: Product[] };
}

const ENDPOINT = {
  WISHLISTS: "/wishlists",
  WISHLIST: (id: string) => `/wishlists/${id}`,
};

export const wishlistServices = {
  getAll: async (): Promise<WishlistAuthResponse> => {
    const response = await axiosClient(ENDPOINT.WISHLISTS);
    return response.data;
  },
  addItem: async (id: string) => {
    const response = await axiosClient.post(ENDPOINT.WISHLIST(id));
    return response.data;
  },
  removeItem: async (id: string) => {
    await axiosClient.delete(ENDPOINT.WISHLIST(id));
  },
};
