import React from 'react';

const TopSearchCard = ({ routeFrom, routeTO, duration, price, acType, travelClass }) => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg border border-neutral-300 hover:shadow-lg transition-all duration-300 ease-in-out">
      <div className="space-y-4">
        {/* From and To Section */}
        <div>
          <div className="flex flex-wrap items-center justify-between mb-3">
            <p className="text-xs text-neutral-400 font-normal">From</p>
            <p className="text-xs text-neutral-400 font-normal">To</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-x-4">
            <h1 className="text-xl sm:text-2xl text-neutral-600 font-semibold">{routeFrom}</h1>

            {/* Duration */}
            <div className="flex-1 border-dashed border border-black relative my-3 sm:my-0">
              <p className="absolute w-[90px] px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-700 border border-black">
                {duration}
              </p>
            </div>

            <h1 className="text-xl sm:text-2xl text-neutral-600 font-semibold">{routeTO}</h1>
          </div>
        </div>

        {/* Travel Details */}
        <div className="flex items-center justify-between text-sm text-neutral-500">
          <p>
            <span className="font-semibold">Type:</span> {acType}
          </p>
          <p>
            <span className="font-semibold">Class:</span> {travelClass}
          </p>
        </div>

        {/* Price and Reserve Button */}
        <div className="w-full flex justify-between items-center">
          <h1 className="text-lg sm:text-xl text-blue-500 font-semibold">Tk {price}</h1>
          <button className="w-fit px-5 py-1.5 h-full bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
            Reserve Seat
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSearchCard;
