import { useState, useEffect } from 'react';
import { fetchArtworks } from '../api';

function AllArtist() {
  const [artworks, setArtworks] = useState([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');
  const artistName = artworks[index]?.artist_display || '';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchArtworks(search, 12, signal)
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

  return (
    <>
      <h1 className="mb-9 mt-48 text-center text-4xl font-normal uppercase drop-shadow-md">
        ARTISTS COLLECTION
      </h1>
      <div className="h-200vh container m-auto overflow-y-hidden">
        <div className="box-border flex h-fit flex-row gap-[1vw] overflow-hidden bg-[--light] p-[1vw]">
          {artworks.map((artwork, index) => {
            if (index < 5) {
              return (
                <div
                  key={artwork.id}
                  className="relative h-[400px] w-[300px] gap-[1vw] rounded p-5 shadow-lg"
                >
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                    alt={artwork.artist_display}
                    className="h-[85%] w-full cursor-pointer rounded object-cover shadow-inner"
                  />
                  <div className="flex h-[10%] items-center justify-center pt-[1rem]">
                    <p className="pt-[1rem] text-center">
                      {artwork.artist_display}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="box-border flex h-fit flex-row gap-[1vw] overflow-hidden bg-[--light] p-[1vw]">
          {artworks.map((artwork, index) => {
            if (index >= 5 && index < 10) {
              return (
                <div
                  key={artwork.id}
                  className="relative h-[400px] w-[300px] gap-[1vw] rounded p-5 shadow-lg"
                >
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                    alt={artwork.artist_display}
                    className="h-[85%] w-full cursor-pointer rounded object-cover shadow-inner"
                  />
                  <div className="flex h-[10%] items-center justify-center pt-[1rem]">
                    <p className="pt-[1rem] text-center">
                      {artwork.artist_display}
                    </p>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </>
  );
}

export default AllArtist;
