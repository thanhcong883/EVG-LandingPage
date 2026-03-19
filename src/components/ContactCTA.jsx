import React from 'react';

const ContactCTA = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
          Not sure where to start? We are here to help
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Tell us what you need and a EVG expert will help you find the best solution.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <a href="#contact" className="inline-flex justify-center items-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-sm hover:bg-primary-dark transition-all">
            Contact Sales
          </a>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 text-gray-600">
          <a href="#docs" className="hover:text-primary transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Browse technical documentation
          </a>
          <a href="#signup" className="hover:text-primary transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Try our products hands on with a free account
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
