import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-primary">EVG CLOUD</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 font-medium">Products</a>
              <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 font-medium">About us</a>
              <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 font-medium">Blog</a>
              <a href="#" className="text-gray-600 hover:text-primary px-3 py-2 font-medium">Support</a>
            </nav>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-primary font-medium">Log in</a>
              <a href="#" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark font-medium transition-colors">Dùng thử miễn phí</a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-white overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center lg:text-left lg:w-1/2">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Everest Global Ecosystem</span>
              <span className="block text-primary">Empowering your business</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl lg:mx-0">
              We offer a diverse information technology ecosystem along with top-tier services, empowering your business to grow and succeed. EVG CLOUD is the foundation for your global infrastructure, applications, and business operations.
            </p>
            <div className="mt-5 sm:mt-8 flex justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark md:py-4 md:text-lg transition-colors">
                  Explore more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/Highlights Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Global Distribution</h3>
              <p className="text-gray-600 text-sm">A globally deployed network infrastructure with over 150 CDN Points of Presence (PoPs) and 25 cloud data centers ensures exceptional performance and worldwide reach.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Security</h3>
              <p className="text-gray-600 text-sm">Secure your entire infrastructure, applications, and data with next-generation DDoS protection and advanced web security technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Edge Native</h3>
              <p className="text-gray-600 text-sm">All products and services are natively integrated within a unified ecosystem, ensuring seamless performance and effortless scalability.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible & Scalable</h3>
              <p className="text-gray-600 text-sm">Powered by dedicated infrastructure, EVG delivers flexible customization tailored to specific business needs, ensuring optimal efficiency.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Infrastructure Stats */}
      <section className="bg-primary-dark py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-12">Our Global Infrastructure</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold mb-2">1300+</div>
              <div className="text-primary-light font-medium uppercase tracking-wide">PoPs</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">120+ Tbps</div>
              <div className="text-primary-light font-medium uppercase tracking-wide">Network Capacity</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">70+</div>
              <div className="text-primary-light font-medium uppercase tracking-wide">Locations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">&lt; 40ms</div>
              <div className="text-primary-light font-medium uppercase tracking-wide">Latency</div>
            </div>
          </div>
          <div className="mt-12">
            <a href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-primary-dark bg-white hover:bg-gray-50 transition-colors">
              Meet our network
            </a>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Explore our products</h2>
            <p className="mt-4 text-xl text-gray-500">Tailored plans designed to align with your specific goals.</p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Product 1 */}
            <div className="flex flex-col rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Server</h3>
                <p className="text-gray-600 mb-6">Leverage Cloud Server to streamline operations, scale seamlessly, and ensure high performance and robust security across all your digital platforms.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> 25+ datacenters, set points for code and front-end systems</li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> Private, hybrid, and on-premises cloud solutions</li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> Managed Kubernetes & Logging</li>
                </ul>
                <a href="#" className="text-primary font-medium hover:text-primary-dark flex items-center">
                  Go to Cloud Server <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex flex-col rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">CDN</h3>
                <p className="text-gray-600 mb-6">A comprehensive CDN solution that optimizes performance, accelerates content delivery, and protects your business applications and services.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> More than 1300+ presence points</li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> DDoS Protection (L3, L4, L7)</li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> Optimize images & dynamic content delivery</li>
                </ul>
                <a href="#" className="text-primary font-medium hover:text-primary-dark flex items-center">
                  Go to CDN <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex flex-col rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Streaming Platform</h3>
                <p className="text-gray-600 mb-6">Powerful video streaming infrastructure that effortlessly scales to millions of viewers with low latency.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> Stream live with low latency within 1 - 10 seconds</li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> Real-time HD group video calls</li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> Unlimited video storage capacity</li>
                </ul>
                <a href="#" className="text-primary font-medium hover:text-primary-dark flex items-center">
                  Go to Streaming Platform <span className="ml-2">→</span>
                </a>
              </div>
            </div>

            {/* Product 4 */}
            <div className="flex flex-col rounded-2xl border border-gray-200 shadow-sm overflow-hidden bg-white">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dedicated Server & Security</h3>
                <p className="text-gray-600 mb-6">Bare metal servers dedicated to you, combined with advanced protection for your websites, applications, and APIs.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> No shared resources, ultimate performance</li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> Protection against DDoS, bots, and API threats</li>
                  <li className="flex items-start"><span className="text-primary mr-2">✓</span> L2 connectivity between bare metal and virtual instances</li>
                </ul>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary font-medium hover:text-primary-dark flex items-center">
                    Dedicated Server <span className="ml-1">→</span>
                  </a>
                  <a href="#" className="text-primary font-medium hover:text-primary-dark flex items-center">
                    Security <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Success / Testimonials */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900">Customer Success</h2>
            <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">Committed to accompanying our customers throughout their entire service journey from deployment and operation to performance optimization.</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="mb-4 text-primary text-4xl">"</div>
              <p className="text-gray-600 mb-6 flex-grow italic">Coc Coc Uses CDN Solution to Streamline Distribution and deliver content quickly. The company requires a system to Manage daily browser update/installation requests. The solution EVG CDN provides is to distribute Coc Coc web browser effectively.</p>
              <div>
                <div className="font-bold text-gray-900">Mr Tung Dam</div>
                <div className="text-sm text-gray-500">Head of System Department at COCCOC</div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="mb-4 text-primary text-4xl">"</div>
              <p className="text-gray-600 mb-6 flex-grow italic">Viettel Media (VTM) struggles to provide high-quality content as its user base continues to grow. VTM needs a CDN solution to manage monthly traffic of 3-5PB, accommodate 300-500K concurrent users... EVG has addressed our needs with their private CDN solution.</p>
              <div>
                <div className="font-bold text-gray-900">Le Phu Khanh</div>
                <div className="text-sm text-gray-500">Deputy Director of Technical Affairs at Viettel Media</div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
              <div className="mb-4 text-primary text-4xl">"</div>
              <p className="text-gray-600 mb-6 flex-grow italic">Azota accompanied EVG to handle the optimization of S3 storage and optimization of streaming solutions, one of the difficult technical problems that the AZOTA team has solved. We consider EVG to be a reliable partner.</p>
              <div>
                <div className="font-bold text-gray-900">Nguyen Hai Au</div>
                <div className="text-sm text-gray-500">CEO AZOTA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-2xl font-bold text-white mb-4 block">EVG CLOUD</span>
              <p className="text-gray-400 mb-4 max-w-md">Chúng tôi mang đến cho bạn một hệ sinh thái công nghệ thông tin đa dạng và các dịch vụ chất lượng hàng đầu để giúp bạn thành công trong kinh doanh.</p>
              <p className="text-gray-400 text-sm">© 2023 Everest Global. Copyrighted.</p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Cloud Server</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Product CDN</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Streaming Platform</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>support@evgcorp.net</li>
                <li>+84-985386150</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
