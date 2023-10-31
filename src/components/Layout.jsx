import { useRef } from 'react';
import Loader from './Loader';
import NavBar from './NavBar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
import { useScroll } from 'framer-motion';
import ScrollTopButton from './ScrollTopButton';

export default function Layout() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ container: ref });

  return (
    <>
      <Loader />
      <NavBar scrollRef={ref} scrollYProgress={scrollYProgress} />
      <div ref={ref} className="max-h-screen overflow-x-hidden">
        <Outlet context={{ scrollYProgress }} />
        <ScrollTopButton relativeTo={ref.current} />
        <Footer className="fixed bottom-0" />
      </div>
    </>
  );
}
