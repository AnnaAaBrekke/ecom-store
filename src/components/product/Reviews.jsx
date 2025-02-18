import React from "react";
import { Rating } from "../../styles/Product.style";
import { renderRating } from "../../utils/renderRating";

const Reviews = ({ reviews }) => {
  if (!reviews || reviews.length === 0) {
    return <p>No reviews on this product.</p>;
  }

  return (
    <div className="reviews-section">
      <h3>Customer Reviews:</h3>
      <ul className="reviews-list">
        {reviews.map((review) => (
          <li key={review.id} className="review-item">
            <strong>{review.username}:</strong> {review.description}{" "}
            <Rating>{renderRating(review.rating)}</Rating>{" "}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
