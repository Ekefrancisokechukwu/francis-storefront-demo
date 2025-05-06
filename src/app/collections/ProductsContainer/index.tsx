import Product from "@/components/Product";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const ProductsContianer = () => {
  return (
    <div>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2">
        {Array.from({ length: 8 }).map((_, i) => {
          return <Product key={i} />;
        })}
      </div>

      <div className="mt-10 flex justify-center">
        <div className="flex items-center gap-x-1">
          <Button>1</Button>
          <Button variant={"outline"}>2</Button>
          <Button variant={"outline"}>3</Button>
          <Button variant={"outline"}>
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
};
