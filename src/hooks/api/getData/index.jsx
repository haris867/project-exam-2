import { useState, useEffect } from "react";

export default function useGetData(url, options = {}) {
  const [data, setData] = useState([]);
  const [isFetchLoading, setIsFetchLoading] = useState(false);
  const [isFetchError, setIsFetchError] = useState(false);

  const stringifiedOptions = JSON.stringify(options);

  useEffect(() => {
    async function getData() {
      try {
        setIsFetchLoading(true);
        setIsFetchError(false);
        const fetchedData = await fetch(url, JSON.parse(stringifiedOptions));
        const json = await fetchedData.json();
        setData(json);
      } catch (error) {
        setIsFetchError(true);
      } finally {
        setIsFetchLoading(false);
      }
    }
    getData();
  }, [url, stringifiedOptions]);
  return { data, isFetchLoading, isFetchError };
}
