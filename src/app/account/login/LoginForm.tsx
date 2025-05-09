"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/Input";
import { useLogin } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LoginForm = () => {
  const [inputValues, setInputValues] = useState({ email: "", password: "" });
  const { mutate, error, isPending } = useLogin();

  const errorMessage = error?.response?.data?.error;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValues.email.trim() || !inputValues.password.trim()) {
      console.log("enter a value boss");
      return;
    }

    mutate({ email: inputValues.email, password: inputValues.password });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    setInputValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:border rounded-md max-w-[35rem] mx-auto pt-7 pb-6 px-5"
    >
      <h2 className="text-xl text-center font-semibold">
        Log in to your account
      </h2>

      {errorMessage && (
        <p className="text-center text-sm mt-5 font-semibold text-red-400">
          {errorMessage}
        </p>
      )}

      <div className="mt-8 space-y-4">
        <Input label="Email" name="email" onChange={handleChange} />
        <Input
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <Link
          href={"/"}
          className="text-sm underline underline-offset-2 hover:no-underline"
        >
          Forgot your password?
        </Link>
      </div>
      <Button disabled={isPending} className="mt-5 mb-6 w-full h-11">
        SIGN IN {isPending && <Loader2 size={20} className="animate-spin" />}
      </Button>
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
