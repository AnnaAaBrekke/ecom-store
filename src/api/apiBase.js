// // src/utils/apiBase.js
// export const apiBase = {
//   async get(endpoint) {
//     try {
//       const response = await fetch(
//         `https://v2.api.noroff.dev/online-shop/${endpoint}`
//       );
//       if (!response.ok) {
//         throw new Error(`Failed to fetch from endpoint: ${endpoint}`);
//       }
//       return await response.json();
//     } catch (error) {
//       console.error("API error:", error);
//       throw error;
//     }
//   },
// };

// useFetch apibase example

// import { useState, useEffect } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isError, setIsError] = useState(false);

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setIsLoading(true);
//         setIsError(false);
//         const response = await fetch(url);
//         if (!response.ok) throw new Error("Failed to fetch data");
//         const json = await response.json();
//         setData(json.data); // Adjust if API returns data in `json.data`
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Fetch error:", error);
//         setIsError(true);
//         setIsLoading(false);
//       }
//     }

//     fetchData();
//   }, [url]);

//   return { data, isLoading, isError };
// };

// export default useFetch;
