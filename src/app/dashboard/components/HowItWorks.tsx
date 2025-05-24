// src/components/HowItWorks.tsx
import { TbCreditCardRefund } from "react-icons/tb";
import { IoStar } from "react-icons/io5";
import Image from 'next/image';

// Import remaining SVG icons from public folder
import DownloadIcon from '../../../../public/svg/download.svg';
import InitiateIcon from '../../../../public/svg/initiate.svg';
import PayIcon from '../../../../public/svg/pay.svg';

const HowItWorks = () => {
  const steps = [
    {
      icon: DownloadIcon,
      title: "Download the Tuma App",
      description: "Get started in minutes available on both Android and iOS.",
      alt: "Download icon",
      isReactIcon: false
    },
    {
      icon: TbCreditCardRefund,
      title: "Link Your Tanzanian Card",
      description: "Securely connect any Visa or Mastercard from a local Tanzanian bank.",
      alt: "Link card icon",
      isReactIcon: true
    },
    {
      icon: InitiateIcon,
      title: "Initiate Your Payment",
      description: "Choose whether to send funds to a mobile wallet or bank account.",
      alt: "Initiate payment icon",
      isReactIcon: false
    },
    {
      icon: PayIcon,
      title: "Payment Complete",
      description: "Recipients get their money instantly. Confirmation sent in real-time.",
      alt: "Payment complete icon",
      isReactIcon: false
    }
  ];

  const rating = 4.9;
  const totalStars = 5;

  return (
    <section id='how-it-works'>
    <div className="py-3 md:py-40 container mx-auto  bg-transparent">
      <div className="container mx-auto  px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">
          {/* Left Column: Text and Rating */}
          <div className="space-y-3 md:space-y-0">
            <h2 className="text-[30px] md:text-[40px] font-[600] md:mb-2 text-[#191A15]">
              How It Works
            </h2>
            <p className="text-[#595959] text-base text-[12px] md:text-[16px] leading-relaxed">
              Getting started with Tuma is simple. Just download the app on Android or iOS and sign up in minutes. Link any Tanzanian-issued Visa or Mastercard, then choose where to send your money—either to a mobile wallet or a local bank account. Once you confirm the transfer, the recipient gets the funds instantly, with real-time notifications for peace of mind.
            </p>
            <div className="mt-4 md:mt-12">
              <div className="flex items-center space-x-2 mt-4 md:mt-12 mb-1">
                {[...Array(totalStars)].map((_, index) => (
                  <IoStar 
                    key={index} 
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${index < Math.round(rating) ? "text-yellow-400 fill-yellow-400" : "text-yellow-400 fill-none"}`}
                  />
                ))}
              </div>
              <p className="text-sm sm:text-base font-semibold text-gray-800">
                {rating.toFixed(1)} / {totalStars} rating
              </p>
              <p className="text-[12px] md:text-[18px] text-[#595959]">
                user score
              </p>
            </div>
          </div>

          {/* Right Column: Steps */}
          <div className="space-y-6 md:space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-white p-3 sm:p-4 rounded-xl shadow-sm">
                  {step.isReactIcon ? (
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" />
                  ) : (
                    <Image 
                      src={step.icon} 
                      alt={step.alt} 
                      width={24} 
                      height={24} 
                      className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" 
                    />
                  )}
                </div>
                <div>
                  <h3 className="text-md sm:text-lg font-semibold text-gray-900 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-snug">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HowItWorks;