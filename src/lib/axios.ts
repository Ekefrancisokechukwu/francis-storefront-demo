import { ACCESS_TOKEN_COOKIE_NAME } from "@/app/constants";
import axios from "axios";
import { getCookie } from "cookies-next";

const axiosClient = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL ||
    "https://francis-store-api.onrender.com/api/v1",
  // timeout: 10000,
});

axiosClient.interceptors.request.use(
  (config) => {
    const token = getCookie(ACCESS_TOKEN_COOKIE_NAME);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// axiosClient.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     const { response } = error;

//     if (response) {
//       switch (response.status) {
//         case 401:
//           // Handle unauthorized errors (e.g., redirect to login)
//           console.error("Unauthorized access");
//           break;
//         case 404:
//           console.error("Resource not found");
//           break;
//         case 500:
//           console.error("Server error");
//           break;
//         default:
//           console.error("An error occurred:", response.status);
//       }
//     } else {
//       console.error("Network error or request cancelled");
//     }

//     return Promise.reject(error);
//   }
// );

export default axiosClient;
