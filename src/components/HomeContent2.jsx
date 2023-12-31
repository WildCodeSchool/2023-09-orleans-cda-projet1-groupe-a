import { useOutletContext } from 'react-router-dom';
import home6 from '../assets/images/home-6.jpg';
import home3 from '../assets/images/home-3.jpg';
import home4 from '../assets/images/home-4.jpg';
import home5 from '../assets/images/home-5.jpg';
import { motion, useTransform } from 'framer-motion';

const HomeContent2 = () => {
  const { scrollYProgress } = useOutletContext();

  const scale = useTransform(scrollYProgress, [0.2, 0.65], [0.65, 1.15]);

  const translateY1 = useTransform(scrollYProgress, [0.2, 0.6], [0, 2000]);
  const translateY2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1970]);
  const translateY5 = useTransform(scrollYProgress, [0.2, 0.6], [0, 2276]);

  const translateX1 = useTransform(scrollYProgress, [0.2, 0.6], [0, -235]);
  const translateX2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 220]);

  return (
    <>
      <div className="relative m-0 h-[360vh] bg-[#f4f4f0] p-0 md:h-[370vh] 2xl:h-[290vh]">
        <div className="absolute left-1/2 top-56 z-10 h-[40vh] w-[20vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[50vh] md:w-[40vh] lg:h-[50vh] lg:w-[40vh] 2xl:left-[51%] 2xl:h-[50vh] 2xl:w-[37vh]">
          <motion.img
            src={home5}
            className="h-full w-full object-cover shadow-md"
            style={{
              translateY: translateY1,
              scale,
            }}
          />
        </div>
        <div className="absolute left-[50%] top-64 z-30 h-[40vh]  w-[25vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[40vh] md:w-[40vh] lg:left-[42%] lg:h-[50vh] lg:w-[40vh] 2xl:left-[38%] 2xl:h-[50vh] 2xl:w-[38vh]">
          <motion.img
            src={home3}
            className="h-full w-full object-cover shadow-md"
            style={{
              translateX: translateX1,
              scale,
              translateY: translateY2,
            }}
          />
        </div>
        <div className="absolute left-[50%] top-40 z-20 h-[60vh] w-[25vh] -translate-x-1/2 -translate-y-1/2  transform md:h-[91vh] md:w-[40vh] lg:left-[60%] lg:top-64 lg:h-[91vh] lg:w-[40vh] 2xl:left-[64%] 2xl:top-[25vh] 2xl:h-[84.2vh] 2xl:w-[35vh]">
          <motion.img
            src={home4}
            className="absolute top-48 h-full w-full object-cover shadow-md"
            style={{
              translateX: translateX2,
              scale,
              translateY: translateY2,
            }}
          />
        </div>
        <div className="absolute left-[35%] top-[30vh] z-30 h-[20vh] w-[39vh]  -translate-x-1/2 -translate-y-1/2 transform md:h-[38.1vh] md:w-[78vh] lg:left-[38.1%] lg:top-[49vh] lg:h-[39vh] lg:w-[78vh] 2xl:left-[38.2%] 2xl:top-[44vh] 2xl:h-[32vh] 2xl:w-[78.1vh]">
          <motion.img
            className="h-full w-full object-cover shadow-md"
            src={home6}
            style={{
              translateY: translateY5,
              scale,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default HomeContent2;
