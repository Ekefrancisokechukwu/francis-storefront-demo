import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onDecrease: () => void;
  onIncrease: () => void;
  min?: number;
  max?: number;
  className?: string;
  disabled?: boolean;
  isPending?: boolean;
}

export const QuantitySelector = ({
  quantity,
  onDecrease,
  onIncrease,
  min = 1,
  max,
  className,
  disabled = false,
  isPending,
}: QuantitySelectorProps) => {
  const handleDecrease = () => {
    if (!disabled && (min === undefined || quantity > min)) {
      onDecrease();
    }
  };

  const handleIncrease = () => {
    if (!disabled && (max === undefined || quantity < max)) {
      onIncrease();
    }
  };

  const isDecreaseDisabled = disabled || (min !== undefined && quantity <= min);
  const isIncreaseDisabled = disabled || (max !== undefined && quantity >= max);

  return (
    <div className={cn("flex border rounded border-gray-300 w-32", className)}>
      <button
        type="button"
        className={cn(
          "px-3 py-2 border-r border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
          isDecreaseDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        )}
        onClick={handleDecrease}
        disabled={isDecreaseDisabled || isPending}
        aria-label="Decrease quantity"
      >
        −
      </button>
      <input
        type="text"
        className="w-full text-center focus:outline-none"
        value={quantity}
        readOnly
        aria-label="Quantity"
      />
      <button
        type="button"
        className={cn(
          "px-3 py-2 border-l disabled:opacity-50 disabled:cursor-not-allowed border-gray-300 transition-colors",
          isIncreaseDisabled
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-gray-100"
        )}
        onClick={handleIncrease}
        disabled={isPending || isIncreaseDisabled}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
};
