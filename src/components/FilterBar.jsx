import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

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
    'LEONARDO DA VINCI',
    'VINCENT VAN GOGH',
    'PABLO PICASSO',
    'MICHELANGELO',
    'REMBRANDT',
    'CLAUDE MONET',
    'SALVADOR DALÍ',
    'FRIDA KAHLO',
    'EDVARD MUNCH',
    'RAPHAEL',
    "GEORGIA O'KEEFFE",
    'JACKSON POLLOCK',
    'ANDY WARHOL',
    'HENRI MATISSE',
    'PAUL CÉZANNE',
    'EDGAR DEGAS',
    'GUSTAV KLIMT',
    'JOAN MIRÓ',
    'EUGÈNE DELACROIX',
    'MARC CHAGALL',
    'LE CORBUSIER',
    'JACKSON POLLOCK',
    'PABLO PICASSO',
    'CARAVAGGIO',
    'PIET MONDRIAN',
  ];

  const periodOptions = [
    '21ST CENTURY',
    '20TH CENTURY',
    '19TH CENTURY',
    '18TH CENTURY',
    '17TH CENTURY',
    '16TH CENTURY',
    '15TH CENTURY',
    '14TH CENTURY',
    '13TH CENTURY',
    '12TH CENTURY',
    '11TH CENTURY',
    '10TH CENTURY',
    '9TH CENTURY',
    '8TH CENTURY',
    '7TH CENTURY',
    '6TH CENTURY',
    '5TH CENTURY',
    '4TH CENTURY',
    '3RD CENTURY',
    '2ND CENTURY',
    '1ST CENTURY',
  ];

  const styleOptions = [
    'CHINESE',
    'JAPANESE',
    'AMERICAS',
    'EUROPEAN',
    'MODERNISM',
  ];

  const artworkOptions = [
    'BOOK',
    'PRINT',
    'VESSEL',
    'TEXTILE',
    'DRAWING',
    'PAINTING',
    'PHOTOGRAPHY',
  ];

  return (
    <div className="mr-12 flex w-1/4 flex-col">
      <h2 className="mb-4 text-2xl">FILTERS</h2>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('artists')}
          className="mb-3 mt-8 flex text-xl"
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
            {artistOptions.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.05 }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <label htmlFor={option} className="whitespace-nowrap ">
                    {option}
                  </label>
                  <input
                    className="accent-dark"
                    type="checkbox"
                    value={option}
                    checked={selectedValues.includes(option)}
                    onChange={handleCheckboxChange}
                    id={option}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('period')}
          className="mb-3 mt-8 flex text-xl"
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
            {periodOptions.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.05 }}
                className="mb-2 flex items-center justify-between"
              >
                <label htmlFor={option} className="whitespace-nowrap">
                  {option}
                </label>
                <input
                  className="accent-dark"
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                  id={option}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('style')}
          className="mb-3 mt-8 flex text-xl"
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
            {styleOptions.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.05 }}
                className="mb-2 flex items-center justify-between"
              >
                <label htmlFor={option} className="whitespace-nowrap">
                  {option}
                </label>
                <input
                  className="accent-dark"
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                  id={option}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <label
          onClick={() => handleToggleMenu('artworkType')}
          className="mb-3 mt-8 flex whitespace-nowrap text-xl"
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
            {artworkOptions.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: index * 0.05 }}
                className="mb-2 flex items-center justify-between"
              >
                <label htmlFor={option} className="whitespace-nowrap">
                  {option}
                </label>
                <input
                  className="accent-dark"
                  type="checkbox"
                  value={option}
                  checked={selectedValues.includes(option)}
                  onChange={handleCheckboxChange}
                  id={option}
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterBar;
