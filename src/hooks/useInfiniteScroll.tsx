import { useEffect, useRef } from 'react';

export type Params = {
  callback: () => void | Promise<void>;
  loading: boolean;
  handlersEnabled: boolean;
};

const useInfiniteScroll = ({ callback, loading, handlersEnabled }: Params) => {
  const hiddenDivRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (handlersEnabled) {
      function handleScroll() {
        if (loading) return;

        const windowHeight = window.innerHeight;
        const divTop = hiddenDivRef.current?.getBoundingClientRect().top as number;

        if (divTop - 200 <= windowHeight) {
          callback();
        }
      }

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [loading, handlersEnabled]);

  return hiddenDivRef;
};

export default useInfiniteScroll;
