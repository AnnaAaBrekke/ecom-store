import React from "react";
import {
  Card,
  CardBody,
  Description,
  DiscountTag,
  OriginalPrice,
  Price,
  ProductImage,
  Rating,
  Tag,
  Tags,
  Title,
  ViewButton,
} from "./Product.style";

const Product = ({ product, showViewButton = true }) => {
  if (!product) return null;

  const discount =
    product.price > product.discountedPrice
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : 0;

  return (
    <Card>
      <ProductImage
        src={product.image?.url || "https://placehold.co/400"}
        alt={product.image.alt || product.title}
      />
      <CardBody>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>

        <Price>
          <strong>Price:</strong> {product.discountedPrice}kr{" "}
          {product.price > product.discountedPrice && (
            <>
              <OriginalPrice>{product.price}kr</OriginalPrice>
              {discount > 0 && <DiscountTag>{discount}% off</DiscountTag>}
            </>
          )}
        </Price>
        <Rating>Rating: {product.rating} / 5</Rating>
        <Tags>
          <strong>Tags:</strong>{" "}
          {product.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        {showViewButton && (
          <ViewButton to={`/product/${product.id}`}>View Product</ViewButton>
        )}
      </CardBody>
    </Card>
  );
};

export default Product;
