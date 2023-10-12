import { useState, useEffect } from 'react';
import Grid2 from '../components/icon/Grid2';
import Grid3 from '../components/icon/Grid3';
import Grid4 from '../components/icon/Grid4';
import FilterBar from '../components/FilterBar';
import { ListFilter } from 'lucide-react';
import { Tally1 } from 'lucide-react';

const page = 1;
const limit = 20;

export default function Gallery() {
  const [art, setArt] = useState([]);
  const [search, setSearch] = useState('Picasso');
  const [gridStyle, setGridStyle] = useState('grid-cols-4');
  const [imgStyle, setImgStyle] = useState('w-80 h-[25rem]');
  const handleGridChange = (newStyle) => {
    setGridStyle(newStyle);
  };
  const handleFilterChange = (filterValue) => {
    setSearch(filterValue);
  };

  const handleImgChange = (img) => {
    setImgStyle(img);
  };

  const [filterBarVisible, setFilterBarVisible] = useState(true);
  const toggleFilterBarVisibility = () => {
    setFilterBarVisible((prevVisible) => !prevVisible);
  };

  useEffect(() => {
    const controller = new AbortController();
    const go = async () => {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,artist_display,date_display,main_reference_number,image_id&page=${page}&limit=${limit}`,
        {
          signal: controller.signal,
        },
      );
      const data = await res.json();
      setArt(data.data);
    };
    go();
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <div className="flex">
        <div className="container mx-auto p-4">
          <h1 className="mb-9 text-center text-4xl font-normal drop-shadow-md ">
            GALLERY
          </h1>
          <div className="mx-2 mb-16 flex h-10 items-center justify-between rounded-lg border p-4 text-end shadow-2xl">
            <div className="flex" onClick={toggleFilterBarVisibility}>
              {filterBarVisible ? <h2>HIDE FILTERS</h2> : <h2>SHOW FILTERS</h2>}
              <ListFilter className="ml-8"></ListFilter>
              <Tally1 className="ml-8" />
            </div>
            <div>
              <button
                className={`ms-3 ${
                  gridStyle === 'grid-cols-2' ? 'opacity-100' : 'opacity-25'
                }`}
                onClick={() => {
                  handleGridChange('grid-cols-2');
                  handleImgChange('w-4/5 h-[40rem]');
                }}
              >
                <Grid2 />
              </button>
              <button
                className={`ms-3 ${
                  gridStyle === 'grid-cols-3' ? 'opacity-100' : 'opacity-25'
                }`}
                onClick={() => {
                  handleGridChange('grid-cols-3');
                  handleImgChange('w-80 h-[28rem]');
                }}
              >
                <Grid3 />
              </button>
              <button
                className={`ms-3 ${
                  gridStyle === 'grid-cols-4' ? 'opacity-100' : 'opacity-25'
                }`}
                onClick={() => {
                  handleGridChange('grid-cols-4');
                  handleImgChange('w-80 h-[25rem]');
                }}
              >
                <Grid4 />
              </button>
            </div>
          </div>
          <div className="flex">
            {filterBarVisible && (
              <FilterBar
                className={`opacity-${
                  filterBarVisible ? '100' : '0'
                } transition-opacity duration-500`}
                onFilterChange={handleFilterChange}
              />
            )}
            <ul>
              <div className={`grid ${gridStyle} gap-10`}>
                {art.map((artwork) => (
                  <li key={artwork.id}>
                    {artwork.image_id ? (
                      <div className="mb-8">
                        <img
                          className={`${imgStyle} mx-auto cursor-pointer object-cover shadow-xl grayscale transition duration-500 hover:scale-110 hover:grayscale-0 `}
                          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                          alt={artwork.title}
                        />
                        <h2 className="mt-8 text-center">
                          {artwork.artist_display}
                        </h2>
                        <h2 className="mt-2 text-center">{artwork.title}</h2>
                      </div>
                    ) : null}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
