import { useState, useEffect, useRef } from 'react';
import { fetchArtworks } from '../api';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function ArtistCollection() {
  const [artworks, setArtworks] = useState([]);
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const popUp = useRef(null);
  const params = useParams();
  const search = params.artist_title;

  // Closed pop-up outside the component
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (popUp.current && !popUp.current.contains(e.target) && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, setIsOpen]);

  // Next and previous buttons
  const handlePrevious = () => {
    if (index === 0) {
      setIndex(artworks.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index === artworks.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchArtworks(search, 20, signal)
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => {
        throw new Error('An error occurred while retrieving the data.', error);
      });

    return function cleanup() {
      controller.abort();
    };
  }, [search]);

  useEffect(() => {
    if (!isOpen) {
      const timeoutId = setTimeout(() => {
        setIndex((index + 1) % artworks.length);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [index, artworks, isOpen]);

  const artistName = artworks[0]?.artist_display || '';
  const artworkId = artworks[index]?.id || '';
  const artworkDimensions = artworks[index]?.dimensions || '';
  const artworkPlace = artworks[index]?.place_of_origin || '';
  const artworkDisplay = artworks[index]?.medium_display || '';
  const artworkTitle = artworks[index]?.title || '';
  const artworkDate = artworks[index]?.date_display || '';
  const artworkImage =
    `https://www.artic.edu/iiif/2/${artworks[index]?.image_id}/full/400,/0/default.jpg` ||
    '';

  const mod = (number) => {
    const result = number % artworks.length;
    return result >= 0 ? result : result + artworks.length;
  };

  const indexLeft = mod(index - 1);
  const indexRight = mod(index + 1);
  const indexLeft2 = mod(index + 1);
  const indexRight2 = mod(index - 1);
  const indexLeft3 = mod(index - 2);
  const indexRight3 = mod(index + 2);

  function getClassName(i) {
    let className = '';

    if (i === index) {
      className = 'card grayscale-0 opacity-100 z-[99] scale-100';
    } else if (i === indexRight) {
      className = 'card opacity-90 scale-[0.8] translate-x-[125%]';
    } else if (i === indexLeft) {
      className = 'card opacity-90 scale-[0.8] translate-x-[-125%]';
    } else if (i === indexRight2) {
      className = 'card opacity-60 scale-[0.8] translate-x-[150%]';
    } else if (i === indexLeft2) {
      className = 'card opacity-60 scale-[0.8] translate-x-[-150%]';
    } else if (i === indexRight3) {
      className = 'card opacity-10 scale-[0.8] translate-x-[100%]';
    } else if (i === indexLeft3) {
      className = 'card opacity-10 scale-[0.8] translate-x-[-100%]';
    } else {
      className = 'card';
    }
    return className;
  }

  return (
    <>
      <h1 className="font-medim mt-48 text-center text-4xl uppercase drop-shadow-md">
        {artistName}
      </h1>

      <div className="relative mb-24 h-[650px] w-full">
        {artworks.map((artwork, i) => {
          return (
            <img
              key={artwork.id}
              src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
              alt={artwork.title}
              onError={(e) => {
                e.currentTarget.src = '/question.jpeg';
              }}
              className={`${getClassName(
                i,
              )} absolute left-0 right-0 top-1/2 mx-auto h-[500px] w-[350px] -translate-y-1/2 cursor-pointer object-cover opacity-0 shadow-lg grayscale duration-500`}
              onClick={() => {
                setIsOpen(!isOpen);
                setIndex(i);
              }}
            />
          );
        })}

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={popUp}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.6 } }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="absolute left-1/2 top-1/3 z-[998] mt-28 flex h-[800px] w-[600px] -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded bg-black/80 p-9 text-lg text-[--light] drop-shadow-lg lg:left-1/2 lg:mx-auto lg:mt-0 lg:h-[600px] lg:w-[900px] lg:flex-row"
            >
              <button
                className="absolute left-5 top-1/2 h-10 w-10 lg:left-3 lg:m-auto"
                onClick={handlePrevious}
              >
                <ChevronLeft className="h-10 w-10 cursor-pointer" />
              </button>
              <div className="w-3/4 pb-4 lg:w-2/4">
                <div className="flex h-[300px] items-center justify-center lg:h-[600px]">
                  <Link to={`/artworks/${artworkId}`}>
                    <img
                      src={artworkImage}
                      alt={artworkTitle}
                      onError={(e) => {
                        e.currentTarget.src = '/question.jpeg';
                      }}
                      className="max-h-[300px] max-w-full object-cover py-0 ps-0 shadow-lg lg:max-h-[600px] lg:py-9 lg:ps-9"
                    />
                  </Link>
                </div>
              </div>
              <div className="ms-5 w-3/4 overflow-y-auto md:p-0 lg:ms-0 lg:max-h-[600px] lg:w-2/4 lg:p-9">
                <p className="mb-6 mt-8 lg:mt-0">
                  {artistName ? artistName : 'not specified'}
                </p>
                <div>
                  <p>Title :</p>
                  <p className="mb-4">
                    {artworkTitle ? artworkTitle : 'not specified'}
                  </p>
                  <p>Year :</p>
                  <p className="mb-4">
                    {artworkDate ? artworkDate : 'not specified'}
                  </p>
                  <div className="">
                    <p>Place of origin :</p>
                    <p className="mb-4">
                      {artworkPlace ? artworkPlace : 'not specified'}
                    </p>
                    <p>Dimension :</p>
                    <p className="mb-4">
                      {artworkDimensions ? artworkDimensions : 'not specified'}
                    </p>
                    <p>Method :</p>
                    <p className="mb-4">
                      {artworkDisplay ? artworkDisplay : 'not specified'}
                    </p>
                  </div>
                </div>
              </div>
              <button
                className="absolute right-7 top-0 z-10 -me-4 mt-6 flex h-10 w-10 "
                onClick={() => setIsOpen(false)}
              >
                <X className="h-8 w-8 cursor-pointer" />
              </button>
              <button
                className="absolute right-5 top-1/2 h-10 w-10 lg:right-3 lg:m-auto"
                onClick={handleNext}
              >
                <ChevronRight className="h-10 w-10 cursor-pointer" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ArtistCollection;
