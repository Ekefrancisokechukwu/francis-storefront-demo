import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Wrapper } from "@/components/ui/Wrapper";
import { WishlistProduct } from "./WishlistProduct";

const Wishlist = () => {
  return (
    <div>
      <div className="bg-neutral-100 py-8 ">
        <Wrapper className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-800">Wishlist</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Wishlist</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Wrapper>
      </div>

      <Wrapper className="pt-[4rem]  grid lg:grid-cols-7 md:grid-cols-6  sm:grid-cols-4 min-[400px]:grid-cols-3  grid-cols-2 gap-5">
        {Array.from({ length: 9 }).map((_, i) => {
          return <WishlistProduct key={i} />;
        })}
      </Wrapper>
    </div>
  );
};
export default Wishlist;
