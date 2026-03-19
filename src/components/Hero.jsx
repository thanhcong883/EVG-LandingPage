import React from 'react';
import heroImg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 lg:py-32 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Everest Global Ecosystem
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              We offer a diverse information technology ecosystem along with top-tier services, empowering your business to grow and succeed.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 text-center sm:text-left">
              <div>
                <div className="text-2xl font-bold text-gray-900">1300+</div>
                <div className="text-sm text-gray-500">PoPs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">120+ Tbps</div>
                <div className="text-sm text-gray-500">Capacity</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">70+</div>
                <div className="text-sm text-gray-500">Locations</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">&lt; 40 Ms</div>
                <div className="text-sm text-gray-500">Latency</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-flex justify-center items-center rounded-lg bg-primary px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all">
                Explore more
              </a>
            </div>
          </div>
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            <div className="aspect-[4/3] rounded-2xl bg-gray-100/50 object-cover shadow-2xl ring-1 ring-gray-900/10 flex items-center justify-center relative overflow-hidden">
               {/* Placeholder for hero illustration/image matching evgcloud.net */}
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
               <img
                 src={heroImg}
                 alt="Cloud Dashboard Illustration"
                 className="w-full h-full object-contain p-8"
                 onError={(e) => { e.target.style.display = 'none'; }}
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
