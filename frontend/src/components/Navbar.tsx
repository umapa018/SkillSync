import React from 'react';
import { Link } from 'react-router-dom';
import { Code2 } from 'lucide-react';

export function Navbar() {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold text-xl">SkillSync Coder</span>
          </Link>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link to="/problems" className="text-gray-600 hover:text-gray-900">
                  Problems
                </Link>
              </li>
              <li>
                <Link to="/contest" className="text-gray-600 hover:text-gray-900">
                  Contests
                </Link>
              </li>
              <li>
                <Link to="/discuss" className="text-gray-600 hover:text-gray-900">
                  Discuss
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}