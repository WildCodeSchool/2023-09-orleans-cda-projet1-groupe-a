import React, { useState } from 'react';

const FilterBar = ({ onFilterChange }) => {
  const [openMenus, setOpenMenus] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedValues((prevSelectedValues) => {
      if (prevSelectedValues.includes(value)) {
        return prevSelectedValues.filter((item) => item !== value);
      } else {
        return [...prevSelectedValues, value];
      }
    });
    onFilterChange(selectedValues);
  };

  const handleToggleMenu = (menu) => {
    setOpenMenus((prevOpenMenus) => {
      if (prevOpenMenus.includes(menu)) {
        return prevOpenMenus.filter((item) => item !== menu);
      } else {
        return [...prevOpenMenus, menu];
      }
    });
  };

  const isMenuOpen = (menu) => openMenus.includes(menu);

  const artistOptions = [
    'Pablo Picasso',
    'Andy Warhol',
    'Frida Kahlo',
    'Utagawa Hiroshige',
    'James McNeil Whistler',
    'Paul Gauguin',
    'Kerry James Marshall',
  ];
  const periodOptions = [
    'Ya pas longtemps',
    'Ca commence à dater',
    "A l'ancienne",
  ];
  const styleOptions = [
    'Japanese',
    '21st Century',
    '19th century',
    '20th Century',
    'Chinese',
    'Modernism',
    'Arts of the Americas',
    'Americas',
  ];
  const artworkOptions = [
    'Print',
    'Photograph',
    'Drawing and Watercolor',
    'Textile',
    'Painting',
    'Architectural Drawing',
    'Book',
    'Vessel',
  ];

  return (
    <div className="flex flex-col w-1/4 p-4 bg-light text-center">
      <h2 className="text-xl mb-4">FILTERS</h2>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('artists')}
          className="block mb-1 font-bold mt-8"
        >
          ARTISTS
        </label>
        {isMenuOpen('artists') && (
          <div className="menu">
            {artistOptions.map((option) => (
              <div
                key={option}
                className="flex items-center mb-2 justify-between px-12"
              >
                <label htmlFor={option}>{option}</label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                  id={option}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('period')}
          className="block mb-1 font-bold mt-8"
        >
          PERIOD
        </label>
        {isMenuOpen('period') && (
          <div className="menu">
            {periodOptions.map((option) => (
              <div
                key={option}
                className="flex items-center mb-2 justify-between px-12"
              >
                <label htmlFor={option}>{option}</label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                  id={option}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('style')}
          className="block mb-1 font-bold mt-8"
        >
          STYLE
        </label>
        {isMenuOpen('style') && (
          <div className="menu">
            {styleOptions.map((option) => (
              <div
                key={option}
                className="flex items-center mb-2 justify-between px-12"
              >
                <label htmlFor={option}>{option}</label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                  id={option}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('artworkType')}
          className="block mb-1 font-bold mt-8"
        >
          ARTWORK TYPE
        </label>
        {isMenuOpen('artworkType') && (
          <div className="menu">
            {artworkOptions.map((option) => (
              <div
                key={option}
                className="flex items-center mb-2 justify-between px-12"
              >
                <label htmlFor={option}>{option}</label>
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                  id={option}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
