import homeImageLeft from '../assets/images/image-home-l.png';
import homeImageRight from '../assets/images/image-home-r.png';
import { motion } from 'framer-motion';

const tiltleAnimation = {
  onscreen: {
    y: 5,
    transition: {
      duration: 1,
    },
  },
};

const pictureAnimation = {
  onscreen: {
    y: 3,
    x: 0,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 1.9,
    },
  },
};

const HomeContent1 = () => {
  return (
    <>
      <motion.div
        variants={tiltleAnimation}
        initial={{ y: 300 }}
        whileInView="onscreen"
        className="my-20 flex flex-col items-center justify-center gap-4"
      >
        <h2 className="text-6xl">Welcome to Jaga </h2>
        <h2 className="text-6xl">Redefining Chicago Art</h2>
      </motion.div>

      <div className="flex gap-11">
        <motion.img
          variants={pictureAnimation}
          initial={{ x: -350, y: 350 }}
          whileInView="onscreen"
          className="w-[48%]"
          src={homeImageLeft}
          alt="coucou"
        />
        <motion.img
          variants={pictureAnimation}
          initial={{ x: 350, y: 350 }}
          whileInView="onscreen"
          className="w-[48%]"
          src={homeImageRight}
          alt=""
        />
      </div>
    </>
  );
};

export default HomeContent1;
