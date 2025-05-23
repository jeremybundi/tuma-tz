// src/components/PaymentPage.tsx (or your preferred path)
import Image from 'next/image';

// Import images from the public folder
// Assuming these paths are correct for your project structure
import p1 from '../../../../public/images/p1.png';
import p2 from '../../../../public/images/p2.png';
import p3 from '../../../../public/images/p3.png';

const Payment = () => {
  const advantages = [
    {
      title: "Local-first approach",
      description: "Designed with Tanzanian users in mind, Tuma supports local needs, regulations, and everyday payment habits.",
      image: p1,
      alt: "Man processing fish, representing local commerce"
    },
    {
      title: "Built for Tanzania unique economy",
      description: "Optimized for smartphones, Tuma fits right into Tanzania's mobile-first lifestyle.",
      image: p2,
      alt: "Tanzanian shilling notes and coins"
    },
    {
      title: "Reliable, fast, and always available",
      description: "Enjoy 24/7 payment services that are secure, lightning-fast, and backed by local support.",
      image: p3,
      alt: "Abstract digital arrows indicating speed and reliability"
    }
  ];

  return (
      // Note: `md:p-18` is not a standard Tailwind class. If it's not custom, consider `md:p-16` or `md:p-20`.
      <div className="bg-[#161C28] text-slate-200 p-8  md:px-16 md:py-8 lg:p-20 mt-20 md:mt-32 rounded-2xl container mx-auto w-full"> {/* Adjusted padding for consistency */}
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-16"> {/* Increased bottom margin */}
          {/* Left Column */}
          <div className="md:col-span-1">
            <p className="text-[14px] md:text-[16px] lg:text-[16px] font-semibold uppercase tracking-wider text-[#D0D5DD] mb-2">
              ABOUT US
            </p>
            <span className="block text-[30px] md:text-[36px] font-bold text-white leading-tight mb-6">
                <p>
                A Licensed Payment
                </p>
                <p>
                Processor Built for Tanzania
                </p>
            </span>
          </div>
          {/* Right Column */}
          <div className="md:col-span-1 text-white text-[12px] md:text-[14px] sm:text-base leading-relaxed space-y-4">
            <p>
              Tuma Ventures Limited is a Bank of Tanzania-licensed Payment Service
              Provider (PSP) that powers seamless, instant, and secure digital payments for
              Tanzanian individuals, merchants, and enterprises.
            </p>
            <p>
              Our Android and iOS applications allow cardholders to make payments or
              transfers directly to mobile wallets or any of the 41 licensed banks in Tanzania
              anytime, anywhere.
            </p>
          </div>
        </div>

        {/* The Tuma Advantage Section */}
        <div>
          <h2 className="text-[18px] md:text-[24px] font-semibold text-[#D0D5DD] mb-6 md:mb-8"> {/* Increased bottom margin */}
            The Tuma Advantage
          </h2>
          {/* Container for advantage cards: flex row on small, grid on medium+ */}
          <div className="flex overflow-x-auto space-x-6 pb-4 md:grid md:grid-cols-3 md:gap-x-8 lg:gap-x-12 md:gap-y-8 md:space-x-0 md:pb-0 md:overflow-visible">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                // Card styling: fixed width and no-shrink for small screens, auto width for grid
                className="bg-[#0B0B0B] p-8 rounded-lg flex flex-col w-72 sm:w-80 flex-shrink-0 md:w-auto"
              >
                <div className="flex-grow">
                  <h3 className="text-[16px] md:text-[18px] font-semibold text-center text-emerald-400 md:mt-4 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-400 text-sm text-center leading-relaxed md:mb-11 mb-8">
                    {advantage.description}
                  </p>
                </div>
                <div className="mt-auto flex justify-center">
                  <Image
                    src={advantage.image}
                    alt={advantage.alt}
                    width={120}
                    height={120}
                    className="rounded-full object-cover"
                    placeholder="blur"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default Payment;