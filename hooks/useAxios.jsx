import axios from "axios";
import { api } from "@config.js";
import useAuth from "@contexts/AuthContext";

// message: 'timeout exceeded' code: ECONNABORTED
// message: 'Network Error', name: 'AxiosError', code: 'ERR_NETWORK',
const useAxios = () => {
  const { state, logout } = useAuth();

  let local_token = globalThis?.localStorage?.getItem("token") ?? null;

  const axiosInstance = axios.create({
    baseURL: api?.baseURL,
    headers: {
      Authorization: state?.token ?? local_token,
      "Content-Type": "application/json",
    },
    timeout: 50000,
  });

  axiosInstance.interceptors.response.use(
    (resp) => resp, // RETURNS RESPONSES DIRECTLY

    // Do something with response error
    async (error) => {
      console.warn("axiosInstance.interceptors", error?.response);
      console.log(`==ERROR STATUS ${error?.response?.status} IN INTERCEPTOR=`);
      if (error?.response?.status === 401) {
        logout();
      } else {
        console.warn("axiosInstance.interceptors", error);
        return Promise.reject(error);
      }
    }
  );

  return axiosInstance;
};

export default useAxios;
