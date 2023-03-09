import React from 'react';

const Country = ({ country }) => {
  const { name, population, region, capital, flag } = country;
  return (
    <div className=" bg-white dark:bg-gray-700">
      <img src={flag} alt={name} className=" w-full h-40" />
      <div className="px-4 py-4">
        <h3 className=" text-xl font-bold">{name}</h3>
        <p>
          <span className="font-bold">Population:</span> {population}
        </p>
        <p>
          <span className="font-bold">Region:</span> {region}
        </p>
        <p>
          <span className="font-bold">Capital:</span> {capital}
        </p>
      </div>
    </div>
  );
};

export default Country;
