import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const url = "https://v2.api.noroff.dev/online-shop";

const Products = ({ searchInput, setSuggestions }) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();
        console.log("API Products", json);

        setProducts(json.data);
        setSuggestions(
          json.data.map((product) => ({ id: product.id, title: product.title }))
        );

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getProducts();
  }, [setSuggestions]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput.toLowerCase())
  );

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error fetching products. Please try again later.</div>;
  }

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
