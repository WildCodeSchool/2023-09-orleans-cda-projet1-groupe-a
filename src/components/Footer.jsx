import greg from '../assets/greg.png';
import ja from '../assets/JA.png';
import justin from '../assets/justin.png';
import amaury from '../assets/amaury.png';
export default function Footer() {
  return (
    <footer className="mt-20 h-full w-full px-32 text-center">
      <div className="flex flex-row items-center gap-8 pt-10">
        <div className="mx-auto flex">
          <img src={ja} alt="JA" className="w-48" />
          <img src={justin} alt="Justin" className=" w-48" />
          <img src={greg} alt="Greg" className=" w-48" />
          <img src={amaury} alt="Amaury" className="w-48" />
        </div>
        <p className="mb-4 text-black">Legal Notice</p>
      </div>
    </footer>
  );
}
