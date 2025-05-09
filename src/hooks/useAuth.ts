import {
  AuthResponse,
  authService,
  LoginCredentials,
  RegisterData,
} from "@/services/authServices";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation<
    AuthResponse,
    AxiosError<{ error: string }>,
    LoginCredentials
  >({
    mutationFn: (credentials: LoginCredentials) =>
      authService.login(credentials),
    onSuccess: (data) => {
      // Set the accessToken in cookie
      authService.setTokens(data?.accessToken);

      router.push("/");
    },
  });
}

export function useRegister() {
  const router = useRouter();

  return useMutation<AuthResponse, AxiosError<{ error: string }>, RegisterData>(
    {
      mutationFn: (userData: RegisterData) => authService.register(userData),
      onSuccess: (data) => {
        // Set the accessToken in cookie
        authService.setTokens(data?.accessToken);

        router.push("/");
      },
    }
  );
}
