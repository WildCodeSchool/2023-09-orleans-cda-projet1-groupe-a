import { useState, useEffect } from 'react';
import Search from './icon/Search';
import { useDebounce } from 'use-debounce';

export default function SearchInput() {
  const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [debouncedSearchValue] = useDebounce(searchValue, 1000);

  useEffect(() => {
    if (debouncedSearchValue.trim() === '') {
      setSuggestions([]);
    } else {
      fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${debouncedSearchValue}&fields=id,artist_display&limit=5`,
      )
        .then((response) => response.json())
        .then((data) => {
          const filteredSuggestions = data.data.filter((suggestion) =>
            suggestion.artist_display
              .toLowerCase()
              .includes(debouncedSearchValue.toLowerCase()),
          );
          setSuggestions(filteredSuggestions);
        });
    }
  }, [debouncedSearchValue]);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
  };

  const handleListLeave = () => {
    setSuggestions([]);
  };

  return (
    <div className="group relative">
      <div className="group relative items-end">
        <input
          type="text"
          className={`h-10 w-10 rounded-t-2xl p-2 pl-4 opacity-0 transition-all duration-500 ease-in-out focus:outline-none group-hover:w-28 group-hover:opacity-100 group-hover:sm:w-52 ${
            suggestions.length <= 0 ? 'rounded-b-2xl' : ''
          }`}
          value={searchValue}
          onChange={handleInputChange}
        />
        <div className="absolute right-2.5 top-3.5 cursor-pointer">
          <div className="h-5 w-5 self-center text-light group-hover:text-dark">
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
          onMouseLeave={handleListLeave}
          className={`w-full overflow-hidden rounded-b-2xl bg-white ${
            suggestions.length > 0
              ? 'w-28 opacity-100 sm:w-52'
              : 'opacity-0 transition-opacity duration-1000'
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
