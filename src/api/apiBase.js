// Source: https://javascript.plainenglish.io/dry-principle-in-reactjs-7d7cfb236459

import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsError(false);
        setIsLoading(true);

        const url = `${API_BASE_URL}${endpoint}`;

        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const json = await response.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, isLoading, isError };
};

export default useFetch;
