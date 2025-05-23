// components/Section.tsx
"use client";

import Image from 'next/image';
import Link from 'next/link';
import {  HiCheck, HiTrendingUp } from 'react-icons/hi';
import { FaRegCheckCircle } from "react-icons/fa"; // Used this in your code
import { useRef, useEffect, useState } from 'react';
import  Payment from './Payment'

// Corrected image paths assuming they are in public/images/ and public/svg/
import lineImage from '../../../../public/images/line.png';
import personImage from '../../../../public/images/pic.png';
import cardImage from '../../../../public/images/card.png';
import dbIcon from '../../../../public/images/db.svg'; // Assuming db.svg is in public/svg

const Section = () => {
  const features = [
    'Available on Android & iOS',
    'Accepts All Tanzanian Visa & Mastercard Cards',
    'Licensed Payment Service Provider by the Bank of Tanzania',
  ];

  const highlightGreen = '#65C895';
  const leftColumnRef = useRef<HTMLDivElement>(null);
  // rightColumnRef is not strictly needed if we are not setting its height from JS anymore for this specific goal
  // but we keep it for now as it was part of the previous logic for equal column height.
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const [minRightColumnHeight, setMinRightColumnHeight] = useState<string | number>('auto');

  useEffect(() => {
    const calculateHeight = () => {
      if (leftColumnRef.current && window.innerWidth >= 1024) { // lg breakpoint
        setMinRightColumnHeight(leftColumnRef.current.offsetHeight);
      } else {
        setMinRightColumnHeight('auto');
      }
    };

    calculateHeight();
    window.addEventListener('resize', calculateHeight);
    return () => window.removeEventListener('resize', calculateHeight);
  }, []);

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-br from-teal-50 via-[#E0F7FA]/30 to-cyan-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 lg:items-stretch"> {/* lg:items-stretch for equal height columns */}
          {/* Left Column: Text Content */}
          <div ref={leftColumnRef} className="text-center lg:text-left flex flex-col justify-center">
            <div> {/* Inner div to control content stretching */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 tracking-tight leading-[1.1]">
                Tanzania&apos;s Modern {/* ' for apostrophe */}
                <br />
                Payment Processor
              </h1>
              <div className="mt-4 mb-6 lg:mb-8 flex justify-center lg:justify-start">
                <Image
                  src={lineImage}
                  alt="Decorative line"
                  width={300}
                  height={15}
                  priority
                  className='w-full max-w-[300px] md:max-w-[initial] md:w-2/3' // Constrain width on mobile, allow md:w-2/3
                />
              </div>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Move money with confidence. Tuma is a regulated,{' '}
                <span style={{ color: highlightGreen }}>cloud-native</span> payment
                processing platform built for Tanzania. Whether you&apos;re a
                business or an individual, Tuma enables{' '}
                <span style={{ color: highlightGreen }}>fast, secure, and seamless payments</span>{' '}
                directly from Tanzanian Visa or Mastercard holders to mobile
                wallets and bank accounts across the country.
              </p>

              <div className="mt-8 lg:mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
                <Link
                  href="/download-app"
                  className="inline-block whitespace-nowrap rounded-lg bg-[#65C895] px-8 py-3.5 text-base font-semibold text-white shadow-md hover:bg-[#58b886] transition-colors"
                >
                  Download App
                </Link>
                <Link
                  href="/get-started"
                  className="inline-block whitespace-nowrap rounded-lg border-2 border-slate-400 px-8 py-3.5 text-base font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              <ul className="mt-8 lg:mt-10 space-y-3 text-left max-w-md mx-auto lg:mx-0">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600">
                    <FaRegCheckCircle className="h-4 w-4 mr-2 flex-shrink-0" style={{ color: highlightGreen }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Image Collage */}
          <div
            ref={rightColumnRef}
            className="relative mt-12 lg:mt-0 flex items-center justify-center" // Parent centers the collage container
            style={{ minHeight: minRightColumnHeight }}
          >
            {/* This div is the main container for the collage visual elements */}
            <div className="relative w-[90%] sm:w-full max-w-md lg:max-w-lg h-[450px] sm:h-[500px] md:h-[550px] lg:h-full"> 
              
              {/* Green Background - This is the direct parent for the person image f */}
              <div className="absolute inset-0 bg-green-400/80 rounded-xl overflow-hidden"> 
                <svg className="absolute inset-0 w-full h-full text-green-500/30 opacity-50" fill="none" viewBox="0 0 200 200">
                  <path d="M0 50 Q 25 20, 50 50 T 100 50 T 150 50 T 200 50" stroke="currentColor" strokeWidth="2" />
                  <path d="M0 100 Q 25 70, 50 100 T 100 100 T 150 100 T 200 100" stroke="currentColor" strokeWidth="2" />
                  <path d="M0 150 Q 25 120, 50 150 T 100 150 T 150 150 T 200 150" stroke="currentColor" strokeWidth="2" />
                </svg>

                {/* The image will be contained within the green background */}
                <div className="absolute bottom-0 left-0 right-0 h-[90%] sm:h-[85%] mx-auto max-w-[80%]">
                  {/* The inner div for the image helps control its max width within its allocated height */}
                  <div className="relative w-full h-full">
                     <Image
                        src={personImage}
                        alt="Person using Tuma app"
                        layout="fill"
                        objectFit="contain" 
                        priority
                      />
                  </div>
                </div>
              </div>

              {/* Adjusted positioning a bit, may need further tweaking */}
              <div className="absolute z-10 top-[5%] -left-[10%] sm:top-[8%] sm:-left-[5%] bg-white p-2 md:p-3 rounded-xl shadow-md w-40 sm:w-48 flex items-center space-x-2">
               <div>
                 <p className="text-[9px] md:text-[12px] text-[#A9A7B6]">Enter amount</p>
                 <span className="text-[12px] md:text-[16px] font-semibold text-slate-800">Tsh 45,000</span>
               </div>
                <button className="bg-[#65C895] text-white text-[10px] md:text-[13px] px-2 py-1 rounded-md mt-1 self-end">
                    Send
                </button>
              </div>

              <div className="absolute z-10 bottom-[5%] -left-[10%] sm:bottom-[8%] sm:right-[8%] lg:right-[-5%] bg-white p-3 rounded-xl shadow-md w-40 sm:w-48">
                <p className="text-xs text-slate-500 mb-1">Total Income</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-slate-800">Tsh 94,500</span>
                  <HiTrendingUp className="h-5 w-5 text-green-500" />
                </div>
              </div>

              <div className="absolute z-10 top-[5%] right-[5%] sm:top-[8%] sm:right-[8%] lg:right-[-5%] bg-yellow-400 p-2 rounded-full shadow-md">
                <Image src={dbIcon} alt="Database icon" width={20} height={20} />
              </div>

              <div className="absolute z-10 top-[35%] left-[-5%] sm:top-[40%] sm:left-[-2%] lg:-left-[10%] bg-purple-600 p-2 rounded-lg shadow-md transform -rotate-12">
                <HiCheck className="h-4 w-4 text-white" />
              </div>5
              <div className="absolute z-10 -bottom-6 right-[15%]   w-32 sm:w-36 
              transform rotate-4 shadow-lg">
                <Image src={cardImage} alt="Credit card" width={180} height={113} className="rounded-lg" />
              </div>
            </div>
          </div>
        </div>
        <Payment/>

      </div>
    </section>
  );
};

export default Section;