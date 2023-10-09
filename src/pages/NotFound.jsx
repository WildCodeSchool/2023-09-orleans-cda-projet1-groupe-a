import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';

function NotFound() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center">
        <p className="text-[--dark] text-[3rem] drop-shadow font-light line-clamp-1 mt-5 mb-10">
          404 - Page not found
        </p>
      </div>
      <div className="flex justify-center">
        <img
          src="/public/pipe.jpg"
          alt="Ceci n'est pas une pipe"
          className=""
        ></img>
      </div>
    </>
  );
}

export default NotFound;
