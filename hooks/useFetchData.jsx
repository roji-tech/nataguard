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
    fetchDataWithUseAxios(myaxios, url, method, {}, label, logout, setLoading)
      .then((res) => {
        // alert("success");
        if (res?.results?.length > 0)
          setDataList({ ...res, results: filterFunction(res?.results) });
        else setDataList({ results: filterFunction([...defaultData]) });
        console.log("DATAAAA", res);
      })
      .catch((error) => {
        // alert("failed");
        return error;
      });
  }, []);

  return [dataList, setDataList, loading];
}
