import React, { useState } from 'react';

const Sidebar = ({isOpen,setIsOpen}) => {

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10">     
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-[100%]'
        }`}
      >
        <button
          className="p-2 text-gray-400 hover:text-white focus:outline-none absolute top-4 right-4"
          onClick={toggleSidebar}
        >
          {/* Close Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Sidebar Nav Items */}
        <nav className="mt-10 space-y-4">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Contact</a>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
