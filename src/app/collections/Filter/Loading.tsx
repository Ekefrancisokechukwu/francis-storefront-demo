import { Skeleton } from "@/components/ui/skeleton";

export const FilterLoading = () => {
  return (
    <div className="border-r pr-5 lg:block hidden">
      <span className="font-semibold">Filter:</span>
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-[85%]" />
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[50%]" />
      </div>
      <div className="mt-7 space-y-2">
        <Skeleton className="h-4 w-[85%]" />
        <Skeleton className="h-4 w-[60%]" />
        <Skeleton className="h-4 w-[50%]" />
      </div>
      <div className="flex mt-7 items-center gap-x-2">
        <Skeleton className="h-10 flex-1" />
        <Skeleton className="h-10 flex-1" />
      </div>
      <div className="mt-7 flex items-center flex-wrap gap-1.5">
        <Skeleton className="size-[2rem]" />
        <Skeleton className="size-[2rem]" />
        <Skeleton className="size-[2rem]" />
        <Skeleton className="size-[2rem]" />
        <Skeleton className="size-[2rem]" />
        <Skeleton className="size-[2rem]" />
        <Skeleton className="size-[2rem]" />

        <Skeleton className="size-[2rem]" />
      </div>
    </div>
  );
};
