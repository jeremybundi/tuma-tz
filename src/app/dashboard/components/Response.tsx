// Response.tsx
import React from 'react';
import Image from 'next/image';
import { BsCheckCircleFill } from 'react-icons/bs'; 

import q1Icon from '../../../../public/svg/q3.svg'; // Replace with actual path
import q2Icon from '../../../../public/svg/q2.svg'; // Replace with actual path
import q3Icon from '../../../../public/svg/q1.svg'; 

interface ResponseTarget {
  icon: any; // StaticImageData or string for src
  alt: string;
  description: string;
  time: string;
  iconBgClass?: string; // Optional: if SVGs don't have their own colored circle
}

const responseTargets: ResponseTarget[] = [
  {
    icon: q1Icon,
    alt: 'Self-service issues icon',
    description: 'Self-service issues',
    time: 'Instant',
    iconBgClass: 'bg-[#0F8CE9] text-blue-500', // Example if icon needs background
  },
  {
    icon: q2Icon,
    alt: 'Frontline resolution icon',
    description: 'Frontline resolution',
    time: '< 12 hours',
    iconBgClass: 'bg-[#FFC728] text-yellow-500',
  },
  {
    icon: q3Icon,
    alt: 'Specialist issues icon',
    description: 'Specialist issues',
    time: '< 48 hours',
    iconBgClass: 'bg-[#54BD95] text-teal-500',
  },
];

const regulatoryPoints: string[] = [
  'PSP License issued under the National Payment Systems Act',
  'Subject to quarterly audits and compliance reporting.',
  'Secure systems and customer data handling in line with BoT expectations',
];

const Response: React.FC = () => {
  return (
    <div className="bg-white py-12 md:py-12">
      <div className="max-w-2xl mx-auto px-4">
        {/* Response Time Targets Section */}
        <div className="mb-16 md:mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
            Response Time Targets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3  md:gap-0">
            {responseTargets.map((target, index) => (
              <div
                key={target.description}
                className={`flex flex-col items-center px-4
                            ${index < responseTargets.length - 1 ? 'md:border-r md:border-gray-200' : ''}
                            ${index > 0 ? 'mt-8 md:mt-0' : ''}
                          `}
              >
                <div className={`mb-4 p-3 rounded-full ${target.iconBgClass || ''}`}>
                  <Image
                    src={target.icon}
                    alt={target.alt}
                    width={28} 
                    height={28} 
                  />
                </div>
                <p className="text-sm text-gray-500 mb-1">
                  {target.description}
                </p>
                <p className="text-2xl font-bold text-gray-800">{target.time}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Regulatory & Licensing Information Section */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 text-center">
            Regulatory & Licensing Information
          </h2>
          <p className="text-gray-600 mb-8 md:mb-10 text-center text-base md:text-lg leading-relaxed">
            Tuma Ventures Limited (Tanzania) is a registered and regulated Payment
            Service Provider licensed by the Bank of Tanzania.
          </p>
          <ul className="space-y-4">
            {regulatoryPoints.map((point, index) => (
              <li key={index} className="flex items-start md:items-center">
                <BsCheckCircleFill className="text-green-500 w-5 h-5 md:w-6 md:h-6 mr-3 mt-1 md:mt-0 flex-shrink-0" />
                <span className="text-gray-700 text-base md:text-lg">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Response;