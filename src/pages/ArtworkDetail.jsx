import { fetchArtworks } from '../api';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ArtworkDetail() {
  const [artworks, setArtworks] = useState([]);
  const index = 0;
  const search = 'kerry james';

  const artistName = artworks[0]?.artist_display || '';
  const artworkDimensions = artworks[index]?.dimensions || '';
  const artworkPlace = artworks[index]?.place_of_origin || '';
  const artworkDisplay = artworks[index]?.medium_display || '';
  const artworkTitle = artworks[index]?.title || '';
  const artworkDate = artworks[index]?.date_display || '';
  const artworkImage =
    `https://www.artic.edu/iiif/2/${artworks[index]?.image_id}/full/400,/0/default.jpg` ||
    '';
  const artworkText = artworks[index]?.thumbnail.alt_text || '';

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

  const variants = {
    visible: {
      transition: { staggerChildren: 0.35 },
    },
  };

  const item = {
    visible: {
      opacity: 1,
      x: 0,
      transition: { ease: 'easeInOut', duration: 1 },
    },
    hidden: { opacity: 0, x: 100 },
  };

  return (
    <>
      <div className="mt-52 flex">
        <div className="w-2/4">
          <motion.div
            whileInView="onscreen"
            viewport={{ once: true }}
            initial={{ x: -600 }}
            animate={{ x: 0, transition: { ease: 'easeInOut', duration: 2 } }}
            className="flex h-full items-center justify-center"
          >
            <img
              src={artworkImage}
              alt={artworkTitle}
              className="relative left-[80px] max-h-full max-w-full object-cover p-9 shadow-inner transition duration-500 hover:scale-125"
            ></img>
          </motion.div>
        </div>
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          className="w-2/4 pb-9 pe-24 ps-9 pt-4 text-lg uppercase"
        >
          <motion.li variants={item}>
            <p className="mb-6">
              {artworkTitle ? artworkTitle : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p>Artist :</p>
            <p className="mb-4"> {artistName ? artistName : 'not specified'}</p>
          </motion.li>
          <motion.li variants={item}>
            <p>Description :</p>
            <p className="mb-4">
              {artworkText ? artworkText : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="mb-4">
              Year : {artworkDate ? artworkDate : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="mb-4">
              Place of origin : {artworkPlace ? artworkPlace : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="mb-4">
              Method : {artworkDisplay ? artworkDisplay : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="mb-4">
              Dimension :{' '}
              {artworkDimensions ? artworkDimensions : 'not specified'}
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
}

export default ArtworkDetail;
