/**
 * Products Component
 *
 * Displays a list of products fetched from the API, filtered by the search input.
 *
 * Features:
 * - Fetches product data using the useFetch custom hook.
 * - Filters products by search term (case-insensitive).
 * - Updates parent suggestions list for autocomplete.
 * - Shows loading and error messages when appropriate.
 * - Renders up to 12 filtered Product components.
 *
 * Props:
 * @param {string} searchInput - The current search text input.
 * @param {function} setSuggestions - Function to update autocomplete suggestions.
 *
 * @returns {JSX.Element} A grid of Product components or relevant messages.
 */

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
