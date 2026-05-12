import { useEffect } from 'react';
import { initCinematic } from './lib/cinematic';

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import ClientLogos from './components/ClientLogos';
import Core from './components/Core';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Technologies from './components/Technologies';
import Industries from './components/Industries';
import AIWorkflow from './components/AIWorkflow';
import Testimonials from './components/Testimonials';
import Results from './components/Results';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    initCinematic();
  }, []);

  return (
    <>
      <Navigation />
      <Hero />
      <ClientLogos />
      <Core />
      <WhyChooseUs />
      <Services />
      <Technologies />
      <Industries />
      <AIWorkflow />
      <Testimonials />
      <Results />
      <Footer />
    </>
  );
}
