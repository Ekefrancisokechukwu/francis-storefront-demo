"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./button";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface PaginationBtnsProps {
  totalPages: number;
}

export const PaginationBtns = ({ totalPages }: PaginationBtnsProps) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  

  return (
    <div className="flex items-center gap-x-1">
      {/* Prev page btn */}
      {currentPage !== 1 && (
        <Button variant={"outline"} asChild>
          <Link href={createPageURL(currentPage - 1)}>
            <ChevronLeft />
          </Link>
        </Button>
      )}

      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        return (
          <Button
            key={i}
            variant={currentPage === page ? "default" : "outline"}
            asChild
          >
            <Link href={createPageURL(page)}>{page}</Link>
          </Button>
        );
      })}

      {/* next page btn */}
      {currentPage !== totalPages && (
        <Button variant={"outline"} asChild>
          <Link href={createPageURL(currentPage + 1)}>
            <ChevronRight />
          </Link>
        </Button>
      )}
    </div>
  );
};
