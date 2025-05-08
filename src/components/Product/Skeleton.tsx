import { Skeleton } from "../ui/skeleton";

export const ProductSkeleton = () => {
  return (
    <div>
      <Skeleton className="w-full h-[12rem] " />
      <div className="mt-3">
        <Skeleton className="w-[60%] h-[1rem] " />
        <Skeleton className="w-full h-[1rem] mt-3" />
        <Skeleton className="w-[60%] h-[1rem] mt-1" />
        <div className="mt-5 flex items-center gap-x-1">
          <Skeleton className="size-4" />
          <Skeleton className="size-4" />
          <Skeleton className="size-4" />
          <Skeleton className="size-4" />
          <Skeleton className="size-4" />
        </div>
        <Skeleton className="w-9 h-[.8rem] mt-7" />
      </div>
    </div>
  );
};
