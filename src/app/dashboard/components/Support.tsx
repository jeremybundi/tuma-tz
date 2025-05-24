// Support.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import whatsappIcon from '../../../../public/svg/whatsapp.svg'; 
import appIcon from '../../../../public/svg/app.svg';   
import phoneIcon from '../../../../public/svg/phone.svg';    
import gmailIcon from '../../../../public/svg/gmail.svg';   
import asiaGlobeImage from '../../../../public/svg/asia.svg';   

interface SupportItem {
  icon: StaticImageData;
  alt: string;
  title: string;
  linkText: string;
  href: string;
}

const supportItems: SupportItem[] = [
  {
    icon: whatsappIcon,
    alt: 'WhatsApp icon',
    title: 'WhatsApp',
    linkText: 'Get Started',
    href: '#whatsapp-support',
  },
  {
    icon: appIcon,
    alt: 'In-app Chat icon',
    title: 'In-app Chat',
    linkText: 'Get App',
    href: '#app-chat-support', 
  },
  {
    icon: phoneIcon,
    alt: 'Call us icon',
    title: 'Call us',
    linkText: 'Call Now',
    href: 'tel:+1234567890', 
  },
  {
    icon: gmailIcon,
    alt: 'Email Us icon',
    title: 'Email Us',
    linkText: 'Send Email',
    href: 'mailto:support@example.com', 
  },
];

const Support: React.FC = () => {
  return (
    <section id='customer-support'>
    <div className="bg-transparent py-7  overflow-hidden">
      <div className="mx-auto max-w-6xl  md:py-11 px-4 text-center">
        <span className="inline-block bg-emerald-100 text-emerald-700 text-[13px] md:text-[16px] font-semibold px-4 py-2 rounded-full mb-2">
          Always here when you need us.
        </span>
        <h2 className="text-[30px] md:text-[40px] font-bold text-[#191A15] mb-3">
          Customer Support
        </h2>
        <p className="text-[#595959] mb-4 md:mb-10 max-w-lg mx-auto text-base md:text-[18px]">
          Need help with a transaction or technical issue? Our multilingual support team is available via:
        </p>

        <div className="grid grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {supportItems.map((item) => (
            <div key={item.title} className="flex flex-col items-center">
              <div className="mb-3 md:mb-4">
                <Image 
                  src={item.icon} 
                  alt={item.alt} 
                  width={36} 
                  height={36} 
                  className="w-8 h-8 sm:w-9 sm:h-9 md:w-12 md:h-12" 
                />
              </div>
              <h3 className="font-semibold text-gray-700 text-[14px] md:text-[16px] mb-1">
                {item.title}
              </h3>
              <a
                href={item.href}
                className="text-emerald-600 hover:text-emerald-700 font-[600] text-[11px] md:text-[14px] hover:underline"
              >
                {item.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Asia Globe Image with responsive sizing */}
      <div className="w-full -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24">
        <div className="relative mx-auto w-full max-w-[550px] px-4 sm:px-6">
          <Image
            src={asiaGlobeImage}
            alt="Stylized globe showing continents"
            width={550}
            height={350}
            layout="responsive"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Support;