import { Checkbox } from "@/components/ui/checkbox";
import { Accordion } from "./Accordion";
import { Brand } from "@/types/product";
import { useUrlParams } from "@/hooks/useUrlParams";
import { useEffect, useState } from "react";

interface BrandProps {
  brands: Brand[];
}

export const Brands = ({ brands = [] }: BrandProps) => {
  const { setParam, getParam, removeParam } = useUrlParams();
  const brandsParams = getParam("brands");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  useEffect(() => {
    if (brandsParams) {
      setSelectedBrands(brandsParams.split(","));
    } else {
      setSelectedBrands([]);
    }
  }, [brandsParams]);

  const handleChange = (brand: string) => {
    let updated: string[];

    if (selectedBrands.includes(brand)) {
      updated = selectedBrands.filter((currBrand) => currBrand !== brand);
    } else {
      updated = [...selectedBrands, brand];
    }

    setSelectedBrands(updated);

    if (updated.length === 0) {
      removeParam("brands");
    } else {
      setParam("brands", updated.join(","));
    }
  };

  return (
    <Accordion
      title="Brand"
      content={
        <div className="space-y-2">
          {brands.map((brand) => {
            const isChecked = selectedBrands.includes(brand.brand);

            return (
              <div key={brand.brand} className="flex items-center gap-x-2.5 ">
                <Checkbox
                  id={brand.brand}
                  checked={isChecked}
                  onCheckedChange={() => handleChange(brand.brand)}
                />
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
