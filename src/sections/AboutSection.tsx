import { SmartImage } from '../components/SmartImage';
import { aboutMosaicImages } from '../data/assets';

export function AboutSection() {
  return (
    <section id="alma-tatu" className="grid gap-8 py-20 lg:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold">Sobre nós</h2>
        <p className="text-zinc-300">Somos um estúdio autoral focado em tatuagem artística, micropigmentação e procedimentos de remoção a laser. Nosso processo começa na escuta: entendemos sua história para criar uma peça única.</p>
        <p className="text-zinc-300">Com artistas especializados em estilos distintos, entregamos projetos personalizados com acompanhamento completo do briefing à cicatrização.</p>
      </div>
      <div className="grid grid-cols-4 grid-rows-4 gap-2">
        {aboutMosaicImages.map((image, idx) => (
          <SmartImage
            key={image}
            src={image}
            alt={`Mosaico ${idx + 1}`}
            className={`w-full rounded-lg object-cover ${idx % 3 === 0 ? 'col-span-2 row-span-2 h-44' : 'col-span-1 row-span-1 h-20'}`}
          />
        ))}
      </div>
    </section>
  );
}
