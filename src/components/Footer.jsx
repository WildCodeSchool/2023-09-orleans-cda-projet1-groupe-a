import signature from '../assets/signature.png';
import ja from '../assets/JA.png';
import justin from '../assets/Justin.png';
import amaury from '../assets/amaury.png';
export default function Footer() {
  return (
    <footer className="mt-20 h-full w-full text-center ">
      <div className="flex flex-row items-center gap-8 pt-10">
        <img src={ja} alt="JA" className=" ml-16 w-48" />
        <img src={justin} alt="Justin" className=" w-48" />
        <img src={signature} alt="Greg" className=" w-48" />
        <img src={amaury} alt="Amaury" className=" mr-80 w-48" />
        <p className="mb-4 flex items-center text-black">Legal Notice</p>
      </div>
    </footer>
  );
}
