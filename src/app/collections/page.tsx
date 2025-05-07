import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Wrapper } from "@/components/ui/Wrapper";
import { SortNav } from "./SortNav";
import { Filter } from "./Filter";
import { ProductsContianer } from "./ProductsContainer";
import { FilterAndSortSlider } from "./Filter/FilterAndSortSlider";

const CollectionsPage = () => {
  return (
    <div className="pb-11">
      <div className="bg-neutral-100 py-8 ">
        <Wrapper className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-800">Products</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Shop</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Wrapper>
      </div>
      <Wrapper className="mt-8">
        {/* Sort */}
        <div className="flex items-center justify-between">
          <div>
            <FilterAndSortSlider />
          </div>
          <div className="flex gap-x-8 items-center">
            <div className="lg:block hidden">
              <SortNav />
            </div>
            <span className="font-semibold text-sm">22 products</span>
          </div>
        </div>

        {/* Products */}
        <div className="mt-5 grid lg:grid-cols-[18rem_1fr] gap-x-7">
          <Filter />
          <ProductsContianer />
        </div>
      </Wrapper>
    </div>
  );
};
export default CollectionsPage;
