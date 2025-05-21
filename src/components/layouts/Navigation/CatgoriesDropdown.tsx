"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetCategories } from "@/hooks/useProducts";
import { ChevronDown, Logs } from "lucide-react";
import Link from "next/link";

export const CatgoriesDropdown = () => {
  const { data } = useGetCategories();
  const catgeories = data ?? [];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="outline-0 ring-0">
        <button className="flex items-center outline-0 ring-0 gap-x-4 cursor-pointer w-[17rem] pr-5 border-r">
          <Logs /> Shop By Categories{" "}
          <ChevronDown size={20} className="ms-auto" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] p-0 divide-y border-0 rounded-none">
        <DropdownMenuItem className="capitalize !rounded-none p-3" asChild>
          <Link href={"/collections"} className="w">
            Our Store
          </Link>
        </DropdownMenuItem>
        {catgeories.map((category, i) => {
          return (
            <DropdownMenuItem
              key={i}
              className="capitalize !rounded-none p-3"
              asChild
            >
              <Link href={`/collections/${category.slug}`} className="w">
                {category.name}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
