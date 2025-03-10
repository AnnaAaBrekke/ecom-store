import React from "react";
import { Rating } from "../../styles/Product.style";
import { renderRating } from "../../utils/renderRating";
import { PersonPin } from "@mui/icons-material";
import styled from "styled-components";

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <NoReviews>No reviews on this product.</NoReviews>;
  }

  return (
    <div className="reviews-section">
      <ReviewsList>
        {reviews.map((review) => (
          <ReviewItem key={review.id} className="review-item">
            <PersonPin />
            <strong>{review.username}</strong> {review.description}{" "}
            <Rating>{renderRating(review.rating)}</Rating>{" "}
          </ReviewItem>
        ))}
      </ReviewsList>
    </div>
  );
};

export default Reviews;

const ReviewsList = styled.ul`
  list-style: none;
  padding: 0;
  font-size: 14px;
  margin-bottom: 2rem;
`;

const ReviewItem = styled.li`
  align-items: center;
  padding: 10px;
  margin-bottom: 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadiusSecondary};
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);
`;

const NoReviews = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;
