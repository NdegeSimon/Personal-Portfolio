import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import BackToTop from '../components/BackToTop';


export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Carbon IQ",
      description: "Carbon IQ is a full-stack platform that helps businesses track, analyze, and reduce carbon emissions through data-driven insights and real-time dashboards.",
      image: "/assets/CarbonIQ.png",
      tags: ["React", "Node.js", "SQL", "Flask", "Redux"],
      githubUrl: "https://github.com/Mike-Muteithia/Group9-CarbonIQ",
      liveUrl: "https://carbon-iot-demo.com",
      featured: true,
      category: "fullstack"
    },
    {
      title: "Carevob iAcation",
      description: "Real-time chat application powered by OpenAI API with message history, typing indicators, custom AI personalities, and conversation export features. Built with modern web technologies for seamless user experience.",
      image: "/projects/chat-app.jpg",
      tags: ["React", "OpenAI", "Socket.io", "MongoDB", "Express"],
      githubUrl: "https://github.com/yourusername/ai-chat",
      liveUrl: "https://ai-chat-demo.com",
      category: "ai"
    },
    {
      title: "Task Management System",
      description: "Collaborative task management tool with drag-and-drop interface, real-time updates, team collaboration features, deadline tracking, and project analytics dashboard.",
      image: "/projects/task-manager.jpg",
      tags: ["React", "Firebase", "TailwindCSS", "DnD Kit"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://tasks-demo.com",
      category: "fullstack"
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather dashboard with 7-day forecasts, interactive maps, location-based weather alerts, historical data visualization, and air quality monitoring using OpenWeather API.",
      image: "/projects/weather.jpg",
      tags: ["React", "OpenWeather API", "Chart.js", "Leaflet"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://weather-demo.com",
      category: "frontend"
    },
    {
      title: "Portfolio CMS",
      description: "Content management system for developers to easily update their portfolio projects, blog posts, resume, and testimonials without touching code. Features markdown editor and media library.",
      image: "/projects/cms.jpg",
      tags: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "NextAuth"],
      githubUrl: "https://github.com/yourusername/portfolio-cms",
      liveUrl: "https://cms-demo.com",
      featured: true,
      category: "fullstack"
    },
    {
      title: "Nexus",
      description: "Nexus is a collaborative platform where students share ideas, get mentor feedback, and validate whether their projects are worth pursuing.",
      image: "/projects/analytics.jpg",
      tags: ["Python", "React", "SQL", "Flask", "FastAPI"],
      githubUrl: "https://github.com/WillyKyeni3/Nexus",
      liveUrl: "https://nexus-seven-orcin.vercel.app/",
      featured: true,
      category: "fullstack"
    },
    {
      title: "Fitness Tracker Mobile App",
      description: "Cross-platform mobile app for tracking workouts, nutrition, and progress. Features include exercise library, custom workout plans, calorie tracking, and progress photos.",
      image: "/projects/fitness.jpg",
      tags: ["React Native", "Firebase", "Redux", "Charts"],
      githubUrl: "https://github.com/yourusername/fitness-tracker",
      liveUrl: null,
      category: "mobile"
    },
    {
      title: "Blog Platform",
      description: "Modern blogging platform with markdown support, syntax highlighting for code blocks, SEO optimization, comment system, and newsletter integration. Built for developers.",
      image: "/projects/blog.jpg",
      tags: ["Next.js", "MDX", "Tailwind", "Vercel"],
      githubUrl: "https://github.com/yourusername/blog-platform",
      liveUrl: "https://blog-demo.com",
      category: "frontend"
    },
    {
      title: "Restaurant Ordering System",
      description: "Complete restaurant management system with online ordering, table reservations, kitchen display system, inventory management, and sales analytics.",
      image: "/projects/restaurant.jpg",
      tags: ["React", "Node.js", "MongoDB", "Socket.io", "Stripe"],
      githubUrl: "https://github.com/yourusername/restaurant-system",
      liveUrl: "https://restaurant-demo.com",
      category: "fullstack"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e] text-white overflow-hidden">
      <div className="pt-24 pb-16">
        
        {/* Background Effect */}
         <div className="fixed inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="mb-12 space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
                A collection of projects I've built, ranging from full-stack web applications 
                to AI-powered tools. Each project showcases different technologies and problem-solving approaches.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="px-6 py-3 bg-gray-800/30 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                <p className="text-3xl font-bold text-blue-400">{projects.length}</p>
                <p className="text-sm text-gray-400">Total Projects</p>
              </div>
              <div className="px-6 py-3 bg-gray-800/30 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                <p className="text-3xl font-bold text-purple-400">{projects.filter(p => p.featured).length}</p>
                <p className="text-sm text-gray-400">Featured</p>
              </div>
              <div className="px-6 py-3 bg-gray-800/30 border border-gray-700/50 rounded-lg backdrop-blur-sm">
                <p className="text-3xl font-bold text-pink-400">{new Set(projects.flatMap(p => p.tags)).size}</p>
                <p className="text-sm text-gray-400">Technologies</p>
              </div>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 pt-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-6 py-2.5 rounded-lg font-medium transition-all duration-300 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30'
                      : 'bg-gray-800/30 border border-gray-700/50 text-gray-300 hover:border-blue-500 hover:bg-gray-800'
                  }`}
                >
                  {category.label}
                  <span className={`ml-2 text-xs ${filter === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                    ({category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <svg className="w-24 h-24 mx-auto text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-400 text-lg">No projects found in this category</p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center space-y-6 py-12 px-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold">
              Interested in Working Together?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105"
              >
                Get in Touch
              </a>
              <a
                href="https://github.com/NdegeSimon"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-gray-600 hover:border-blue-500 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10"
              >
                View GitHub
              </a>
            </div>
          </div>
          <BackToTop />
        </div>
      </div>
    </div>
  );
}