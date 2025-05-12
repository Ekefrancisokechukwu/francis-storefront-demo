import type { Product } from "@/types/product";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { StarRating } from "../ui/StarRating";
import { cn, formatUSD } from "@/lib/utils";
import { useIsInWishlist, useToggleWishlist } from "@/hooks/useWishlists";

type ProductProps = {
  product: Product;
};

const Product = ({ product }: ProductProps) => {
  const isInWishlist = useIsInWishlist(product._id);
  const { mutate: toggleWishlist } = useToggleWishlist();

  const handleToggle = (product: Product) => {
    console.log("Before toggle - isInWishlist:", isInWishlist);

    toggleWishlist(
      { product, currentExists: isInWishlist },
      {
        onSuccess: (data) => {
          console.log("Toggle success:", data);
        },
        onError: (error) => {
          console.error("Toggle error:", error);
        },
      }
    );
  };

  return (
    <div className="border border-transparent hover:border-border ease-out  transition-all duration-500 rounded block max-w-[20rem] relative bg-white group/product">
      <div className=" right-4 -top-5 scale-90 opacity-0 group-hover/product:opacity-100 group-hover/product:top-6 group-hover/product:scale-100 transition-all duration-300 ease-smush z-20 flex  flex-col gap-y-1.5 absolute  ">
        <button
          onClick={() => handleToggle(product)}
          className="border group  hover:bg-neutral-900 hover:text-white transition-all duration-300  grid w-max p-2 rounded-full"
        >
          <Heart
            size={18}
            className={cn(
              isInWishlist ? "fill-black group-hover:fill-white" : "fill-none"
            )}
          />
        </button>
        <button className="border hover:bg-neutral-900 hover:text-white transition-all duration-300   grid w-max p-2 rounded-full">
          <ShoppingBag size={18} />
        </button>
      </div>

      <Link href={`/products/${product.slug}`}>
        <div className=" relative overflow-hidden">
          <div className="overflow-hidden relative w-full aspect-square rounded">
            <Image
              alt={"product.variants[0]?.name"}
              src={product.images[0].url}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover absolute left-0 top-0 group-hover/product:opacity-0 transition-all duration-500"
            />
            <Image
              alt={"product.variants[0].name"}
              src={product.images[1].url}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover absolute left-0 top-0 opacity-0 group-hover/product:opacity-100 transition-all duration-500"
            />
            {product?.variants && (
              <div className="flex items-center gap-x-1  z-30  absolute bottom-0 left-4 opacity-0 transition-all duration-300 group-hover/product:opacity-100">
                {product.variants.map((variant) =>
                  variant.options
                    .filter((opt) => opt.type === "color")
                    .map((opt) => (
                      <div
                        key={opt._id}
                        style={{ backgroundColor: opt.hexCode }}
                        className="size-[1.2rem] border rounded-full"
                      />
                    ))
                )}
              </div>
            )}
          </div>
        </div>

        <div className="px-4 mt-1.5 pb-2">
          <p className="text-sm text-neutral-400">Nikamal</p>
          <p className="font-medium mt-2 min-[500px]:text-base text-sm text-neutral-700">
            {product.name}
          </p>
          <div className="mt-2.5">
            <StarRating rating={product.rating} size={20} />
          </div>
          <p className="mt-2 font-semibold text-sm">
            {" "}
            {formatUSD(product.price)}
          </p>
        </div>
      </Link>
    </div>
  );
};
export default Product;
