import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Check, CircleAlert, Loader2, X } from "lucide-react";
import Image from "next/image";
import { StarRating } from "./StarRating";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Product } from "@/types/product";
import { useCreateReview } from "@/hooks/useReviews";
import { motion } from "framer-motion";

interface ReviewModalProps {
  open: boolean;
  close: () => void;
  rating: number;
  setRating: Dispatch<SetStateAction<number>>;
  product: Product;
}

export const ReviewModal = ({
  open,
  close,
  rating,
  setRating,
  product,
}: ReviewModalProps) => {
  const [comment, setComment] = useState("");
  const [inputError, setInputError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { mutate, isPending, error, isError } = useCreateReview();

  const errorMessage = error?.response?.data?.error;

  const handleCloseModal = () => {
    setComment("");
    setInputError(false);
    setIsSuccess(false);
    close();
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() === "") {
      setInputError(true);
      return;
    }
    setInputError(false);

    mutate(
      { rating, comment, productId: product._id },
      {
        onSuccess: () => {
          setIsSuccess(true);
          setComment("");
          setRating(0);

          setTimeout(() => {
            setIsSuccess(false);
            close();
          }, 3000);
        },
        onError: (err) => {
          console.error("Error submitting review", err);
        },
      }
    );
  };

  return (
    <div>
      {/* Overlay */}
      <div
        onClick={handleCloseModal}
        className={cn(
          "bg-black/50 w-full h-screen z-[70] fixed transition-all top-0 left-0",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />

      {/* Content */}
      <div
        className={cn(
          "left-1/2 top-1/2 -translate-x-1/2 overflow-y-auto hide-scrollbar -translate-y-1/2  max-w-[40rem] w-full p-7 bg-white  fixed z-[80]  lg:max-h-[37rem]   rounded-lg transition-all duration-300 ease-smush",
          open ? "scale-100" : "scale-0"
        )}
      >
        {isSuccess ? (
          <SuccessfulFeedback close={close} />
        ) : (
          <div className="h-full overflow-y-auto hide-scrollbar ">
            {" "}
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-xl text-neutral-800">
                Tell us about your reviews
              </h1>
              <button onClick={handleCloseModal}>
                <X size={18} />
              </button>
            </div>
            <form
              onSubmit={handleSubmit}
              className="overflow-y-auto h-full pb-5 hide-scrollbar "
            >
              <div className="mt-2 flex justify-center">
                <div>
                  <Image
                    alt="review product"
                    src={product.images[0].url}
                    width={250}
                    height={100}
                  />
                </div>
              </div>

              <p className="text-center text-lg text-neutral-800">
                Tell us about your reviews
              </p>

              <div className="mt-3 flex items-center justify-center">
                <StarRating setRating={setRating} rating={rating} />
              </div>
              {errorMessage && isError && (
                <p className="text-red-500  flex items-center justify-center mt-5  gap-x-1">
                  <CircleAlert strokeWidth={1} size={13} className="" />
                  {errorMessage}
                </p>
              )}
              <div className="mt-3">
                <label
                  htmlFor="feedback"
                  className="font-medium text-neutral-800"
                >
                  Feedback <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="feedback"
                  id="feedback"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className={cn(
                    "resize-none border rounded p-4 w-full h-25",
                    inputError ? "border-red-400" : "border-border"
                  )}
                  placeholder="Write your feedback..."
                ></textarea>
                {inputError && (
                  <p className="text-red-500 text-sm flex items-center gap-x-1">
                    <CircleAlert strokeWidth={1} size={13} className="" />
                    This is a required field
                  </p>
                )}
              </div>

              <Button disabled={isPending} className="mt-3.5 w-full">
                {isPending ? (
                  <>
                    <Loader2 size={15} className="animate-spin" />
                  </>
                ) : (
                  "Submit"
                )}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

interface SuccessfulFeedbackProps {
  close: () => void;
}

const SuccessfulFeedback = ({ close }: SuccessfulFeedbackProps) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl text-neutral-800">
          Submit your information
        </h1>
        <button onClick={close}>
          <X size={18} />
        </button>
      </div>

      <div className="flex justify-center mt-14">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.1, type: "spring", stiffness: 120 }}
          className="bg-neutral-800/20 p-1 rounded-full"
        >
          <div className="grid place-items-center bg-neutral-800 size-[6rem] rounded-full">
            <Check strokeWidth={3} size={60} className="text-white" />
          </div>
        </motion.div>
      </div>
      <p className="text-neutral-800 text-center mt-3">
        Thank you for your information!
      </p>
    </div>
  );
};
