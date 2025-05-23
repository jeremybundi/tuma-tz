import Image from 'next/image';
import manPng from '../../../../public/images/man.png'; // Ensure this path is correct

const Mission = () => {
  const missionText = "At Tuma, our mission is to build the digital infrastructure that powers Tanzania's cashless future. We're creating a reliable, secure, and locally rooted payments ecosystem that connects people, businesses, and banks through fast, transparent, and mobile-first technology. By simplifying how money moves, we're helping drive financial inclusion, support economic growth, and empower every Tanzanian to participate fully in the digital economy.";

  return (
    <div className="container mx-auto px-4 sm:px-6">
      <div className="rounded-2xl overflow-hidden bg-[#F9F9F9] md:flex max-w-6xl mx-auto">
        {/* Left Image Column (Mobile: Full width, Desktop: 40%) */}
        <div className="w-full hidden md:block md:w-2/5 relative">
          <div className="relative w-full aspect-[4/5] md:aspect-[2/3] md:h-[530px]">
            <Image
              src={manPng}
              alt="Man looking at his smartphone with a thoughtful expression"
              fill
              className="object-cover  md:rounded-l-xl "
              priority
            />
          </div>
        </div>

        {/* Right Text Column (Mobile: Below image, Desktop: 60%) */}
        <div className="w-full md:w-3/5 flex flex-col justify-center p-4 sm:p-10 md:p-12 lg:p-16 text-left md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose">
            {missionText}
          </p>
        </div>
          {/* Left Image Column (Mobile: Full width, Desktop: 40%) */}
        <div className="w-full md:w-2/5 md:hidden p-4 relative">
          <div className="relative w-full aspect-[4/5] rounded-4xl md:aspect-[2/3] md:h-[530px]">
            <Image
              src={manPng}
              alt="Man looking at his smartphone with a thoughtful expression"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Mission;