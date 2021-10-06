import { useEffect } from "react";
import { useLocation } from "react-router";

export const ScrollToTop = ({children}) => {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return <>{children}</>
};
