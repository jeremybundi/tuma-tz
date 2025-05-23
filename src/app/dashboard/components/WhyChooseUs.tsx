// src/components/WhyChooseUs.tsx (or your preferred path)
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa'; 
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'; 
import { FiTrendingUp } from 'react-icons/fi';

import ladyImage from '../../../../public/images/lady1.png'; 

interface FeatureItem {
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const features: FeatureItem[] = [
    {
      title: "Instant Card Payments",
      description: "Move money directly from Visa or Mastercard cards to banks or wallets",
    },
    {
      title: "Mobile-First Experience",
      description: "Built for smartphones, with a clean and intuitive UI",
    },
    {
      title: "Bank-Grade Security",
      description: "Trusted by financial institutions",
    },
    {
      title: "Track Payments",
      description: "View full transaction history and real-time receipts",
    },
    {
      title: "For Individuals & Businesses",
      description: "From personal payments to B2B disbursements",
    },
  ];

  return (
    // The background gradient here is from white to a very light, slightly desaturated cyan/mint.
    <div className="py-12 md:py-20 bg-transparent">
      <div className="container mx-auto px-4">
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-center">
          {/* Left Column: Features */}
          <div className="">
          <h2 className="text-[30px] sm:text-4xl md:text-[40px] font-[700]  text-[#191A15] mb-8 text-center md:text-left">
          Why Choose Tuma?
        </h2>
        <div className='md:space-y-8 space-y-6'>

    
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3">
                <FaCheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-[17px] md:text-[20px] font-[700] text-gray-800">
                    {feature.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] font-[500] text-[#595959]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
                </div>
          </div>

          {/* Right Column: Image with Overlays */}
          <div className="relative rounded-2xl mx-6 md:mx-0 aspect-[3/3] max-w-lg md:aspect-auto md:h-[500px]">
            <Image
              src={ladyImage}
              alt="Woman smiling while using her smartphone"
              layout="fill"
              objectFit="cover rounded-xl"
              priority
            />

            {/* Overlay Card 1: Payment Received */}
            <div className="absolute md:top-1/3 top-6 left-[-9%] z-20  md:left-[-10%] md:right-full md:mr-[-20px] 
            lg:mr-[-30px] transform md:-translate-y-1/2 bg-white p-3 md:px-3 md:py-2 rounded-lg shadow md:w-48">
              <p className="font-semibold text-[#01081B] text-[11px] md:text-[16px] md:mb-0.5">Payment Received</p>
              <p className="text-blue-600 font-bold text-[12px] md:text-[19px] md:mb-1">+35,890.00</p>
              <div className="flex justify-between items-center text-[#4D525F] text-[10px] md:text-[14px]">
                <span>11th Jan, 2024</span>
                <span className="flex items-center text-green-500">
                  3.09% <FiTrendingUp className="ml-0.5 w-3 h-3" />
                </span>
              </div>
            </div>

            {/* Overlay Card 2: Money Transfer Successful */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 bg-white p-2.5 sm:p-3 rounded-lg shadow-xl flex items-center space-x-2 text-xs sm:text-sm">
              <IoMdCheckmarkCircleOutline className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
              <span className="font-medium text-gray-700">Money Transfer Successful</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;