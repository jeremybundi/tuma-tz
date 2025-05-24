// Response.tsx (updated)
import React from 'react';
import Image, { StaticImageData } from 'next/image';

// Icons can stay here if Response.tsx is the only place they are used for response targets
import q1Icon from '../../../../public/svg/q3.svg';
import q2Icon from '../../../../public/svg/q2.svg';
import q3Icon from '../../../../public/svg/q1.svg';

interface ResponseTarget {
  icon: StaticImageData;
  alt: string;
  description: string;
  time: string;
  iconBgClass?: string;
}

const responseTargets: ResponseTarget[] = [
  {
    icon: q1Icon,
    alt: 'Self-service issues icon',
    description: 'Self-service issues',
    time: 'Instant',
    iconBgClass: 'bg-[#0F8CE9] text-blue-500', // Note: text-blue-500 might not do anything if SVG has its own colors
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

const ResponseTimeTargets: React.FC = () => { // Renamed component for clarity
  return (
    <section
      id="customer-support" // Assuming this section might correspond to "Customer Support"
      className="bg-white py-12 md:py-16" // Keep padding for this section
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Response Time Targets Section */}
        <div className="text-center"> {/* Removed mb-16 from here, section has its own padding */}
          <h2 className="text-[30px] md:text-[40px] font-bold text-gray-800 mb-6 md:mb-8">
            Response Time Targets
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-0">
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
      </div>
    </section>
  );
};

export default ResponseTimeTargets; // Export renamed component