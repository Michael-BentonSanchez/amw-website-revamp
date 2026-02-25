import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // This resets the scroll to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the path changes

  return null; // This component doesn't render anything visually
};

export default ScrollToTop;
