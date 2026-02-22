interface StarRatingProps {
  rating: number;
  maxStars?: number;
  size?: "sm" | "md";
}

const STAR_PATH =
  "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z";

const REVIEW_STAR_PATH =
  "M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z";

export default function StarRating({
  rating,
  maxStars = 5,
  size = "md",
}: StarRatingProps) {
  const sizeClasses = size === "sm" ? "w-3 h-3" : "w-4 h-4";
  const filledStars = Math.floor(rating);
  const path = size === "sm" ? REVIEW_STAR_PATH : STAR_PATH;

  return (
    <div className="flex gap-0.5">
      {Array.from({ length: maxStars }, (_, i) => (
        <svg
          key={i}
          className={`${sizeClasses} fill-current ${
            i < filledStars ? "rating-star" : "text-main/10"
          }`}
          viewBox="0 0 20 20"
        >
          <path d={path} />
        </svg>
      ))}
    </div>
  );
}
