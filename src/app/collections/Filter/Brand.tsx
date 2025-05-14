import { Checkbox } from "@/components/ui/checkbox";
import { Accordion } from "./Accordion";
import { Brand } from "@/types/product";

interface BrandProps {
  brands: Brand[];
}

export const Brands = ({ brands = [] }: BrandProps) => {
  return (
    <Accordion
      title="Brand"
      content={
        <div className="space-y-2">
          {brands.map((brand) => {
            return (
              <div key={brand.brand} className="flex items-center gap-x-2.5 ">
                <Checkbox id={brand.brand} />
                <label
                  htmlFor={brand.brand}
                  className="text-sm cursor-pointer flex-1"
                >
                  {brand.brand} ({brand.count})
                </label>
              </div>
            );
          })}
        </div>
      }
    />
  );
};
