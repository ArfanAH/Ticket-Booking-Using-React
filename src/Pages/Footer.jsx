import React from 'react';
import RootLayout from '../Layout/RootLayout';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="w-full h-auto bg-neutral-900 py-12">
      <RootLayout className="space-y-10">
        {/* Footer Content */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand and About */}
          <div className="col-span-2 space-y-8">
            <div className="space-y-3">
              <Link to="/" className="text-4xl text-blue-500 font-bold italic">
                Bus
              </Link>
              <p className="text-sm text-neutral-500 font-normal">
                Your reliable partner for comfortable and safe bus journeys. 
                Discover top routes, easy bookings, and exceptional services.
              </p>
            </div>
            {/* Social Links */}
            <div className="w-full flex items-center gap-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white  rounded-lg p-1.5 bg-neutral-600 hover:text-blue-500 text-xl transition duration-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-neutral-600  rounded-lg p-1.5 hover:text-pink-500  text-xl transition duration-300"
              >
                <FaInstagram />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-neutral-600  rounded-lg p-1.5 hover:text-blue-400  text-xl transition duration-300"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg text-neutral-300 font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <Link to="/" className="hover:text-blue-500 transition duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-500 transition duration-300">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blue-500 transition duration-300">
                  Reserve Your Ticket
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-500 transition duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-5">
            <h3 className="text-lg text-neutral-300 font-semibold">Support</h3>
            <ul className="space-y-3 text-sm text-neutral-500">
              <li>
                <Link to="/" className="hover:text-blue-500 transition duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/" className="hover:text-blue-500 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/Terms & Conditions" className="hover:text-blue-500 transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-neutral-800/50"></div>

        {/* Copyright */}
        <div className="w-full flex items-center justify-center">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Arfan. All rights reserved.
          </p>
        </div>
      </RootLayout>
    </div>
  );
};

export default Footer;
