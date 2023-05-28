import { useEffect, useState } from "react";

export const useClientY = () => {
  // const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = (event: Event) => {
      event.preventDefault();
    };

    window.addEventListener("scroll", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};
