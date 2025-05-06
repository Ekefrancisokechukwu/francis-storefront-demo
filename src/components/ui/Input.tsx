import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className, ...props }: InputProps) => {
  return (
    <div
      className={cn(
        "border rounded w-full px-4 py-1 h-10 leading-0",
        className
      )}
    >
      <label htmlFor={label} className="text-xs text-neutral-600">
        {label}
      </label>
      <input type="text" className="w-full text-sm outline-0" {...props} />
    </div>
  );
};
