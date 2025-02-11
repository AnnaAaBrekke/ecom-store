import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <>
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
        <Link to={`/product/${product.id}`} className="view-button">
          View Product
        </Link>{" "}
      </div>
    </>
  );
};

export default Product;
