import { useEffect, useState } from "react";
import { fetchDataWithUseAxios } from "@utils/fetchDataWithUseAxios";
import useAxios from "@hooks/useAxios";
import useAuth from "@contexts/AuthContext";

export function useFetchData(
  defaultData,
  url,
  method,
  {},
  label = "",
  filterFunction = (param) => param
) {
  const myaxios = useAxios();
  const { logout } = useAuth();

  const [dataList, setDataList] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () =>
      await fetchDataWithUseAxios(myaxios, url, method, {}, label, setLoading)
        .then((res) => {
          // alert("success");
          setDataList({ ...res });

          console.log("useFetchData DATAA", res);
        })
        .catch((error) => {
          return error;
        });

    fetchData();
  }, []);

  return [dataList, setDataList, loading];
}
