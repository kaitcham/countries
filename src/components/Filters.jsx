import React from 'react';
import InputIcon from '../utils/InputIcon';

const Filters = ({ countries, setFilteredCountries }) => {
  const options = [
    { value: '', text: 'Filter by region' },
    { value: 'asia', text: 'Asia' },
    { value: 'africa', text: 'Africa' },
    { value: 'europe', text: 'Europe' },
    { value: 'america', text: 'America' },
    { value: 'oceania', text: 'Oceania' },
  ];

  const [search, setSearch] = React.useState('');
  const [region, setRegion] = React.useState();

  const handleFiltering = (e) => {
    setSearch(e.target.value);
  };

  const handleSelect = (e) => {
    setRegion(e.target.value);
  };

  React.useEffect(() => {
    const filteredCountries = countries.filter((country) => {
      if (region) {
        return (
          country.name.toLowerCase().includes(search.toLowerCase()) &&
          country.region.toLowerCase().includes(region.toLowerCase())
        );
      }
      return country.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredCountries(filteredCountries);
  }, [search, region]);

  return (
    <div className="flex flex-col gap-4 py-8 sm:py-9 sm:flex-row sm:justify-between">
      <div className="relative w-full sm:w-2/5">
        <InputIcon search />
        <input
          type="text"
          value={search}
          placeholder="Search for a country..."
          onChange={handleFiltering}
          className="bg-white  text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div className="relative w-3/4 sm:w-1/5 ">
        <select
          value={region}
          onChange={handleSelect}
          className="appearance-none w-full bg-white text-gray-900 text-sm rounded-sm block p-4 dark:bg-gray-700 dark:text-gray-300 cursor-pointer"
        >
          {options.map((option) => {
            if (!option.value) {
              return (
                <option key={option.value} defaultValue hidden>
                  {option.text}
                </option>
              );
            }
            return (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
        {!region ? <InputIcon select /> : <InputIcon setRegion={setRegion} />}
      </div>
    </div>
  );
};

export default Filters;
