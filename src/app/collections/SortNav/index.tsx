"use client";

import { useUrlParams } from "@/hooks/useUrlParams";

const sortOptions = [
  { value: "price_low_high", label: "Price: Low to High" },
  { value: "price_high_low", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "featured", label: "Featured" },
  { value: "rating_high_low", label: "Customer Rating" },
  { value: "name_asc", label: "Name: A to Z" },
  { value: "name_dec", label: "Name: Z to A" },
];

export const SortNav = () => {
  const { setParam, getParam } = useUrlParams();
  const selectedSort = getParam("sort_by") || "newest";

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setParam("sort_by", e.target.value);
  };

  return (
    <div className="flex lg:justify-normal justify-between  items-center gap-x-8">
      <label htmlFor="sort" className="text-sm font-medium">
        Sort By:
      </label>
      <select
        id="sort"
        value={selectedSort}
        onChange={handleSortChange}
        className="outline-0 font-medium text-sm"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value} className="text-sm">
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
