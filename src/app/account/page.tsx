"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Wrapper } from "@/components/ui/Wrapper";
import { useCurrentUser } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { LogoutButton } from "./LogoutButton";

const Account = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div className="h-[40rem] grid place-items-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <div className="bg-neutral-100 py-8 ">
        <Wrapper className="flex items-center justify-between">
          <h2 className="text-xl font-medium text-neutral-800">Account</h2>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <Link href={"/"}>Home</Link>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </Wrapper>
      </div>

      <Wrapper className="pt-[4rem]">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-neutral-800 text-2xl font-medium">Account</h1>
            <LogoutButton />
          </div>
          <div>
            <h1 className="text-neutral-800 text-2xl font-medium">
              Account details
            </h1>
            <div className="mt-5 space-y-1 text-neutral-600">
              <p>{user?.username}</p>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};
export default Account;
