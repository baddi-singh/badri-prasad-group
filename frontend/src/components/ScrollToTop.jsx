// frontend/src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 🔥 Har baar jab pathname (URL) badlega, ye page ko top par le jayega
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ye kuch render nahi karega, sirf logic chalayega
};

export default ScrollToTop;