import React, { useEffect, useRef, useState } from 'react'

const ToggleBtn = ({ buttonText, buttonTextHidden, children }) =>
{
  const [isVisible, setisVisible] = useState(true);
  const toggleRef = useRef(null);

  const toggleVisibility = () =>
  {
    setisVisible(!isVisible);
  }

  const hadleOutSies = (e) =>
  {
    if (toggleRef.current && !toggleRef.current.contains(e.target))
    {
      setisVisible(false);
    }
  }

  useEffect(() =>
  {
    document.addEventListener('mousedown', hadleOutSies);

    return () =>
    {
      document.removeEventListener('mousedown', hadleOutSies);
    }
  }, [])

  return (
    <div className='w-full h-auto' ref={toggleRef}>
      <button
        onClick={toggleVisibility}
        className={`w-fit px-4 py-2 border-2 ${isVisible ? "bg-blue-500 text-neutral-50" : "bg-transparent text-blue-500 "} border-blue-500 rounded-lg transition-all duration-300`}>

        {isVisible ? buttonText : buttonTextHidden}


      </button>

      {!isVisible && (
        <div className='mt-10 p-4 bg-neutral-50 border border-neutral-300 rounded-xl shadow-sm'>
          {children}
        </div>
      )}

    </div>
  )
}

export default ToggleBtn
