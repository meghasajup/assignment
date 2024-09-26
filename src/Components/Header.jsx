import React from 'react';
import { FaCircleQuestion } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";

export const Header = () => {
  return (
    <header className="w-full bg-gray-100 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">YASKAWA</span>
        </div>

        

        {/* Right Section with Profile and Options */}
        <div className="flex items-center space-x-6">
          <button className="py-2 px-4 text-sm font-medium hover:text-blue-600">
          <FaCircleQuestion />
          </button>
          <button className="py-2 px-4 text-sm font-medium hover:text-blue-600">
          <IoMdNotifications />
          </button>
          <img
            src="../assets/Emily Johnson.jpg"
            alt="Profile"
            className="h-8 w-8 rounded-full border border-gray-300"
          />
        </div>
      </div>
    </header>
  );
};
