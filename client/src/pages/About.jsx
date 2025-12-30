import { FaCode, FaLaptopCode, FaRocket, FaUsers, FaAward, FaGraduationCap } from 'react-icons/fa';
import profile from '../assets/profile.jpg';
import BackToTop from '../components/BackToTop';
export default function About() {
  const skills = {
    frontend: [
      { name: 'React', level: 95 },
      { name: 'HTML', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'Redux', level: 85 }
    ],
    backend: [
      { name: 'Flask', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'SQL', level: 82 },
      { name: 'Express', level: 90 }
    ],
    tools: [
      { name: 'Git & GitHub', level: 95 },
      { name: 'Docker', level: 80 },
      { name: 'AWS', level: 78 },
      { name: 'Figma', level: 85 },
      { name: 'Jest', level: 82 }
    ]
  };

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Solutions Ltd',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications, mentoring junior developers, and implementing best practices for code quality and performance.',
      achievements: [
        'Reduced application load time by 60% through optimization',
        'Led team of 5 developers on major client project',
        'Implemented CI/CD pipeline reducing deployment time by 80%'
      ]
    },
    {
      title: 'Full-Stack Developer',
      company: 'Digital Innovations Inc',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client-facing applications using React, Node.js, and PostgreSQL.',
      achievements: [
        'Built 10+ production applications from scratch',
        'Improved code coverage from 40% to 85%',
        'Reduced bug reports by 45% through better testing'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'StartUp Hub',
      period: '2018 - 2020',
      description: 'Contributed to various web applications, learned best practices, and collaborated with cross-functional teams.',
      achievements: [
        'Shipped 20+ features and bug fixes monthly',
        'Learned modern web development stack',
        'Contributed to open-source projects'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Nairobi',
      period: '2014 - 2018',
      description: 'Focused on software engineering, algorithms, and database systems.'
    },
    {
      degree: 'Full-Stack Software Engineering',
      institution: 'Moringa School',
      period: '2019',
      description: 'Intensive 24-week program covering React, Node.js, Python, and cloud deployment.'
    }
  ];

  const values = [
    {
      icon: <FaCode className="group-hover:rotate-6 transition-transform duration-300" />,
      title: 'Clean & Readable',
      description: 'I write code that\'s easy to understand and maintain, with clear documentation and consistent patterns that make collaboration a breeze.'
    },
    {
      icon: <FaRocket className="group-hover:animate-bounce transition-transform duration-300" />,
      title: 'Fast & Efficient',
      description: 'Performance isn\'t just about speed—it\'s about creating smooth, responsive experiences that keep users engaged and happy.'
    },
    {
      icon: <FaUsers className="group-hover:scale-110 transition-transform duration-300" />,
      title: 'Team Player',
      description: 'Some of my best work comes from collaborating with others. I love brainstorming, pair programming, and learning from my peers.'
    },
    {
      icon: <FaLaptopCode className="group-hover:animate-pulse transition-transform duration-300" />,
      title: 'Always Learning',
      description: 'The tech world never stands still, and neither do I. I\'m always exploring new technologies and techniques to improve my craft.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e] text-white overflow-x-hidden">
      <div className="pt-24 pb-16">
        
        {/* Background Effect */}
         <div className="fixed inset-0 bg-gradient-to-br from-[#0a0e1a] via-[#0f1419] to-[#1a1f2e]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Hero Section */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left - Text */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Hey there! I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Simon</span>
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed">
                  A <span className="text-blue-400 font-medium">Full-Stack Developer</span> with a passion for creating digital experiences that make a difference. Based in the vibrant city of Nairobi, Kenya, I turn complex problems into simple, beautiful, and intuitive solutions.
                </p>
                <p className="text-gray-400 text-lg leading-relaxed">
                  My coding journey began when I built my first website (it was terrible, but we all start somewhere!). Since then, I've had the privilege of working with amazing teams and building products that people actually use. When I'm not coding, you'll find me Singing, reading tech blogs, or experimenting with new recipes in the kitchen.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  
                   <a href="/contact"
                    className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105"
                  >
                    Get in Touch
                  </a>
                  
                  <a
                    href="/Resume.pdf"
                    download
                    className="px-8 py-3 border-2 border-gray-600 hover:border-blue-500 rounded-lg font-semibold transition-all duration-300 hover:bg-blue-500/10"
                  >
                    Download CV
                  </a>
                </div>
              </div>

              {/* Right - Image */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-2xl opacity-20 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                  <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-4 border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-blue-500/20">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>
                    <img 
                      src={profile} 
                      alt="Simon Ooko"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-0 left-0 p-6 z-20">
                      <p className="text-sm text-blue-300 font-mono">Currently coding from</p>
                      <p className="text-white text-lg font-medium">Nairobi, Kenya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              What I <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Value</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="text-4xl text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Technical <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Skills</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Frontend */}
              <div className="p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-blue-400">Frontend</span>
                </h3>
                <div className="space-y-4">
                  {skills.frontend.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-purple-400">Backend</span>
                </h3>
                <div className="space-y-4">
                  {skills.backend.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div className="p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="text-pink-400">Tools & DevOps</span>
                </h3>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">{skill.name}</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-pink-500 to-orange-500 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Work <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Experience</span>
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="group p-6 md:p-8 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-gray-300">{exp.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 text-sm font-medium whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-gray-300 mb-2">Key Achievements:</p>
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-400 mt-1">▸</span>
                        <p className="text-gray-400 text-sm">{achievement}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Education</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {education.map((edu, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-gray-800/30 border border-gray-700/50 rounded-2xl backdrop-blur-sm hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400">
                      <FaGraduationCap className="text-2xl" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-300">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                    </div>
                  </div>
                  <p className="text-gray-400">
                    {edu.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 py-12 px-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl backdrop-blur-sm">
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-semibold transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}