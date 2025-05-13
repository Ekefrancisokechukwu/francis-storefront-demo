import axiosClient from "@/lib/axios";

const ENDPOINT = {
  REVIEWS: (productId: string) => `/products/${productId}/reviews`,
};

interface Review {
  _id: string;
  product: string;
  user: { username: string; email: string };
  rating: 5;
  comment: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  reviews: Review[];
}

export const reviewServices = {
  getProductReviews: async (productId: string): Promise<ApiResponse> => {
    const response = await axiosClient(ENDPOINT.REVIEWS(productId));
    return response.data;
  },
};
