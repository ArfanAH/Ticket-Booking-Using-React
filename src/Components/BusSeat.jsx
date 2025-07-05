import React, { useEffect, useState } from 'react';
import { GiSteeringWheel } from 'react-icons/gi';
import busSeatData from '../Constants/BusSeatData';
import { MdOutlineChair } from 'react-icons/md';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BusSeat = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showError, setShowError] = useState(false);

  const handleSeatTap = (seatId) => {
    const selectedSeat = busSeatData.find((seat) => seat.id === seatId);
    if (selectedSeat.status === 'booked') {
      return;
    }
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seatId)) {
        return prevSelectedSeats.filter((seat) => seat !== seatId);
      } else {
        if (prevSelectedSeats.length >= 10) {
          setShowError(true);
          return prevSelectedSeats;
        } else {
          return [...prevSelectedSeats, seatId];
        }
      }
    });
  };

  useEffect(() => {
    if (showError) {
      toast.error("You can select a maximum of 10 seats", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Reset `showError` after the toast displays
      const timer = setTimeout(() => {
        setShowError(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showError]);

  const getSeatName = (seat) => {
    if (seat.status === 'booked') {
      return 'text-red-600 cursor-not-allowed';
    }
    if (selectedSeats.includes(seat.id)) {
      return 'text-blue-500 cursor-pointer';
    }
    return 'text-neutral-600 cursor-pointer';
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-5 gap-6 px-4 md:px-10">
      {/* Seat layout */}
      <div className="col-span-1 lg:col-span-3 w-full flex items-center justify-center shadow-sm rounded-xl p-4 border border-neutral-200">
        <div className="w-full space-y-6">
          <p className="text-neutral-700 font-md text-sm md:text-base text-center">
            Tap on the Available seats to Reserve
          </p>
          {/* Seat layout */}
          <div className="w-full flex items-stretch overflow-x-auto gap-x-1.5 md:overflow-visible">
            <div className="w-10 h-fit shrink-0">
              <GiSteeringWheel className="text-xl lg:text-3xl mt-1 lg:mt-7 text-blue-600 -rotate-90" />
            </div>
            {/* Seat rows */}
            <div className="flex flex-col items-center border-l-2 border-dashed border-neutral-400 pl-7">
              <div className="flex-1 space-y-2 md:space-y-4 lg:space-y-4">
                {[
                  [0, 9],
                  [9, 18],
                  [18, 19],
                  [19, 28],
                  [28, 37],
                ].map(([start, end], index) => (
                  <div
                    key={index}
                    className={`w-full h-auto grid ${
                      index === 2 ? 'grid-cols-12 gap-x-5' : 'grid-cols-9 '
                    }  justify-end`}
                  >
                    {busSeatData.slice(start, end).map((seat) => (
                      <div
                        key={seat.id}
                        className="flex items-center gap-x-0 "
                        onClick={() => handleSeatTap(seat.id)}
                      >
                        <h6 className="text-sm text-neutral-700 font-bold hidden md:block lg:block">
                        {seat.id}
                        </h6>
                        <MdOutlineChair
                          className={`text-base sm:text-lg md:text-xl lg:text-3xl -rotate-90 ${getSeatName(seat)}`}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Reservation info */}
          <div className="w-full flex flex-wrap items-center justify-center gap-6 border-t border-neutral-300 pt-5">
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-neutral-700 -rotate-90" />
              <p className="text-sm text-neutral-600 font-medium">Available</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-red-700 -rotate-90" />
              <p className="text-sm text-neutral-600 font-medium">Booked</p>
            </div>
            <div className="flex items-center gap-x-2">
              <MdOutlineChair className="text-xl text-blue-500 -rotate-90" />
              <p className="text-sm text-neutral-600 font-medium">Selected</p>
            </div>
            <div className="flex items-center gap-x-2">
              <RiMoneyDollarCircleFill className="text-xl text-blue-500" />
              <p className="text-sm text-neutral-600 font-medium">
                TK. 1200/<span className="text-xs">seat</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Seat selection action */}
      <div className="col-span-1 lg:col-span-2 w-full space-y-4 bg-neutral-50 rounded-xl py-4 px-6 border border-neutral-200 shadow-sm">
        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between gap-3">
            <h1 className="text-sm lg:text-lg text-neutral-700 font-medium">
              Your Destination
            </h1>
            <Link to={'/tickets'} className="text-xs text-blue-500 font-medium">
              Change Route
            </Link>
          </div>
          <div className="space-y-0.5 w-full">
            <div className="w-full flex items-center justify-between gap-x-5">
              <p className="text-sm text-neutral-600 font-normal">
                From <span className="text-xs">(Dhaka)</span>
              </p>
              <p className="text-sm text-neutral-600 font-normal">
                To <span className="text-xs">(Cox's Bazar)</span>
              </p>
            </div>
            <div className="w-full flex items-center justify-between gap-x-4">
              <h1 className="text-sm text-neutral-600 font-normal">
                Dhaka <span className="text-sm font-medium">(10:30 PM)</span>
              </h1>
              <div className="flex border-dashed border border-neutral-500" />
              <h1 className="text-sm text-neutral-600 font-normal">
                Cox's Bazar <span className="text-sm font-medium">(06:30 AM)</span>
              </h1>
            </div>
          </div>
        </div>

        <div className="w-full space-y-2">
          <div className="w-full flex items-center justify-between">
            <h1 className="text-sm lg:text-lg text-neutral-800 font-medium">
              Selected Seats
            </h1>
            <div className="bg-blue-600/20 rounded-lg py-0.5 px-1.5 text-xs text-black font-medium uppercase">
              Non Refundable
            </div>
          </div>
          {selectedSeats.length > 0 ? (
            <div className="w-full flex flex-wrap items-center gap-2">
              {selectedSeats.map((seatId) => (
                <div
                  key={seatId}
                  className="w-9 h-9 bg-neutral-300/80 rounded-lg flex items-center justify-center text-lg text-neutral-700 font-semibold text-base"
                >
                  {seatId}
                </div>
              ))}
            </div>
          ) : (
            <div className="w-full flex items-center gap-x-3">
              <p className="text-sm text-neutral-600 font-normal">
                No Seat Selected
              </p>
            </div>
          )}
        </div>

        <div className="w-full space-y-2">
          <h1 className="text-lg text-neutral-800 font-medium">Fare Details</h1>
          <div className="w-full flex items-center justify-between border-l-[1.5px] border-dashed border-neutral-500 pl-2">
            <h3 className="text-sm text-neutral-600 font-medium">Basic Fare:</h3>
            <p className="text-sm text-neutral-700 font-medium">TK. 1200</p>
          </div>

          <div className="flex items-center justify-between gap-x-4">
            <div className="flex gap-y-0.5 flex-col">
              <h3 className="text-base text-neutral-900 font-medium">
                Total Price:
              </h3>
              <span className="text-xs text-neutral-600 font-normal">
                (Including All Taxes)
              </span>
            </div>
            <p className="text-base text-blue-600 font-semibold">
                Tk.{' '}
                  {selectedSeats.length > 0
                    ? selectedSeats.reduce((total, seatId) => {
                  const seat = busSeatData.find((busSeat) => busSeat.id === seatId);
                  return total + (seat ? seat.price : 0);
                  }, 0)
                    : '0.00'}
            </p>
          </div>
        </div>

        <div className="w-full">
          <Link
            to="/tickets/checkout"
            className={`w-full inline-block ${
            selectedSeats.length === 0 ? 'opacity-50 pointer-events-none' : ''
            }`}>
              <button
                className="w-full py-1 md:py-3 md:px-4 text-white text-center text-base bg-blue-600 rounded-lg"
                disabled={selectedSeats.length === 0}>
                  Proceed To Checkout
              </button>
          </Link>
          {selectedSeats.length === 0 && (
            <small className="text-xs text-neutral-600 font-semibold ">
            Please select at least one seat to proceed
            </small>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default BusSeat;
