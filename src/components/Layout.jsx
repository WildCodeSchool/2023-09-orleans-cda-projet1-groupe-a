import { useRef } from 'react';
import Loader from './Loader';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  const ref = useRef(null);

  return (
    <>
      <Loader />
      <NavBar scrollRef={ref} />
      <div ref={ref} className="overflow-hidden">
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
