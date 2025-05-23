import { Logo } from "@/components/ui/Logo";
import CartLink from "./CartLink";
import WishlistLink from "./WishlistLink";
import SearchBar from "./SearchBar";
import { UserLink } from "./UserLink";

const Header = () => {
  return (
    <header className="text-white  w-full  bg-neutral-900   px-5 py-3">
      <div className="flex items-center justify-between gap-x-9 max-w-[87rem] mx-auto">
        <Logo />
        <div className="flex-1  justify-center sm:flex hidden">
          <SearchBar />
        </div>
        <div className="flex items-center gap-x-5">
          <UserLink />
          <WishlistLink />
          <CartLink />
        </div>
      </div>

      <div className="sm:hidden mt-2">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
