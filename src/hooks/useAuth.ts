import {
  AuthResponse,
  authService,
  LoginCredentials,
  RegisterData,
} from "@/services/authServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

// Query keys for auth
export const authKeys = {
  user: ["auth", "user"] as const,
};

export function useCurrentUser() {
  return useQuery({
    queryKey: authKeys.user,
    queryFn: () => authService.getCurrentUser(),
    retry: false,
    enabled: !!authService.getToken(),
  });
}

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
      queryClient.setQueryData(authKeys.user, data.user);

      // Set the accessToken in cookie
      authService.setTokens(data?.accessToken);

      router.push("/");
    },
  });
}

export function useRegister() {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation<AuthResponse, AxiosError<{ error: string }>, RegisterData>(
    {
      mutationFn: (userData: RegisterData) => authService.register(userData),
      onSuccess: (data) => {
        queryClient.setQueryData(authKeys.user, data.user);

        // Set the accessToken in cookie
        authService.setTokens(data?.accessToken);

        router.push("/");
      },
    }
  );
}
