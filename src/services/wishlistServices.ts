import axiosClient from "@/lib/axios";

const ENDPOINT = {
  WISHLISTS: "/wishlists",
};

export const wishlistServices = {
  getMyWishlists: async () => {
    const response = await axiosClient(ENDPOINT.WISHLISTS);
    return response.data;
  },
};
