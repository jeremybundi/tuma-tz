// components/sections/RegulatoryLicensing.tsx (or your preferred path)
import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const regulatoryPoints: string[] = [
  'PSP License issued under the National Payment Systems Act',
  'Subject to quarterly audits and compliance reporting.',
  'Secure systems and customer data handling in line with BoT expectations',
];

const RegulatoryLicensing: React.FC = () => {
  return (
    <section
      id="regulation-licensing" 
      className="bg-white pb-12  md:py-16" 
    >
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-[30px] md:text-[40px] font-semibold text-gray-800 mb-3 text-center leading-[1.1]">
          Regulatory & Licensing
          <br />
          Information
        </h2>
        <p className="text-[#595959] font-[400] mb-8 md:mb-10 text-center text-base md:text-[18px] leading-relaxed">
          Tuma Ventures Limited (Tanzania) is a registered and regulated Payment
          Service Provider licensed by the Bank of Tanzania.
        </p>
        <ul className="space-y-4 text-left"> {/* Added text-left for the list items themselves */}
          {regulatoryPoints.map((point, index) => (
            <li key={index} className="flex items-start md:items-center">
              <BsCheckCircleFill className="text-green-500 w-5 h-5 md:w-6 md:h-6 mr-3 mt-1 md:mt-0 flex-shrink-0" />
              <span className="md:text-[18px] text-[#191A15] text-base md:text-lg">
                {point}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RegulatoryLicensing;