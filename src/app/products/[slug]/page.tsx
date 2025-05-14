import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Wrapper } from "@/components/ui/Wrapper";
import { ProductDetailsInfo } from "./productDetailsInfo";
import Link from "next/link";
import { productService } from "@/services/productService";
import { Review } from "./Review";

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const product = await productService.getProduct(slug);

  return (
    <div>
      {/* Heading */}
      <div className="bg-neutral-100 py-8 ">
        <Wrapper className="flex items-center justify-between">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem className="capitalize">
                {product.name}
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Wrapper>
      </div>

      {/* Product details */}

      <Wrapper>
        <ProductDetailsInfo product={product} />
        <Review product={product} />
      </Wrapper>
    </div>
  );
};
export default ProductDetailsPage;
