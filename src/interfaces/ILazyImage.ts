import type { ImgHTMLAttributes } from "react";

export interface LazyImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholder: string;
}
