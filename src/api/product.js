import useFetch from "./apiBase";

const useProduct = (id) => {
  return useFetch(`https://v2.api.noroff.dev/online-shop/${id}`);
};

export default useProduct;
