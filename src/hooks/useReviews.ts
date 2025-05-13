import { reviewServices } from "@/services/reviewServices";
import { useQuery } from "@tanstack/react-query";

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
