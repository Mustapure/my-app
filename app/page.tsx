import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Image src="/next.svg" alt="JIL Air Systems" width={40} height={40} className="dark:invert" />
              <span className="ml-3 text-xl font-bold text-gray-900">JIL Air Systems</span>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600">Products</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Services</a>
              <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">Get Quote</button>
            </div>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-20 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6">
            Premium AC Sales & Service
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Expert air conditioning sales, installation, and maintenance services. Energy-efficient solutions for homes and businesses. 
            Trusted by thousands for reliable cooling comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Shop AC Units
            </a>
            <a href="#" className="border-2 border-gray-300 text-gray-800 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300">
              Book Service
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-900">Why Choose JIL Air Systems?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Certified Experts</h3>
              <p className="text-gray-600">Factory-trained technicians with 10+ years experience.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-green-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Energy Efficient</h3>
              <p className="text-gray-600">Latest inverter technology saves up to 60% on electricity bills.</p>
            </div>
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-indigo-100 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">24/7 Service</h3>
              <p className="text-gray-600">Emergency repairs available anytime, anywhere.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for Perfect Cooling?</h2>
          <p className="text-xl mb-8 opacity-90">Get your free consultation and quote today!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input 
              type="tel" 
              placeholder="Enter your phone number" 
              className="px-8 py-4 rounded-xl text-lg w-full sm:w-80 focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-indigo-600 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Call Now
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Image src="/next.svg" alt="JIL Air Systems" width={40} height={40} className="dark:invert mx-auto mb-4" />
          <p>&copy; 2024 JIL Air Systems. All rights reserved. | AC Sales & Service Experts.</p>
        </div>
      </footer>
    </div>
  );
}
