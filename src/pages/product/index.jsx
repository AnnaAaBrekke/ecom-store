import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Product, Reviews } from "../../components/product";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useCart from "../../stores/cartStore";
import useProduct from "../../api/product";
import styled from "styled-components";
import { CircularProgress } from "@mui/material";

const ProductPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const addToCart = useCart((state) => state.addToCart);
  const { data: product = {}, isLoading, isError } = useProduct(id);

  if (isLoading) return <div>Loading...</div>;
  if (isError)
    return <div>Error fetching product details. Please try again later.</div>;
  if (!product || Object.keys(product).length === 0)
    return <div>Product not found.</div>;

  const handleAddToCart = () => {
    setLoading(true);
    addToCart(product);
    setTimeout(() => {
      setLoading(false);
      alert(`${product.title} has been added to the cart`);
    }, 1000);
  };

  return (
    <ProductContainer>
      <Product product={product} showViewButton={false} />
      <ProductInfo>
        <Description>
          <h3>Description</h3>
          <p>{product.description}</p>
        </Description>
        <Reviews reviews={product.reviews} />
        <AddToCartButton onClick={handleAddToCart} disabled={loading}>
          {loading ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            <>
              <StyledAddToCartIcon />
              <AddToCartText>Add to Cart</AddToCartText>
            </>
          )}
        </AddToCartButton>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductPage;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  padding: 1rem;
  cursor: pointer;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;
  max-width: 800px;
  background: ${({ theme }) => theme.colors.background};
  margin: 1rem auto;
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.shadows.soft};
`;

const ProductInfo = styled.div`
  flex-direction: column;
  align-items; top;
  justify-content: top;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0 0 0 1rem;
`;
export const AddToCartButton = styled.button`
  width: 100%;
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }

  @media (max-width: 500px) {
    padding: 0.5rem;
  }
`;

const AddToCartText = styled.span`
  @media (max-width: 500px) {
    display: none; /* Hides text on small screens */
  }
`;

const Description = styled.div`
  h3 {
    font-size: 28px;
    margin-bottom: 0.75rem;

    @media (max-width: 500px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.textSecondary};
    line-height: 1.5;
    margin-bottom: 2rem;

    @media (max-width: 500px) {
      font-size: 16px;
    }
  }
`;
const StyledAddToCartIcon = styled(AddShoppingCartIcon)`
  background: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 30px;
  padding-right: 8px;
`;
