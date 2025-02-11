import React, { useEffect, useState } from "react";

const url = "https://v2.api.noroff.dev/online-shop";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);

        const response = await fetch(url);
        const json = await response.json();
        console.log("API Products", json);

        setProducts(json.data);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error fetching products. Please try again later.</div>;
  }

  return (
    <div className="productCard">
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <img
            src={product.image.url}
            alt={product.image.alt || product.title}
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
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
          <div style={{ marginTop: "10px" }}>
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
      ))}
    </div>
  );
};

export default Products;
