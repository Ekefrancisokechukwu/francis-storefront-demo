import { Heart } from "lucide-react";
import Link from "next/link";

const WishlistLink = () => {
  return (
    <Link href={"/wishlist"} className="relative">
      <Heart />
      <div className="absolute size-[1.1rem] text-sm grid font-semibold place-items-center rounded-full -top-1 -right-1 text-neutral-700 bg-neutral-100">
        0
      </div>
    </Link>
  );
};

export default WishlistLink;
