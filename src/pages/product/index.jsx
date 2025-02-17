import React from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useCart from "../../stores/cartStore";
import useFetch from "../../api/apiBase";

const ProductPage = () => {
  const { id } = useParams();
  const addToCart = useCart((state) => state.addToCart);
  const {
    data: product = {},
    isLoading,
    isError,
  } = useFetch(`https://v2.api.noroff.dev/online-shop/${id}`);

  if (isLoading) return <div>Loading...</div>;

  if (isError)
    return <div>Error fetching product details. Please try again later.</div>;

  if (!product || Object.keys(product).length === 0) {
    return <div>Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} has been added to the cart`);
  };

  return (
    <div>
      <Product product={product} showViewButton={false} />

      {product.reviews?.length > 0 ? (
        <div>
          <h3>Reviews:</h3>
          <ul>
            {product.reviews.map((review) => (
              <li key={review.id}>
                <strong>{review.username}:</strong> {review.description}{" "}
                (Rating: {review.rating}/5)
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No reviews available.</p>
      )}

      <button className="addCart" onClick={handleAddToCart}>
        <AddShoppingCartIcon style={{ fontSize: 30, color: "#333" }} />
      </button>
    </div>
  );
};

export default ProductPage;
