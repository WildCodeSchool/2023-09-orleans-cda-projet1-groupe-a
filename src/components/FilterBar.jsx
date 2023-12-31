import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  ARTIST_OPTIONS,
  PERIOD_OPTIONS,
  STYLE_OPTIONS,
  ARTWORK_OPTIONS,
} from '../data';

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

  return (
    <>
      <div className="mr-12 ms-3 flex-col sm:w-1/4 md:w-1/4 lg:mt-12 lg:w-1/4">
        <h2 className="mb-4 text-xl">FILTERS</h2>
        <div className="mb-4">
          <label
            onClick={() => handleToggleMenu('artists')}
            className="mb-3 mt-8 flex cursor-pointer text-lg"
          >
            ARTISTS
            {isMenuOpen('artists') ? (
              <ChevronDown className="ml-4 self-end" />
            ) : (
              <ChevronRight className="ml-4 self-end" />
            )}
          </label>

          {isMenuOpen('artists') && (
            <div>
              {ARTIST_OPTIONS.map((option, index) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: index * 0.05 }}
                >
                  <div className="mb-2 flex items-center justify-between gap-4">
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
            className="mb-3 mt-8 flex cursor-pointer text-lg"
          >
            PERIOD
            {isMenuOpen('period') ? (
              <ChevronDown className="ml-4 self-end" />
            ) : (
              <ChevronRight className="ml-4 self-end" />
            )}
          </label>
          {isMenuOpen('period') && (
            <div>
              {PERIOD_OPTIONS.map((option, index) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: index * 0.05 }}
                  className="mb-2 flex items-center justify-between gap-4"
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
            className="mb-3 mt-8 flex cursor-pointer text-lg"
          >
            STYLE
            {isMenuOpen('style') ? (
              <ChevronDown className="ml-4 self-end" />
            ) : (
              <ChevronRight className="ml-4 self-end" />
            )}
          </label>
          {isMenuOpen('style') && (
            <div>
              {STYLE_OPTIONS.map((option, index) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: index * 0.05 }}
                  className="mb-2 flex items-center justify-between gap-4"
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
            className="mb-3 mt-8 flex cursor-pointer whitespace-nowrap text-lg"
          >
            ARTWORK TYPE
            {isMenuOpen('artworkType') ? (
              <ChevronDown className="ml-4 self-end" />
            ) : (
              <ChevronRight className="ml-4 self-end" />
            )}
          </label>
          {isMenuOpen('artworkType') && (
            <div>
              {ARTWORK_OPTIONS.map((option, index) => (
                <motion.div
                  key={option}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 2, delay: index * 0.05 }}
                  className="mb-2 flex items-center justify-between gap-4"
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
    </>
  );
};

export default FilterBar;
