import { useState } from 'react';
import type { FormEvent } from 'react';
import { Carousel } from '../components/Carousel';
import { SmartImage } from '../components/SmartImage';
import { whatsappNumber } from '../data/assets';
import { portfolioData } from '../data/portfolio';

export function ContactSections() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!name || !phone) return;
    const text = encodeURIComponent(`Olá, meu nome é ${name} e meu telefone é ${phone}. Quero solicitar um orçamento.`);
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
  };

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <p className="py-12 text-center text-3xl font-semibold italic">Cada obra de arte conta uma história, qual a sua?</p>
      <section id="orcamento" className="grid gap-6 rounded-2xl border border-white/10 bg-zinc-900 p-6 lg:grid-cols-2">
        <div>
          <p className="text-zinc-400">Tua arte começa aqui</p>
          <h2 className="text-3xl font-semibold">Solicite um orçamento</h2>
        </div>
        <form onSubmit={submit} className="space-y-3">
          <input required value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome" className="w-full rounded-md border border-white/20 bg-black p-3" />
          <input required value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" className="w-full rounded-md border border-white/20 bg-black p-3" />
          <button className="w-full rounded-full bg-amber-200 px-5 py-3 font-semibold text-black">Entrar em contato</button>
        </form>
      </section>
      <div className="grid gap-3 py-10 sm:grid-cols-2 lg:grid-cols-4">
        <button onClick={() => scrollTo('portfolio')} className="rounded-full border border-white/20 p-3">Tatuagem</button>
        <button onClick={() => scrollTo('portfolio')} className="rounded-full border border-white/20 p-3">Micropigmentação</button>
        <button onClick={() => scrollTo('laser')} className="rounded-full border border-white/20 p-3">Laser</button>
        <button onClick={() => scrollTo('portfolio')} className="rounded-full border border-white/20 p-3">Piercing</button>
      </div>
      <section id="laser" className="grid gap-6 py-20 lg:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold">Remoção a Laser</h2>
          <p className="text-zinc-300">Tecnologia segura para clareamento progressivo de tatuagens com protocolo individual.</p>
          <ul className="list-disc space-y-1 pl-5 text-zinc-300">
            <li>Avaliação personalizada gratuita</li>
            <li>Sessões rápidas e com anestesia tópica</li>
            <li>Acompanhamento pós-procedimento</li>
          </ul>
          <a className="inline-block rounded-full bg-amber-200 px-5 py-3 font-semibold text-black" href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">Falar no WhatsApp</a>
        </div>
        <Carousel images={portfolioData.laser.images} title="Laser" className="h-80" />
      </section>
      <section id="onde-encontrar" className="space-y-4 py-20">
        <h2 className="text-3xl font-semibold">Onde nos encontrar</h2>
        <iframe
          title="Mapa do estúdio"
          src="https://www.google.com/maps?q=Paulista,+S%C3%A3o+Paulo&output=embed"
          className="h-80 w-full rounded-2xl border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      <footer className="flex flex-col items-center justify-between gap-6 border-t border-white/10 py-8 md:flex-row">
        <div className="flex items-center gap-3">
          <SmartImage src="/images/logo.svg" alt="Alma Tattoo" className="h-10 w-10" />
          <span>Alma Tattoo</span>
        </div>
        <div className="text-sm text-zinc-400">
          <p>+55 11 99999-9999 · Av. Paulista, 1000 - São Paulo</p>
          <p>© {new Date().getFullYear()} Alma Tattoo. Todos os direitos reservados.</p>
        </div>
      </footer>
      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Fale conosco no WhatsApp"
        title="Fale conosco"
        className="fixed bottom-6 right-6 z-50 rounded-full bg-green-500 px-4 py-3 font-semibold text-white shadow-lg"
      >
        WhatsApp
      </a>
    </>
  );
}
