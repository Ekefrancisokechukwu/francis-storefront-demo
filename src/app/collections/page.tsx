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
import { Suspense } from "react";
// import { TotalProductSummary } from "./TotalProductSummary";

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
            <Suspense>
              {" "}
              <FilterAndSortSlider />
            </Suspense>
          </div>
          <div className="flex gap-x-8 items-center">
            <div className="lg:block hidden">
              <Suspense>
                <SortNav />
              </Suspense>
            </div>
            {/* <TotalProductSummary /> */}
          </div>
        </div>

        {/* Products */}
        <div className="mt-5 grid lg:grid-cols-[20rem_1fr] gap-x-7">
          <Suspense>
            <Filter />
            <ProductsContianer />
          </Suspense>
        </div>
      </Wrapper>
    </div>
  );
};
export default CollectionsPage;
