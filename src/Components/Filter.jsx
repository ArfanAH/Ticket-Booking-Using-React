import React, { useState } from 'react'
import PriceRangeSlider from './PriceRangeSlider';

const Filter = ({ className }) =>
{
  const [selectedType, setSelectedType] = useState('Economy');
  const [selectedService, setSelectedService] = useState('AC');
  const [rangeVlaues, setRangeValues] = useState({
    min: 0,
    max: 100,
  });
  const handleRangeChange = (values) =>
  {
    setRangeValues({
      values
    });
   };
  return (
    <div className={`w-full ${className}`}>
      

      {/* price filter */}
      <div className='w-full border border-neutral-300 rounded-xl p-4 space-y-1'>
        <h1 className='text-lg text-neutral-900 font-medium'>Price</h1>
        
        <PriceRangeSlider
          min={800}
          max={3000}
          onChange={handleRangeChange}
        />
      </div>

      {/* bus type filter  */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
      <h1 className="text-lg text-neutral-900 font-medium">Bus Types</h1>
      <div className="space-y-2.5">
        <div className="w-full flex items-center gap-4">
          {/* Business Type */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="busType"
              value="Business"
              checked={selectedType === 'Business'}
              onChange={() => setSelectedType('Business')}
              className="w-4 h-4 border-neutral-400 "
            />
            <span className="text-sm text-neutral-700">Business</span>
          </label>

          {/* Economy Type */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="busType"
              value="Economy"
              checked={selectedType === 'Economy'}
              onChange={() => setSelectedType('Economy')}
              className="w-4 h-4 border-neutral-400"
            />
            <span className="text-sm text-neutral-700">Economy</span>
          </label>
        </div>

        {/* Selected Type Display */}
        <div>
          <p className="text-sm text-neutral-600">
            Selected: <span className="font-medium text-neutral-800">{selectedType}</span>
          </p>
        </div>
      </div>
    </div>

      {/* amenities filter  */}
      <div className="w-full border border-neutral-300 rounded-xl p-4 space-y-3">
      <h1 className="text-lg text-neutral-900 font-medium">Service Type</h1>
      <div className="space-y-2.5">
        <div className="w-full flex items-center gap-4">
          {/* AC Service */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="serviceType"
              value="AC"
              checked={selectedService === 'AC'}
              onChange={() => setSelectedService('AC')}
              className="w-4 h-4 border-neutral-400 "
            />
            <span className="text-sm text-neutral-700">AC</span>
          </label>

          {/* Non-AC Service */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="serviceType"
              value="Non-AC"
              checked={selectedService === 'Non-AC'}
              onChange={() => setSelectedService('Non-AC')}
              className="w-4 h-4 border-neutral-400 "
            />
            <span className="text-sm text-neutral-700">Non-AC</span>
          </label>
        </div>

        {/* Selected Service Display */}
        <div>
          <p className="text-sm text-neutral-600">
            Selected: <span className="font-medium text-neutral-800">{selectedService}</span>
          </p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Filter
