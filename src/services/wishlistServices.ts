import axiosClient from "@/lib/axios";

const ENDPOINT = {
  WISHLISTS: "/wishlists",
};

export const wishlistServices = {
  getAll: async () => {
    const response = await axiosClient(ENDPOINT.WISHLISTS);
    return response.data;
  },
};
