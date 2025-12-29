export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-16">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-start">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-white text-sm uppercase tracking-wider">Hi there, I'm</p>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Simon Ooko
              
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              A Full-Stack Software Engineer I build production-ready applications using React, Node.js, and Python — 
              designing scalable frontends, robust APIs, and reliable backend systems
              with performance and maintainability in mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-medium transition-colors">
                View My Work
              </button>
              <button className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-md font-medium transition-colors">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10">
              <img
                src="/profile.jpg"
                alt="Simon Ooko"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}