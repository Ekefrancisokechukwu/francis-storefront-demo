import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

export const RegisterForm = () => {
  return (
    <form className="sm:border rounded-md max-w-[35rem] mx-auto pt-7 pb-6 px-5">
      <h2 className="text-xl text-center font-semibold">Create account</h2>

      <div className="mt-8 space-y-4">
        <Input label="Username" />
        <Input label="Email" />

        <Input label="Password" type="password" />
      </div>
      <Button className="mt-5 mb-6 w-full h-11">CREATE</Button>
      <div className="text-center">
        <Link
          href={"/account/login"}
          className="text-sm underline text-center underline-offset-2 hover:no-underline"
        >
          Login
        </Link>
      </div>
    </form>
  );
};
