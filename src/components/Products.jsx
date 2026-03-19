import React, { useState } from 'react';

const Products = () => {
  const [activeTab, setActiveTab] = useState(0);

  const products = [
    {
      title: "Cloud Server",
      features: [
        "25+ datacenters",
        "Private/hybrid/on-premises cloud",
        "AI Infrastructure",
        "Managed Kubernetes",
        "Managed Logging",
        "API & Terraform",
        "20+ IaaS/PaaS services",
        "L2 connectivity",
        "Load balancers",
        "FaaS",
        "Free egress traffic"
      ]
    },
    {
      title: "CDN",
      features: [
        "1300+ PoPs",
        "Dynamic content delivery",
        "Image optimization",
        "DDoS Protection (L3/L4/L7)",
        "120+ Tbps capacity",
        "Anycast infrastructure",
        "Advanced video streaming",
        "Integrated WAF"
      ]
    },
    {
      title: "Streaming Platform",
      features: [
        "Live streaming 1-10s latency",
        "Real-time HD group video calls",
        "Unlimited video storage",
        "Integrated computer vision & ML for content moderation"
      ]
    },
    {
      title: "Dedicated Server",
      features: [
        "Bare metal performance",
        "Dedicated physical server",
        "25+ datacenters",
        "Private/hybrid/on-premises integration",
        "AI Infrastructure ready",
        "L2 connectivity",
        "Free egress traffic"
      ]
    },
    {
      title: "Security",
      features: [
        "DDoS protection",
        "Bot mitigation",
        "Vulnerability exploit prevention",
        "API threat protection"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Explore Our Products</h2>
          <p className="text-lg text-gray-600">
            Comprehensive infrastructure solutions to build, secure, and scale your business.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs */}
          <div className="lg:w-1/4 flex flex-col gap-2">
            {products.map((product, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`text-left px-6 py-4 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === index
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {product.title}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="lg:w-3/4 bg-white rounded-xl shadow-sm p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{products[activeTab].title} Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {products[activeTab].features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <a href={`#${products[activeTab].title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors">
              Go to {products[activeTab].title}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
