import React from 'react';
import InputIcon from '../utils/InputIcon';

const Filters = () => {
  return (
    <div className="flex justify-between py-8">
      <div className="relative w-1/3">
        <InputIcon search />
        <input
          type="text"
          className="bg-white  text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-3  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for a country..."
          required
        />
      </div>
      <div className="relative w-1/6">
        <select className="appearance-none bg-white text-gray-900 text-sm rounded-sm block w-full p-3 dark:bg-gray-700 cursor-pointer">
          <option defaultValue hidden>
            {' '}
            Filter by region{' '}
          </option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="europe">Europe</option>
          <option value="america">America</option>
          <option value="oceania">Oceania</option>
        </select>
        <InputIcon />
      </div>
    </div>
  );
};

export default Filters;
