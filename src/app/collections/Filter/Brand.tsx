import { Checkbox } from "@/components/ui/checkbox";
import { Accordion } from "./Accordion";

export const Brand = () => {
  return (
    <Accordion
      title="Brand"
      content={
        <div className="space-y-2">
          <div className="flex items-center gap-x-2.5 ">
            <Checkbox id="HomeTown" />
            <label htmlFor="HomeTown" className="text-sm cursor-pointer flex-1">
              HomeTown (6)
            </label>
          </div>
        </div>
      }
    />
  );
};
