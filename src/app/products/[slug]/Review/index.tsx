"use client";

import { StarRating } from "@/components/ui/StarRating";
import { useGetReviews } from "@/hooks/useReviews";
import { Loader2, Star } from "lucide-react";
import dayjs from "dayjs";

interface ReviewProps {
  productId: string;
}

export const Review = ({ productId }: ReviewProps) => {
  const { data: reviews, isLoading, error } = useGetReviews(productId);

  console.log("reviews", reviews);

  return (
    <div className="mt-9">
      <div className="flex items-center justify-center">
        <button className="py-1.5 border-b-3  border-black text-2xl font-semibold">
          Reviews
        </button>
      </div>
      <section className="mt-10  md:gap-x-10 gap-x-5 flex sm:flex-row flex-col gap-y-5 items-start">
        <div className="max-w-[30rem]">
          <p>Be the first to write a review</p>
          <div className="flex items-center gap-x-1.5  mt-2">
            <span>Click to review:</span>
            <div className="flex items-center gap-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <button key={i} className="grid place-items-center">
                  <Star strokeWidth={1} size={35} />{" "}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 sm:w-auto  w-full  space-y-2">
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : reviews?.reviews.length === 0 ? (
            <div className="  shadow-[0_0.125rem_0.25rem_rgba(31,_33,_36,_0.1),0_0.0625rem_0.375rem_rgba(31,_33,_36,_0.05)] rounded-lg py-10 px-4">
              <p className="text-center text-neutral-700">
                No reviews yet, lead the way and share your thought
              </p>
            </div>
          ) : (
            <>
              {reviews?.reviews.map((review) => (
                <div
                  key={review._id}
                  className="px-5 py-5   shadow-[0_0.125rem_0.25rem_rgba(31,_33,_36,_0.1),0_0.0625rem_0.375rem_rgba(31,_33,_36,_0.05)] rounded-lg"
                >
                  <div className="flex items-center gap-x-2">
                    <div className="size-[2rem] rounded-full capitalize grid place-items-center font-semibold bg-neutral-300">
                      {review.user.username.charAt(0)}
                    </div>
                    <span className="capitalize font-semibold">
                      {review.user.username}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <StarRating rating={review.rating} />
                      <span className="text-sm">
                        {dayjs(review.createdAt).format("DD/MM/YYYY")}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-neutral-500">
                      {review.comment}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </div>
  );
};
