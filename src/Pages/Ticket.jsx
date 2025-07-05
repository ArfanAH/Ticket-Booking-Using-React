import React, { useState } from 'react';
import TopLayout from '../Layout/TopLayout';
import Busimg from '../assets/busimg.jpg';
import RootLayout from '../Layout/RootLayout';
import { motion } from 'framer-motion';
import Search from '../Components/Search';
import Filter from '../Components/Filter';
import { AiOutlineFilter } from 'react-icons/ai';
import SearchResult from '../Components/SearchResult';

const Ticket = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="w-full space-y-12 pb-16">
      {/* Top Layout */}
      <TopLayout
        bgImg={Busimg}
        title={
          <>
            Reserve Your{' '}
            <span className="text-blue-500 font-bold">Ticket</span>
          </>
        }
      />

      {/* Root Layout */}
      <RootLayout className="space-y-2 lg:space-y-12 relative">
        {/* Search Section */}
        <div className="space-y-5 w-full bg-neutral-50 flex py-4 items-center justify-center flex-col sticky top-0 z-30">
          <motion.h1
            initial={{ opacity: 0, y: -800 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -800 }}
            transition={{ duration: 1.35, ease: 'easeOut' }}
            className="text-1xl md:text-3xl font-semibold text-neutral-700"
          >
            Want to Change the <span className="text-blue-500 font-bold">Route</span>?
          </motion.h1>

          {/* Search Component */}
          <Search />
          
        </div>

        {/* Tickets and Filter Section */}
        <div className="w-full h-auto grid grid-cols-4 gap-8 lg:gap-16 relative">
          {/* Filter Section (Desktop) */}
          <div className="col-span-1 hidden lg:block">
            <div className='flex flex-row gap-2 m-2'>

              <AiOutlineFilter className="text-2xl font-semibold text-purple-500" />
              <span className="text-md font-semibold">Filter</span>
            </div>
              <Filter className="space-y-4" />
          </div>

          {/* Filter Button for Mobile */}
          <div className="lg:hidden absolute top-4 right-4 z-1 ">
            <button
              className="px-4 py-2 bg-purple-300 text-black rounded-lg shadow-md "
              onClick={() => setIsFilterOpen(true)}
            >
              <AiOutlineFilter className="text-2xl font-semibold" />
            </button>
          </div>

          {/* Mobile Filter Drawer */}
          {isFilterOpen && (
            <>
              {/* Background Overlay */}
              <div
                className="fixed inset-0 bg-black bg-opacity-25 z-40"
                onClick={() => setIsFilterOpen(false)}
              ></div>

              {/* Drawer */}
              <div className="fixed top-0 right-0 w-[280px] h-full bg-white shadow-lg z-50 p-4 overflow-y-auto">
                <div className="flex justify-between items-center pb-4 border-b">
                  <h2 className="text-lg font-semibold text-neutral-900">Filters</h2>
                  <button
                    onClick={() => setIsFilterOpen(false)}
                    className="text-red-500 font-medium"
                  >
                    Close
                  </button>
                </div>
                <Filter className="space-y-4" />
              </div>
            </>
          )}

          {/* Search Tickets Section */}
          <div className="col-span-4 lg:col-span-3 w-full">
            <SearchResult />
          </div>
        </div>
      </RootLayout>
    </div>
  );
};

export default Ticket;
