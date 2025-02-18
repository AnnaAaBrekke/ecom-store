import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product, showViewButton = true }) => {
  if (!product) return null;

  const discount =
    product.price > product.discountedPrice
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : 0;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "20px",
      }}
    >
      <h3>{product.title}</h3>
      <img
        src={product.image?.url || "https://placehold.co/400"}
        alt={product.image.alt || product.title}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />
      <p>{product.description}</p>

      <p>
        <strong>Price:</strong> {product.discountedPrice}kr{" "}
        {product.price > product.discountedPrice && (
          <>
            <span
              style={{
                textDecoration: "line-through",
                marginLeft: "8px",
                color: "red",
              }}
            >
              {product.price}kr
            </span>
            {discount > 0 && (
              <span style={{ marginLeft: "8px", color: "green" }}>
                {discount}% off
              </span>
            )}
          </>
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
      {showViewButton && (
        <Link
          to={`/product/${product.id}`}
          className="view-button"
          style={{ marginTop: "10px", display: "block" }}
        >
          View Product
        </Link>
      )}
    </div>
  );
};

export default Product;
