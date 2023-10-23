import { useState, useEffect } from 'react';
import { fetchArtworks } from '../api';

function AllArtists() {
  const [artworks, setArtworks] = useState([]);
  const [search] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchArtworks(search, 100, signal)
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => {
        throw new Error(
          "Une erreur s'est produite lors de la récupération des données :",
          error,
        );
      });
    return function cleanup() {
      controller.abort();
    };
  }, [search]);

  const renderArtworksGroup = (start, end, animationDirection) => {
    return artworks.slice(start, end).map((artwork) => (
      <div
        key={artwork.id}
        className={`h-[325px] w-[300px] gap-[1vw] rounded p-5 shadow-lg ${animationDirection}`}
      >
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
          alt={artwork.artist_display}
          className="h-[80%] w-full cursor-pointer rounded object-cover shadow-lg"
        />
        <div className="flex h-[10%] items-center justify-center pt-[1.5rem]">
          <p
            title={artwork.artist_display}
            className="truncate pt-[1rem] text-center"
          >
            {artwork.artist_display}
          </p>
        </div>
      </div>
    ));
  };

  const generateArtworkGroups = () => {
    const groups = [];
    for (let start = 0; start < 100; start += 20) {
      const animationDirection =
        (start / 20) % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right';
      groups.push(
        <div
          key={start}
          className="container m-auto flex h-[350px] overflow-x-hidden"
        >
          <div
            className={`hover:pause-animation box-border flex h-fit flex-row gap-[1vw] bg-[--light] ${animationDirection}`}
          >
            {renderArtworksGroup(start, start + 20, animationDirection)}
          </div>
        </div>,
      );
    }
    return groups;
  };
  return (
    <>
      <h1 className="mb-9 mt-48 text-center text-4xl font-normal uppercase drop-shadow-md">
        ARTISTS
      </h1>
      {generateArtworkGroups()}
    </>
  );
}
export default AllArtists;
