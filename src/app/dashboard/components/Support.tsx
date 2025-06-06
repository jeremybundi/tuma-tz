// Support.tsx
import React from 'react';
import Image, { StaticImageData } from 'next/image';

import whatsappIcon from '../../../../public/svg/whatsapp.svg';
import phoneIcon from '../../../../public/svg/phone.svg';
import gmailIcon from '../../../../public/svg/gmail.svg';
import asiaGlobeImage from '../../../../public/svg/asia.svg';

interface SupportItem {
  icon: StaticImageData;
  alt: string;
  title: string;
  linkText: string;
  href: string;
  target?: string; 
  rel?: string;   
}

const supportItems: SupportItem[] = [
  {
    icon: whatsappIcon,
    alt: 'WhatsApp icon',
    title: 'WhatsApp',
    linkText: 'Chat with Us',
    // <<< UPDATED: Use the 'wa.me' link for WhatsApp
    href: 'https://wa.me/255758999133', 
    target: '_blank', // Opens WhatsApp in a new tab on desktop
    rel: 'noopener noreferrer',
  },
  {
    icon: phoneIcon,
    alt: 'Call us icon',
    title: 'Call us',
    linkText: 'Call Now',
    // <<< This was already correct! Uses the 'tel:' protocol
    href: 'tel:+255758999133', 
  },
  {
    icon: gmailIcon,
    alt: 'Email Us icon',
    title: 'Email Us',
    linkText: 'Send Email',
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@tuma.tz', 
    // It's good practice to add these for consistency, even if mailto: doesn't open in a new tab.
    target: '_blank',
    rel: 'noopener noreferrer'
  },
];

const Support: React.FC = () => {
  return (
    <section id='customer-support'>
      <div className="bg-transparent py-7 overflow-hidden">
        <div className="mx-auto max-w-6xl md:py-11 px-4 text-center">
          <span className="inline-block bg-emerald-100 text-emerald-700 text-[13px] md:text-[16px] font-semibold px-4 py-2 rounded-full mb-2">
            Always here when you need us.
          </span>
          <h2 className="text-[30px] md:text-[40px] font-bold text-[#191A15] mb-3">
            Customer Support
          </h2>
          <p className="text-[#595959] mb-4 md:mb-10 max-w-lg mx-auto text-base md:text-[18px]">
            Need help with a transaction or technical issue? Our multilingual support team is available via:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
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
                  target={item.target} // Add target attribute
                  rel={item.rel}       // Add rel attribute
                  className="text-emerald-600 hover:text-emerald-700 font-[600] text-[11px] md:text-[14px] hover:underline"
                >
                  {item.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20 xl:-mt-24">
          <div className="relative mx-auto w-full max-w-[550px] px-4 sm:px-6">
            <Image
              src={asiaGlobeImage}
              alt="Stylized globe showing continents"
              width={550}
              height={350}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;