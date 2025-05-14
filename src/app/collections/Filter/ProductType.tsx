import { Checkbox } from "@/components/ui/checkbox";
import { Accordion } from "./Accordion";
import { Tag } from "@/types/product";

interface ProductType {
  tags: Tag[];
}

export const ProductType = ({ tags = [] }: ProductType) => {
  return (
    <Accordion
      title="Product Tags"
      content={
        <div className="space-y-2">
          {tags.map((tag) => (
            <div key={tag.tag} className="flex items-center gap-x-2.5 ">
              <Checkbox id={tag.tag} />
              <label
                htmlFor={tag.tag}
                className="text-sm cursor-pointer capitalize flex-1"
              >
                {tag?.tag} ({tag?.count ?? 0})
              </label>
            </div>
          ))}
        </div>
      }
    />
  );
};
