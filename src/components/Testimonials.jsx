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
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">Coc Coc</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">
              "Uses CDN to distribute Coc Coc browser for mobile and web."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Mr. Tung Dam</p>
              <p className="text-sm text-gray-500">Head of System Department</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">Viettel Media</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">
              "Private CDN solution for 3-5PB monthly traffic, 300-500K concurrent users, 600Gbps peak."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Le Phu Khanh</p>
              <p className="text-sm text-gray-500">Deputy Director of Technical Affairs</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">AZOTA</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">
              "Education platform, S3 storage optimization and streaming solutions during Covid."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Nguyen Hai Au</p>
              <p className="text-sm text-gray-500">CEO</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">tiki.vn</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">
              "Livestreaming optimization, fixing lag/stuttering issues."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Truong Minh Trung</p>
              <p className="text-sm text-gray-500">Infrastructure Director</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">BytePlus/Bytedance Vietnam</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">
              "CDN, Streaming and technology partnership."
            </p>
            <div>
              <p className="font-semibold text-gray-900">Vu Chi Mai</p>
              <p className="text-sm text-gray-500">Director</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="mb-6 flex items-center justify-between">
               <div className="font-bold text-lg text-gray-900">Sohagame</div>
            </div>
            <p className="text-gray-600 mb-6 italic leading-relaxed">
              "CDN integration improved game loading speed."
            </p>
            <div>
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
