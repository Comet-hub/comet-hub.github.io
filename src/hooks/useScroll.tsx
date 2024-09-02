import { useEffect, useState } from "react";

export const useScroll = () => {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY > 1;

      if (scroll != isScrolling) {
        setIsScrolling(!isScrolling);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return isScrolling;
};
