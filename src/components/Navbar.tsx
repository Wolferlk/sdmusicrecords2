import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/artists', label: 'Artists' },
    { path: '/releases', label: 'Releases' },
    { path: '/studio-pricing', label: 'Pricing' },
    { path: '/submit-demo', label: 'Submit Demo' },
    { path: '/allstudios', label: 'Studios' },
    { path: '/aboutus', label: 'About Us' },
    { path: '/join-label', label: 'Join Label' },
  ];

  // Effect to handle scroll visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowNavbar(true); // Show navbar when scroll is greater than 50px
      } else {
        setShowNavbar(false); // Hide navbar when scroll is less than 50px
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full bg-black/50 backdrop-blur-md z-50 transition-transform ${
        showNavbar ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img
              src="https://i.ibb.co/Cw8gWB9/WHITE-BALL-LOGO.png"
              className="h-8 w-8"
              alt="SD Music Records Logo"
            />
            <span className="ml-2 text-xl font-bold">SD MUSIC RECORDS</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-white hover:text-red-500 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/60 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block px-3 py-2 text-white hover:text-red-500"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
