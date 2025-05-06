import { Input } from "@/components/ui/Input";
import { Accordion } from "./Accordion";

export const Price = () => {
  return (
    <Accordion
      title="Price"
      content={
        <div>
          <p className="text-sm">The highest price is $380.00</p>
          <div className="mt-2 flex items-center gap-x-2">
            <Input type="number" label="From" />
            <Input type="number" label="To" />
          </div>
        </div>
      }
    />
  );
};
