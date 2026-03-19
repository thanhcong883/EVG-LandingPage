import React from 'react';

const Partners = () => {
  const partners = [
    "Coc Coc", "Viettel Media", "Azota", "Tiki", "BytePlus", "Sohagame"
  ];

  return (
    <section className="py-16 bg-gray-50 border-t border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            Trusted by Partners
          </h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 hover:opacity-100 transition-opacity duration-300">
          {partners.map((partner, index) => (
            <div key={index} className="text-xl font-bold text-gray-400 grayscale hover:grayscale-0 transition-all cursor-default">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
