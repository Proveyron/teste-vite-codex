import { useEffect, useState } from 'react';

const menuItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'alma-tatu', label: 'Alma Tatu' },
  { id: 'artistas', label: 'Artistas' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'onde-encontrar', label: 'Onde nos encontrar' },
];

export function Header() {
  const [active, setActive] = useState('inicio');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const sections = menuItems.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <button onClick={() => scrollTo('inicio')} className="text-xl font-semibold tracking-[0.2em] text-amber-200">Alma Tattoo</button>
        <nav className="hidden items-center gap-5 md:flex">
          {menuItems.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)} className={`text-sm transition ${active === item.id ? 'text-amber-200' : 'text-zinc-200 hover:text-white'}`}>
              {item.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => scrollTo('orcamento')} className="rounded-full bg-amber-200 px-4 py-2 text-sm font-semibold text-black">Orçamento</button>
          <button className="rounded-md border border-white/20 p-2 md:hidden" aria-label="Abrir menu" onClick={() => setOpen((v) => !v)}>☰</button>
        </div>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-zinc-950 p-4 md:hidden">
          <div className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <button key={item.id} className="text-left" onClick={() => scrollTo(item.id)}>{item.label}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
