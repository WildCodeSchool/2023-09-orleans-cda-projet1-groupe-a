import { useState, useEffect } from 'react';
import { fetchArtworks } from '../api';
import NavBar from '../components/NavBar';

function Artist() {
  const [artworks, setArtworks] = useState([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchArtworks(search, 20)
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error,
        );
      });
  }, [search]);

  const artistName = artworks.length > 0 && artworks[0].artist_display;

  const mod = (n, m) => {
    const result = n % m;
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // console.log(index);
      setIndex((index + 1) % artworks.length);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [index, artworks]);
  // console.log(artworks);

  const indexLeft = mod(index - 1, artworks.length);
  // console.log(indexLeft);

  const roundEffect = (artwork) => {
    for (let i = 0; i < artwork.length; i++) {}
  };

  return (
    <div>
      <NavBar />
      <div>
        <h1 className="font-medim mt-8 text-center text-4xl drop-shadow-md">
          {artistName}
        </h1>
      </div>

      <div className="container h-full w-full">
        <div className="carousel flex h-full w-full items-center">
          {artworks.map((artwork, i) => {
            const indexLeft = mod(index - 1, artworks.length);
            const indexRight = mod(index + 1, artworks.length);
            const indexLeft2 = mod(index + 1, artworks.length);
            const indexRight2 = mod(index - 1, artworks.length);
            const indexLeft3 = mod(index - 2, artworks.length);
            const indexRight3 = mod(index + 2, artworks.length);

            let className = '';

            if (i === index) {
              className = 'card card--active opacity-100 z-[99] scale-100';
            } else if (i === indexRight) {
              className =
                'card card--right duration-500 opacity-90 scale-[0.8] translate-x-[125%]';
            } else if (i === indexLeft) {
              className =
                'card card--left duration-500 opacity-90 scale-[0.8] translate-x-[-125%]';
            } else if (i === indexRight2) {
              className =
                'card card--right2 duration-500 opacity-60 scale-[0.8] translate-x-[150%]';
            } else if (i === indexLeft2) {
              className =
                'card card--left2 duration-500 opacity-60 scale-[0.8] translate-x-[-150%]';
            } else if (i === indexRight3) {
              className =
                'card card--right3 duration-500 opacity-10 scale-[0.8] translate-x-[100%]';
            } else if (i === indexLeft3) {
              className =
                'card card--left3 duration-500 opacity-10 scale-[0.8] translate-x-[-100%]';
            } else {
              className = 'card';
            }

            return (
              <div key={artwork.id} className="carousel-item">
                <img
                  src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                  alt={`${artwork.title}`}
                  className={`${className} absolute bottom-0 left-0 right-0 top-1/4 m-auto h-[500px] w-[350px] object-cover opacity-0 grayscale duration-500 hover:grayscale-0`}
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