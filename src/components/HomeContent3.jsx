import home1 from '../assets/images/home-1.png';
import home2 from '../assets/images/home-2.png';
import home3 from '../assets/images/home-3.png';
import { motion, useTransform } from 'framer-motion';
import { useOutletContext } from 'react-router-dom';

export default function HomeContent3() {
  const { scrollYProgress } = useOutletContext();

  const translateX1 = useTransform(scrollYProgress, [0.75, 0.84], [300, 0]);
  const translateX2 = useTransform(scrollYProgress, [0.75, 0.84], [-300, 0]);

  const translateY1 = useTransform(scrollYProgress, [0.87, 0.92], [200, 0]);
  const translateY2 = useTransform(scrollYProgress, [0.9, 1], [250, 0]);

  return (
    <div className="container mx-auto flex flex-col p-4">
      <motion.div className="mb-28 flex justify-center md:mb-48">
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
          style={{
            translateX: translateX1,
          }}
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
          style={{
            translateX: translateX2,
          }}
        >
          <img
            src={home2}
            alt="art"
            className="mb-24 h-80 w-[70vw] object-cover md:h-[557px] md:w-[375px]"
          />
        </motion.div>
      </div>

      <div className="mt-5 flex flex-col items-center gap-6 sm:flex-row md:mt-28 lg:justify-center">
        <motion.img
          style={{
            translateY: translateY1,
          }}
          src={home3}
          alt="art"
          className="h-80 w-[70vw] object-cover sm:w-2/4 md:h-[557px] md:w-[375px]"
        />
        <motion.img
          style={{
            translateY: translateY2,
          }}
          src={home1}
          alt="art"
          className="h-80 w-[70vw] object-cover sm:w-2/4 sm:duration-75 md:h-[557px] md:w-[375px] md:duration-75 lg:ml-[4.5rem] lg:h-[557px] lg:w-[375px] lg:duration-75"
        />
      </div>
    </div>
  );
}
