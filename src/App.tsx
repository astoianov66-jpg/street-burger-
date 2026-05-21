import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoCards } from './components/InfoCards';
import { MapSection } from './components/MapSection';
import { MenuSection } from './components/MenuSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="w-full min-h-screen bg-brand-dark text-brand-text font-sans">
      <Navbar />
      <main>
        <Hero />
        <section className="px-5 sm:px-8 pb-2">
          <InfoCards />
          <MapSection />
        </section>
        <MenuSection />
      </main>
      <Footer />
    </div>);

}