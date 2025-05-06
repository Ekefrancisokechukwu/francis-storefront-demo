import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Wrapper } from "@/components/ui/Wrapper";
import { SortNav } from "./SortNav";

const ColllectionsPage = () => {
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
        <SortNav />
      </Wrapper>
    </div>
  );
};
export default ColllectionsPage;
