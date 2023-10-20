import { useState } from 'react';
import Search from './icon/Search';

export default function SearchInput() {
  const [isInputOpen, setInputOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);

    if (value.trim() === '') {
      setSuggestions([]);
    } else {
      fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${value}&fields=id,artist_display&limit=5`,
      )
        .then((response) => response.json())
        .then((data) => {
          const filteredSuggestions = data.data.filter((suggestion) =>
            suggestion.artist_display
              .toLowerCase()
              .includes(value.toLowerCase()),
          );
          setSuggestions(filteredSuggestions);
        });
    }
  };

  const handleMouseEnter = () => {
    setInputOpen(true);
  };

  const handleMouseLeave = () => {
    setInputOpen(false);
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <div className="relative items-end">
        <input
          type="text"
          className={`h-10 w-10 rounded-t-2xl p-2 pl-4 transition-all duration-500 ease-in-out focus:outline-none ${
            isInputOpen ? 'w-28 sm:w-52' : 'opacity-0'
          } ${suggestions.length <= 0 ? 'rounded-b-2xl' : ''}`}
          onMouseLeave={suggestions.length <= 0 ? handleMouseLeave : null}
          value={searchValue}
          onChange={handleInputChange}
        />
        <div
          onMouseEnter={handleMouseEnter}
          className="absolute right-2.5 top-3.5 cursor-pointer"
        >
          <div
            className={`h-5 w-5 self-center ${
              isInputOpen ? 'text-black' : 'text-white'
            }`}
          >
            <Search />
          </div>
        </div>
      </div>
      <div
        className="relative"
        style={{
          position: 'absolute',
          zIndex: 1,
          top: '100%',
          width: '200px',
        }}
      >
        <ul
          onMouseLeave={handleMouseLeave}
          className={`w-full overflow-hidden rounded-b-2xl bg-white ${
            isInputOpen ? 'w-28 sm:w-52' : 'opacity-0'
          } transition-opacity duration-1000 ${
            suggestions.length <= 0 ? 'opacity-0' : 'opacity-100'
          }`}
        >
          {suggestions
            .filter(
              (suggestion, index, self) =>
                index ===
                self.findIndex(
                  (s) => s.artist_display === suggestion.artist_display,
                ),
            )
            .map((suggestion) => {
              const artistName = suggestion.artist_display
                .split('\n')[0]
                .replace(/[^a-zA-Z\s]/g, '');
              return (
                <li
                  key={suggestion.id}
                  className="relative cursor-pointer whitespace-nowrap border-b-2 px-2 py-4 hover:opacity-50"
                >
                  {artistName.length > 24
                    ? artistName.slice(0, 25) + '...'
                    : artistName}
                </li>
              );
            })}
        </ul>
      </div>
    </div>
  );
}
