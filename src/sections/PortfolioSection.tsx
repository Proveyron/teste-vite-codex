import { Carousel } from '../components/Carousel';
import { portfolioData } from '../data/portfolio';

export function PortfolioSection() {
  const items = [portfolioData.realismo, portfolioData.fineline, portfolioData.delicado, portfolioData.pets];
  return (
    <section id="portfolio" className="space-y-6 py-20">
      <h2 className="text-3xl font-semibold">Portfólio</h2>
      <p className="max-w-3xl text-zinc-300">Selecionamos projetos reais para você sentir nosso acabamento, composição e identidade visual. Cada pele recebe estudo de desenho, adaptação anatômica e execução minuciosa.</p>
      <div className="grid gap-8">
        {items.map((item) => (
          <div key={item.title} className="space-y-3">
            <h3 className="text-xl font-medium">{item.title}</h3>
            <Carousel images={item.images} title={item.title} className="h-72" />
          </div>
        ))}
      </div>
    </section>
  );
}
