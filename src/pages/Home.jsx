import Loader from '../components/Loader';
import { useState, useEffect } from 'react';

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
        <div className="bg-[url('/BG.avif')] w-screen h-screen transform-3d backface-visibility animate-back">
          <div className="flex justify-center items-center h-screen">
            <h1 className="text-center text-[#f7f9ef] text-[9rem] drop-shadow-[-1px_1px_4px_rgba(38,41,33,0.97)] font-light line-clamp-1">
              JAGA STUDIO
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
