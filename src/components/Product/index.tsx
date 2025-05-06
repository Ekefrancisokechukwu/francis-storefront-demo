import { Heart, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <Link
      href={`/products/this-is-my-slug`}
      className="border border-transparent hover:border-border ease-out  transition-all duration-500 rounded block max-w-[20rem] bg-white group/product"
    >
      <div className=" relative overflow-hidden">
        <div className="overflow-hidden relative w-full aspect-square rounded">
          <Image
            alt="demo"
            src={"/demo-2.webp"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover absolute left-0 top-0 group-hover/product:opacity-0 transition-all duration-500"
          />
          <Image
            alt="demo"
            src={"/demo-1.webp"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover absolute left-0 top-0 opacity-0 group-hover/product:opacity-100 transition-all duration-500"
          />
          <div className="flex items-center gap-x-1  z-30  absolute bottom-0 left-4 opacity-0 transition-all duration-300 group-hover/product:opacity-100">
            <button
              style={{ background: "#d97706" }}
              className="size-[1.2rem]  grid border rounded-full"
            />
            <button
              style={{ background: "#365314" }}
              className="size-[1.2rem]  grid border rounded-full"
            />
            <button
              style={{ background: "#9f1239" }}
              className="size-[1.2rem]  grid border rounded-full"
            />
          </div>
        </div>

        <div className=" right-4 -top-5 scale-90 opacity-0 group-hover/product:opacity-100 group-hover/product:top-6 group-hover/product:scale-100 transition-all duration-300 ease-smush z-20 flex  flex-col gap-y-1.5 absolute ">
          <button className="border  hover:bg-neutral-900 hover:text-white transition-all duration-300  grid w-max p-2 rounded-full">
            <Heart size={18} />
          </button>
          <button className="border hover:bg-neutral-900 hover:text-white transition-all duration-300   grid w-max p-2 rounded-full">
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>

      <div className="px-4 mt-1.5 pb-2">
        <p className="text-sm text-neutral-400">Nikamal</p>
        <p className="font-medium mt-2 text-neutral-700">
          Modern And Comfortable Acre Lounge Chair
        </p>
        <div className="mt-2.5 flex items-center">
          <Star size={10} fill="gold" color="gold" />
          <Star size={10} fill="gold" color="gold" />
          <Star size={10} fill="gold" color="gold" />
          <Star size={10} fill="gold" color="gold" />
          <Star size={10} fill="gold" color="gold" />
        </div>
        <p className="mt-2 font-semibold text-sm">$19.00</p>
      </div>
    </Link>
  );
};
export default Product;
