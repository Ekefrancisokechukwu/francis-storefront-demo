import { Wrapper } from "@/components/ui/Wrapper";
import Link from "next/link";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div>
      <div className="bg-neutral-100 py-8 ">
        <Wrapper className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-700">Account</h2>
          <Link
            href={"/"}
            className="text-sm text-neutral-500 hover:text-neutral-900"
          >
            Home
          </Link>
        </Wrapper>
      </div>

      <div className="mt-[6rem]">
        <LoginForm />
      </div>
    </div>
  );
};
export default LoginPage;
