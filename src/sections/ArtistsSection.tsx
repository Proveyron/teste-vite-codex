import { SmartImage } from '../components/SmartImage';
import { artistPhotos, testimonialAvatars } from '../data/assets';

const artists = [
  { name: 'Luna', style: 'Fine line e floral' },
  { name: 'Caio', style: 'Realismo preto e cinza' },
  { name: 'Maya', style: 'Delicadas e lettering' },
  { name: 'Ravi', style: 'Old school e geek' },
];

const testimonials = [
  '“Experiência impecável, do atendimento ao resultado.”',
  '“Ambiente incrível e arte exatamente como sonhei.”',
  '“Profissionais atenciosos, recomendo de olhos fechados.”',
];

export function ArtistsSection() {
  return (
    <>
      <section id="artistas" className="space-y-6 py-20">
        <h2 className="text-3xl font-semibold">Nossos artistas</h2>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {artists.map((artist, idx) => (
            <article key={artist.name} className="rounded-xl border border-white/10 bg-zinc-900 p-3">
              <SmartImage src={artistPhotos[idx]} alt={artist.name} className="h-56 w-full rounded-lg object-cover" />
              <h3 className="mt-3 text-lg font-medium">{artist.name}</h3>
              <p className="text-sm text-zinc-300">{artist.style}</p>
              <button className="mt-3 rounded-full border border-white/20 px-4 py-2 text-sm">Ver trabalhos</button>
            </article>
          ))}
        </div>
      </section>
      <section id="depoimentos" className="space-y-6 pb-12">
        <h2 className="text-3xl font-semibold">Depoimentos</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((text, idx) => (
            <article key={text} className="rounded-xl border border-white/10 bg-zinc-900 p-5">
              <div className="mb-3 flex items-center gap-3">
                <SmartImage src={testimonialAvatars[idx]} alt="Cliente" className="h-10 w-10 rounded-full object-cover" />
                <span>Cliente verificado</span>
              </div>
              <p className="text-zinc-300">{text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
