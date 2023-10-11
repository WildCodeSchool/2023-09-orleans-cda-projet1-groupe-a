import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const FilterBar = ({ onFilterChange }) => {
  const [openMenus, setOpenMenus] = useState([]);
  const [selectedValues, setSelectedValues] = useState([]);

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedValues((prevSelectedValues) => {
      if (prevSelectedValues.includes(value)) {
        const updatedValues = prevSelectedValues.filter(
          (item) => item !== value,
        );
        onFilterChange(updatedValues);
        return updatedValues;
      } else {
        const updatedValues = [...prevSelectedValues, value];
        onFilterChange(updatedValues);
        return updatedValues;
      }
    });
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
    'PABLO PICASSO',
    'ANDY WARHOL',
    'FRIDA KAHLO',
    'UTAGAWA HIROSHIGE',
    'JAMES MCNEIL WHISTLER',
    'PAUL GAUGUIN',
    'KERRY JAMES MARSHALL',
  ];

  const periodOptions = [
    'YA PAS LONGTEMPS',
    'CA COMMENCE À DATER',
    "À L'ANCIENNE",
  ];

  const styleOptions = [
    'JAPANESE',
    '21ST CENTURY',
    '19TH CENTURY',
    '20TH CENTURY',
    'CHINESE',
    'MODERNISM',
    'ARTS OF THE AMERICAS',
    'AMERICAS',
  ];

  const artworkOptions = [
    'PRINT',
    'PHOTOGRAPH',
    'DRAWING AND WATERCOLOR',
    'TEXTILE',
    'PAINTING',
    'ARCHITECTURAL DRAWING',
    'BOOK',
    'VESSEL',
  ];

  return (
    <div className="mr-12 flex w-1/4 flex-col p-4">
      <h2 className="mb-4 text-2xl">FILTERS</h2>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('artists')}
          className="mb-3 mt-8 flex text-xl font-bold"
        >
          ARTISTS
          {isMenuOpen('artists') ? (
            <ChevronDown className="ml-4 self-end" />
          ) : (
            <ChevronRight className="ml-4 self-end" />
          )}
        </label>

        {isMenuOpen('artists') && (
          <div className="menu">
            {artistOptions.map((option) => (
              <div
                key={option}
                className="mb-2 flex items-center justify-between"
              >
                <label htmlFor={option} className="whitespace-nowrap">
                  {option}
                </label>
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
          className="mb-3 mt-8 flex text-xl font-bold"
        >
          PERIOD
          {isMenuOpen('period') ? (
            <ChevronDown className="ml-4 self-end" />
          ) : (
            <ChevronRight className="ml-4 self-end" />
          )}
        </label>
        {isMenuOpen('period') && (
          <div className="menu">
            {periodOptions.map((option) => (
              <div
                key={option}
                className="mb-2 flex items-center justify-between"
              >
                <label htmlFor={option} className="whitespace-nowrap">
                  {option}
                </label>
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
          className="mb-3 mt-8 flex text-xl font-bold"
        >
          STYLE
          {isMenuOpen('style') ? (
            <ChevronDown className="ml-4 self-end" />
          ) : (
            <ChevronRight className="ml-4 self-end" />
          )}
        </label>
        {isMenuOpen('style') && (
          <div className="menu">
            {styleOptions.map((option) => (
              <div
                key={option}
                className="mb-2 flex items-center justify-between"
              >
                <label htmlFor={option} className="whitespace-nowrap">
                  {option}
                </label>
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
          className="mb-3 mt-8 flex whitespace-nowrap text-xl font-bold"
        >
          ARTWORK TYPE
          {isMenuOpen('artworkType') ? (
            <ChevronDown className="ml-4 self-end" />
          ) : (
            <ChevronRight className="ml-4 self-end" />
          )}
        </label>
        {isMenuOpen('artworkType') && (
          <div className="menu">
            {artworkOptions.map((option) => (
              <div
                key={option}
                className="mb-2 flex items-center justify-between"
              >
                <label htmlFor={option} className="whitespace-nowrap">
                  {option}
                </label>
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
