import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, Hotel, Info, Image, Phone, Settings } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', text: 'Home', icon: <Home size={20} /> },
    { path: '/rooms', text: 'Rooms', icon: <Hotel size={20} /> },
    { path: '/about', text: 'About', icon: <Info size={20} /> },
    { path: '/services', text: 'Services', icon: <Settings size={20} /> },
    { path: '/gallery', text: 'Gallery', icon: <Image size={20} /> },
    { path: '/contact', text: 'Contact', icon: <Phone size={20} /> },
  ];

  return (
    <nav className="bg-teal-700 shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Hotel className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold text-white">SerenitySuites</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-teal-800 text-white'
                    : 'text-teal-100 hover:bg-teal-600 hover:text-white'
                }`}
                onClick={closeMenu}
              >
                <span className="mr-1">{item.icon}</span>
                {item.text}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white hover:bg-teal-600 focus:outline-none"
              aria-expanded="false"
            >
              {isOpen ? (
                <X className="block h-6 w-6\" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6\" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-teal-700">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`block px-3 py-2 rounded-md text-base font-medium flex items-center ${
                isActive(item.path)
                  ? 'bg-teal-800 text-white'
                  : 'text-teal-100 hover:bg-teal-600 hover:text-white'
              }`}
              onClick={closeMenu}
            >
              <span className="mr-2">{item.icon}</span>
              {item.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;