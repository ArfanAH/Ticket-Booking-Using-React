import React, { useState } from 'react'
import { FaX } from 'react-icons/fa6';

const Warning = ({message}) =>
{
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () =>
  {
    setIsVisible(false);
  }

  if (!isVisible)
  {
    return null;
  }
  return (
    <div className='w-fit flex items-center justify-between p-2 md:p-4 text-sm text-black-600 bg-yellow-200 rounded-xl ' role='alert'>
      <span>{message }</span>
      <button 
        onClick={handleClose}
        aria-label='Close'
        className='ml-4 text-red-600 hover:text-red-700'>
        <FaX className='w-4 h-4'/>
      </button>
    </div>
  )
}

export default Warning
