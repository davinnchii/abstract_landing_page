import React from 'react';
import { Hero } from './sections/Hero';
import { Feature } from './sections/Feature';
import { ModernDesign } from './sections/ModernDesign';
import { SaveTime } from './sections/SaveTime';
import { Testimonals } from './sections/Testimonals';
import { Pricing } from './sections/Pricing';
import { CTA } from './sections/CTA';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="flex flex-col bg-page-bg font-encode bg-cover bg-no-repeat">
      <Hero />
      <Feature />
      <ModernDesign />
      <SaveTime />
      <Testimonals />
      <Pricing />
      <CTA />
      <div className="mt-[129px] h-[1px] bg-[#7A2DCB66] w-[1250px] mx-auto" />
      <Footer />
    </div>
  );
}

export default App;
