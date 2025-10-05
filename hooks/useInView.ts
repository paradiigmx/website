// hooks/useInView.ts
import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
  /** when true, stays true after first intersect */
  triggerOnce?: boolean;
};

/**
 * Returns a tuple: [ref, inView]
 * Usage: const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true })
 */
export function useInView<T extends Element>(opts: Options = {}): [React.MutableRefObject<T | null>, boolean] {
  const { threshold = 0.1, root = null, rootMargin, triggerOnce = false } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;

    // SSR or no element yet → render as visible to avoid hydration issues
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, root: root as Element | null, rootMargin }
    );

    observer.observe(el);

    return () => {
      try {
        observer.disconnect();
      } catch {}
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, inView];
}
