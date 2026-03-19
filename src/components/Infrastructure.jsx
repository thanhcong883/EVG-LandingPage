import React from 'react';

const Infrastructure = () => {
  return (
    <section className="py-24 bg-[#0a192f] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Global Infrastructure</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              EVG Cloud is built on a massive, highly resilient global network. Deliver your applications and content to users anywhere with ultra-low latency and unparalleled reliability.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">110+ Tbps</div>
                <div className="text-sm text-gray-400 font-medium">Total Network Capacity</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-gray-400 font-medium">IXPs Connected</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">11000+</div>
                <div className="text-sm text-gray-400 font-medium">Peering Partners</div>
              </div>
              <div>
                <div className="text-xl font-bold text-primary mb-2 mt-2">Anycast & GeoDNS</div>
                <div className="text-sm text-gray-400 font-medium">Network Architecture</div>
              </div>
            </div>
            <a href="#network" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-[#0a192f] bg-white hover:bg-gray-100 transition-colors">
              Meet our network
            </a>
          </div>
          <div className="relative">
             <div className="aspect-[4/3] rounded-2xl bg-[#112240] border border-gray-700/50 flex items-center justify-center relative overflow-hidden shadow-2xl">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent"></div>
               <div className="text-gray-500 font-medium">Global Map Illustration</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Infrastructure;
