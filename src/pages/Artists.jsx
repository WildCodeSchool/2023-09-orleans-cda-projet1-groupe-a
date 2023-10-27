import { fetchArtworks } from '../api';
import { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import ArtistCollection from '../components/ArtistCollection';
import { useParams } from 'react-router-dom';

function Artists() {
  const [artworks, setArtworks] = useState([]);
  const params = useParams();
  const search = params.artist_title;

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

  const artworkDescription = DOMPurify.sanitize(artworks[0]?.description || '');

  return (
    <>
      <ArtistCollection />

      <p
        className="container m-auto mb-24 mt-5 p-3 text-lg"
        dangerouslySetInnerHTML={{
          __html: artworkDescription,
        }}
      ></p>
      <div className="container m-auto mb-24 flex h-[200vh] overflow-y-hidden">
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
                    alt={artwork.artist_title}
                    onError={(e) => {
                      e.currentTarget.src = '/question.jpeg';
                    }}
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
                    onError={(e) => {
                      e.currentTarget.src = '/question.jpeg';
                    }}
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
                    onError={(e) => {
                      e.currentTarget.src = '/question.jpeg';
                    }}
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
                    onError={(e) => {
                      e.currentTarget.src = '/question.jpeg';
                    }}
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

export default Artists;
