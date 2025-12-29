export default function Home() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">

          {/* Left side - Text content */}
          <div className="lg:w-1/2">
            <p className="text-blue-400 text-lg font-medium">
              Hi there, I'm
            </p>

            <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mt-4">
              Simon Ooko
            </h1>

            <p className="text-gray-400 text-lg mt-6 max-w-xl">
              A Full-Stack Software Engineer I build production-ready applications using React, Node.js, and Python —
              designing scalable frontends, robust APIs, and reliable backend systems
              with performance and maintainability in mind.
            </p>

            <div className="flex gap-4 mt-8">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-md">
                View My Work
              </button>
              <button className="px-6 py-3 border border-gray-600 text-white rounded-md">
                Contact Me
              </button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              {/* image goes here */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
