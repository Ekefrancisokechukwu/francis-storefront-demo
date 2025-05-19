import type { Color } from "@/types/product";
import { Accordion } from "./Accordion";
import { Check } from "lucide-react";
import { isLightColor } from "@/app/products/[slug]/productDetailsInfo";
import { useEffect, useState } from "react";
import { useUrlParams } from "@/hooks/useUrlParams";

interface ColorProps {
  colors: Color[];
}

export const Colors = ({ colors = [] }: ColorProps) => {
  const { setParam, getParam, removeParam } = useUrlParams();
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const colorsParams = getParam("colors");

  console.log(colors);

  useEffect(() => {
    setSelectedColors(colorsParams ? colorsParams.split(",") : []);
  }, [colorsParams]);

  const toggleColor = (color: string) => {
    let updated: string[] = [];

    if (selectedColors.includes(color)) {
      updated = selectedColors.filter((selected) => selected !== color);
    } else {
      updated = [...selectedColors, color];
    }

    setSelectedColors(updated);

    if (updated.length === 0) {
      removeParam("colors");
    } else {
      setParam("colors", updated.join(","));
      console.log(updated.join(","));
    }
  };

  return (
    <Accordion
      title="Color"
      content={
        <div>
          {/* <div className="flex items-center flex-wrap gap-2 mb-3">
            {selectedColors.map((color, i) => (
              <button
                key={i}
                className="cursor-pointer text-sm flex items-center gap-x-1"
              >
                <span className="p-0.5 rounded-full bg-rose-400 text-white">
                  <X size={13} />
                </span>
                {color}
              </button>
            ))}
          </div> */}
          <div className="px-1 flex  items-center flex-wrap gap-2.5">
            {colors.map((color) => {
              const isSelected = selectedColors.includes(color.value);
              return (
                <button
                  key={color.hexCode}
                  style={{ background: color.hexCode }}
                  onClick={() => toggleColor(color.value)}
                  className="ring ring-offset-2 grid place-items-center ring-neutral-300 size-6 rounded-full"
                >
                  {isSelected && (
                    <Check
                      size={15}
                      color={
                        isLightColor(color.hexCode as string)
                          ? "#000000"
                          : "#fff"
                      }
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      }
    />
  );
};
