import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Star, X } from "lucide-react";
import Image from "next/image";

interface ReviewModalProps {
  open: boolean;
  close: () => void;
}

export const ReviewModal = ({ open, close }: ReviewModalProps) => {
  return (
    <div>
      <div
        onClick={close}
        className={cn(
          "bg-black/50 w-full h-screen z-[70] fixed transition-all top-0 left-0",
          open ? "opacity-100 visible" : "opacity-0 invisible"
        )}
      />
      <div
        className={cn(
          "left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  max-w-[40rem] w-full p-7 bg-white  fixed z-[80]  lg:max-h-[37rem] h-full rounded-lg transition-all duration-300 ease-smush",
          open ? "scale-100" : "scale-0"
        )}
      >
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-xl text-neutral-800">
            Tell us about your reviews
          </h1>
          <button onClick={close}>
            <X size={18} />
          </button>
        </div>

        <div className="overflow-y-auto h-full pb-5 hide-scrollbar ">
          {/* Image */}
          <div className="mt-3.5 flex justify-center">
            <div>
              <Image
                alt="review product"
                src={"/demo.webp"}
                width={250}
                height={100}
              />
            </div>
          </div>

          <p className="text-center text-lg text-neutral-800">
            Tell us about your reviews
          </p>

          <div className="mt-5 flex items-center justify-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <button key={i} className="grid place-items-center">
                <Star strokeWidth={1} className="fill-neutral-800" size={33} />
              </button>
            ))}
          </div>

          <div className="mt-4">
            <label htmlFor="feedback" className="font-medium text-neutral-800">
              Feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              name="feedback"
              id="feedback"
              className="resize-none border rounded p-4 w-full h-25"
              placeholder="Write your feedback..."
            ></textarea>
          </div>

          <Button className="mt-3.5 w-full">Next</Button>
        </div>
      </div>
    </div>
  );
};
