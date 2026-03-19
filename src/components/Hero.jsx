import React from 'react';
import heroImg from '../assets/hero-img.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-20 lg:py-32 hero-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
              Cloud Infrastructure <br className="hidden sm:block" />
              <span className="text-[#155eef]">Built for Performance</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-lg leading-relaxed">
              Deploy, manage, and scale your applications with EVG Cloud's highly reliable and secure cloud platform. Experience enterprise-grade computing at any scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="inline-flex justify-center items-center rounded-lg bg-[#155eef] px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#004ecc] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#155eef] transition-all">
                Create Free Account
              </a>
              <a href="#" className="inline-flex justify-center items-center rounded-lg bg-white px-6 py-3.5 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 transition-all">
                View Pricing
              </a>
            </div>
            <div className="mt-10 flex items-center gap-x-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                $100 Free Credit
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                No credit card required
              </div>
            </div>
          </div>
          <div className="relative lg:ml-auto w-full max-w-lg lg:max-w-none">
            <div className="aspect-[4/3] rounded-2xl bg-gray-100/50 object-cover shadow-2xl ring-1 ring-gray-900/10 flex items-center justify-center relative overflow-hidden">
               {/* Placeholder for hero illustration/image matching evgcloud.net */}
               <div className="absolute inset-0 bg-gradient-to-tr from-[#155eef]/10 to-transparent"></div>
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
