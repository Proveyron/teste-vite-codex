import { Carousel } from '../components/Carousel';
import { SmartImage } from '../components/SmartImage';
import { heroStudioImages, sponsorImages, studioGridImages } from '../data/assets';

export function HeroSection() {
  return (
    <section id="inicio" className="space-y-10 pt-24">
      <Carousel images={heroStudioImages} title="Estúdio Alma Tattoo" eagerFirst className="h-[60vh]" />
      <div className="space-y-4 text-center">
        <p className="tracking-[0.25em] text-zinc-300">Sponsors</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {sponsorImages.map((src, idx) => <SmartImage key={src} src={src} alt={`Sponsor ${idx + 1}`} className="h-24 w-full rounded-xl object-cover" />)}
        </div>
      </div>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <SmartImage src="/images/logo.svg" alt="Logo Alma Tattoo" className="h-24 w-24" />
          <p className="text-zinc-300">No coração da cidade, a Alma Tattoo une técnica refinada, biossegurança e criação autoral para transformar ideias em arte viva.</p>
          <p className="text-zinc-300">Cada sessão é pensada com cuidado: atendimento humano, direção artística e acabamento premium em um ambiente inspirador.</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <SmartImage src={studioGridImages[0]} alt="Ambiente do estúdio" className="col-span-2 h-48 w-full rounded-xl object-cover" />
          <SmartImage src={studioGridImages[1]} alt="Detalhe do estúdio" className="h-36 w-full rounded-xl object-cover" />
          <SmartImage src={studioGridImages[2]} alt="Recepção do estúdio" className="h-36 w-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  );
}
