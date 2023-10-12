function NotFound() {
  return (
    <>
      <div>
        <div className="align-items absolute bottom-0 left-0 right-0 top-0 flex h-screen w-screen justify-center">
          <h1 className="text-9xl font-black">404</h1>
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
