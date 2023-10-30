import { useOutletContext } from 'react-router-dom';
import home1 from '../assets/images/home1.png';
import home2 from '../assets/images/home2.png';
import home3 from '../assets/images/home3.png';
import home4 from '../assets/images/home4.png';
import home5 from '../assets/images/home5.png';
import home6 from '../assets/images/home6.png';

import { motion, useTransform } from 'framer-motion';

const HomeContent2 = () => {
  const { scrollYProgress } = useOutletContext();

  const scale = useTransform(scrollYProgress, [0.2, 0.65], [0.65, 1.15]);

  const translateY1 = useTransform(scrollYProgress, [0.2, 0.65], [0, 2000]);
  const translateY2 = useTransform(scrollYProgress, [0.2, 0.65], [0, 1970]);
  const translateY3 = useTransform(scrollYProgress, [0.2, 0.65], [0, 2280]);
  const translateY5 = useTransform(scrollYProgress, [0.2, 0.65], [0, 2250]);

  const translateX1 = useTransform(scrollYProgress, [0.2, 0.65], [0, -235]);
  const translateX2 = useTransform(scrollYProgress, [0.2, 0.65], [0, 220]);
  const translateX3 = useTransform(scrollYProgress, [0.2, 0.65], [0, -220]);

  return (
    <>
      <div className="relative m-0 h-[300vh] bg-[#f4f4f0] p-0">
        <div className="absolute left-1/2 top-56 z-10 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            src={home3}
            className="h-full w-full shadow-md"
            style={{
              translateY: translateY1,
              scale,
            }}
          />
        </div>
        <div className="absolute left-[47%] top-64 z-30 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            src={home1}
            className="h-full w-full shadow-md"
            style={{
              translateX: translateX1,
              scale,
              translateY: translateY2,
            }}
          />
        </div>
        <div className="absolute left-[54%] top-64 z-20 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            src={home4}
            className="h-full w-full shadow-md"
            style={{
              translateX: translateX2,
              scale,
              translateY: translateY2,
            }}
          />
        </div>
        <div className="absolute left-[46%] top-72 z-30 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            className="h-full w-full shadow-md"
            src={home2}
            style={{
              translateX: translateX3,
              scale,
              translateY: translateY3,
            }}
          />
        </div>
        <div className="absolute left-[54%] top-72 z-30 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            className="h-full w-full shadow-md"
            src={home5}
            style={{
              translateX: translateX2,
              scale,
              translateY: translateY3,
            }}
          />
        </div>
        <div className="absolute left-[50%] top-80 z-30 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            className="h-full w-full shadow-md"
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
