import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 1000 * 5);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, ease: 'easeInOut' }}
          >
            <div className="bg-[#f4f4f0]">
              <svg
                className="logo w-screen h-screen "
                version="1.0"
                xmlns="http://www.w3.org/2000/svg"
                width="300.000000pt"
                height="300.000000pt"
                viewBox="0 0 300.000000 300.000000"
                preserveAspectRatio="xMidYMid meet"
              >
                <metadata>
                  Created by potrace 1.10, written by Peter Selinger 2001-2011
                </metadata>
                <g
                  transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                  fill="#000000"
                  stroke="none"
                >
                  <path
                    className="fill-none stroke-black stroke-[14px] stroke-miterlimit stroke-round stroke-dasharray animate-lines"
                    d="M840 1510 l0 -720 705 0 705 0 0 720 0 720 -705 0 -705 0 0 -720z
m1350 0 l0 -660 -645 0 -645 0 0 660 0 660 645 0 645 0 0 -660z"
                  />
                  <path
                    className="fill-none stroke-black stroke-[14px] stroke-miterlimit stroke-round stroke-dasharray animate-lines"
                    d="M1647 1822 c-59 -152 -108 -281 -110 -287 -3 -13 93 -19 105 -7 5 5
33 80 63 168 30 87 56 152 59 144 2 -8 28 -84 56 -167 l53 -153 53 0 c30 0 54
4 54 8 0 5 -42 116 -93 248 -52 131 -99 256 -106 276 -7 21 -16 40 -20 42 -4
3 -55 -120 -114 -272z m148 76 c32 -85 32 -86 79 -201 20 -49 36 -99 36 -110
0 -36 -16 -3 -56 117 -23 67 -47 120 -64 140 l-29 31 -30 -29 c-22 -21 -40
-59 -66 -135 -37 -110 -50 -139 -59 -130 -5 4 40 129 84 234 5 11 12 31 16 45
13 48 43 110 53 110 5 0 21 -33 36 -72z"
                  />
                  <path
                    className="fill-none stroke-black stroke-[14px] stroke-miterlimit stroke-round stroke-dasharray animate-lines"
                    d="M1312 2044 l3 -46 103 -1 102 -2 0 48 0 47 -106 0 -105 0 3 -46z"
                  />
                  <path
                    className="fill-none stroke-black stroke-[14px] stroke-miterlimit stroke-round stroke-dasharray animate-lines"
                    d="M1410 1781 c0 -143 -4 -151 -86 -151 l-55 0 3 -52 3 -53 63 2 c72 2
125 25 156 67 18 24 21 45 24 167 l4 139 -56 0 -56 0 0 -119z m70 -34 c0 -100
-17 -143 -66 -163 -20 -8 -48 -13 -63 -12 l-26 4 30 8 c42 12 83 53 95 95 5
20 10 68 10 106 0 49 3 65 10 55 5 -8 10 -50 10 -93z"
                  />
                  <path
                    className="fill-none stroke-black stroke-[14px] stroke-miterlimit stroke-round stroke-dasharray animate-lines"
                    d="M1725 1501 c-9 -9 -5 -41 5 -41 6 0 10 -5 10 -11 0 -5 -4 -7 -10 -4
-5 3 -10 1 -10 -4 0 -6 7 -11 15 -11 8 0 15 9 15 20 0 11 -4 20 -10 20 -5 0
-10 5 -10 10 0 23 25 3 31 -25 l6 -30 2 33 c1 40 21 43 21 2 0 -27 3 -30 30
-30 28 0 30 3 30 35 0 28 -4 35 -19 35 -15 0 -21 -8 -24 -32 l-4 -33 -1 33
c-1 17 -5 33 -9 33 -24 4 -64 4 -68 0z"
                  />
                  <path
                    className="fill-none stroke-black stroke-[14px] stroke-miterlimit stroke-round stroke-dasharray animate-lines"
                    d="M1880 1465 c0 -24 5 -35 15 -35 10 0 15 11 15 35 0 24 -5 35 -15 35
-10 0 -15 -11 -15 -35z"
                  />
                  <path
                    className="fill-none stroke-black stroke-[14px] stroke-miterlimit stroke-round stroke-dasharray animate-lines"
                    d="M1287 1469 c-81 -19 -143 -65 -180 -134 -30 -55 -32 -221 -3 -275 53
-100 131 -138 299 -147 l107 -6 0 182 0 181 -110 0 -110 0 0 -55 0 -55 58 0
57 0 -2 -72 -1 -73 -49 4 c-67 5 -114 31 -142 81 -20 35 -23 52 -19 110 7 123
55 161 214 168 l104 5 0 48 0 49 -92 -1 c-51 -1 -110 -5 -131 -10z m163 -39
c0 -6 -28 -10 -65 -10 -104 0 -173 -40 -217 -124 -16 -31 -19 -54 -16 -112 3
-61 8 -79 34 -116 35 -51 93 -86 157 -94 40 -6 49 -3 71 19 23 23 26 34 26 93
0 56 -4 72 -22 91 -12 13 -32 23 -45 23 -13 0 -23 5 -23 10 0 7 22 10 58 8
l57 -3 3 -126 c2 -110 0 -127 -14 -133 -27 -10 -184 13 -224 34 -93 48 -134
168 -99 293 14 50 71 113 117 128 68 22 202 35 202 19z"
                  />
                  <path
                    className="fill-none stroke-black stroke-[14px] stroke-miterlimit stroke-round stroke-dasharray animate-lines"
                    d="M1539 1458 c5 -13 54 -140 109 -283 55 -143 104 -259 108 -258 5 1
183 447 184 461 0 1 -24 2 -54 2 l-53 0 -32 -86 c-17 -47 -31 -92 -31 -99 0
-8 -4 -16 -9 -19 -5 -3 -33 64 -62 149 l-54 155 -57 0 c-56 0 -57 -1 -49 -22z
m122 -154 c25 -69 50 -119 67 -137 l28 -28 26 24 c14 13 36 52 48 86 22 60 44
93 32 49 -16 -61 -99 -263 -107 -262 -6 1 -21 31 -34 65 -13 35 -46 120 -73
190 -26 69 -48 129 -48 134 0 27 26 -25 61 -121z"
                  />
                </g>
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Loader;
