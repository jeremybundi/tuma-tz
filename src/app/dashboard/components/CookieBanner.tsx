// components/CookieBanner.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Cookies from 'js-cookie';
import { Cookie, X } from 'lucide-react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = Cookies.get('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    Cookies.set('cookie_consent', 'accepted', { expires: 365, path: '/' });
    setShowBanner(false);
  };

  const handleDecline = () => {
    Cookies.set('cookie_consent', 'declined', { expires: 365, path: '/' });
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div 
      className="fixed bottom-0 inset-x-0 pb-2 sm:pb-5 z-50"
      aria-live="polite"
      aria-label="Cookie Consent Banner"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* --- THE MAIN FIX IS ON THIS LINE --- */}
        {/* 1. Added `flex-wrap` to allow items to wrap to the next line. */}
        {/* 2. Changed `sm:justify-between` to `sm:justify-center` for better alignment when wrapping. */}
        <div className="p-4 sm:p-5 bg-white/95 border backdrop-blur-sm rounded-2xl shadow-lg flex flex-col
         sm:flex-row items-center gap-y-4 sm:gap-x-8 sm:justify-between flex-wrap">
          
          <div className="flex items-center gap-4 md:max-w-3xl">
            <div className="flex-shrink-0">
              <Cookie className="h-12 w-12 text-yellow-600" strokeWidth={1.5} />
            </div>
            <p className="text-[12px] md:text-[16px] font-[400] text-gray-500">
              Our website use cookies. By continuing navigating, we assume your
              permission to deploy cookies as detailed in our{' '}
              <Link href="/Privacy" className="font-semibold text-blue-600 underline">
                Privacy Policy
              </Link>.
            </p>
          </div>

          {/* This `div` remains `flex-shrink-0` which is correct, it prevents the buttons from looking squished */}
          <div className="flex-shrink-0 flex items-center gap-3 w-full sm:w-auto">
            {/* --- SIMPLIFIED BUTTON WIDTHS --- */}
            {/* Removed complex md:w-[80%] and md:w-fit. `sm:flex-none` is enough. */}
            <button
              onClick={handleAccept}
              className="flex-1 sm:flex-none inline-flex items-center justify-center md:px-5 px-2 py-2.5
               border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-emerald-600
                hover:bg-emerald-700 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Accept cookies
            </button>
            <button
              onClick={handleDecline}
              className="flex-1 sm:flex-none inline-flex items-center justify-center md:px-5 px-2 py-2.5 border
               border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleDecline}
              className="hidden sm:inline-flex text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CookieBanner;