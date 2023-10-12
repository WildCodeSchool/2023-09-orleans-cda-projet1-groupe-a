import { useState, useEffect } from 'react';
import { fetchArtworks } from '../api';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import DOMPurify from 'dompurify';

function Artist() {
  const [artworks, setArtworks] = useState([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('Karl Wirsum');

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchArtworks(search, 20, signal)
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error,
        );
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
  const artworkTitle = artworks[index]?.title || '';
  const artworkDisplay = artworks[index]?.date_display || '';
  const artworkImage = artworks[index]
    ? `https://www.artic.edu/iiif/2/${artworks[index].image_id}/full/400,/0/default.jpg`
    : '';
  const artworkDescription = DOMPurify.sanitize(artworks[0]?.description || '');

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
      <div>
        <div>
          <h1 className="font-medim mt-48 text-center text-4xl drop-shadow-md">
            {artistName}
          </h1>
        </div>
        <div className="h-full w-full">
          {artworks.map((artwork, i) => {
            return (
              <div key={artwork.id}>
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                  alt={`${artwork.title}`}
                  className={`${getClassName(
                    i,
                  )} absolute bottom-0 left-0 right-0 top-1/3 mx-auto h-[500px] w-[350px] object-cover opacity-0 grayscale duration-500`}
                  onClick={() => setIsOpen(!isOpen)}
                />
              </div>
            );
          })}
          <div>
            <motion.div>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.6 } }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="absolute left-1/2 top-1/2 z-[999] mx-auto flex h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/2 transform rounded bg-black/80 text-lg text-[--light] drop-shadow-lg"
                  >
                    <div className="w-2/4">
                      <img
                        src={artworkImage}
                        alt={artworkTitle}
                        className="m-auto h-[600px] object-cover p-9"
                      ></img>
                    </div>
                    <div className="w-2/4 p-9">
                      <button
                        className="float-right mt-0 flex"
                        onClick={() => setIsOpen(false)}
                      >
                        <X />
                      </button>
                      <p className="mb-5 mt-5">{artistName}</p>
                      <p className="mb-3">Year : {artworkDisplay}</p>
                      <p className="mb-3">Title : {artworkTitle}</p>
                      <div className="h-[23.5rem] overflow-auto">
                        <p className="mb-3">Description :</p>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: artworkDescription,
                          }}
                        ></p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Artist;
