import { useCallback, useEffect, useRef } from "react";

type DebouncedFunction<T extends (...args: unknown[]) => unknown> = (
  ...args: Parameters<T>
) => void;

export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  fn: T,
  delay = 2000
): DebouncedFunction<T> {
  /* store fn in a ref so the latest version is always called */
  const fnRef = useRef(fn);
  useEffect(() => void (fnRef.current = fn), [fn]);

  /* single timeout ref that survives re‑renders */
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  /* memoised debounced wrapper */
  return useCallback(
    (...args: Parameters<T>) => {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => fnRef.current(...args), delay);
    },
    [delay]
  );
}
