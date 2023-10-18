import { useState } from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SearchInput() {
  const [isInputOpen, setInputOpen] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    const { value } = event.target;
    setSearchValue(value);
    fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${value}&fields=id,artist_display&limit=5`,
    )
      .then((response) => response.json())
      .then((data) => setSuggestions(data.data));
  };

  const handleMouseEnter = () => {
    setInputOpen(true);
  };

  const handleMouseLeave = () => {
    setInputOpen(false);
    setSearchValue('');
    setSuggestions([]);
  };

  return (
    <>
      <form
        type="texte"
        className="relative flex w-1/3 justify-end"
        onMouseLeave={handleMouseLeave}
      >
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          className={`h-10 w-10 rounded-full p-4 shadow outline-none transition-all duration-500 ease-in-out ${
            isInputOpen ? 'w-28 sm:w-52' : 'opacity-0'
          }`}
        />
        <button
          type="submit"
          className="absolute flex h-full w-10 items-center justify-center"
        >
          <Search
            onMouseEnter={handleMouseEnter}
            className={isInputOpen ? 'text-dark' : 'text-light'}
          />
        </button>
        {suggestions.length > 0 && isInputOpen && (
          <div className="absolute mt-10 flex w-52 flex-col">
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
                  .replace(/\s*\(.*?\)\s*/g, '');
                return (
                  <Link
                    to={'#'}
                    className="rounded text-left text-xl hover:bg-light"
                    key={suggestion.id}
                  >
                    {artistName}
                  </Link>
                );
              })}
          </div>
        )}
      </form>
    </>
  );
}
