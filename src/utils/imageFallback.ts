import type { SyntheticEvent } from 'react';

export const withImageFallback = (
  event: SyntheticEvent<HTMLImageElement, Event>,
  fallbackSrc: string,
): void => {
  const img = event.currentTarget;
  if (img.dataset.fallbackApplied === 'true') return;
  img.dataset.fallbackApplied = 'true';
  img.src = fallbackSrc;
};
