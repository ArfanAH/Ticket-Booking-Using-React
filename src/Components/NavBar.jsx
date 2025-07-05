import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', link: '/' },
    { label: 'Services', link: '/services' },
    { label: 'Tickets', link: '/tickets' },
    { label: 'About', link: '/about' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > scrollPosition && currentScrollPos > 50)
      {
        setIsVisible(false)
      } else
      {
        setIsVisible(true)
      }
      setScrollPosition(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () =>
    {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollPosition]);


  const toggleMenu = () => setOpen(!open);

  return (
    <nav
      className={`w-full px-5 h-[8ch] fixed top-0 left-0 lg:px-24 md:px-16 sm:px-7 backdrop-blur-lg transition-transform duration-300 z-50 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${scrollPosition >50 ? "bg-neutral-200" : "bg-neutral-100/10"}`}
    >
      <div className="w-full h-full flex items-center justify-between">
        <Link to="/" className="text-4xl text-blue-500 font-bold italic">
          Bus
        </Link>

        <div
          className="w-fit md:hidden flex flex-col text-neutral-700 items-center justify-center cursor-pointer"
          onClick={toggleMenu}
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
        <div
          className={`${
            open ? 'block' : 'hidden'
          } md:flex absolute md:relative bg-white md:bg-transparent w-full  md:w-auto top-[8ch] left-0 md:top-0 md:left-auto flex-col md:flex-row items-center justify-center md:gap-16 gap-4 py-5 md:py-0 md:px-0 shadow-lg md:shadow-none`}
        >
          <ul className="list-none flex md:items-center items-center flex-wrap md:flex-row flex-col md:gap-8 gap-4 text-lg text-neutral-600 font-normal">
            {navItems.map((item, index) => (
              <li key={index}>
              <Link
                to={item.link}
                onClick={() => setOpen(false)}
                className="relative text-bold group text-black italic ease-in-out duration-200 hover:text-blue-700"
              >
                {item.label}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-600 group-hover:w-full"></span>
              </Link>
            </li>
            
            ))}
          </ul>
          <div className="flex items-center justify-center mt-4 md:mt-0">
            <button className="md:w-fit text-sm md:px-4 px-3 md:py-2 py-2.5 bg-blue-600 border rounded-lg text-white italic font-bold hover:bg-blue-900 hover:scale-105 transition-transform duration-100">
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
