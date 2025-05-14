import type { Color } from "@/types/product";
import { Accordion } from "./Accordion";

interface ColorProps {
  colors: Color[];
}

export const Colors = ({ colors = [] }: ColorProps) => {
  return (
    <Accordion
      title="Color"
      content={
        <div className="px-1 flex items-center flex-wrap gap-2.5">
          {colors.map((color) => (
            <button
              key={color.hexCode}
              style={{ background: color.hexCode }}
              className="ring ring-offset-2 ring-neutral-300 size-6 rounded-full"
            ></button>
          ))}
        </div>
      }
    />
  );
};
