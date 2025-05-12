import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay = 2000) {
  const [debouncedVal, setDebouncedVal] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedVal(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedVal;
}
