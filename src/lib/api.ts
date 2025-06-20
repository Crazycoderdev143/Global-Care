// import axios, {AxiosRequestConfig, Method} from "axios";

// type FetchOptions = {
//   method?: Method;
//   body?: any;
//   headers?: Record<string, string>;
//   authToken?: string;
// };

// export async function fetchData<T>(
//   url: string,
//   options: FetchOptions = {}
// ): Promise<T> {
//   try {
//     const config: AxiosRequestConfig = {
//       url,
//       method: options.method || "GET",
//       headers: {
//         "Content-Type": "application/json",
//         ...(options.authToken && {
//           Authorization: `Bearer ${options.authToken}`,
//         }),
//         ...options.headers,
//       },
//       data: options.body || undefined,
//     };

//     const response = await axios<T>(config);
//     return response.data;
//   } catch (error: any) {
//     const message =
//       error.response?.data?.message || error.message || "Failed to fetch data";
//     console.error("Axios Fetch Error:", message);
//     throw new Error(message);
//   }
// }


// lib/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // if using auth cookies or CSRF
});

export default api;
