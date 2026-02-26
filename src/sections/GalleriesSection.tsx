import { useState } from 'react';
import { Lightbox } from '../components/Lightbox';
import { SmartImage } from '../components/SmartImage';
import { galleries } from '../data/galleries';

export function GalleriesSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="space-y-8 py-20">
      <h2 className="text-3xl font-semibold">Galerias</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {galleries.map((gallery, idx) => (
          <button key={gallery.title} onClick={() => setOpenIndex(idx)} className="overflow-hidden rounded-xl border border-white/10 text-left">
            <SmartImage src={gallery.cover} alt={gallery.title} className="h-40 w-full object-cover" />
            <div className="p-3">{gallery.title}</div>
          </button>
        ))}
      </div>
      {galleries.map((gallery, idx) => (
        <Lightbox key={gallery.title} title={gallery.title} images={gallery.images} open={openIndex === idx} onClose={() => setOpenIndex(null)} />
      ))}
    </section>
  );
}
