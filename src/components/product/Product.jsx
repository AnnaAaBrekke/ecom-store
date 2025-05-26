import React, { useMemo } from "react";
import {
  ButtonContainer,
  Card,
  CardBody,
  DiscountTag,
  OriginalPrice,
  Price,
  PriceContainer,
  ProductImage,
  Rating,
  Tag,
  Tags,
  Title,
  ViewButton,
} from "../../styles/Product.style";
import { renderRating } from "../../utils/renderRating";

const Product = ({ product, showViewButton = true }) => {
  const discount = useMemo(() => {
    if (
      !product ||
      product.price === undefined ||
      product.discountedPrice === undefined
    ) {
      return 0;
    }
    return product.price > product.discountedPrice
      ? Math.round(
          ((product.price - product.discountedPrice) / product.price) * 100
        )
      : 0;
  }, [product?.price, product?.discountedPrice]);

  if (!product) return null;

  return (
    <Card>
      <ProductImage
        src={product.image?.url || "https://placehold.co/400"}
        alt={product.image.alt || product.title}
      />

      <CardBody>
        <Title>{product.title}</Title>
        <Rating>{renderRating(product.rating)}</Rating>
        <Rating>{product.rating} / 5</Rating>

        <PriceContainer>
          <Price>{product.discountedPrice}kr</Price>
          {product.price > product.discountedPrice && (
            <>
              <OriginalPrice>{product.price}kr</OriginalPrice>
              {discount > 0 && <DiscountTag>{discount}% off</DiscountTag>}
            </>
          )}
        </PriceContainer>

        <Tags>
          {product.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </Tags>
        {showViewButton && (
          <ButtonContainer>
            <ViewButton to={`/product/${product.id}`}>View Product</ViewButton>
          </ButtonContainer>
        )}
      </CardBody>
    </Card>
  );
};

export default Product;
