import { useEffect, useRef } from "react";

export const useScroll = (func: (int: number) => void) => {
  const scroll = useRef(0);

  useEffect(() => {
    document.addEventListener("scroll", (event) => {
      scroll.current = window.scrollY;
      func(scroll.current);
    });
  }, []);

  return scroll;
};
