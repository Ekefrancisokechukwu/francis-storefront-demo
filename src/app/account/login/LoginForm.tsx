"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import Link from "next/link";

const LoginForm = () => {
  return (
    <form className="sm:border rounded-md max-w-[35rem] mx-auto pt-7 pb-6 px-5">
      <h2 className="text-xl text-center font-semibold">
        Log in to your account
      </h2>

      <div className="mt-8 space-y-4">
        <Input label="Email" />
        <Input label="Password" type="password" />
        <Link
          href={"/"}
          className="text-sm underline underline-offset-2 hover:no-underline"
        >
          Forgot your password?
        </Link>
      </div>
      <Button className="mt-5 mb-6 w-full h-11">SIGN IN</Button>
      <div className="text-center">
        <Link
          href={"/account/register"}
          className="text-sm underline text-center underline-offset-2 hover:no-underline"
        >
          No account yet? Create an account
        </Link>
      </div>
    </form>
  );
};
export default LoginForm;
