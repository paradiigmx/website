// hooks/useInView.ts
import { useEffect, useRef, useState } from "react";

type UseInViewOptions = IntersectionObserverInit;

export function useInView<T extends Element>(options?: UseInViewOptions) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      // SSR or unsupported: mark as inView so things still render
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(el);
    return () => {
      try { observer.unobserve(el as Element); } catch {}
      observer.disconnect();
    };
  }, [options]);

  return { ref, inView };
}
