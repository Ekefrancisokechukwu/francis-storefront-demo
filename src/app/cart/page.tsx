import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Wrapper } from "@/components/ui/Wrapper";

import { CartItem } from "./CartItem";
import { Button } from "@/components/ui/button";

const CartPage = () => {
  return (
    <div>
      <div className="bg-neutral-100 py-8 ">
        <Wrapper className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-neutral-800">
            Your Shopping Cart
          </h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>Cart</BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Wrapper>
      </div>

      <Wrapper className="mt-[3rem]">
        <div className=" grid min-[744px]:grid-cols-[1fr_15rem_10rem] grid-cols-[1fr_5rem]  items-center">
          <h5 className="text-neutral-600 font-medium text-sm">PRODUCT</h5>
          <h5 className="text-neutral-600 font-medium text-sm min-[744px]:block hidden">
            QUANTITY
          </h5>
          <h5 className="text-neutral-600 font-medium text-sm text-right">
            TOTAL
          </h5>
        </div>
        <div className="mt-2 divide-y">
          <CartItem />
          <CartItem />
          <CartItem />
        </div>

        <div className="flex justify-end mt-8">
          <div className="">
            <p className="font-semibold text-right">
              Subtotal <span className="ml-5">$870.00 USD</span>
            </p>
            <Button className="mt-5  min-[400px]:w-[22rem] w-fit">
              CHECKOUT
            </Button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default CartPage;
