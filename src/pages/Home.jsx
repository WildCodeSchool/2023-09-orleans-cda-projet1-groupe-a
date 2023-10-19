import HomeContaint3 from '../components/HomeContaint3';

function Home() {
  return (
    <>
      <div className="transform-3d backface-visibility h-screen animate-back bg-[url('/BG.avif')]">
        <div className="flex justify-center">
          <h1 className="my-64 line-clamp-1 text-[9rem] font-light text-[#f7f9ef] drop-shadow-[-1px_1px_4px_rgba(38,41,33,0.97)]">
            JAGA STUDIO
          </h1>
        </div>
      </div>
      <HomeContaint3 />
    </>
  );
}

export default Home;
