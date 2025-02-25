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
