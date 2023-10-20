import { fetchArtworks } from '../api';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';

function Artist() {
  const [artworks, setArtworks] = useState([]);
  const [search] = useState('Hosukai');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchArtworks(search, 80, signal)
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

  const artistName = artworks[0]?.artist_display || '';
  const artworkDescription = DOMPurify.sanitize(artworks[0]?.description || '');

  return (
    <>
      <h1 className="mb-9 mt-48 text-center text-4xl font-normal uppercase drop-shadow-md">
        {artistName}
      </h1>
      <p
        className="container m-auto mb-10 mt-5 p-3 text-lg"
        dangerouslySetInnerHTML={{
          __html: artworkDescription,
        }}
      ></p>
      <div className="container m-auto mb-10 flex h-[200vh] overflow-y-hidden">
        <div className="hover:pause-animation box-border flex h-fit basis-1/4 animate-scroll-top flex-col gap-[1vw] overflow-hidden bg-[--light] p-[1vw]">
          {artworks.map((artwork, index) => {
            if (index < 20) {
              return (
                <div
                  key={artwork.id}
                  className="h-[600px] gap-[1vw] shadow-lg "
                >
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                    alt={artwork.title}
                    className="relative h-full w-full cursor-pointer rounded object-cover shadow-lg"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="hover:pause-animation box-border flex h-fit basis-1/4 animate-scroll-bottom flex-col gap-[1vw] overflow-hidden bg-[--light] p-[1vw]">
          {artworks.map((artwork, index) => {
            if (index >= 20 && index < 40) {
              return (
                <div
                  key={artwork.id}
                  className="h-[600px] gap-[1vw] shadow-lg "
                >
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                    alt={artwork.title}
                    className="relative h-full w-full cursor-pointer rounded object-cover shadow-lg "
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="hover:pause-animation box-border flex h-fit basis-1/4 animate-scroll-top flex-col gap-[1vw] overflow-hidden bg-[--light] p-[1vw]">
          {artworks.map((artwork, index) => {
            if (index >= 40 && index < 60) {
              return (
                <div
                  key={artwork.id}
                  className="h-[600px] gap-[1vw] shadow-lg "
                >
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                    alt={artwork.title}
                    className="relative h-full w-full cursor-pointer rounded object-cover shadow-lg"
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="hover:pause-animation box-border flex h-fit basis-1/4 animate-scroll-bottom flex-col gap-[1vw] overflow-hidden bg-[--light] p-[1vw]">
          {artworks.map((artwork, index) => {
            if (index >= 60 && index < 80) {
              return (
                <div
                  key={artwork.id}
                  className="h-[600px] gap-[1vw] shadow-lg "
                >
                  <img
                    src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                    alt={artwork.title}
                    className="relative h-full w-full cursor-pointer rounded object-cover shadow-lg"
                  />
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

export default Artist;
