import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f8fafc] border-t border-gray-100" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Customer Success</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Trusted by the Best</h3>
          <p className="text-lg text-gray-600">
            See how organizations are transforming their businesses and achieving faster growth with EVG Cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">Coc Coc</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow">
              "We have trusted and used EVG Cloud CDN to distribute the installation files of Cốc Cốc browser for Mobile & Web over the past 3 years. EVG Cloud's CDN service has helped Cốc Cốc optimize the speed of file downloads globally and securely."
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-gray-900">Mr. Tung Dam</p>
              <p className="text-sm text-gray-500">Head of System Department</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">Viettel Media</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow">
              "EVG Cloud deployed a Private CDN solution for Viettel Media to serve massive multimedia content streaming. With 3-5PB monthly traffic and 300-500K concurrent users peaking at 600Gbps, the system operates stably and cost-effectively."
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-gray-900">Le Phu Khanh</p>
              <p className="text-sm text-gray-500">Deputy Director of Technical Affairs</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">AZOTA</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow">
              "During the Covid pandemic, AZOTA experienced exponential growth. EVG Cloud was instrumental in providing S3 storage optimization and robust streaming solutions that handled our traffic spikes seamlessly without compromising performance."
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-gray-900">Nguyen Hai Au</p>
              <p className="text-sm text-gray-500">CEO</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">tiki.vn</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow">
              "EVG Cloud's streaming optimization solutions helped Tiki solve severe lag and stuttering issues during our major livestreaming campaigns. We can now deliver high-quality video experiences to our customers reliably."
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-gray-900">Truong Minh Trung</p>
              <p className="text-sm text-gray-500">Infrastructure Director</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">BytePlus/Bytedance Vietnam</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow">
              "Our strategic technology partnership with EVG Cloud leverages their extensive CDN and streaming infrastructure. Their deep local expertise and robust network have been critical for optimizing content delivery in the region."
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-gray-900">Vu Chi Mai</p>
              <p className="text-sm text-gray-500">Director</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">Sohagame</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed flex-grow">
              "Integrating EVG Cloud's CDN significantly improved our game loading speeds across all regions. The transition was smooth, and the reduction in latency has directly contributed to a better gaming experience for our users."
            </p>
            <div className="mt-auto">
              <p className="font-semibold text-gray-900">Vu Quang Thang</p>
              <p className="text-sm text-gray-500">Technical Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
