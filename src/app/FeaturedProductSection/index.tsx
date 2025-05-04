import Product from "@/components/Product";
import { Wrapper } from "@/components/ui/Wrapper";

const FeaturedProductSection = () => {
  return (
    <Wrapper className="mt-10">
      <h1 className="font-semibold text-xl">Featured products</h1>
      <div className="mt-5 grid sm:grid-cols-[repeat(auto-fit,_minmax(13rem,_1fr))] grid-cols-2 ">
        {Array.from({ length: 5 }).map((_, i) => {
          return <Product key={i} />;
        })}
      </div>
    </Wrapper>
  );
};
export default FeaturedProductSection;
