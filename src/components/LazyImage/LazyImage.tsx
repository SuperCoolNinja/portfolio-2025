import React, { useState, useEffect } from "react";
import type { LazyImageProps } from "../../interfaces/ILazyImage";

const LazyImage: React.FunctionComponent<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  ...props
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new window.Image();
    img.src = src;
    img.onload = () => setLoaded(true);
  }, [src]);

  return <img src={loaded ? src : placeholder} alt={alt} {...props} />;
};

export default LazyImage;
