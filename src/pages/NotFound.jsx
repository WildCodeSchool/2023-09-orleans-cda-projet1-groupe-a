import { useEffect } from 'react';

function NotFound() {
  useEffect(() => {
    function update(event) {
      const x = event.clientX || event.touches[0].clientX;
      const y = event.clientY || event.touches[0].clientY;

      document.documentElement.style.setProperty('--cursorX', x + 'px');
      document.documentElement.style.setProperty('--cursorY', y + 'px');
    }

    document.addEventListener('mousemove', update);
    document.addEventListener('touchmove', update);

    return () => {
      document.removeEventListener('mousemove', update);
      document.removeEventListener('touchmove', update);
    };
  }, []);

  return (
    <>
      <div className="cursor-x-[50px] cursor-y-[50px] before:bg-404 min-h-screen cursor-none bg-[--dark] before:fixed before:block before:h-full before:w-full before:content-['']">
        <div className="hover:opacity-1 absolute bottom-0 left-0 right-0 top-0 text-center">
          <h1 className="mt-[160px] font-aurore text-9xl">404</h1>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}404.png`}
          alt="Page not found"
          className="m-auto h-[700px] object-cover pt-[150px]"
        ></img>
      </div>
    </>
  );
}

export default NotFound;
