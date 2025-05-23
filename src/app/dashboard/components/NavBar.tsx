"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
//import { useRouter } from 'next/navigation'; 
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../../../public/images/logo.png';

const navLinksData = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How it Works' },
  { href: '/why-choose-tuma', label: 'Why Choose Tuma' },
  { href: '/customer-support', label: 'Customer Support' },
  { href: '/regulation-licensing', label: 'Regulation & Licensing' },
];

const A = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  //const router = useRouter();
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';

  // Handle scroll effect - improved for mobile
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    // Use passive event listener for better mobile performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  }, [currentPath, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <>
     <nav className={`sticky top-0 z-50 flex w-full items-center justify-between px-4 py-3 md:px-10 md:py-4 shadow-md md:shadow-none transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-sm bg-gradient-to-br from-teal-50 via-[#E0F7FA]/30 to-cyan-50 shadow-md' 
        : 'bg-transparent'
    }`}>
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" aria-label="Tuma Home" onClick={handleLinkClick}>
            <Image src={logo} alt="Tuma Logo" width={90} height={30} priority className="md:w-[80px] md:h-[22px]" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow items-center pt-1 justify-center space-x-5 lg:space-x-6">
          {navLinksData.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`
                whitespace-nowrap text-[16px] no-underline
                ${isActive(link.href)
                  ? 'font-semibold text-slate-800'
                  : 'font-medium text-[#A6A6A6] hover:text-slate-700 transition-colors'
                }
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Download App Button */}
        <div className="hidden md:block flex-shrink-0">
          <Link
            href="/download-app"
            className="
              inline-block whitespace-nowrap rounded-full 
              bg-[#65C895] px-5 py-2 lg:px-6 lg:py-2.5
              text-xs lg:text-sm font-medium text-white 
              no-underline
              hover:bg-[#58b886] transition-colors
            "
          >
            Download App
          </Link>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="p-2 text-slate-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 rounded-md"
          >
            {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[45] bg-black bg-opacity-50 md:hidden"
          onClick={toggleMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full transform bg-white shadow-xl transition-transform duration-300 ease-in-out z-[60] md:hidden
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="flex h-full flex-col">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <span id="mobile-menu-title" className="text-lg font-semibold text-slate-700">
              Menu
            </span>
            <button
              onClick={toggleMobileMenu}
              aria-label="Close menu"
              className="p-2 text-slate-600 hover:text-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
            >
              <HiX size={28} />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-grow space-y-1 p-4">
            {navLinksData.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block rounded-md px-3 py-3 text-base font-medium
                  ${isActive(link.href)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-700 hover:bg-gray-100 hover:text-slate-900'
                  } transition-colors`}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Download App Button */}
          <div className="mt-auto p-4 border-t border-gray-200">
            <Link
              href="/download-app"
              className="
                block w-full whitespace-nowrap rounded-full 
                bg-[#65C895] px-6 py-3 text-center
                text-base font-medium text-white 
                no-underline
                hover:bg-[#58b886] transition-colors
              "
              onClick={handleLinkClick}
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default A;