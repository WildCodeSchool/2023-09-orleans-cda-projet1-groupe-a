import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';

function Home() {
  const [homeVisible, setHomeVisible] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setHomeVisible(true);
    }, 1000 * 5);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Loader />

      {homeVisible && (
        <div className="bg-[url('/BG.avif')] h-screen transform-3d backface-visibility animate-back">
            <NavBar />
          <div className="flex justify-center">
            <h1 className="text-[#f7f9ef] text-[9rem] drop-shadow-[-1px_1px_4px_rgba(38,41,33,0.97)] font-light line-clamp-1 my-40">
              JAGA STUDIO
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
