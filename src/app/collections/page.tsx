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

const CollectionsPage = () => {
  return (
    <div>
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
        <SortNav />

        {/* Products */}
        <div className="mt-5 grid grid-cols-[15rem_1fr] gap-x-5">
          <Filter />
          <div></div>
        </div>
      </Wrapper>
    </div>
  );
};
export default CollectionsPage;
