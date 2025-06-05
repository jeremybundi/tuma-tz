// ContactUs.tsx
"use client"; // If you're using App Router and form state/handlers

import React, { useState, FormEvent } from 'react';
import Image, { StaticImageData } from 'next/image';

// --- IMPORTANT: Adjust these import paths ---
// Example: if your assets are in 'src/assets/icons/'
// import addressIcon from '@/assets/icons/address.svg';

import addressIcon from '../../../../public/svg/address.svg'; // Replace with actual path
import callIcon from '../../../../public/svg/call.svg';       // Replace with actual path
import mailIcon from '../../../../public/svg/mail.svg';         // Replace with actual path

interface ContactInfo {
  icon: StaticImageData;
  alt: string;
  title: string;
  details: string[];
}

const contactInfoItems: ContactInfo[] = [
  {
    icon: addressIcon,
    alt: 'Physical Address Icon',
    title: 'Physical Address',
    details: ['Iconic Spaces, 9th Floor, Tan House, Victoria, Dar Es Salaam'],
  },
  {
    icon: callIcon,
    alt: 'Phone Number Icon',
    title: 'Phone Number',
    details: ['+255 758-999-133', '+255 716-339-695'],
  },
  {
    icon: mailIcon,
    alt: 'Email Address Icon',
    title: 'Email Address',
    details: ['info@tuma.tz'],
  },
];

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call (REMOVE THIS and REPLACE with actual API call)
    await new Promise(resolve => setTimeout(resolve, 1500));
    const mockSuccess = Math.random() > 0.2; // 80% chance of success for demo

    // --- REPLACE WITH YOUR ACTUAL API SUBMISSION LOGIC ---
    // try {
    //   const response = await fetch('/api/contact', { // Your API endpoint
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ name, email, message }),
    //   });
    //   if (response.ok) {
    //     setSubmitStatus('success');
    //     setName('');
    //     setEmail('');
    //     setMessage('');
    //   } else {
    //     const errorData = await response.json();
    //     console.error('Submission error:', errorData);
    //     setSubmitStatus('error');
    //   }
    // } catch (error) {
    //   console.error('Network or submission error:', error);
    //   setSubmitStatus('error');
    // }
    // --- END OF ACTUAL API SUBMISSION LOGIC ---
    
    // Mock success/error based on simulation (REMOVE THIS)
    if (mockSuccess) {
        setSubmitStatus('success');
        setName('');
        setEmail('');
        setMessage('');
    } else {
        setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    // This component starts with the dark contact block
    <div className="bg-transparent py-12 md:py-20 px-4 md:px-0 "> {/* Example outer page BG */}
      <div className="container mx-auto  border-b border-gray-500 p-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          {/* Left Column: Contact Info */}
          <div className="text-white">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8 sm:mb-10">Head Office:</p>
            <div className="space-y-8">
              {contactInfoItems.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 bg-[#2D3748] p-3 rounded-full mr-4">
                    <Image src={item.icon} alt={item.alt} width={24} height={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-100 mb-0.5">{item.title}</h3>
                    {item.details.map((detail, i) => (
                      <p key={i} className="text-gray-400 text-sm sm:text-base leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className='bg-[#222938] p-4 md:p-8 rounded-lg'>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  required
                  autoComplete="name"
                  className="block w-full bg-white border-gray-300 rounded-lg shadow-sm py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#65C895] focus:border-[#65C895] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="block w-full bg-white border-gray-300 rounded-lg shadow-sm py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#65C895] focus:border-[#65C895] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What is your say ?"
                  required
                  className="block w-full bg-white border-gray-300 rounded-lg shadow-sm py-3 px-4 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#65C895] focus:border-[#65C895] sm:text-sm"
                />
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-[#65C895] hover:bg-[#58b886] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#1A202C] focus:ring-[#65C895] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {submitStatus && (
                 <div className="mt-4 text-center text-sm">
                    {submitStatus === 'success' && (
                        <p className="text-green-400">Message sent successfully! We&apos;ll get back to you soon.</p>
                    )}
                    {submitStatus === 'error' && (
                        <p className="text-red-400">Failed to send message. Please try again later or contact us directly.</p>
                    )}
                 </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;