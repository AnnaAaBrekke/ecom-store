import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "../../components/Product";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const ProductPage = () => {
  const [product, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [cart, setCart] = useState([]);
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

  const handleAddToCart = () => {
    setCart([...cart, product]);
    alert(`${product.title} has been added to the cart!`);
  };

  if (isLoading || !product) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error fetching product details. Please try again later.</div>;
  }

  return (
    <div>
      <Product product={product} showViewButton={false} />
      {product.reviews && product.reviews.length > 0 ? (
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
