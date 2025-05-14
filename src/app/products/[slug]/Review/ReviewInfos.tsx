"use client";

import { ReviewModal } from "./ReviewModal";
import { useState } from "react";
import { StarRating } from "./StarRating";
import { Product } from "@/types/product";

interface ReviewInfoProps {
  product: Product;
}

export const ReviewInfo = ({ product }: ReviewInfoProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  return (
    <div>
      <div className="flex items-center gap-x-1.5  mt-2">
        <span>Click to review:</span>

        <div onClick={() => setIsOpen(true)} className="w-max">
          <StarRating setRating={setRating} rating={rating} />
        </div>
      </div>

      {/* Modal */}
      <ReviewModal
        product={product}
        setRating={setRating}
        rating={rating}
        close={() => {
          setRating(0);
          setIsOpen(false);
        }}
        open={isOpen}
      />
    </div>
  );
};
