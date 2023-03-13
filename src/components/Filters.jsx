import React from 'react';
import InputIcon from '../utils/InputIcon';

const Filters = () => {
  return (
    <div className="flex flex-col gap-4 py-8 sm:py-9 sm:flex-row sm:justify-between">
      <div className="relative w-full sm:w-2/5">
        <InputIcon search />
        <input
          type="text"
          className="bg-white  text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search for a country..."
          required
        />
      </div>
      <div className="relative w-3/4 sm:w-1/5">
        <select className="appearance-none w-full bg-white text-gray-900 text-sm rounded-sm block p-4 dark:bg-gray-700 dark:text-gray-300 cursor-pointer">
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
