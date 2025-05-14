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

export interface CreateReviewBody {
  comment: string;
  rating: number;
  productId: string;
}

export const reviewServices = {
  getProductReviews: async (productId: string): Promise<ApiResponse> => {
    const response = await axiosClient(ENDPOINT.REVIEWS(productId));
    return response.data;
  },
  createReview: async ({ comment, rating, productId }: CreateReviewBody) => {
    const data = {
      comment,
      rating,
    };
    const response = await axiosClient.post(ENDPOINT.REVIEWS(productId), data);
    return response.data;
  },
};
