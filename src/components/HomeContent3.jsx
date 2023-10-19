import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';
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
        viewport={{ once: false, amount: 0.1 }}
        className="mb-48 flex justify-center"
      >
        <div className="max-w-3xl text-lg">
          <p className="mb-4">
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

      <div className="mx-auto flex flex-row-reverse gap-8">
        <motion.div
          variants={variants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.1 }}
          className="flex justify-end"
        >
          <div className="max-h-96 max-w-md text-lg">
            <p className="mb-4">
              {`Nestled in the heart of creative expression, 
                                Studio Jaga stands as 
                                a beacon for art aficionados seeking inspiration and intellectual
                                nourishment.`}
            </p>

            <p className="mb-4">
              {`This unique establishment isn't your typical library;
                                it's a sanctuary for the visual and conceptual arts, a realm where
                                the pages come alive through brush strokes, sculptures,`}
            </p>

            <p className="mb-4">
              {`and the boundless creativity of the human mind. Founded with a vision to
                                blend literature and art seamlessly, Studio Jaga transcends the
                                traditional boundaries of a library.`}
            </p>

            <p>
              {`It's a treasure trove of
                                artistic wisdom, a place where volumes of creativity and
                                imagination are bound not just in books, but also in the vibrant
                                artworks adorning the walls.`}
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
          viewport={{ once: false, amount: 0.1 }}
        >
          <img src={home2} alt="art" className="h-[557px] w-[375px]" />
        </motion.div>
      </div>

      <motion.div
        variants={variants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.1 }}
        className="flex justify-end"
      >
        <img src={home1} alt="art" className="h-[557px] w-[375px]" />
      </motion.div>
    </div>
  );
}
