import { cartServices } from "@/services/cartService";
import { AddToCartVariant, CartItem } from "@/types/cart";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const cartKeys = {
  carts: ["carts"] as const,
  lists: (productId: string) => [...cartKeys.carts, productId] as const,
};

export function useGetCartItems() {
  return useQuery({ queryKey: cartKeys.carts, queryFn: cartServices.getCart });
}

export function useAddToCart() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      productId,
      payload,
    }: {
      productId: string;
      payload?: AddToCartVariant;
    }) => cartServices.addToCart(productId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.carts });
    },
  });
}

export function useRemoveCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) => cartServices.deleteCartItem(productId),
    onSuccess: (productId) => {
      queryClient.invalidateQueries({ queryKey: cartKeys.lists(productId) });
      queryClient.invalidateQueries({ queryKey: cartKeys.carts });
    },
  });
}

export function useUpdateCartItem_DEBUG() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (vars: { itemId: string; quantity: number }) => {
      console.log("🔥 mutationFn reached", vars);
      return cartServices.updateCartItem(vars);
    },
    onMutate: () => {
      console.log("🧨 onMutate start");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.carts });
    },
  });
}

export function useUpdateCartItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (vars: { itemId: string; quantity: number }) =>
      cartServices.updateCartItem(vars),
    onMutate: async ({ itemId, quantity }) => {
      await queryClient.cancelQueries({ queryKey: cartKeys.lists(itemId) });

      const prev = queryClient.getQueryData<CartItem[]>(cartKeys.carts);

      queryClient.setQueryData<CartItem[]>(cartKeys.carts, (old) =>
        old?.map((ci) =>
          ci._id === itemId
            ? { ...ci, quantity, itemTotal: ci.unitPrice * quantity }
            : ci
        )
      );

      console.log("prev", prev);

      return { prev };
    },
    onError: (_err, _vars, ctx) => {
      if (ctx?.prev) queryClient.setQueryData(cartKeys.carts, ctx.prev);
    },

    // onSuccess: (data) => {
    //   console.log("data onsucess:", data);

    //   queryClient.invalidateQueries({ queryKey: cartKeys.carts });
    // },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: cartKeys.carts });
      console.log("here yes onsettled");
    },
  });
}
