import { Header } from './components/Header';
import { AboutSection } from './sections/AboutSection';
import { ArtistsSection } from './sections/ArtistsSection';
import { ContactSections } from './sections/ContactSections';
import { GalleriesSection } from './sections/GalleriesSection';
import { HeroSection } from './sections/HeroSection';
import { PortfolioSection } from './sections/PortfolioSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="mx-auto max-w-7xl px-4">
        <HeroSection />
        <AboutSection />
        <ArtistsSection />
        <GalleriesSection />
        <PortfolioSection />
        <ContactSections />
      </main>
    </div>
  );
}

export default App;
