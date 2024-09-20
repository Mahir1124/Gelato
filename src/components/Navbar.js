import React, { useState } from 'react';
import logo from '../data/gelato_logo_black.svg';
import cart from '../data/cart.svg';
import contact from '../data/contact.svg';
import INR from '../data/INR.svg';
import sign_in from '../data/sign-in.svg';
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(Array(7).fill(false)); // For 7 dropdowns
  
  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Toggle dropdown on hover
  const toggleDropdown = (index) => {
    setDropdownOpen(dropdownOpen.map((open, i) => (i === index ? !open : open)));
  };

  return (
    <header className=' z-10 fixed w-full '>
      {/* Upper Navbar */}
      <nav className=' bg-white p-4   '>
        <div className='container mx-auto flex justify-between items-center '>
          {/* Hamburger for small screens */}
          <div className="flex items-center md:hidden ml-4">
            <button onClick={toggleSidebar}>
              <FaBars size={24} className="text-black" />
            </button>
            <img src={logo} className=' md:flex ml-3' />
          </div>

          {/* Logo */}
          
          <img src={logo} className=' md:flex hidden ml-3'  />
          {/* Upper Navbar Links */}
          <div className='space-x-6  justify-center items-center text-lg flex '>
            <a className='text-black gap-1 bg-white hover:bg-gray-200 rounded-xl p-1.5  hidden md:flex'>
              <img src={contact} width={24} height={24} /> Contact us
            </a>
            <a className='text-black gap-1 bg-white hover:bg-gray-200 rounded-xl p-1.5 hidden md:flex'>
              <img src={INR} width={24} height={24} />IN/INR
            </a>
            <a className='text-black gap-1 bg-white hover:bg-gray-200 rounded-xl p-1.5 hidden md:flex'>
              <img src={cart} width={24} height={24} />Cart
            </a>
            <a className='text-black gap-1 bg-white hover:bg-gray-200 rounded-xl p-1.5 hidden md:flex'>
              <img src={sign_in} width={24} height={24} />Sign in
            </a>
            <a className='bg-black text-white px-4 py-2 rounded-3xl'>Sign up for free</a>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar with Dropdowns */}
      <nav className="  shadow-md hidden md:flex">
        <div className="container mx-auto flex justify-between items-center">
          <div className="w-full flex space-x-9 items-center justify-center border-b-2  p-5 border-t-2 border-gray-400  bg-white ">
            {['Products','Start selling ', 'Tools and apps', 'Pricing', 'Resources', 'Pro sellers', 'GelatoConnect'].map((item, index) => (
              <div key={index} className="relative group">
                <button
                  onMouseEnter={() => toggleDropdown(index)}
                  onMouseLeave={() => toggleDropdown(index)}
                  className="flex items-center text-black"
                >
                  {item} {dropdownOpen[index] ? <FaChevronUp className="ml-2" /> : <FaChevronDown className="ml-2" />}
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen[index] && (
                  <div
                    className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg py-2 z-20"
                    onMouseEnter={() => toggleDropdown(index)}
                    onMouseLeave={() => toggleDropdown(index)}
                  >
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Option 2</a>
                    <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-200">Option 3</a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Sidebar for Small Screens */}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}>
        <div className="flex justify-between items-center p-4 border-b">
          <img src={logo} className='h-8' />
          <button onClick={toggleSidebar}>
            <FaTimes size={24} className="text-black" />
          </button>
        </div>
        <div className="p-4 space-y-4">

        <div className=' flex flex-col gap-3 p-2 '> 
          <a className='text-black flex items-center gap-2 hover:bg-gray-400 p-1 rounded-lg' href="#"><img src={contact} width={24} height={24} /> Contact us</a>
          <a className='text-black flex items-center gap-2 hover:bg-gray-400 p-1 rounded-lg' href="#"><img src={INR} width={24} height={24} /> IN/INR</a>
          <a className='text-black flex items-center gap-2 hover:bg-gray-400 p-1 rounded-lg' href="#"><img src={cart} width={24} height={24} /> Cart</a>
          <a className='text-black flex items-center gap-2 hover:bg-gray-400 p-1 rounded-lg' href="#"><img src={sign_in} width={24} height={24} /> Sign in</a>
          </div>

          {/* Dropdowns for small screens */}
          {['Products', 'Start selling ', 'Tools and apps', 'Pricing', 'Resources', 'Pro sellers', 'GelatoConnect'].map((item, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center justify-between w-full text-left"
              >
                {item} {dropdownOpen[index] ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {dropdownOpen[index] && (
                <div className="mt-2 pl-4">
                  <a href="#" className="block py-2 text-sm">Option 1</a>
                  <a href="#" className="block py-2 text-sm">Option 2</a>
                  <a href="#" className="block py-2 text-sm">Option 3</a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
