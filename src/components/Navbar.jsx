import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div className=" bg-white w-full h-16 flex justify-between items-center px-14 dark:bg-gray-700">
      <h3 className=" text-2xl font-bold dark:text-white">
        Where in the world?
      </h3>
      <p onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <span className="mode dark:text-white">
            <BsSun /> Light Mode
          </span>
        ) : (
          <span className="mode">
            <BsMoon /> Dark Mode
          </span>
        )}
      </p>
    </div>
  );
};

export default Navbar;
