import { useState, useEffect } from 'react';
import { fetchArtworks } from '../api';
import { Link } from 'react-router-dom';

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
        throw new Error('An error occurred while retrieving the data.', error);
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
        <Link to={`/artists/${artwork.artist_title}`}>
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
            alt={artwork.artist_title}
            onError={(e) => {
              e.currentTarget.src = '/question.jpeg';
            }}
            className="h-[85%] w-full cursor-pointer rounded object-cover shadow-lg"
          />
        </Link>

        <div className="flex h-[10%] items-center justify-center pt-[1.5rem]">
          <p title={artwork.artist_display} className="pt-[0.5rem] text-center">
            {artwork.artist_title
              ? artwork.artist_title
              : artwork.artist_display}
          </p>
        </div>
      </div>
    ));
  };

  const artworkGroups = () => {
    const groups = [];

    for (let start = 0; start < 100; start += 20) {
      const animationDirection =
        (start / 20) % 2 === 0 ? 'animate-scroll-left' : 'animate-scroll-right';
      groups.push(
        <div key={start}>
          <div className="container m-auto flex h-[350px] overflow-x-hidden">
            <div
              className={`hover:pause-animation box-border flex h-fit flex-row gap-[1vw] bg-[--light] ${animationDirection}`}
            >
              {renderArtworksGroup(start, start + 20, animationDirection)}
            </div>
          </div>
        </div>,
      );
    }
    return groups;
  };

  return (
    <>
      <h1 className="mb-9 mt-56 text-center text-4xl font-normal uppercase drop-shadow-md">
        ARTISTS
      </h1>
      {artworkGroups()}
    </>
  );
}
export default AllArtists;
