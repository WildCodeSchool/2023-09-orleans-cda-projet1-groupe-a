import greg from '../assets/images/greg.png';
import ja from '../assets/images/JA.png';
import justin from '../assets/images/justin.png';
import amaury from '../assets/images/amaury.png';
export default function Footer() {
  return (
    <>
      <footer className="mx-4 mb-4 mt-28 rounded-lg bg-light shadow-lg">
        <div className="mx-auto flex w-full max-w-screen-xl flex-wrap items-center justify-between p-2">
          <span>
            <img src={ja} alt="JA" className="mx-11 w-28" />
          </span>
          <span>
            <img src={justin} alt="Justin" className="mx-11 w-28" />
          </span>
          <span>
            <img src={greg} alt="Greg" className="mx-11 w-28" />
          </span>
          <span>
            <img src={amaury} alt="Amaury" className="mx-11 w-28" />
          </span>
          <span className="mt-3">
            <div className="mx-11 mb-4">Legal notice</div>
          </span>
        </div>
      </footer>
    </>
  );
}
