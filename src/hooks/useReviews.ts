import { CreateReviewBody, reviewServices } from "@/services/reviewServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

const reviewKeys = {
  all: ["reviews"],
  lists: (productId: string) => [...reviewKeys.all, productId],
};

export function useGetReviews(productId: string) {
  return useQuery({
    queryKey: reviewKeys.lists(productId),
    queryFn: () => reviewServices.getProductReviews(productId),
  });
}

export function useCreateReview() {
  const queryClient = useQueryClient();

  return useMutation<unknown, AxiosError<{ error: string }>, CreateReviewBody>({
    mutationFn: (body: CreateReviewBody) => reviewServices.createReview(body),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: reviewKeys.lists(variables.productId),
      });
    },
    onError: (error) => {
      console.error("Failed to create review:", error);
    },
  });
}
