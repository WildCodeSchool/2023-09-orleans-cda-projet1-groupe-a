import homeImageLeft from '../assets/images/image-home-l.png';
import home1 from '../assets/home1.png';
import home2 from '../assets/home2.png';

import { motion, useTransform, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { useOutletContext } from 'react-router-dom';

const HomeContent2 = () => {
  const { ref } = useOutletContext();
  /* const ref = useRef(null); */

  const { scrollYProgress } = useScroll({ target: ref });

  const scale = useTransform(scrollYProgress, [0, 1], [0.75, 1.08]);
  /*   const scrollSmooth = useSpring(scrollYProgress, {damping :  50, stiffness: 400}) */

  const translateY1 = useTransform(scrollYProgress, [0, 1], [0, 2000]);

  const translateY2 = useTransform(scrollYProgress, [0, 1], [0, 1970]);

  const translateX2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const translateX3 = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const translateY4 = useTransform(scrollYProgress, [0, 1], [0, 2250]);

  const translateY5 = useTransform(scrollYProgress, [0, 1], [0, 2220]);

  const translateX5 = useTransform(scrollYProgress, [0, 1], [0, 230]);

  const translateY6 = useTransform(scrollYProgress, [0, 1], [0, 2155]);

  const translateX6 = useTransform(scrollYProgress, [0, 1], [0, -190]);

  return (
    <>
      <div
        className="relative m-0 mt-36 h-[2900px] bg-[#f4f4f0] p-0"
        /*  ref={ref} */
      >
        <div className="absolute left-1/2 top-48 z-10 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            src={homeImageLeft}
            className="h-full w-full"
            style={{
              translateY: translateY1,
              scale,
            }}
          ></motion.img>
        </div>
        <div className="absolute left-[45%] top-56 z-30 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            src={home1}
            className="h-full w-full "
            style={{
              translateX: translateX2,
              scale,
              translateY: translateY2,
            }}
          ></motion.img>
        </div>
        <div className="absolute left-[56%] top-56 z-20 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.div
            className="h-full w-full rounded-3xl bg-lime-900"
            style={{
              translateX: translateX3,
              scale,
              translateY: translateY2,
            }}
          ></motion.div>
        </div>
        <div className="absolute left-[44%] top-72 z-30 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            className="h-full w-full"
            src={home2}
            style={{
              translateX: translateX6,
              scale,
              translateY: translateY4,
            }}
          ></motion.img>
        </div>
        <div className="absolute left-[54%] top-80 z-30 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            className="h-full w-full rounded-3xl bg-white"
            style={{
              translateX: translateX5,
              scale,
              translateY: translateY5,
            }}
          ></motion.img>
        </div>
        <div className="absolute left-[50%] top-96 z-30 h-64 w-52 -translate-x-1/2 -translate-y-1/2 transform">
          <motion.img
            className="h-full w-full rounded-3xl bg-red-900"
            style={{
              translateY: translateY6,
              scale,
            }}
          ></motion.img>
        </div>
      </div>
    </>
  );
};

export default HomeContent2;
