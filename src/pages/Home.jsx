import Loader from '../components/Loader';
import Sidebar from '../components/Sidebar';
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
      <Sidebar />
      {homeVisible && (
        <div className="transform-3d backface-visibility h-screen animate-back bg-[url('/BG.avif')]">
          <NavBar />
          <div className="flex justify-center">
            <h1 className="my-40 line-clamp-1 text-[9rem] font-light text-[#f7f9ef] drop-shadow-[-1px_1px_4px_rgba(38,41,33,0.97)]">
              JAGA STUDIO
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
