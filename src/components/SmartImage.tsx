import type { ImgHTMLAttributes } from 'react';
import { withImageFallback } from '../utils/imageFallback';

type SmartImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

export function SmartImage({ src, alt, fallbackSrc = '/images/fallback.svg', loading = 'lazy', decoding = 'async', ...rest }: SmartImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={(event) => withImageFallback(event, fallbackSrc)}
      {...rest}
    />
  );
}
