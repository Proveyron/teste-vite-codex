import { useEffect, useRef, useState } from 'react';
import { SmartImage } from './SmartImage';

type CarouselProps = {
  images: string[];
  title: string;
  eagerFirst?: boolean;
  interval?: number;
  className?: string;
};

export function Carousel({ images, title, eagerFirst = false, interval = 4500, className = '' }: CarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused || images.length <= 1) return;
    const id = window.setInterval(() => setActive((v) => (v + 1) % images.length), interval);
    return () => window.clearInterval(id);
  }, [paused, images.length, interval]);

  const goTo = (index: number) => setActive((index + images.length) % images.length);

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={(e) => (touchStartX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) goTo(active + (diff > 0 ? 1 : -1));
        touchStartX.current = null;
      }}
    >
      <SmartImage
        src={images[active]}
        alt={`${title} imagem ${active + 1}`}
        className="h-full w-full object-cover"
        loading={eagerFirst ? 'eager' : 'lazy'}
      />

      <button aria-label="Imagem anterior" onClick={() => goTo(active - 1)} className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white">‹</button>
      <button aria-label="Próxima imagem" onClick={() => goTo(active + 1)} className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2 text-white">›</button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            aria-label={`Ir para imagem ${index + 1}`}
            className={`h-2.5 w-2.5 rounded-full ${index === active ? 'bg-amber-300' : 'bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
}
