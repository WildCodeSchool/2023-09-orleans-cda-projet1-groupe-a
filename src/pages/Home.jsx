import HomeContent1 from '../components/HomeContent1';
import HomeContent2 from '../components/HomeContent2';
import HomeContent3 from '../components/HomeContent3';

/* import { useScroll } from 'framer-motion'; */

function Home() {
  /* const { scrollYProgress } = useScroll({ target: refImage }); */

  return (
    <>
      <div className="transform-3d backface-visibility h-screen animate-back bg-[url('/BG.avif')]">
        <div className="flex justify-center">
          <h1 className="my-64 line-clamp-1 text-[9rem] font-light text-[#f7f9ef] drop-shadow-[-1px_1px_4px_rgba(38,41,33,0.97)]">
            JAGA STUDIO
          </h1>
        </div>
      </div>
      <HomeContent1 />
      <HomeContent2 />
      <HomeContent3 />
    </>
  );
}

export default Home;
