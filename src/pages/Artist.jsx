import { useState, useEffect } from 'react';
import { fetchArtworks } from '../api';
import NavBar from '../components/NavBar';

function Artist() {
  const [artworks, setArtworks] = useState([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('Karl Wirsum');

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
    const timeoutId = setTimeout(() => {
      setIndex((index + 1) % artworks.length);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [index, artworks]);
  console.log(artworks);

  const artistName = artworks[0]?.artist_display || '';

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
    <div>
      <NavBar />
      <div>
        <h1 className="text-center mt-8 text-4xl font-medim drop-shadow-md">
          {artistName}
        </h1>
      </div>

      <div className="w-full h-full">
        <div className="flex items-center w-full h-full">
          {artworks.map((artwork, i) => {
            return (
              <div key={artwork.id}>
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                  alt={`${artwork.title}`}
                  className={`${getClassName(
                    i,
                  )} absolute top-1/4 bottom-0 right-0 left-0 m-auto w-[350px] h-[500px] object-cover opacity-0 duration-500 grayscale`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Artist;
