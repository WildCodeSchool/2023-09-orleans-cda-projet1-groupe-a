import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home3.png';
import { motion } from 'framer-motion';
export default function HomeContent3() {
  const variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: 'spring',
        bounce: 0.1,
        duration: 1.3,
      },
    },
  };

  return (
    <div className="container mx-auto flex flex-col p-4">
      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="mb-28 flex justify-center md:mb-48"
      >
        <div className="text-1xl h-[10%] sm:text-2xl md:max-w-3xl md:text-4xl">
          <p className="md:mb-4">
            {`Jaga Studio shares its singular collections with
                            our city and the world. We collect, care for, and interpret works of
                            art across time, cultures, geographies, and identities, centering
                            the vision of artists and makers.`}
          </p>

          <p>
            {`We recognize that all art is made
                            in a particular context, demanding continual, dynamic
                            reconsideration in the present. We are a place of gathering; we
                            foster the exchange of ideas and inspire an expansive, inclusive
                            understanding of human creativity.`}
          </p>
        </div>
      </motion.div>

      <div className="mx-auto flex flex-col-reverse sm:mb-8 sm:flex-row-reverse sm:gap-8 sm:duration-75">
        <motion.div
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-end"
        >
          <div className="text-1md max-h-96 max-w-md sm:text-2xl md:text-4xl">
            <p className="md-3 sm:mb-4">
              {`Nestled in the heart of creative expression, 
                                Studio Jaga stands as 
                                a beacon for art aficionados seeking inspiration and intellectual
                                nourishment.`}
            </p>

            <p>
              {`This unique establishment isn't your typical library;
                                it's a sanctuary for the visual and conceptual arts, a realm where
                                the pages come alive through brush strokes, sculptures`}
            </p>
          </div>
        </motion.div>
        <motion.div
          variants={{
            offscreen: {
              y: 350,
              className: 'opacity-0',
            },
            onscreen: {
              y: 50,
              transition: {
                type: 'spring',
                bounce: 0.1,
                duration: 4,
              },
              className: 'opacity-100 text-center',
            },
          }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <img
            src={home2}
            alt="art"
            className="mb-4 h-full w-full object-cover md:h-[557px] md:w-[375px]"
          />
        </motion.div>
      </div>

      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-5 flex flex-col items-center gap-6 sm:flex-row md:mt-28 lg:justify-center"
      >
        <img
          src={home3}
          alt="art"
          className="h-80 w-[70vw] object-cover sm:w-2/4 md:h-[557px] md:w-[375px]"
        />
        <img
          src={home1}
          alt="art"
          className="h-80 w-[70vw] object-cover sm:w-2/4 sm:duration-75 md:h-[557px] md:w-[375px] md:duration-75 lg:ml-[4.5rem] lg:h-[557px] lg:w-[375px] lg:duration-75"
        />
      </motion.div>
    </div>
  );
}
