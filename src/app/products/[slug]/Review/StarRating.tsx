import { cn } from "@/lib/utils";
import { Star } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";

type StarRatingProps = {
  max?: number;
  size?: number;
  onChange?: (rating: number) => void;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
};

export const StarRating: React.FC<StarRatingProps> = ({
  max = 5,
  size = 35,
  rating,
  setRating,
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleRating = (star: number) => {
    setRating(star);
  };

  return (
    <div
      onMouseLeave={() => setHoverRating(0)}
      className="flex items-center gap-x-1"
    >
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          type="button"
          key={star}
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHoverRating(star)}
          className="grid place-items-center"
        >
          <Star
            strokeWidth={1}
            size={size}
            className={cn(
              "transition-all duration-100 ease-smush",
              star <= (hoverRating || rating) ? "fill-neutral-800" : "",
              star <= hoverRating ? "scale-[1.15]" : ""
            )}
          />
        </button>
      ))}
    </div>
  );
};
