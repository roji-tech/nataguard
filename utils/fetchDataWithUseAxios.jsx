import { ShowErrors } from "@utils/ShowErrors";
import { ShowSuccess } from "./ShowSuccess";

export const fetchDataWithUseAxios = async (
  axiosInstance,
  url,
  method = "get",
  data = {},
  label = "",
  logout = () => {},
  setLoading = (bool) => {}
) => {
  const config = { method, url, data };

  try {
    setLoading(true);
    const response = await axiosInstance(config);
    console.warn("fetchDataWithUseAxios", response?.data);
    return response?.data;
  } catch (error) {
    console.log(`==ERROR STATUS ${error?.response?.status} IN INTERCEPTOR=`);
    console.log(error?.response?.headers);

    if (error?.response?.status === 401) {
      return logout();
    }

    console.warn("fetchDataWithUseAxios", error?.response);
    ShowErrors("Unable to fetch " + label);
    return Promise.reject(error);
  } finally {
    setLoading(false);
  }
};

// import { ShowErrors } from "@utils/ShowErrors";

// export const fetchDataWithUseAxios = async (
//   axiosInstance,
//   url,
//   method = "get",
//   data = {},
//   label = ""
// ) => {
//   const config = { method, url, data };

//   await axiosInstance(config)
//     .then((response) => {
//       console.warn("RES dATA", response?.data);
//       return response?.data;
//     })
//     .catch((error) => {
//       console.warn(error);
//       ShowErrors("An Error Occured in  " + label);
//       return error;
//     });
// };
