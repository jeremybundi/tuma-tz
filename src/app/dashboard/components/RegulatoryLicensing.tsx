// components/sections/RegulatoryLicensing.tsx
import React from 'react';
import { BsCheckCircleFill, BsMegaphoneFill } from 'react-icons/bs';

const RegulatoryLicensing: React.FC = () => {
  return (
    <section
      id="regulation-licensing"
      className="bg-white dark:bg-gray-950 py-12 md:py-24 transition-colors duration-300"
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        
        {/* Announcement Badge */}
        <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-2 bg-blue-50 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full font-semibold text-sm animate-pulse">
          <BsMegaphoneFill className="w-5 h-5" />
          Official Announcement
        </div>

        {/* Heading */}
        <h2 className="text-[30px] md:text-[40px] font-semibold text-gray-800 dark:text-white mb-3 leading-[1.1]">
          Regulatory & <span className="text-blue-500">Licensing</span> 
          <br />
          Information
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 dark:text-gray-300 font-[400] mb-8 md:mb-10 text-base md:text-[18px] leading-relaxed">
          <span className="font-semibold text-gray-700 dark:text-white">
            <BsCheckCircleFill className="inline w-5 h-5 text-green-500 mr-2" />
            Tuma has officially been granted the Remittance Licence in Tanzania.
          </span>{" "}
          This milestone strengthens our ability to provide 
          <span className="font-semibold text-blue-500"> fast, secure, and compliant </span> 
          cross-border money transfer services in the region.
        </p>

        {/* Decorative underline */}
        <div className="w-24 h-1 mx-auto bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
      </div>
    </section>
  );
};

export default RegulatoryLicensing;
