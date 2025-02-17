import React from "react";

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
            <span className="review-rating">(Rating: {review.rating}/5)</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
