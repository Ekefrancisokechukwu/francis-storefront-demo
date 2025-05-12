"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { useDebounce } from "@/hooks/useDebounce";
import { useProducts } from "@/hooks/useProducts";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SearchBar = () => {
  const [isOpen, setisOpen] = useState(false);
  const { element } = useClickOutside(() => setisOpen(false));
  const [search, setSearch] = useState("");
  const debouncedInput = useDebounce(search, 500);

  const { data, isLoading, isError } = useProducts({
    search: debouncedInput,
    limit: 3,
  });

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    setisOpen(true);
  };

  return (
    <div ref={element} className="relative  w-full max-w-[40rem] z-[70]">
      <div className="relative bg-white w-full max-w-[40rem] flex items-center rounded-lg px-2.5 py-1">
        <input
          type="text"
          onChange={handleSearch}
          value={search}
          placeholder="Search"
          className="w-full  text-sm text-neutral-800 outline-0 px-3 py-1"
        />
        <button name="search button" className="cursor-pointer">
          <Search className="text-neutral-800" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute w-full bg-white z-[60] top-[110%] shadow  px-3 rounded-b">
          <h1 className="font-medium text-neutral-800  py-1.5 border-b">
            Products
          </h1>

          {isLoading ? (
            <div className="py-2">
              <p className="text-neutral-600 text-sm font-medium">
                Searching...
              </p>
            </div>
          ) : data?.products.length === 0 ? (
            <p className="font-medium text-neutral-800  py-1.5 border-b">
              No results found for “eekj”. Check the spelling or use a different
              word or phrase.
            </p>
          ) : (
            <div className="">
              {data?.products.map((prod) => (
                <Link
                  href={""}
                  key={prod._id}
                  className="flex group w-full items-center py-2 gap-x-2"
                >
                  <div className="size-[4rem] rounded-md relative overflow-hidden">
                    <Image
                      alt={prod.name}
                      src={prod.images[0].url}
                      width={50}
                      height={50}
                      className="rounded-md "
                    />
                  </div>

                  <div>
                    <p className="text-sm  group-hover:text-neutral-600 transition-colors text-neutral-800">
                      {prod.name}
                    </p>
                    <p className="font-bold text-neutral-800 text-sm ">$400</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default SearchBar;
