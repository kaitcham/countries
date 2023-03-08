import React from 'react';
import { BsMoon } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className=" bg-white w-full h-16 flex justify-between items-center px-14">
      <h3 className=" text-2xl font-bold">Where in the world?</h3>
      <p className="mode">
        <span>
          <BsMoon />
        </span>
        Dark Mode
      </p>
    </div>
  );
};

export default Navbar;
