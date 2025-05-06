import { SlidersHorizontal } from "lucide-react";

export const OpenFilterAndSortBtn = () => {
  return (
    <button className="lg:hidden flex items-center gap-x-2 ">
      <SlidersHorizontal size={18} />{" "}
      <span className="font-medium">Filter and sort</span>
    </button>
  );
};
