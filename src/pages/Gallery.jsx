import { useState, useEffect } from 'react';
import Grid2 from '../components/icon/Grid2';
import Grid3 from '../components/icon/Grid3';
import Grid4 from '../components/icon/Grid4';
import FilterBar from '../components/FilterBar';
import { ListFilter, Tally1 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fetchArtworks } from '../api';

const cardVariant = {
  offscreen: {
    opacity: 0,
    y: 100,
  },
  onscreen: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      delay: i * 0.1,
      duration: 0.35,
    },
  }),
};

export default function Gallery() {
  const [art, setArt] = useState([]);
  const [search, setSearch] = useState('');

  const [gridStyle, setGridStyle] = useState(
    'grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4',
  );
  const [imgStyle, setImgStyle] = useState(
    'w-[70vw] h-80 lg:w-80 lg:h-[25rem]',
  );

  const handleGridChange = (newStyle) => {
    setGridStyle(newStyle);
  };
  const handleFilterChange = (filterValue) => {
    setSearch(filterValue);
  };

  const [filterBarVisible, setFilterBarVisible] = useState(false);
  const toggleFilterBarVisibility = () => {
    setFilterBarVisible((prevVisible) => !prevVisible);
  };

  const handleImgChange = (img) => {
    setImgStyle(img);
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchArtworks(search, 20, signal)
      .then((data) => {
        setArt(data);
      })
      .catch((error) => {
        throw new Error('An error occurred while retrieving the data.', error);
      });
    return function cleanup() {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <div className="flex min-h-screen">
        <div className="container mx-auto p-4">
          <h1 className="mb-9 mt-48 text-center text-4xl font-normal drop-shadow-md">
            GALLERY
          </h1>
          <div className="mx-2 mb-16 flex h-10 items-center justify-between rounded-lg border p-4 text-end shadow-2xl">
            <div
              className="flex items-center"
              onClick={toggleFilterBarVisibility}
            >
              {filterBarVisible ? (
                <h2 className="mr-32 whitespace-nowrap">HIDE FILTERS</h2>
              ) : (
                <h2 className="mr-32 whitespace-nowrap">SHOW FILTERS</h2>
              )}
              <ListFilter className="sm:ml-8 md:ml-8 lg:ml-8"></ListFilter>
              <Tally1 className="invisible ml-8 ms-3 sm:visible md:visible lg:visible" />
            </div>
            <div className="mb-4 text-end">
              <button
                className={`invisible ms-3 sm:visible md:visible lg:visible ${
                  gridStyle === 'grid-cols-2' ? 'opacity-100' : 'opacity-25'
                }`}
                onClick={() => {
                  handleGridChange('grid-cols-2');
                  handleImgChange('w-[70vw] h-80 lg:w-80 lg:h-[25rem]');
                }}
              >
                <Grid2 />
              </button>
              <button
                className={`invisible ms-3 mt-5 sm:visible md:visible lg:visible ${
                  gridStyle === 'grid-cols-3' ? 'opacity-100' : 'opacity-25'
                }`}
                onClick={() => {
                  handleGridChange('grid-cols-3');
                  handleImgChange('w-[70vw] h-80 lg:w-80 lg:h-[25rem]');
                }}
              >
                <Grid3 />
              </button>
              <button
                className={`invisible ms-3 lg:visible ${
                  gridStyle === 'grid-cols-4' ? 'opacity-100' : 'opacity-25'
                }`}
                onClick={() => {
                  handleGridChange('grid-cols-4');
                  handleImgChange('lg:w-80 lg:h-[25rem]');
                }}
              >
                <Grid4 />
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row">
            {filterBarVisible && (
              <FilterBar
                className={`opacity-${
                  filterBarVisible ? '100' : '0'
                } transition-opacity duration-500`}
                onFilterChange={handleFilterChange}
              />
            )}
            <ul>
              <motion.div layout className={`grid ${gridStyle} gap-10`}>
                {art.map((artwork, index) => (
                  <li key={index}>
                    {artwork.image_id ? (
                      <motion.div
                        variants={cardVariant}
                        initial="offscreen"
                        whileInView="onscreen"
                        custom={index}
                        layout
                        className="mb-8"
                      >
                        <Link to={`/artists/${artwork.artist_title}`}>
                          <img
                            className={`${imgStyle} mx-auto cursor-pointer object-cover shadow-xl grayscale transition duration-500 hover:scale-110 hover:grayscale-0 `}
                            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                            alt={artwork.title}
                          />
                        </Link>

                        <h2 className="mt-8 text-center">
                          {artwork.artist_display}
                        </h2>
                        <h2 className="mt-2 text-center">{artwork.title}</h2>
                      </motion.div>
                    ) : null}
                  </li>
                ))}
              </motion.div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
