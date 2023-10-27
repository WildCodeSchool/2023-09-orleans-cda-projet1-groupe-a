import { fetchArtworksById } from '../api';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

function Artworks() {
  const [artwork, setArtwork] = useState([]);
  const params = useParams();
  const id = params.artwork_id;

  const artistName = artwork?.artist_display || '';
  const artworkDimensions = artwork?.dimensions || '';
  const artworkPlace = artwork?.place_of_origin || '';
  const artworkDisplay = artwork?.medium_display || '';
  const artworkTitle = artwork?.title || '';
  const artworkDate = artwork?.date_display || '';
  const artworkImage =
    `https://www.artic.edu/iiif/2/${artwork?.image_id}/full/400,/0/default.jpg` ||
    '';
  const artworkText = artwork?.thumbnail?.alt_text || '';

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchArtworksById(id, signal)
      .then((data) => {
        setArtwork(data);
      })
      .catch((error) => {
        throw new Error('An error occurred while retrieving the data.', error);
      });

    return function cleanup() {
      controller.abort();
    };
  }, [id]);

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
            viewport={{ once: false }}
            initial={{ x: -600 }}
            animate={{ x: 0, transition: { ease: 'easeInOut', duration: 2 } }}
            className="flex h-full items-center justify-center"
          >
            <img
              src={artworkImage}
              alt={artworkTitle}
              className="relative left-[80px] max-h-[600px] max-w-[800px] object-cover p-9 shadow-inner transition duration-500 hover:scale-125"
            ></img>
          </motion.div>
        </div>
        <motion.ul
          variants={variants}
          initial="hidden"
          animate="visible"
          className="my-auto w-2/4 pb-9 pe-24 ps-9 pt-4 text-lg uppercase"
        >
          <motion.li variants={item}>
            <p className="mb-6">
              {artworkTitle ? artworkTitle : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="bg-transition hover:bg-after bg-before bg-position w-[70px] bg-no-repeat">
              Artist :
            </p>
            <p className="mb-4"> {artistName ? artistName : 'not specified'}</p>
          </motion.li>
          <motion.li variants={item}>
            <p className="bg-transition hover:bg-after bg-before bg-position w-[130px] bg-no-repeat">
              Description :
            </p>
            <p className="mb-4">
              {artworkText ? artworkText : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="bg-transition hover:bg-after bg-before bg-position w-[60px] bg-no-repeat">
              Year :
            </p>
            <p className="mb-4">
              {artworkDate ? artworkDate : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="bg-transition hover:bg-after bg-before bg-position w-[165px] bg-no-repeat">
              Place of origin :
            </p>
            <p className="mb-4">
              {artworkPlace ? artworkPlace : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="bg-transition hover:bg-after bg-before bg-position w-[90px] bg-no-repeat">
              Method :
            </p>
            <p className="mb-4">
              {artworkDisplay ? artworkDisplay : 'not specified'}
            </p>
          </motion.li>
          <motion.li variants={item}>
            <p className="bg-transition hover:bg-after bg-before bg-position w-[125px] bg-no-repeat">
              Dimensions :
            </p>
            <p className="mb-4">
              {artworkDimensions ? artworkDimensions : 'not specified'}
            </p>
          </motion.li>
        </motion.ul>
      </div>
    </>
  );
}

export default Artworks;
