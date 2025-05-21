import { Logs } from "lucide-react";
import Link from "next/link";
// import { CatgoriesDropdown } from "./CatgoriesDropdown";

const Navigation = () => {
  return (
    <nav className="px-5 py-3 sticky top-0 z-50  bg-white  shadow-lg ">
      <button className="md:hidden flex items-center gap-x-2  ">
        <Logs size={20} /> Menu
      </button>

      <div className="md:flex hidden items-center gap-x-16 ">
        <div className="flex  items-center gap-x-3  ">
          {/* <CatgoriesDropdown /> */}
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
