const sortOptions = [
  { value: "price_low_high", label: "Price: Low to High" },
  { value: "price_high_low", label: "Price: High to Low" },
  { value: "newest", label: "Newest Arrivals" },
  { value: "featured", label: "Featured" },
  { value: "rating_high_low", label: "Customer Rating" },
  { value: "alphabetical_az", label: "Name: A to Z" },
  { value: "alphabetical_za", label: "Name: Z to A" },
];

export const SortNav = () => {
  return (
    <div className="flex justify-end gap-x-11 items-center">
      <div className="">
        <div className="flex items-center gap-x-8">
          <label htmlFor="sort" className="text-sm font-medium">
            Sort By:
          </label>
          <select
            id="sort"
            // value={value}
            // onChange={(e) => onChange(e.target.value)}
            className="outline-0 font-medium text-sm"
          >
            {sortOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="text-sm"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <span className="font-medium">22 products</span>
      </div>
    </div>
  );
};
