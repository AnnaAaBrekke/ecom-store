/**
 * Renders a star rating component with filled and outlined stars.
 *
 * @param {number} rating - The current rating value (number of filled stars).
 * @param {string} [color="#FFD700"] - The color of the filled stars (default is gold).
 * @param {number} [size=16] - The size of each star in pixels (default is 16).
 * @returns {JSX.Element} A React fragment containing star icons representing the rating.
 */

import { Star, StarBorder } from "@mui/icons-material";

// Source: ChatGPT
export const renderRating = (rating, color = "#FFD700", size = 16) => {
  const maxStars = 5;
  return (
    <>
      {Array.from({ length: maxStars }, (_, index) =>
        index < rating ? (
          <Star key={index} sx={{ color, fontSize: size }} />
        ) : (
          <StarBorder key={index} sx={{ color: "#ccc", fontSize: size }} />
        )
      )}
    </>
  );
};
