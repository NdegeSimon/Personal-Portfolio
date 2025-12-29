import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';

// Page components
const Work = () => (
  <div className="container mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold mb-8">My Work</h1>
    <p className="text-gray-400">Here are some of my recent projects...</p>
  </div>
);

const AI = () => (
  <div className="container mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold mb-8">AI+</h1>
    <p className="text-gray-400">Explore my AI projects and research...</p>
  </div>
);

const About = () => (
  <div className="container mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold mb-8">About Me</h1>
    <p className="text-gray-400">Learn more about my background and skills...</p>
  </div>
);

const Projects = () => (
  <div className="container mx-auto px-6 py-20">
    <h1 className="text-4xl font-bold mb-8">My Projects</h1>
    <p className="text-gray-400">Check out my latest work and case studies...</p>
  </div>
);



function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Router>
        <Navbar />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/ai" element={<AI />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
