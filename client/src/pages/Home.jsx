import { Link } from 'react-router-dom';
import profileImage from '../assets/profile.jpg';

export default function Home() {
  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e] text-white relative overflow-x-hidden">
      
      {/* Subtle animated background effect */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[100vw] mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center">
        <div className="w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            
            {/* Left side - Text content */}
            <div className="lg:w-1/2 space-y-4 text-center lg:text-left">
              <div className="space-y-2">
                <p className="text-blue-400 text-base font-medium tracking-wide font-sans">
                  Hi there, I'm
                </p>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent font-backsteal -mt-1">
                  Simon Ooko
                </h1>
                
                <p className="text-xl sm:text-2xl text-gray-400 font-bold font-sans -mt-1">
                  Full-Stack Software Engineer
                </p>
              </div>
              
              <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 font-sans mt-2">
                I build production-ready applications using <span className="text-blue-400 font-semibold">React</span>, 
                <span className="text-blue-400 font-semibold"> Flask</span>, and 
                <span className="text-blue-400 font-semibold"> Python</span> — designing scalable frontends, 
                robust APIs, and reliable backend systems with performance and maintainability in mind.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <Link 
                  to="/projects"
                  className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  View My Work
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                
                <Link 
                  to="/contact"
                  className="px-8 py-4 border-2 border-gray-600 hover:border-blue-500 hover:bg-blue-500/10 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm transform hover:scale-105"
                >
                  Contact Me
                </Link>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-3 pt-4 justify-center lg:justify-start">
                {['React', 'Flask', 'Python', 'SQL', 'PostgreSQL', 'AWS'].map((tech) => (
                  <span 
                    key={tech}
                    className="px-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-full text-sm font-medium hover:border-blue-500 hover:bg-gray-800 transition-all duration-300 cursor-default backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Right side - Profile Image */}
            <div className="lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative group">
                {/* Glowing ring effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                
                {/* Profile image container */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl shadow-black/50 backdrop-blur-sm">
                  <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={profileImage} 
                      alt="Simon Ooko"
                      className="min-w-full min-h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-500"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%) scale(1.1)',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center center'
                      }}
                    />
                  </div>
                </div>

                {/* Stats badge */}
                <div className="absolute -bottom-4 -right-4 bg-gray-800/80 border-2 border-gray-700/50 rounded-2xl p-4 shadow-xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300">
                  <p className="text-3xl font-bold text-blue-400">5+</p>
                  <p className="text-xs text-gray-400 font-medium">Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}