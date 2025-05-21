import { useLogout } from "@/hooks/useAuth";
import { Loader2, User } from "lucide-react";

export const LogoutButton = () => {
  const { mutate, isPending } = useLogout();

  return (
    <button
      onClick={() => mutate()}
      className="flex text-neutral-600 items-center mt-2 gap-x-1.5 text-sm underline underline-offset-2 hover:no-underline transition-all duration-200"
    >
      <User size={17} />
      {isPending ? (
        <>
          Logging out <Loader2 size={15} className="animate-spin" />
        </>
      ) : (
        " Sign out"
      )}
    </button>
  );
};
