import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { SmartImage } from './SmartImage';

type LightboxProps = {
  title: string;
  images: string[];
  open: boolean;
  onClose: () => void;
};

export function Lightbox({ title, images, open, onClose }: LightboxProps) {
  const [active, setActive] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setActive((v) => (v + 1) % images.length);
      if (e.key === 'ArrowLeft') setActive((v) => (v - 1 + images.length) % images.length);
      if (e.key === 'Tab' && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll<HTMLElement>('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (!first || !last) return;
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, images.length, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[80] bg-black/80 p-4" onClick={onClose} aria-modal="true" role="dialog">
      <div ref={modalRef} onClick={(e) => e.stopPropagation()} className="mx-auto flex h-full max-w-6xl flex-col gap-4 rounded-2xl border border-white/20 bg-zinc-950 p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} aria-label="Fechar galeria" className="rounded-md border border-white/20 px-3 py-1">✕</button>
        </div>
        <div className="relative min-h-0 flex-1">
          <SmartImage src={images[active]} alt={`${title} destaque`} className="h-full w-full rounded-xl object-cover" loading="eager" />
          <button onClick={() => setActive((v) => (v - 1 + images.length) % images.length)} aria-label="Anterior" className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2">‹</button>
          <button onClick={() => setActive((v) => (v + 1) % images.length)} aria-label="Próxima" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 px-3 py-2">›</button>
        </div>
        <div className="grid grid-cols-5 gap-2 md:grid-cols-10">
          {images.map((img, idx) => (
            <button key={img} onClick={() => setActive(idx)} className={`overflow-hidden rounded-md border ${idx === active ? 'border-amber-300' : 'border-white/10'}`} aria-label={`Abrir miniatura ${idx + 1}`}>
              <SmartImage src={img} alt={`${title} miniatura ${idx + 1}`} className="h-14 w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>,
    document.body,
  );
}
