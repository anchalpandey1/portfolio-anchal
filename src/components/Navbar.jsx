import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import heroimg from '../assets/heroimg.jpeg';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={toggleMenu}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to="#"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hidden sm:block bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer" aria-current="page">Anchal Pandey
                </Link>
                <Link
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">About </Link>
                <Link
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Portfolio</Link>
                <Link
                  to="experience"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Experience</Link>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hidden sm:block text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium cursor-pointer">Contact me</Link>

              </div>
            </div>

          </div>
          {/* Profile Image */}
          <div className="flex items-center">

            <div className="ml-3 relative cursor-pointer" onClick={toggleProfileMenu}>
              <img className="h-8 w-8 rounded-full" src={heroimg} alt="Profile" />
              {isProfileMenuOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <div className="flex items-center">
                      <FaLinkedin className=" h-6 w-6 text-gray-700 hover:text-white" />
                      <a href="https://www.linkedin.com/feed/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">LinkedIn</a>
                    </div>
                    <div className="flex items-center">
                      <FaGithub className=" h-6 w-6 text-gray-700 hover:text-white" />
                      <a href="https://github.com/anchalpandey1" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">GitHub</a>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link
              to="#"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Anchal Pandey
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">About </Link>
            <Link
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Portfolio</Link>
            <Link
              to="experience"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Experience</Link>
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Contact me</Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
