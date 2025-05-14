"use client";

import { Star } from "lucide-react";
import { ReviewModal } from "./ReviewModal";
import { useState } from "react";

export const ReviewInfo = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="flex items-center gap-x-1.5  mt-2">
        <span>Click to review:</span>
        <div className="flex items-center gap-x-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              onClick={() => setIsOpen(true)}
              key={i}
              className="grid place-items-center"
            >
              <Star strokeWidth={1} size={35} />
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ReviewModal close={() => setIsOpen(false)} open={isOpen} />
    </div>
  );
};
