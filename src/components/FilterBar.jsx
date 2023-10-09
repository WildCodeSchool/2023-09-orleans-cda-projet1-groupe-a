import React, { useState } from 'react';

const FilterBar = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);

  const handleCheckboxChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((item) => item !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updatedFilters);
  };

  const artistOptions = ['Pablo Picasso', 'Andy Warhol', 'Frida Kahlo'];
  const periodOptions = [
    'Ya pas longtemps',
    'Ca commence à dater',
    'A l`ancienne',
  ];
  const styleOptions = ['Beau', 'Moche', 'Pas ouf'];
  const artworkOptions = ['Option 1', 'Option 2', 'Option 3'];

  return (
    <div className="flex flex-col w-1/4 p-4 bg-light text-center">
      <h2 className="text-xl mb-4">FILTERS</h2>

      <div className="mb-4">
        <label className="block mb-1 font-bold mt-8">ARTISTS</label>
        {artistOptions.map((option) => (
          <div
            key={option}
            className="flex items-center mb-2 justify-between px-12"
          >
            <label htmlFor={option}>{option}</label>
            <input
              className="self-end"
              type="checkbox"
              id={option}
              checked={selectedFilters.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-bold">PERIOD</label>
        {periodOptions.map((option) => (
          <div
            key={option}
            className="flex items-center mb-2 justify-between px-12"
          >
            <label htmlFor={option}>{option}</label>
            <input
              type="checkbox"
              id={option}
              checked={selectedFilters.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
          </div>
        ))}
      </div>

      <div className="mb-4">
        <label className="block mb-1 font-bold">STYLE</label>
        {styleOptions.map((option) => (
          <div
            key={option}
            className="flex items-center mb-2 justify-between px-12"
          >
            <label htmlFor={option}>{option}</label>
            <input
              type="checkbox"
              id={option}
              checked={selectedFilters.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
          </div>
        ))}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-bold">ARTWORK</label>
        {artworkOptions.map((option) => (
          <div
            key={option}
            className="flex items-center mb-2 justify-between px-12"
          >
            <label htmlFor={option}>{option}</label>
            <input
              type="checkbox"
              id={option}
              checked={selectedFilters.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
