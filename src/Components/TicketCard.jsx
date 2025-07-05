import React from 'react';
import { Link } from 'react-router-dom';

const TicketCard = ({
  icon: Icon,
  busName,
  routeFrom,
  routeTo,
  acType,
  travelClass,
  price,
  arraivalTime,
  availableSeats,
}) => {
  return (
    <div className="w-[220px] md:w-full lg:w-full p-4 bg-white shadow-md rounded-lg border border-neutral-300 hover:shadow-lg transition-all duration-300 ease-in-out">
      <div className="space-y-4">
        {/* Bus Name and Icon Section */}
        <div className="flex items-center gap-3">
          {Icon && <Icon className="w-6 h-6 text-blue-500 sm:w-8 sm:h-8" />}
          <h1 className="text-base font-semibold text-neutral-700 sm:text-lg">{busName}</h1>
        </div>

        {/* From and To Section */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs text-neutral-400 font-normal">From</p>
            <p className="text-xs text-neutral-400 font-normal">To</p>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <h1 className="text-md font-semibold text-neutral-600 sm:text-lg">{routeFrom}</h1>
            <div className="flex-1 border-dashed border border-black"></div>
            <h1 className="text-md font-semibold text-neutral-600 sm:text-lg">{routeTo}</h1>
          </div>
        </div>

        {/* Travel Details */}
        <div className="flex flex-col gap-1 text-sm text-neutral-500 sm:flex-row sm:justify-between sm:gap-2">
          <p>
            <span className="font-semibold">Type:</span> {acType}
          </p>
          <p>
            <span className="font-semibold">Arraival Time:</span> {arraivalTime}
          </p>
          <p>
            <span className="font-semibold">Class:</span> {travelClass}
          </p>
          <p>
            <span className="font-semibold">Seats Available:</span> {availableSeats}
          </p>
        </div>

        {/* Price and Reserve Button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <h1 className="text-base font-semibold text-blue-500 sm:text-lg">Tk {price}</h1>
          <Link to="/ticket-details/detail">
            <button className="w-full px-4 py-2 text-white bg-blue-500 rounded-md sm:w-auto hover:bg-blue-600">
            Reserve Seat
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
