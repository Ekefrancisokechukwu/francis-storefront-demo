"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { useCurrentUser } from "@/hooks/useAuth";
import { UserRound } from "lucide-react";
import Link from "next/link";

export const UserLink = () => {
  const { data: user, isLoading } = useCurrentUser();

  if (isLoading) {
    return (
      <div>
        <Skeleton className="w-[3rem] h-[1.5rem] rounded bg-neutral-100/20" />
      </div>
    );
  }

  return (
    <Link
      href={user ? "/account" : "/account/login"}
      className="flex items-center gap-x-3"
    >
      <UserRound />
      {user ? null : (
        <div className="leading-0.5">
          <span className="text-sm block text-neutral-200/70">Login</span>
          <span className="font-semibold text-sm ">Account</span>
        </div>
      )}
    </Link>
  );
};
