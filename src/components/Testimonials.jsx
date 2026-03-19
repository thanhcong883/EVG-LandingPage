import React from 'react';

const Testimonials = () => {
  return (
    <section className="py-24 bg-[#f8fafc] border-t border-gray-100" id="testimonials">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-semibold text-[#155eef] uppercase tracking-wider mb-2">Customer Success</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Trusted by the Best</h3>
          <p className="text-lg text-gray-600">
            See how organizations are transforming their businesses and achieving faster growth with EVG Cloud.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-gray-600 flex-grow mb-8 text-base italic leading-relaxed">
              "EVG Cloud's scalable infrastructure has allowed us to handle massive spikes in traffic seamlessly. Their performance and support are unparalleled."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">SJ</div>
              <div>
                <h4 className="font-bold text-gray-900">Sarah Johnson</h4>
                <p className="text-sm text-gray-500">CTO, TechFlow Inc.</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-gray-600 flex-grow mb-8 text-base italic leading-relaxed">
              "Switching to EVG Cloud reduced our operational costs by 30%. The pricing is transparent, and the intuitive console makes managing resources a breeze."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">MR</div>
              <div>
                <h4 className="font-bold text-gray-900">Michael Roberts</h4>
                <p className="text-sm text-gray-500">VP Engineering, DataStream</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full">
            <div className="flex text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="text-gray-600 flex-grow mb-8 text-base italic leading-relaxed">
              "Security is our top priority, and EVG Cloud's robust compliance and networking features give us the peace of mind we need to serve our global clients."
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-bold">AL</div>
              <div>
                <h4 className="font-bold text-gray-900">Amanda Lee</h4>
                <p className="text-sm text-gray-500">Director of IT, SecureNet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
