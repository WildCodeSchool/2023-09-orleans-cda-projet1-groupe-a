function update(light) {
  var x = light.clientX || light.touches[0].clientX;
  var y = light.clientY || light.touches[0].clientY;

  document.documentElement.style.setProperty('--cursorX', x + 'px');
  document.documentElement.style.setProperty('--cursorY', y + 'px');
}

document.addEventListener('mousemove', update);
document.addEventListener('touchmove', update);

function NotFound() {
  return (
    <>
      <div className="cursor-x-[50px] cursor-y-[50px] custom-404 cursor-none">
        <div className="align-items hover:opacity-1 absolute bottom-0 left-0 right-0 top-0 flex h-screen w-screen justify-center">
          <h1 className="mt-5 font-aurore text-9xl">404</h1>
        </div>
        <img
          src="/public/404.jpg"
          alt="Page not found"
          className="h-screen w-screen object-cover"
        ></img>
      </div>
    </>
  );
}

export default NotFound;
