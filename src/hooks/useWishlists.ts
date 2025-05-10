import {
  WishlistAuthResponse,
  wishlistServices,
} from "@/services/wishlistServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const wishlistKeys = {
  wishlists: ["wishlists"],
};

export function useGetWishlists() {
  return useQuery({
    queryKey: wishlistKeys.wishlists,
    queryFn: wishlistServices.getAll,
  });
}

export function useToggleWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      const wishlists: WishlistAuthResponse =
        queryClient.getQueryData(wishlistKeys.wishlists) || [];

      const exists = wishlists?.wishlists.products.some(
        (prod) => prod._id === productId
      );

      if (exists) {
        await wishlistServices.removeItem(productId);
        return { type: "removed", productId };
      } else {
        const newItem = await wishlistServices.addItem(productId);
        return { type: "added", newItem };
      }
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wishlistKeys.wishlists });
    },
  });
}

export function useRemoveFromWishLists() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) => wishlistServices.removeItem(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: wishlistKeys.wishlists });
    },
  });
}
