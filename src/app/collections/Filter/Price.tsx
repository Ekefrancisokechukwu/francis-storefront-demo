import { Input } from "@/components/ui/Input";
import { Accordion } from "./Accordion";
import { formatUSD } from "@/lib/utils";
import { useUrlParams } from "@/hooks/useUrlParams";
import { useEffect, useState } from "react";

interface PriceProps {
  maxPrice: number;
}

export const Price = ({ maxPrice }: PriceProps) => {
  const { setParam, getParam, removeParam } = useUrlParams();

  const [priceFrom, setPriceFrom] = useState<string>("");
  const [priceTo, setPriceTo] = useState<string>("");

  const priceFromParam = getParam("price.from") || "";
  const priceToParam = getParam("price.to") || maxPrice.toString();

  useEffect(() => {
    setPriceFrom(priceFromParam);
    setPriceTo(priceToParam);
  }, [priceFromParam, priceToParam]);

  const handlePriceFromChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceFrom(value);
    if (value === "") {
      removeParam("price.from");
    } else {
      setParam("price.from", value);
    }
  };

  const handlePriceToChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPriceTo(value);
    if (value === "") {
      removeParam("price.to");
    } else {
      setParam("price.to", value);
    }
  };

  return (
    <Accordion
      title="Price"
      content={
        <div>
          <p className="text-sm">
            The highest price is {formatUSD(maxPrice ?? 0)}
          </p>
          <div className="mt-2 flex items-center gap-x-2">
            <div className="flex-1">
              <Input
                type="number"
                value={priceFrom}
                onChange={handlePriceFromChange}
                label="From"
                min={0}
              />
            </div>
            <div className="flex-1">
              <Input
                type="number"
                value={priceTo}
                onChange={handlePriceToChange}
                label="To"
                min={0}
                max={maxPrice}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};
