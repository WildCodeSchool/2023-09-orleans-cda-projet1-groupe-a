import { useState, useEffect } from 'react';
import { fetchArtworks } from '../api';

function AllArtist() {
  const [artworks, setArtworks] = useState([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchArtworks(search, 100, signal)
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
        ARTISTS
      </h1>
      <div className="container m-auto flex h-[350px] overflow-x-hidden">
        <div className="hover:pause-animation box-border flex h-fit animate-scroll-right flex-row gap-[1vw] bg-[--light]">
          {artworks.map((artwork, index) => {
            if (index <= 20) {
              return (
                <div
                  key={artwork.id}
                  className="h-[325px] w-[300px] gap-[1vw] rounded p-5 shadow-lg"
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
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="container m-auto flex h-[350px] overflow-x-hidden">
        <div className="hover:pause-animation box-border flex h-fit animate-scroll-right flex-row gap-[1vw] bg-[--light]">
          {artworks.map((artwork, index) => {
            if (index >= 20 && index < 40) {
              return (
                <div
                  key={artwork.id}
                  className="h-[325px] w-[300px] gap-[1vw] rounded p-5 shadow-lg"
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
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="container m-auto flex h-[350px] overflow-x-hidden">
        <div className="hover:pause-animation box-border flex h-fit animate-scroll-right flex-row gap-[1vw] bg-[--light]">
          {artworks.map((artwork, index) => {
            if (index >= 40 && index < 60) {
              return (
                <div
                  key={artwork.id}
                  className="h-[325px] w-[300px] gap-[1vw] rounded p-5 shadow-lg"
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
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="container m-auto flex h-[350px] overflow-x-hidden">
        <div className="hover:pause-animation box-border flex h-fit animate-scroll-right flex-row gap-[1vw] bg-[--light]">
          {artworks.map((artwork, index) => {
            if (index >= 60 && index < 80) {
              return (
                <div
                  key={artwork.id}
                  className="h-[325px] w-[300px] gap-[1vw] rounded p-5 shadow-lg"
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
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="container m-auto flex h-[350px] overflow-x-hidden">
        <div className="hover:pause-animation box-border flex h-fit animate-scroll-right flex-row gap-[1vw] bg-[--light]">
          {artworks.map((artwork, index) => {
            if (index >= 80 && index < 100) {
              return (
                <div
                  key={artwork.id}
                  className="h-[325px] w-[300px] gap-[1vw] rounded p-5 shadow-lg"
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
