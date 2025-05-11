import {
  WishlistAuthResponse,
  wishlistServices,
} from "@/services/wishlistServices";
import { Product } from "@/types/product";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const wishlistKeys = {
  all: ["wishlists"] as const,
  lists: () => [...wishlistKeys.all, "list"] as const,
  detail: (id: string) => [...wishlistKeys.lists(), id] as const,
};

export function useGetWishlists() {
  return useQuery({
    queryKey: wishlistKeys.lists(),
    queryFn: wishlistServices.getAll,
  });
}

const isProductInWishlist = (
  wishlists: WishlistAuthResponse | undefined,
  productId: string
): boolean => {
  if (!wishlists?.wishlists?.products) return false;
  return wishlists.wishlists.products.some((prod) => prod._id === productId);
};

export function useToggleWishlist() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      product,
      currentExists,
    }: {
      product: Product;
      currentExists: boolean;
    }) => {
      if (currentExists) {
        await wishlistServices.removeItem(product._id);
        return { action: "remove", product };
      } else {
        const response = await wishlistServices.addItem(product._id);
        return { action: "add", response };
      }
    },
    onMutate: (product) => {
      // Cancel any outgoing refetches
      queryClient.cancelQueries({ queryKey: wishlistKeys.lists() });

      // Snapshot the previous value
      const previousWishlists = queryClient.getQueryData<WishlistAuthResponse>(
        wishlistKeys.lists()
      );

      // Get the current state before optimistic update
      const currentExists =
        previousWishlists?.wishlists.products.some(
          (p) => p._id === product.product._id
        ) ?? false;

      queryClient.setQueryData<WishlistAuthResponse>(
        wishlistKeys.lists(),
        (old) => {
          if (!old) {
            return {
              wishlists: {
                products: [product.product],
              },
            };
          }

          const updatedProducts = currentExists
            ? old.wishlists.products.filter(
                (p) => p._id !== product.product._id
              )
            : [...old.wishlists.products, product.product];

          return {
            ...old,
            wishlists: {
              ...old.wishlists,
              products: updatedProducts,
            },
          };
        }
      );

      return { previousWishlists };
    },
    onError: (err, productId, context) => {
      console.error("Error toggling wishlist item:", err);
      if (context?.previousWishlists) {
        queryClient.setQueryData(
          wishlistKeys.lists(),
          context.previousWishlists
        );
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: wishlistKeys.lists() });
    },
  });
}

export function useRemoveFromWishLists() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) => wishlistServices.removeItem(productId),
    onMutate: (productId) => {
      queryClient.cancelQueries({ queryKey: wishlistKeys.lists() });

      const previousWishlists = queryClient.getQueryData<WishlistAuthResponse>(
        wishlistKeys.lists()
      );

      queryClient.setQueryData<WishlistAuthResponse>(
        wishlistKeys.lists(),
        (old) => {
          if (!old) return old;

          return {
            ...old,
            wishlists: {
              products: old.wishlists.products.filter(
                (prod) => prod._id !== productId
              ),
            },
          };
        }
      );

      return { previousWishlists };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: wishlistKeys.lists() });
    },
  });
}

export function useIsInWishlist(productId: string) {
  const { data: wishlists } = useGetWishlists();
  return isProductInWishlist(wishlists, productId);
}
