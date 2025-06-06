"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Assuming these are string paths to images in the 'public' folder
const tumaLogoPath: string = '/svg/logo.png'; 
const appleLogoPath: string = '/svg/Apple.svg'; 
const playstoreLogoPath: string = '/svg/Playstore.svg'; 

// Define actual store links
const APPLE_STORE_LINK = "YOUR_APP_STORE_LINK_HERE"; 
const GOOGLE_PLAY_LINK = "YOUR_GOOGLE_PLAY_LINK_HERE"; 

const footerNavLinks = [
    { href: '#hero', label: 'Home', id: 'hero' }, 
    { href: '#about', label: 'About', id: 'about' },
    { href: '#how-it-works', label: 'How it Works', id: 'how-it-works' },
    { href: '#why-choose-tuma', label: 'Why Choose Tuma', id: 'why-choose-tuma' },
    { href: '#customer-support', label: 'Customer Support', id: 'customer-support' },
    { href: '#regulation-licensing', label: 'Regulation & Licensing', id: 'regulation-licensing' },
];

{/*interface SocialLink {
  href: string;
  iconSrc: string; 
  alt: string;
} */}



const Footer = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname === href || (pathname.startsWith(href) && pathname.charAt(href.length) === '/');
  };

  return (
    <footer className=" text-white  pb-8 md:pb-12"> {/* Changed bg to match previous good version */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12">
          {/* Column 1: Logo, Description, App Stores */}
          <div className="md:col-span-4 text-center md:text-left "> {/* text-center for mobile, md:text-left for larger */}
            <Link href="/" className="inline-block mb-6" aria-label="Tuma Home">
              <Image src={tumaLogoPath} alt="Tuma Logo" width={100} height={34} priority />
            </Link>
            <p className="text-sm text-gray-300 leading-relaxed mb-6 md:mb-10">
              Tuma Ventures Limited is a Bank of Tanzania-licensed Payment Service Provider (PSP) that powers seamless, instant, and secure digital payments for Tanzanian individuals, merchants, and enterprises.
            </p>
            {/* App Store Badges Container - Centered on mobile */}
            <div className="flex flex-col md:mt-auto sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-3 mb-6 md:mb-0">
              <a
                href={APPLE_STORE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="inline-flex bg-black px-3 py-1.5 items-center space-x-2.5 rounded-md h-10 transition-opacity duration-200 hover:opacity-90"
              >
                <Image
                  src={appleLogoPath}
                  alt="Apple logo"
                  width={22} // Adjusted for better proportion
                  height={26} // Adjusted for better proportion
                  className="object-contain"
                />
                <div className="flex flex-col text-left">
                  <span className="text-white text-[10px] leading-tight font-light">Download on the</span>
                  <span className="text-white text-sm leading-tight font-semibold">App Store</span>
                </div>
              </a>
              <a
                href={GOOGLE_PLAY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="inline-flex bg-black px-3 py-1.5 items-center space-x-2.5 rounded-md h-10 transition-opacity duration-200 hover:opacity-90"
              >
                <Image
                  src={playstoreLogoPath}
                  alt="Google Play logo"
                  width={22} // Adjusted for better proportion
                  height={24} // Adjusted for better proportion
                  className="object-contain"
                />
                <div className="flex flex-col text-left">
                  <span className="text-white text-[10px] leading-tight font-light">GET IT ON</span>
                  <span className="text-white text-sm leading-tight font-semibold">Google Play</span>
                </div>
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1 lg:col-span-1"></div>

          {/* Column 2: Navigation Links */}
          <div className="md:col-span-3 text-center md:text-left"> {/* text-center for mobile, md:text-left for larger */}
            <ul className="space-y-3 md:space-y-4">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-[13px] md:text-[17px] transition-colors
                      ${isActive(link.href)
                        ? 'text-green-400 font-medium hover:text-green-300'
                        : 'text-gray-400 hover:text-white'
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Social Media & Legal */}
          <div className="md:col-span-3 mt-auto text-center md:text-left"> {/* text-center for mobile, md:text-left for larger */}
            {/* Social Links - Centered on mobile */}
            
            <div className="space-y-3 text-sm mb-6 ">
              <Link href="/Terms" className="block text-gray-400 hover:text-white transition-colors">
                Terms and Conditions
              </Link>
              <Link href="/Privacy" className="block text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
            <p className="text-xs text-gray-500 pb-1">
              © {new Date().getFullYear()} Tuma Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;