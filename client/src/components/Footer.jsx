import React from 'react';

export default function Footer() {
  return (
     <footer className="px-8 py-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="text-gray-500 text-sm">© 2026 Simon Ooko</p>
          <div className="flex gap-4">
            <a href="#github" className="text-gray-400 hover:text-white transition">GitHub</a>
            <a href="#linkedin" className="text-gray-400 hover:text-white transition">LinkedIn</a>
            <a href="#twitter" className="text-gray-400 hover:text-white transition">Twitter</a>
          </div>
        </div>
      </footer>
  );
}