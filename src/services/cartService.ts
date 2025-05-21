import axiosClient from "@/lib/axios";
import { AddToCartVariant, ApiResponse } from "@/types/cart";

// export type { CartItem, SelectedOption };

const ENDPOINTS = {
  CARTS: "/cart",
  CARTS_ITEM: (productId: string) => `/cart/item/${productId}`,
};

export const cartServices = {
  getCart: async (): Promise<ApiResponse> => {
    const response = await axiosClient.get(ENDPOINTS.CARTS);
    return response.data;
  },

  addToCart: async (
    productId: string,
    payload: AddToCartVariant | undefined
  ) => {
    const response = await axiosClient.post(
      ENDPOINTS.CARTS_ITEM(productId),
      payload ?? {}
    );

    console.log("payload", payload);

    return response.data;
  },

  updateCartItem: async (productInfos: {
    itemId: string;
    quantity: number;
  }) => {
    const response = await axiosClient.patch(
      ENDPOINTS.CARTS_ITEM(productInfos.itemId),
      {
        quantity: productInfos.quantity,
      }
    );
    console.log("i was reached");

    return response.data;
  },

  deleteCartItem: async (productId: string) => {
    const response = await axiosClient.delete(ENDPOINTS.CARTS_ITEM(productId));
    return response.data;
  },
};
