import React from 'react'
import TicketCard from './TicketCard'
import { FaBusAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GrRefresh } from 'react-icons/gr';


const SearchResult = () => {
  return (
    <div className='w-full col-span-3 space-y-10 pt-11'>
      <div className='space-y-6 mt-4'>
        <TicketCard
          icon={FaBusAlt}
          busName="Green Line Express"
          routeFrom="Dhaka"
          routeTo="Chattogram"
          acType="AC"
          arraivalTime="10:30 PM"
          travelClass="Business"
          price={1200}
          availableSeats={10}
        
        />
        <TicketCard
          icon={FaBusAlt}
          busName="Green Line Express"
          routeFrom="Dhaka"
          routeTo="Chattogram"
          acType="AC"
          arraivalTime="12:00 PM"
          travelClass="Business"
          price={1200}
          availableSeats={10}
        
        />
        <TicketCard
          icon={FaBusAlt}
          busName="Green Line Express"
          routeFrom="Dhaka"
          routeTo="Chattogram"
          acType="AC"
          arraivalTime="11:30 PM"
          travelClass="Business"
          price={1200}
          availableSeats={10}
        
        />

      </div>
      <div className='w-full flex items-center justify-center'>
        <button className="w-fit px-4 py-1.5 text-white bg-blue-500 rounded-xl sm:w-auto hover:bg-blue-600 transition-all ease-in-out duration-200 flex items-center gap-2">
          <GrRefresh />
          <span>Load More</span>
          </button>
      </div>
      
    </div>
  )
}

export default SearchResult
