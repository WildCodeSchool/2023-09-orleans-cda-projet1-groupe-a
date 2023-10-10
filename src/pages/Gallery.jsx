import { useState, useEffect } from 'react';
import Grid2 from '../components/icon/Grid2';
import Grid3 from '../components/icon/Grid3';
import Grid4 from '../components/icon/Grid4';

const page = 1;
const limit = 20;

export default function Gallery() {
  const [art, setArt] = useState([]);
  const [search, setSearch] = useState('Picasso');
  const [gridStyle, setGridStyle] = useState('grid-cols-4');
  const [imgStyle, setImgStyle] = useState('w-80 h-[25rem]');
  const handleGridChange = (newStyle) => {
    setGridStyle(newStyle);
  };

  const handleImgChange = (img) => {
    setImgStyle(img);
  };
  useEffect(() => {
    const controller = new AbortController();
    const go = async () => {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks/search?q=${search}&fields=id,title,artist_display,date_display,main_reference_number,image_id&page=${page}&limit=${limit}`,
        {
          signal: controller.signal,
        },
      );
      const data = await res.json();
      setArt(data.data);
    };
    go();
    return () => {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-center text-4xl mb-9 drop-shadow-md font-normal mt-48">
          Gallery
        </h1>
        <div className="mb-4 text-end">
          <button
            className="ms-3"
            onClick={() => {
              handleGridChange('grid-cols-2');
              handleImgChange('w-4/5 h-[40rem]');
            }}
          >
            <Grid2 />
          </button>
          <button
            className="ms-3"
            onClick={() => {
              handleGridChange('grid-cols-3');
              handleImgChange('w-80 h-[28rem]');
            }}
          >
            <Grid3 />
          </button>
          <button
            className="ms-3"
            onClick={() => {
              handleGridChange('grid-cols-4');
              handleImgChange('w-80 h-[25rem]');
            }}
          >
            <Grid4 />
          </button>
        </div>

        <ul>
          <div className={`grid ${gridStyle} gap-10`}>
            {art.map((artwork) => (
              <li key={artwork.id}>
                {artwork.image_id ? (
                  <div className="mb-8">
                    <img
                      className={`${imgStyle} grayscale hover:grayscale-0 hover:scale-110 transition duration-500 cursor-pointer shadow-xl object-cover mx-auto `}
                      src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/400,/0/default.jpg`}
                      alt={artwork.title}
                    />
                    <h2 className="text-center mt-8">
                      {artwork.artist_display}
                    </h2>
                    <h2 className="text-center mt-2">{artwork.title}</h2>
                  </div>
                ) : null}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}
