import { useGetCartItems } from "@/hooks/useCart";
import { CartItem } from "./CartItem";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { formatUSD } from "@/lib/utils";
import { Wrapper } from "@/components/ui/Wrapper";

export const ItemContainer = () => {
  const { data, isLoading, error } = useGetCartItems();

  const cartItems = data?.cart.items ?? [];
  const totalPrice = data?.cart.totalPrice;

  if (isLoading) {
    return (
      <div className="mt-5 space-y-5">
        {Array.from({ length: 5 }).map((_, i) => (
          <div key={i} className="flex items-center justify-between">
            <div className="flex items-start lg:gap-x-15 gap-x-5">
              <Skeleton className="size-[7rem]" />
              <div className="space-y-1.5">
                <Skeleton className="w-[7rem] h-5" />
                <Skeleton className="w-[7rem] h-5" />
              </div>
            </div>
            <div className="flex items-center gap-x-28">
              <Skeleton className="h-11 w-24" />
              <Skeleton className="h-11 w-24" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <Wrapper className="mt-10 text-center">
        <h1 className="font-semibold text-xl text-red-500">Error Occurred</h1>
        <p className="mt-2 text-sm text-gray-600">
          {error.message || "Something went wrong while fetching products."}
        </p>
      </Wrapper>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="text-center mt-20">
        <p className="text-neutral-800 text-2xl font-medium">
          Your cart is empty
        </p>
        <Button className="mt-5" asChild>
          <Link href={"/collections"}>Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div className=" grid min-[744px]:grid-cols-[1fr_15rem_10rem] grid-cols-[1fr_5rem]  items-center">
        <h5 className="text-neutral-600 font-medium text-sm">PRODUCT</h5>
        <h5 className="text-neutral-600 font-medium text-sm min-[744px]:block hidden">
          QUANTITY
        </h5>
        <h5 className="text-neutral-600 font-medium text-sm text-right">
          TOTAL
        </h5>
      </div>
      <div className="mt-2 divide-y">
        {cartItems.map((item) => {
          return <CartItem key={item._id} item={item} />;
        })}
      </div>

      <div className="flex justify-end mt-8">
        <div className="">
          <p className="font-semibold text-right">
            Subtotal{" "}
            <span className="ml-5">{formatUSD(totalPrice || 0)} USD</span>
          </p>
          <Button className="mt-5  min-[400px]:w-[22rem] w-fit">
            CHECKOUT
          </Button>
        </div>
      </div>
    </div>
  );
};
