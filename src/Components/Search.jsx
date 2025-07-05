import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TbArrowsExchange } from 'react-icons/tb';
import { FaMapMarkedAlt, FaSearch } from 'react-icons/fa';

const Search = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [date, setDate] = useState('');

  const swapLocations = () => {
    const temp = fromLocation;
    setFromLocation(toLocation);
    setToLocation(temp);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -800 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -800 }}
      transition={{ duration: 1.5, ease: 'easeOut' }}
      className="w-full bg-neutral-50/20 border-2 border-neutral-300 shadow-lg rounded-xl p-5 max-w-6xl mx-auto"
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-5 flex-wrap">
        {/* From and To input section */}
        <div className="w-[60%] lg:w-[60%] flex flex-col lg:flex-row items-center gap-5 relative">
          {/* From */}
          <div className="flex-1 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 flex items-center gap-3">
            <input
              type="text"
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="From..."
              className="flex-1 w-[130px] h-full p-2 border-none bg-transparent focus:outline-none placeholder:text-neutral-400"
            />
            <div className="w-5 h-5 text-neutral-400 flex-shrink-0">
              <FaMapMarkedAlt className="w-full h-full" />
            </div>
          </div>

          {/* To */}
          <div className="flex-1 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 flex items-center gap-3">
            <input
              type="text"
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="To..."
              className="flex-1 w-[130px] h-full p-2 border-none bg-transparent focus:outline-none placeholder:text-neutral-400"
            />
            <div className="w-5 h-5 text-neutral-400 flex-shrink-0">
              <FaMapMarkedAlt className="w-full h-full" />
            </div>
          </div>

          {/* Swap Button */}
          <button
            onClick={swapLocations}
            className="absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center bg-blue-500 hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            <TbArrowsExchange className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Date and Search Button Section */}
        <div className="w-full lg:flex-1 flex flex-col sm:flex-row items-center gap-5">
          {/* Date */}
          <div className="w-full sm:flex-1 h-14 border border-neutral-300 bg-white/70 text-base text-neutral-700 font-medium px-5 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 flex items-center">
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="flex-1 h-full border-none bg-transparent focus:outline-none placeholder:text-neutral-400"
            />
          </div>

          {/* Search Button */}
          <button className="w-full sm:w-fit px-5 h-14 bg-blue-500 hover:bg-blue-700 border-2 rounded-xl text-base font-medium text-white flex items-center justify-center gap-x-2 transition-all duration-300">
            <FaSearch />
            Search
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Search;
