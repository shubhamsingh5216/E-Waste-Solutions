import React from 'react';
import Navbar from './components/Navbar';
import IntroSection from './components/IntroSection';
import FacilityFinderSection from './components/FacilityFinderSection';
import NewsSection from './components/NewsSection';
import FaqSection from './components/FaqSection';
import PickupRequestSection from './components/PickupRequestSection';
import Footer from './components/Footer';

const App = () => (
  <div className="min-h-screen bg-gray-50">
    <Navbar />
    <main>
      <section id="intro">
        <IntroSection />
      </section>
      <section id="facility-finder">
        <FacilityFinderSection />
      </section>
      <section>
        <NewsSection />
      </section>
      <section id="faq">
        <FaqSection />
      </section>
      
      <section id="pickup-request">
        <PickupRequestSection />
      </section>
    </main>
    <Footer />
  </div>
);

export default App;
