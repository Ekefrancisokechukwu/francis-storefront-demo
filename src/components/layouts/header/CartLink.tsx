import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const CartLink = () => {
  return (
    <Link href={"/cart"} className="flex items-center gap-x-3">
      <div className="grid place-items-center relative">
        <ShoppingBag />
        <div className="absolute size-[1.1rem] text-sm grid font-semibold place-items-center rounded-full -top-1 -right-1 text-neutral-700 bg-neutral-100">
          0
        </div>
      </div>
      <div className="leading-0.5">
        <span className="text-sm block text-neutral-200/70">$0.00</span>
        <span className="font-semibold text-sm ">My Cart</span>
      </div>
    </Link>
  );
};
export default CartLink;
