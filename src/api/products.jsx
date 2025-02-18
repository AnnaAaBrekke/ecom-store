import React, { useEffect } from "react";
import useFetch from "./apiBase";
import { Product } from "../components/product";
import { GridContainer, Message } from "../styles/Product.style";

const Products = ({ searchInput, setSuggestions }) => {
  const { data: products, isLoading, isError } = useFetch("/");

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

  if (isLoading) return <Message>Loading products...</Message>;
  if (isError)
    return <Message>Error fetching products. Please try again later.</Message>;

  const filteredProducts = products.filter((product) =>
    product.title?.toLowerCase().includes(searchInput?.toLowerCase() || "")
  );

  return (
    <GridContainer>
      {filteredProducts.length > 0 ? (
        filteredProducts
          .slice(0, 12)
          .map((product) => <Product key={product.id} product={product} />)
      ) : (
        <Message>No products match your search.</Message>
      )}
    </GridContainer>
  );
};

export default Products;
