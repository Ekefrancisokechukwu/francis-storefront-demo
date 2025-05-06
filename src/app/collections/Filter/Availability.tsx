import { Checkbox } from "@/components/ui/checkbox";
import { Accordion } from "./Accordion";

export const Availability = () => {
  return (
    <Accordion
      title="Availability"
      content={
        <div className="space-y-2">
          <div className="flex items-center gap-x-2.5 ">
            <Checkbox id="in-stock" />
            <label htmlFor="in-stock" className="text-sm cursor-pointer flex-1">
              In stock (21)
            </label>
          </div>
          <div className="flex items-center gap-x-2.5 ">
            <Checkbox id="out-stock" />
            <label
              htmlFor="out-stock"
              className="text-sm cursor-pointer flex-1"
            >
              Out stock (6)
            </label>
          </div>
        </div>
      }
    />
  );
};
