import { useCallback, useRef } from 'react';

function useDebounceFn(callback: () => void, delay = 500): () => void {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const fnCallback = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);

  return fnCallback;
}

export default useDebounceFn;
