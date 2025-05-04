import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Product = () => {
  return (
    <Link
      href={"#"}
      className="border border-transparent hover:border-border ease-out  transition-all duration-500 rounded max-w-[30rem] bg-white group/product"
    >
      <div className="overflow-hidden">
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
          <div className="flex items-center gap-x-1   absolute bottom-0 left-4 opacity-0 transition-all duration-300 group-hover/product:opacity-100">
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
