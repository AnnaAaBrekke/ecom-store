import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product";

const ProductPage = () => {
  const [product, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getProduct() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(
          `https://v2.api.noroff.dev/online-shop/${id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const json = await response.json();
        setProducts(json.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setIsLoading(false);
        setIsError(true);
      }
    }

    getProduct();
  }, [id]);
  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error fetching product details. Please try again later.</div>;
  }

  return (
    <div>
      <Product product={product} showViewButton={false} />
    </div>
  );
};

export default ProductPage;
