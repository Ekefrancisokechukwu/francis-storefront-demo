"use client";

import useClickOutside from "@/hooks/useClickOutside";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const SearchBar = () => {
  const [isOpen, setisOpen] = useState(false);

  const { element } = useClickOutside(() => setisOpen(false));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    console.log("Search Value", value);

    setisOpen(true);
  };

  return (
    <div ref={element} className="relative  w-full max-w-[40rem] z-[70]">
      <div className="relative bg-white w-full max-w-[40rem] flex items-center rounded-lg px-2.5 py-1">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search"
          className="w-full  text-sm text-neutral-800 outline-0 px-3 py-1"
        />
        <button name="search button" className="cursor-pointer">
          <Search className="text-neutral-800" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute w-full bg-white z-[60] top-[110%] shadow  px-3 rounded-b">
          <h1 className="font-medium text-neutral-800 text-sm py-1.5 border-b">
            Products
          </h1>
          <div className="">
            <Link href={""} className="flex w-full py-2">
              <Image
                alt="demo"
                src={"/prod-demo-4.webp"}
                width={60}
                height={60}
                className="rounded-md"
              />
              <div>
                <p className="text-sm font-medium text-neutral-500">
                  Ethnicraft Ellipse 3 Seater Lounge Sofa
                </p>
                <p className="font-bold text-neutral-800 text-sm ">$400</p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default SearchBar;
