import React from "react";

const QuantityCounter = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "5px",
        color: "black",
      }}
    >
      <button
        onClick={onDecrease}
        disabled={quantity === 1}
        style={{
          border: "none",
          background: "#ddd",
          padding: "4px 8px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        -
      </button>
      <span>{quantity}</span>
      <button
        onClick={onIncrease}
        style={{
          border: "none",
          background: "#ddd",
          padding: "4px 8px",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
