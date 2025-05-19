import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Logs } from "lucide-react";
import Link from "next/link";

const categories = ["Our store", "Desk", "Dinning rooms", "Beds"];

const Navigation = () => {
  return (
    <nav className="px-5 py-3 sticky top-0 z-50  bg-white  shadow-lg ">
      <button className="md:hidden flex items-center gap-x-2  ">
        <Logs size={20} /> Menu
      </button>

      <div className="md:flex hidden items-center gap-x-16 ">
        <div className="flex  items-center gap-x-3  ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="outline-0 ring-0">
              <button className="flex items-center outline-0 ring-0 gap-x-4 cursor-pointer w-[17rem] pr-5 border-r">
                <Logs /> Shop By Categories{" "}
                <ChevronDown size={20} className="ms-auto" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-0 divide-y border-0 rounded-none">
              {categories.map((category, i) => {
                return (
                  <DropdownMenuItem
                    key={i}
                    className="capitalize !rounded-none p-3"
                    asChild
                  >
                    <Link href={"/collections"} className="w">
                      {category}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center gap-x-8">
          <Link href={"/"} className="inline-block ">
            Home
          </Link>
          <Link href={"/collections"} className="inline-block ">
            Collections
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navigation;
