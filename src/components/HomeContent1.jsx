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
        viewport={{ once: true }}
        className="my-20 flex flex-col items-center justify-center gap-4"
      >
        <h2 className="text-6xl">Welcome to Jaga </h2>
        <h2 className="text-6xl">Redefining Chicago Art</h2>
      </motion.div>

      <div className="lg-justify-center lg-duration-75 flex flex-col items-center gap-11 md:flex-row md:justify-center md:duration-75 lg:flex-row">
        <motion.img
          variants={pictureAnimation}
          initial={{ x: -350, y: 350 }}
          whileInView="onscreen"
          viewport={{ once: true }}
          className="h-80 w-[70vw] object-cover sm:w-2/4 md:h-[557px] md:w-[375px]"
          src={homeImageLeft}
          alt="coucou"
        />
        <motion.img
          variants={pictureAnimation}
          initial={{ x: 350, y: 350 }}
          whileInView="onscreen"
          viewport={{ once: true }}
          className="h-80 w-[70vw] object-cover sm:w-2/4 md:h-[557px] md:w-[375px]"
          src={homeImageRight}
          alt=""
        />
      </div>
    </>
  );
};

export default HomeContent1;
