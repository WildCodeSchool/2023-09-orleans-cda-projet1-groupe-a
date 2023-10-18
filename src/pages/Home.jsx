import myImage from '../assets/images/image-l.png';
import myImage2 from '../assets/images/image-r.png';
import { motion, AnimatePresence } from 'framer-motion';

function Home() {
  const variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 3,
      transition: {
        type: 'spring',
        bounce: 0.1,
        duration: 1,
      },
    },
  };

  const variantPicture = {
    offscreen: {
      y: 350,
      x: 350,
    },
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

  const variantPicture2 = {
    offscreen: {
      y: 350,
      x: -350,
    },
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

  return (
    <>
      <div className="transform-3d backface-visibility h-screen animate-back bg-[url('/BG.avif')]">
        <div className="flex justify-center">
          <h1 className="my-64 line-clamp-1 text-[9rem] font-light text-[#f7f9ef] drop-shadow-[-1px_1px_4px_rgba(38,41,33,0.97)]">
            JAGA STUDIO
          </h1>
        </div>
      </div>
      <AnimatePresence>
        <motion.div
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          className="my-20 flex flex-col items-center justify-center gap-4"
        >
          <h2 className="text-6xl">Welcome to Jaga </h2>
          <h2 className="text-6xl">Redefining Chicago Art</h2>
        </motion.div>

        <div className="flex gap-11">
          <motion.img
            variants={variantPicture2}
            initial="offscreen"
            whileInView="onscreen"
            className="w-[48%]"
            src={myImage}
            alt=""
          />
          <motion.img
            variants={variantPicture}
            initial="offscreen"
            whileInView="onscreen"
            className="w-[48%]"
            src={myImage2}
            alt=""
          />
        </div>
      </AnimatePresence>
    </>
  );
}

export default Home;
