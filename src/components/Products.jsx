import React from 'react';

const Products = () => {
  const products = [
    {
      title: "Compute Engine",
      description: "Scalable virtual machines tailored for high performance computing needs. Deploy applications instantly with our reliable and secure cloud instances.",
      icon: (
        <svg className="w-8 h-8 text-[#155eef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Cloud Storage",
      description: "Secure, durable, and highly available object storage. Store and retrieve any amount of data from anywhere on the web.",
      icon: (
        <svg className="w-8 h-8 text-[#155eef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      )
    },
    {
      title: "Networking",
      description: "Fast and reliable network infrastructure. Virtual Private Cloud, Load Balancing, and DNS management for your applications.",
      icon: (
        <svg className="w-8 h-8 text-[#155eef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      )
    },
    {
      title: "Managed Databases",
      description: "Fully managed database services. MySQL, PostgreSQL, and Redis databases configured for performance and high availability.",
      icon: (
        <svg className="w-8 h-8 text-[#155eef]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-[#155eef] uppercase tracking-wider mb-2">Our Products</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Cloud Solutions that Scale With You</h3>
          <p className="text-lg text-gray-600">
            Everything you need to build, deploy, and scale your applications. EVG Cloud provides the comprehensive infrastructure for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#155eef]/30 shadow-sm relative overflow-hidden group">
              <div className="bg-[#f0fdfa] rounded-xl w-14 h-14 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {product.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{product.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {product.description}
              </p>
              <a href="#" className="inline-flex items-center text-sm font-semibold text-[#155eef] hover:text-[#004ecc] group-hover:underline">
                Learn more
                <svg className="ml-1.5 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
