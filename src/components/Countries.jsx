import { useState } from 'react';
import Country from './Country';
import Filters from './Filters';
import countriesData from '../database/data.json';

const Countries = () => {
  const [filteredCountries, setFilteredCountries] = useState(countriesData);
  return (
    <div className=" bg-slate-100 px-5 sm:px-14 dark:bg-gray-800">
      <Filters
        countries={countriesData}
        setFilteredCountries={setFilteredCountries}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16">
        {filteredCountries.map((country) => (
          <Country key={country.name} country={country} />
        ))}
      </div>
    </div>
  );
};

export default Countries;
