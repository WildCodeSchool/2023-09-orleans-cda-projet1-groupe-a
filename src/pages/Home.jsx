import HomeContent1 from '../components/HomeContent1';
import HomeContent3 from '../components/HomeContent3';

const images = [
  'BG.avif',
  'BG1.jpg',
  'BG2.jpg',
  'BG3.jpg',
  'BG4.jpg',
  'BG5.jpg',
  'BG6.jpg',
  'BG7.jpg',
  'BG8.jpg',
  'BG9.jpg',
  'BG10.jpg',
  'BG11.jpg',
];

const randomImage = Math.floor(Math.random() * images.length);

function Home() {
  return (
    <>
      <div
        className={`transform-3d backface-visibility h-screen animate-back bg-[url('/${images[randomImage]}')]`}
      >
        <div className="flex justify-center">
          <h1 className="my-64 line-clamp-1 text-[9rem] font-light text-[#f7f9ef] drop-shadow-[-1px_1px_4px_rgba(38,41,33,0.97)]">
            JAGA STUDIO
          </h1>
        </div>
      </div>
      <HomeContent1 />
      <HomeContent3 />
    </>
  );
}

export default Home;
