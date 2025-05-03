import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative bg-white w-full max-w-[40rem] flex items-center rounded-lg px-2.5 py-1">
      <input
        type="text"
        placeholder="Search"
        className="w-full  text-sm text-neutral-800 outline-0 px-3 py-1"
      />
      <button name="search button" className="cursor-pointer">
        <Search className="text-neutral-800" />
      </button>
    </div>
  );
};
export default SearchBar;
