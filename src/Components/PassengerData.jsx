import React from 'react'

const PassengerData = () => {
  return (
    <div className='w-full col-span-4 py-4 space-y-4'>
      <h1 className='text-xl text-neutral-800 font-semibold'>

      </h1>
      <div className='space-y-7'>
        <div className='w-full space-y-2'>
          <label htmlFor="fullname" className='text-sm text-neutral-600 font-medium'>Full Name</label>
          <input type="text" placeholder='e.g Arfan Ahmed' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-700 font-normal placeholder:text-neutral-500' />
        </div>
        <div className='w-full space-y-2'>
          <label htmlFor="email" className='text-sm text-neutral-600 font-medium'>Email</label>
          <input type="email" placeholder='e.g arfan@gmail.com' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-700 font-normal placeholder:text-neutral-500' />
        </div>
        <div className='w-full space-y-2'>
          <label htmlFor="phone" className='text-sm text-neutral-600 font-medium'>Phone</label>
          <input type="number" placeholder='e.g 0125642358' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-700 font-normal placeholder:text-neutral-500' />
        </div>
        <div className='w-full space-y-2'>
          <label htmlFor="alterphone" className='text-sm text-neutral-600 font-medium'>Alternative Phone</label>
          <input type="number" placeholder='e.g 0125642358' className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-700 font-normal placeholder:text-neutral-500' />
        </div>
        <div className='w-full space-y-2'>
          <label className='text-sm text-neutral-600 font-medium'>Pickup Point</label>
          
          <select className='w-full h-14 px-4 bg-neutral-100/40 focus:bg-neutral-100/70 border border-neutral-400/50 rounded-xl focus:outline-none focus:border-neutral-400 text-base text-neutral-700 font-normal placeholder:text-neutral-500'>
            <option selected disabled>
              Choose Your Nearest Pickup Point
            </option>
            <option value="Sayedabad">Sayedabad</option>
            <option value="Arambag">Arambag</option>
            <option value="Komolapur">Komolapur</option>
            <option value="Fakirapul">Fakirapul</option>
            <option value="Gabtoli">Gabtoli</option>
            <option value="Mothijhil">Mothijhil</option>

          </select>

        </div>

      </div>

      {/* payment Method  */}
      
    </div>
  )
}

export default PassengerData
