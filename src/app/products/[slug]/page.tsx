import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Wrapper } from "@/components/ui/Wrapper";
import { ProductDetailsInfo } from "./productDetailsInfo";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  return (
    <div>
      {/* Heading */}
      <div className="bg-neutral-100 py-8 ">
        <Wrapper className="flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="capitalize">{slug}</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Wrapper>
      </div>

      {/* Product details */}

      <Wrapper>
        <ProductDetailsInfo />
      </Wrapper>
    </div>
  );
};
export default ProductDetailsPage;
