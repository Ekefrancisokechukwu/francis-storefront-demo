import { ACCESS_TOKEN_COOKIE_NAME } from "@/app/constants";
import axiosClient from "@/lib/axios";
import type { User } from "@/types/user";
import { deleteCookie, getCookie, setCookie } from "cookies-next";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
}

const ENDPOINTS = {
  LOGIN: "/auth/login",
  REGISTER: "/auth/register",
  LOGOUT: "/auth/logout",
  REFRESH_TOKEN: "/auth/refresh-token",
  ME: "/auth/me",
};

// Auth service with methods for authentication operations
export const authService = {
  // Login user
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await axiosClient.post(ENDPOINTS.LOGIN, credentials);
    return response.data;
  },

  // Register new user
  register: async (userData: RegisterData): Promise<AuthResponse> => {
    const response = await axiosClient.post(ENDPOINTS.REGISTER, userData);
    return response.data;
  },

  // Logout user
  logout: async (): Promise<void> => {
    await axiosClient.post(ENDPOINTS.LOGOUT);
    // Clear tokens from cookie
    deleteCookie(ACCESS_TOKEN_COOKIE_NAME);
    // deleteCookie("refreshToken");
  },

  // Get current user profile
  getCurrentUser: async (): Promise<User> => {
    const response = await axiosClient.get(ENDPOINTS.ME);
    return response.data;
  },

  // Refresh access token
  refreshToken: async (refreshToken: string): Promise<{ token: string }> => {
    const response = await axiosClient.post(ENDPOINTS.REFRESH_TOKEN, {
      refreshToken,
    });
    return response.data;
  },

  // Store tokens in localStorage
  setTokens: (token: string, refreshToken?: string): void => {
    setCookie(ACCESS_TOKEN_COOKIE_NAME, token);

    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    }
  },

  // Get token from localStorage
  getToken: (): string | null => {
    if (typeof window === "undefined") {
      return null;
    }

    const token = getCookie(ACCESS_TOKEN_COOKIE_NAME) as string;
    return token || null;
  },

  // Get refresh token from localStorage
  getRefreshToken: (): string | null => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("refreshToken");
  },
};
