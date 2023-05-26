import { useState, useEffect } from "react";

export default function useGetData(url, options = {}) {
  const [data, setData] = useState([]);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [isFetchError, setIsFetchError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsFetchLoading(true);
        setIsFetchError(false);
        const fetchedData = await fetch(url, options);
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        console.log(error);
        setIsFetchError(true);
      } finally {
        setIsFetchLoading(false);
      }
    }
    getData();
  }, [url, options]);
  return { data, isFetchLoading, isFetchError };
}
