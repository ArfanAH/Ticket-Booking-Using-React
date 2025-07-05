import React from 'react'
import RootLayout from '../Layout/RootLayout'
import TopLayout from '../Layout/TopLayout'
import Busimg from '../assets/busimg.jpg';
import PassengerData from '../Components/PassengerData';

const CheckOut = () => {
  return (
    <div className='w-full space-y-2 md:space-y-6 pb-16'>
      <TopLayout
        bgImg={Busimg}
        title={
          <>
            <span className="text-blue-500 font-bold">Check OUt </span>
            Details{' '}
          </>
        }
      />

      {/* Root Layout */}
      <RootLayout className="space-y-2 lg:space-y-6 w-full pb-16">
        <div className='w-full grid grid-cols-7 items-start gap-44 relative'>

          {/* Passengers  details  */}

          <PassengerData/>

          {/* ticket report status  */}

        </div>

      </RootLayout>
    </div>
  )
}

export default CheckOut
