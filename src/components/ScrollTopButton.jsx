import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
function ScrollTopButton({ relativeTo }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    relativeTo.current.addEventListener('scroll', () => {
      if (relativeTo.current.scrollTop > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, [relativeTo]);

  const goToTop = () => {
    relativeTo.current.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showTopBtn && (
        <button
          className="fixed bottom-[35px] right-[30px] h-[50px] w-[60px] cursor-pointer"
          onClick={goToTop}
        >
          <ChevronUp
            color="#000000"
            absoluteStrokeWidth
            className="h-12 w-12"
          />
        </button>
      )}
    </>
  );
}

export default ScrollTopButton;
