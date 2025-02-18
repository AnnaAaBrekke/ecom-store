import useFetch from "./apiBase";

const useProduct = (id) => {
  return useFetch(`/${id}`);
};

export default useProduct;
