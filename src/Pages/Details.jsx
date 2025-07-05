import React from 'react'
import Busimg from '../assets/busimg.jpg';
import Bus from '../assets/bus.png';
import RootLayout from '../Layout/RootLayout'
import TopLayout from '../Layout/TopLayout'
import { Link } from 'react-router-dom';
import Warning from '../Components/Warning';
import BusSeat from '../Components/BusSeat';
import ToggleBtn from '../Components/ToggleBtn';

const Details = () =>
{
  const message = (
    <>
      One Inividual only can book 10 seats . If you want to book more than 10 seats then Please <Link to={"/support-team"} className='text-blue-700 font-medium'>Contct Out Support Team</Link>
    </>
  );
  return (
    <div className='w-full space-y-2 md:space-y-6 pb-16'>
      <TopLayout
        bgImg={Busimg}
        title={
          <>
            <span className="text-blue-500 font-bold">Bus </span>
            Details{' '}
          </>
        }
      />

      {/* Root Layout */}
      <RootLayout className="space-y-2 lg:space-y-6 w-full pb-16">
        {/* seat layout and selection action detail 
         */}

        <div className='w-full space-y-8 '>

          {/* warning message  */}
          <div className='flex items-center justify-center'>
            <Warning message={message} />
          </div>

          {/* seat layout  */}

          <BusSeat />

        </div>


        {/* Bus details */}
        <div className="w-full flex items-center justify-center flex-col gap-8 text-center px-4">
          <p className="text-sm md:text-base text-neutral-500 font-normal text-justify">
            This is just a sample Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque voluptates ex, possimus corrupti autem incidunt? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span className="block mt-2 text-md md:text-lg text-neutral-600 font-medium">
              Want to see more about the Bus?
            </span>
          </p>

          {/* Button */}
          <div className="w-full flex items-center justify-center gap-4 flex-col">
            <ToggleBtn buttonText={"See Bus Details"} buttonTextHidden={"Hide Bus Details"}>
              <div className="w-full space-y-8">

                {/* Reservation Policies */}
                <div className="w-full">
                  <div className="p-5 bg-neutral-100 border border-neutral-300 rounded-lg shadow-md">
                    <h3 className="text-lg md:text-xl font-semibold text-neutral-700 mb-3">Reservation Policies</h3>
                    <ul className="list-outside space-y-3 pl-6">
                      <li>Please note that tickets are non-refundable.</li>
                      <li>Passengers must arrive at the station 30 minutes prior to departure.</li>
                      <li>Seat reservations are subject to availability.</li>
                      <li>Contact support for any special requests.</li>
                    </ul>
                  </div>
                </div>

                {/* Bus Images */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  
                    <img
                      src={Bus}
                      alt=""
                      className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300 bg-neutral-200"
                    />
                    <img
                      src={Bus}
                      alt=""
                      className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300 bg-neutral-200"
                    />
                    <img
                      src={Bus}
                      alt=""
                      className="w-full aspect-video object-cover object-center rounded-xl border border-neutral-300 bg-neutral-200"
                    />
                  
                </div>
              </div>
            </ToggleBtn>
          </div>
        </div>




      </RootLayout>
    </div>
  )
}

export default Details
