import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Partners from './components/Partners';
import Products from './components/Products';
import Infrastructure from './components/Infrastructure';
import Testimonials from './components/Testimonials';
import ContactCTA from './components/ContactCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Partners />
        <Products />
        <Infrastructure />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
