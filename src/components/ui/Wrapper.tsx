import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type WrapperProps = {
  className?: string;
  children: ReactNode;
};

export const Wrapper = ({ className, children }: WrapperProps) => {
  return (
    <div className={cn("mx-auto  max-w-[87rem] xl:px-0 px-5", className)}>
      {children}
    </div>
  );
};
