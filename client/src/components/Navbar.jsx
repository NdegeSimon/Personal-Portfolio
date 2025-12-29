import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-50 p-8">
      <div className="flex gap-8 text-sm font-medium uppercase tracking-widest">
        <Link to="/work" className="text-white hover:text-gray-300 transition-colors">
          Work
        </Link>
        <Link to="/ai" className="text-white hover:text-gray-300 transition-colors">
          AI+
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 transition-colors">
          About
        </Link>
        <Link to="/projects" className="text-white hover:text-gray-300 transition-colors">
          Projects
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-300 transition-colors">
          Contact
        </Link>
        <Link to="/mentoring" className="text-white hover:text-gray-300 transition-colors">
          Mentoring
        </Link>
      </div>
    </nav>
  );
}