import React from 'react';
import RootLayout from '../Layout/RootLayout';
import ServicesCard from '../Components/ServicesCard';
import { RiRefund2Line, RiSecurePaymentLine } from 'react-icons/ri';
import { PiHeadsetFill } from 'react-icons/pi';


const Services = () =>
{
  
  return (
    <div>
      <RootLayout className="space-y-12">

        {/* Tagline */}
        <div className="w-full flex items-center justify-center text-center">
          <h1 className="text-2xl sm:text-3xl text-neutral-800 font-bold">
            Our <span className="text-blue-500">Services</span>
          </h1>
        </div>

        {/* Services Cards */}
        
          <div
          className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServicesCard
            icon={RiSecurePaymentLine}
            title="Secure Payment"
            desc={
              <>
                We ensure that your payment is{' '}
                <span className="text-blue-500 font-bold">Safe</span> and{' '}
                <span className="text-blue-500 font-bold">Secure</span>.
              </>
            }
          />
          <ServicesCard
            icon={RiRefund2Line}
            title="Refund Policy"
            desc={
              <>
                Offer options to purchase{' '}
                <span className="text-blue-500 font-bold">Refundble</span> tickets with{' '}
                <span className="text-blue-500 font-bold">Terms</span>.
              </>
            }
          />
          <ServicesCard
            icon={PiHeadsetFill}
            title="24/7 Support"
            desc={
              <>
                Get {' '}
                <span className="text-blue-500 font-bold">Aassistance</span> and{' '}
                <span className="text-blue-500 font-bold">Support 24/7</span>.
              </>
            }
          />
          </div>
          

      </RootLayout>
    </div>
  );
};

export default Services;
