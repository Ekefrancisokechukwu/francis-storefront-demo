import { Checkbox } from "@/components/ui/checkbox";
import { Accordion } from "./Accordion";
import { Tag } from "@/types/product";
import { useUrlParams } from "@/hooks/useUrlParams";
import { useEffect, useState } from "react";

interface ProductType {
  tags: Tag[];
}

export const ProductType = ({ tags = [] }: ProductType) => {
  const { setParam, getParam, removeParam } = useUrlParams();
  const brandsParams = getParam("tags");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    if (brandsParams) {
      setSelectedTags(brandsParams.split(","));
    } else {
      setSelectedTags([]);
    }
  }, [brandsParams]);

  const handleChange = (brand: string) => {
    let updated: string[];

    if (selectedTags.includes(brand)) {
      updated = selectedTags.filter((currBrand) => currBrand !== brand);
    } else {
      updated = [...selectedTags, brand];
    }

    setSelectedTags(updated);

    if (updated.length === 0) {
      removeParam("tags");
    } else {
      setParam("tags", updated.join(","));
    }
  };

  return (
    <Accordion
      title="Product Tags"
      content={
        <div className="space-y-2">
          {tags.map((tag) => {
            const isChecked = selectedTags.includes(tag.tag);

            return (
              <div key={tag.tag} className="flex items-center gap-x-2.5 ">
                <Checkbox
                  id={tag.tag}
                  checked={isChecked}
                  onCheckedChange={() => handleChange(tag.tag)}
                />
                <label
                  htmlFor={tag.tag}
                  className="text-sm cursor-pointer capitalize flex-1"
                >
                  {tag?.tag} ({tag?.count ?? 0})
                </label>
              </div>
            );
          })}
        </div>
      }
    />
  );
};
