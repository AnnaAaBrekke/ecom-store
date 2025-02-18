import React from "react";
import { useParams } from "react-router-dom";
import { Product, Reviews } from "../../components/product";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useCart from "../../stores/cartStore";
import useProduct from "../../api/product";

const ProductPage = () => {
  const { id } = useParams();
  const addToCart = useCart((state) => state.addToCart);
  const { data: product = {}, isLoading, isError } = useProduct(id); // ✅ Use API hook

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Error fetching product details. Please try again later.</div>;
  if (!product || Object.keys(product).length === 0)
    return <div>Product not found.</div>;

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.title} has been added to the cart`);
  };

  return (
    <div>
      <Product product={product} showViewButton={false} />
      <Reviews reviews={product.reviews} />
      <button className="addCart" onClick={handleAddToCart}>
        <AddShoppingCartIcon style={{ fontSize: 30, color: "#333" }} />
      </button>
    </div>
  );
};

export default ProductPage;
