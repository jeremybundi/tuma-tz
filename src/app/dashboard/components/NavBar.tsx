"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from '../../../../public/images/logo.png';

const navLinksData = [
  { href: '#hero', label: 'Home', id: 'hero' },
  { href: '#about', label: 'About', id: 'about' },
  { href: '#how-it-works', label: 'How it Works', id: 'how-it-works' },
  { href: '#why-choose-tuma', label: 'Why Choose Tuma', id: 'why-choose-tuma' },
  { href: '#customer-support', label: 'Customer Support', id: 'customer-support' },
  { href: '#regulation-licensing', label: 'Regulation & Licensing', id: 'regulation-licensing' },
];

const NavbarComponent = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(navLinksData[0]?.id || null);

  const pathname = usePathname();
  const prevPathnameRef = useRef(pathname);
  const navRef = useRef<HTMLElement>(null); // Ref for the inner nav content to get its height

  // Handle scroll effect for sticky navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on actual route/pathname change
  useEffect(() => {
    if (isMobileMenuOpen && prevPathnameRef.current !== pathname) {
      setIsMobileMenuOpen(false);
    }
    prevPathnameRef.current = pathname;
  }, [pathname, isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Scroll Spy
  useEffect(() => {
    const navbarHeight = navRef.current ? navRef.current.offsetHeight : 70;

    const handleScrollSpy = () => {
      const sections = navLinksData
        .map(link => document.getElementById(link.id))
        .filter(section => section !== null) as HTMLElement[];

      let currentSectionId: string | null = activeSection;

      if (window.scrollY < (sections[0]?.offsetTop - navbarHeight - 20 || 50)) {
        currentSectionId = navLinksData[0]?.id || null;
        setActiveSection(currentSectionId);
        return;
      }

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const sectionTop = section.offsetTop - navbarHeight;
        if (window.scrollY >= sectionTop - 20) {
          currentSectionId = section.id;
          break;
        }
      }
      setActiveSection(currentSectionId);
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, [activeSection]); // Removed navLinksData from dependencies as it's constant

  // Scroll to section on initial load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => {
        scrollToSection(sectionId);
        setActiveSection(sectionId);
      }, 150);
    }
  }, []);


  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    const navbarHeight = navRef.current ? navRef.current.offsetHeight : 70;
    if (section) {
      const yOffset = -navbarHeight;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const closeMenuOnLinkClick = () => {
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  const handleSectionLinkClick = (e: React.MouseEvent, sectionId: string, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToSection(sectionId);
    }
    closeMenuOnLinkClick();
  };

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <>
      {/* Outer wrapper for full-width background and sticky positioning */}
      <div
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md' // Apply background and shadow to this full-width wrapper
            : 'bg-transparent'
        }`}
      >
        {/* Inner nav for content alignment (container, mx-auto) */}
        <nav
          ref={navRef} // Ref is on the inner nav for height calculation
          className="container mx-auto flex items-center justify-between px-4 py-3 md:px-0 md:py-4"
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="#hero"
              aria-label="Tuma Home"
              onClick={(e) => handleSectionLinkClick(e, 'hero', '#hero')}
            >
              <Image src={logo} alt="Tuma Logo" width={90} height={30} priority className="md:w-[80px] md:h-[22px]" />
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-grow items-center pt-1 justify-center space-x-5 lg:space-x-6">
            {navLinksData.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleSectionLinkClick(e, link.id, link.href)}
                className={`
                  whitespace-nowrap text-[16px] no-underline
                  ${isActive(link.id)
                    ? 'font-semibold text-slate-800'
                    : `font-medium ${isScrolled ? 'text-gray-600' : 'text-gray-500'} hover:text-slate-700 transition-colors`
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
              onClick={closeMenuOnLinkClick}
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
              aria-expanded={isMobileMenuOpen}
              className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500 ${
                isScrolled ? 'text-slate-700' : 'text-slate-700' // Or adjust initial color if needed
              }`}
            >
              {isMobileMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </nav>
      </div>

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
          <nav className="flex-grow space-y-1 p-4 overflow-y-auto">
            {navLinksData.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleSectionLinkClick(e, link.id, link.href)}
                className={`block rounded-md px-3 py-3 text-base font-medium
                  ${isActive(link.id)
                    ? 'bg-teal-50 text-teal-700'
                    : 'text-slate-700 hover:bg-gray-100 hover:text-slate-900'
                  } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Download App Button */}
          <div className="mt-auto p-4 border-t border-gray-200">
            <Link
              href="/download-app"
              onClick={closeMenuOnLinkClick}
              className="
                block w-full whitespace-nowrap rounded-full
                bg-[#65C895] px-6 py-3 text-center
                text-base font-medium text-white
                no-underline
                hover:bg-[#58b886] transition-colors
              "
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;