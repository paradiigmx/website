import { useEffect, useRef, useState } from "react";

type Options = {
  threshold?: number | number[];
  root?: Element | Document | null;
  rootMargin?: string;
  triggerOnce?: boolean;
};

/** Returns [ref, inView] */
export function useInView<T extends Element>(opts: Options = {}): [React.MutableRefObject<T | null>, boolean] {
  const { threshold = 0.1, root = null, rootMargin, triggerOnce = true } = opts;
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;

    // SSR or no element yet
    if (!el || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setInView(false);
        }
      },
      { threshold, root: root as Element | null, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, root, rootMargin, triggerOnce]);

  return [ref, inView];
}
