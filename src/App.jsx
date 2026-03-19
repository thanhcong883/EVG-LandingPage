import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Products />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default App;
