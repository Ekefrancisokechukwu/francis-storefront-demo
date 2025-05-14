import { Checkbox } from "@/components/ui/checkbox";
import { Accordion } from "./Accordion";
import { StockStats } from "@/types/product";

interface AvailabilityProps {
  availability: StockStats;
}

export const Availability = ({ availability }: AvailabilityProps) => {
  return (
    <Accordion
      title="Availability"
      content={
        <div className="space-y-2">
          <div className="flex items-center gap-x-2.5 ">
            <Checkbox id="in-stock" />
            <label htmlFor="in-stock" className="text-sm cursor-pointer flex-1">
              In stock ({availability?.inStock ?? 0})
            </label>
          </div>
          <div className="flex items-center gap-x-2.5 ">
            <Checkbox id="out-stock" />
            <label
              htmlFor="out-stock"
              className="text-sm cursor-pointer flex-1"
            >
              Out stock ({availability?.outOfStock ?? 0})
            </label>
          </div>
        </div>
      }
    />
  );
};
