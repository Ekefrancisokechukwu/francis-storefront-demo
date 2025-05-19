import { Checkbox } from "@/components/ui/checkbox";
import { Accordion } from "./Accordion";
import { StockStats } from "@/types/product";
import { useUrlParams } from "@/hooks/useUrlParams";

interface AvailabilityProps {
  availability: StockStats;
}

export const Availability = ({ availability }: AvailabilityProps) => {
  const { setParam, getParam, removeParam } = useUrlParams();
  const availabilityParam = getParam("availability");

  function handleChange(checked: boolean, value: string) {
    if (checked) {
      setParam("availability", value);
    } else {
      removeParam("availability");
    }
  }

  return (
    <Accordion
      title="Availability"
      content={
        <div className="space-y-2">
          <div className="flex items-center gap-x-2.5 ">
            <Checkbox
              checked={availabilityParam === "inStock"}
              id="in-stock"
              onCheckedChange={(checked) =>
                handleChange(checked as boolean, "inStock")
              }
            />
            <label htmlFor="in-stock" className="text-sm cursor-pointer flex-1">
              In stock ({availability?.inStock ?? 0})
            </label>
          </div>
          <div className="flex items-center gap-x-2.5 ">
            <Checkbox
              id="out-stock"
              checked={availabilityParam === "outOfStock"}
              onCheckedChange={(checked) =>
                handleChange(checked as boolean, "outOfStock")
              }
            />
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
