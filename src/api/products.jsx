import React, { useEffect } from "react";
import Product from "../components/Product";
import useFetch from "./apiBase";

const url = "https://v2.api.noroff.dev/online-shop";

const Products = ({ searchInput, setSuggestions }) => {
  const { data: products, isLoading, isError } = useFetch(url);

  useEffect(() => {
    if (products.length > 0) {
      setSuggestions(
        products.map((product) => ({
          id: product.id,
          title: product.title,
        }))
      );
    }
  }, [products, setSuggestions]);

  if (isLoading) return <div>Loading products...</div>;
  if (isError)
    return <div>Error fetching products. Please try again later.</div>;

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(searchInput?.toLowerCase() || "")
  );

  return (
    <div style={gridContainerStyle}>
      {filteredProducts.length > 0 ? (
        filteredProducts
          .slice(0, 12)
          .map((product) => <Product key={product.id} product={product} />)
      ) : (
        <div>No products match your search.</div>
      )}
    </div>
  );
};
export default Products;

// Fix styling later - just for structure purpose
const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "16px",
  padding: "16px",
};
