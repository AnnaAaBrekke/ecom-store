import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h1>{product.title}</h1>
      <img
        src={product.image.url}
        alt={product.image.alt || product.title}
        style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }}
      />
      <p>{product.description}</p>
      <p>
        <strong>Price:</strong> ${product.discountedPrice}{" "}
        {product.price > product.discountedPrice && (
          <span
            style={{
              textDecoration: "line-through",
              marginLeft: "8px",
              color: "red",
            }}
          >
            ${product.price}
          </span>
        )}
      </p>
      <p>Rating: {product.rating} / 5</p>
      <div>
        <strong>Tags:</strong>{" "}
        {product.tags.map((tag, index) => (
          <span
            key={index}
            style={{
              backgroundColor: "#e1ecf4",
              color: "#0366d6",
              padding: "4px 8px",
              marginRight: "8px",
              borderRadius: "4px",
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
