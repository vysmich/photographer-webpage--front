import { useEffect, useState } from "react";
import debounce from "lodash/debounce";

const useResponsive = (widthValue: number): boolean => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateSize = (): void => {
      setIsMobile(window.innerWidth < widthValue);
    };
    window.addEventListener("resize", debounce(updateSize, 250));
    return (): void => window.removeEventListener("resize", updateSize);
  }, []);

  return isMobile;
};

export default useResponsive;
