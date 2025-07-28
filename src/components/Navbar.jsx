import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { to: '/about', label: 'About' },
    { to: '/now', label: 'Now' },
    { to: '/uses', label: 'Uses' },
    { to: '/posts', label: 'Posts' },
    
  ];

  return (
    <nav className="w-full bg-gray-50">
      <div className="max-w-2xl mx-auto flex items-center justify-center px-4 py-4">
        <Link to="/" className="text-2xl font-bold text-pink-600 mr-10">Mohd Ubaid</Link>
        <div className="flex space-x-6">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={
                (location.pathname === link.to
                  ? "text-pink-600 font-semibold"
                  : "text-gray-400 hover:text-gray-700") +
                " font-mono"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <hr className="border-gray-200 w-3/4" />
      </div>
    </nav>
  );
};

export default Navbar;
