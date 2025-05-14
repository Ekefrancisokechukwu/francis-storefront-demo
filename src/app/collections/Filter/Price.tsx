import { Input } from "@/components/ui/Input";
import { Accordion } from "./Accordion";
import { formatUSD } from "@/lib/utils";

interface PriceProps {
  maxPrice: number;
}

export const Price = ({ maxPrice }: PriceProps) => {
  return (
    <Accordion
      title="Price"
      content={
        <div>
          <p className="text-sm">
            The highest price is {formatUSD(maxPrice ?? 0)}
          </p>
          <div className="mt-2 flex items-center gap-x-2">
            <Input type="number" label="From" />
            <Input type="number" label="To" />
          </div>
        </div>
      }
    />
  );
};
