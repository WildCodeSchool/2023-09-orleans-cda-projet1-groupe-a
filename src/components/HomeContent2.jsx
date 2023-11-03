import { useOutletContext } from 'react-router-dom';
import home6 from '../assets/images/home-6.jpg';
// import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home-3.jpg';
import home4 from '../assets/images/home-4.jpg';
import home5 from '../assets/images/home-5.jpg';
import { motion, useTransform } from 'framer-motion';

const HomeContent2 = () => {
  const { scrollYProgress } = useOutletContext();

  const scale = useTransform(scrollYProgress, [0.2, 0.65], [0.65, 1.15]);

  const translateY1 = useTransform(scrollYProgress, [0.2, 0.6], [0, 2000]);
  const translateY2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 1970]);
  const translateY5 = useTransform(scrollYProgress, [0.2, 0.6], [0, 2265]);

  const translateX1 = useTransform(scrollYProgress, [0.2, 0.6], [0, -235]);
  const translateX2 = useTransform(scrollYProgress, [0.2, 0.6], [0, 220]);

  return (
    <>
      <div className="relative m-0 h-[360vh] bg-[#f4f4f0] p-0 md:h-[370vh] 2xl:h-[290vh]">
        <div className="absolute left-1/2 top-56 z-10 h-[40vh] w-[20vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[33vh] md:w-[28vh] lg:h-[50vh] lg:w-[40vh] 2xl:h-[50vh] 2xl:w-[40vh]">
          <motion.img
            src={home5}
            className="h-full w-full object-cover shadow-md"
            style={{
              translateY: translateY1,
              scale,
            }}
          />
        </div>
        <div className="absolute left-[50%] top-64 z-30 h-[40vh]  w-[25vh] -translate-x-1/2 -translate-y-1/2 transform md:h-[33vh] md:w-[28vh] lg:left-[42%] lg:h-[50vh] lg:w-[40vh] 2xl:h-[50vh] 2xl:w-[40vh]">
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
        <div className="absolute left-[50%] top-40 z-20 h-[60vh] w-[25vh] -translate-x-1/2 -translate-y-1/2  transform md:h-[33vh] md:w-[28vh] lg:left-[60%] lg:top-64 lg:h-[91vh] lg:w-[40vh] 2xl:h-[50vh] 2xl:w-[40vh]">
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
        <div className="absolute left-[35%] top-[30vh] z-30 h-[20vh] w-[39vh]  -translate-x-1/2 -translate-y-1/2 transform md:h-[40vh] md:w-[83vh] lg:left-[38.1%] lg:top-[49vh] lg:h-[39vh] lg:w-[78vh] 2xl:h-[40vh] 2xl:w-[22vh]">
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
