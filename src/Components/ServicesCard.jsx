import React from 'react';

const ServicesCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className="w-full bg-neutral-200 hover:bg-neutral-100 rounded-xl p-7 flex flex-col items-center text-center cursor-pointer ease-in-out duration-200 shadow-lg hover:shadow-xl">

      <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
        <Icon className="w-8 h-8 text-blue-500" />
      </div>

      <h1 className="mt-4 text-xl md:text-2xl text-neutral-800 font-bold italic">
        {title}
      </h1>

      <p className="mt-2 text-sm text-neutral-700 font-normal leading-relaxed">
        {desc}
      </p>
      
    </div>
  );
};

export default ServicesCard;
