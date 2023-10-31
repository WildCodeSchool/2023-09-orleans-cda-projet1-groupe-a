import greg from '../assets/images/greg.png';
import ja from '../assets/images/JA.png';
import justin from '../assets/images/justin.png';
import amaury from '../assets/images/amaury.png';
export default function Footer() {
  return (
    <>
      <footer className="mx-4 mb-4 mt-28 rounded-lg bg-light shadow-lg">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col flex-nowrap items-center pt-8 sm:flex-row sm:justify-between md:flex-row md:justify-between lg:flex-row lg:justify-between">
          <img
            src={ja}
            alt="JA"
            className="sm:w-1/10 md:w-1/10 lg:w-1/10 mx-6 w-28"
          />
          <img
            src={justin}
            alt="Justin"
            className="sm:w-1/10 md:w-1/10 lg:w-1/10 mx-6 w-28"
          />
          <img
            src={greg}
            alt="Greg"
            className="sm:w-1/10 md:w-1/10 lg:w-1/10 mx-6 w-28"
          />
          <img
            src={amaury}
            alt="Amaury"
            className="sm:w-1/10 md:w-1/10 lg:w-1/10 mx-11 w-28 pr-8 sm:pr-0 md:pr-0 lg:pr-0"
          />
        </div>
        <div className="sm:w-1/10 md:w-1/10 lg:w-1/10 mx-auto w-28 whitespace-nowrap sm:mt-0 md:mt-0 lg:mt-0">
          Legal notice
        </div>
      </footer>
    </>
  );
}
