import React from 'react';
import  Payment from './components/Payment'
import Section from './components/Section'; 
import Mission from './components/Mission'; 
import HowItWorks from './components/HowItWorks'; 
import WhyChooseUs from './components/WhyChooseUs';
import Merchant from './components/Merchant';
import Support from './components/Support';
import Time from './components/Response';
import Response from './components/RegulatoryLicensing';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';







const Home: React.FC = () => {
  return (
    <div>
        <div className='bg-gradient-to-br from-teal-50 via-[#E0F7FA]/30 to-cyan-50'>
        {/*<NavBar />*/}
        <Section/>
        <Payment/>

        </div>
        <div className='bg-teal-50 py-14'>
        <Mission/>
        </div>
        <div className='bg-gradient-to-bl from-cyan-50 via-[#E0F7FA]/50 to-teal-50'>
        <HowItWorks/>
        <WhyChooseUs/>
        <Merchant/>
        </div>
        <Support/>
        <Time/>
        <Response/>
        <div className='bg-[#101727]'>
        <ContactUs/>
        <Footer/>

        </div>
       



    
    </div>
  );
};

export default Home;
