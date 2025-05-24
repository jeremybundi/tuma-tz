// merchant.tsx
import React from 'react';
import Image from 'next/image';

import lady2Image from '../../../../public/images/lady2.png';
import d1Icon from '../../../../public/svg/D1.svg';    
import d2Icon from '../../../../public/svg/D2.svg';    
import d3Icon from '../../../../public/svg/D3.svg';     
import d4Icon from '../../../../public/svg/D4.svg';   

const Merchant: React.FC = () => {
  return (
    <div className="bg-transparent flex flex-col md:flex-row items-center justify-center p-8 md:p-0 md:py-10 rounded-lg  container mx-auto md:my-10">
      <div className="w-full hidden md:block md:w-1/2 lg:w-2/5 mb-8 md:mb-0 md:mr-8 lg:mr-12">
   
        <div className="relative w-full " style={{ paddingTop: `${(500 / 500) * 100}%` }}> 
          <Image
            src={lady2Image}
            alt="Lady using a phone"
            layout="fill" 
            objectFit="cover"
            className="rounded-lg" 
            priority 
          />
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-3/5">
        <div className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
          Tuma for Merchants & Enterprises
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Business Solutions
        </h2>
        <p className="text-gray-600 mb-8 text-base md:text-lg">
          Enable your customers to pay using Tanzanian Visa or Mastercard
          cards. We offer:
        </p>
        <ul className="space-y-1 md:space-y-4">
          <li className="flex items-center">
            <div className="bg-blue-500 md:p-3 p-2 rounded-full mr-4 flex-shrink-0">
              <Image 
                src={d1Icon} 
                alt="Payment APIs icon" 
                width={24} 
                height={24} 
              />
            </div>
            <span className="text-gray-700 text-base md:text-lg">Payment APIs for direct integration</span>
          </li>
          <li className="flex items-center">
            <div className="bg-yellow-500 md:p-3 p-2 rounded-full mr-4 flex-shrink-0">
              <Image 
                src={d2Icon} 
                alt="Bulk disbursements icon" 
                width={24} 
                height={24} 
              />
            </div>
            <span className="text-gray-700 text-base md:text-lg">Bulk disbursements to mobile money and bank accounts</span>
          </li>
          <li className="flex items-center">
            <div className="bg-green-500 md:p-3 p-2 rounded-full mr-4 flex-shrink-0">
              <Image 
                src={d3Icon} 
                alt="Real-time reporting icon" 
                width={24} 
                height={24} 
              />
            </div>
            <span className="text-gray-700 text-base md:text-lg">Real-time transaction reporting</span>
          </li>
          <li className="flex items-center">
            <div className="bg-purple-500 md:p-3 p-2 rounded-full mr-4 flex-shrink-0">
              <Image 
                src={d4Icon} 
                alt="SmartPOS icon" 
                width={24} 
                height={24} 
              />
            </div>
            <span className="text-gray-700 text-base md:text-lg">SmartPOS terminals for in-store payments</span>
          </li>
        </ul>
      </div>
      <div className="w-full  md:hidden  my-8 ">
   
        <div className="relative w-full " style={{ paddingTop: `${(500 / 500) * 100}%` }}> 
            <Image
            src={lady2Image}
            alt="Lady using a phone"
            layout="fill" 
            objectFit="cover"
            className="rounded-lg" 
            priority 
            />
        </div>
        </div>
    </div>
  );
};

export default Merchant;