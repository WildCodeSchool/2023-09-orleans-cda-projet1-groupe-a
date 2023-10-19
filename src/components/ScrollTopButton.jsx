import React from 'react';
import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
function ScrollTopButton({ relativeTo }) {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    relativeTo.addEventListener('scroll', () => {
      if (relativeTo.scrollTop > 100) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    relativeTo.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {showTopBtn && (
        <button
          className="fixed bottom-[40px] right-[50px] h-[50px] w-[60px] cursor-pointer"
          onClick={goToTop}
        >
          <ChevronUp
            color="#000000"
            absoluteStrokeWidth
            className="h-10 w-10"
          />
        </button>
      )}
    </>
  );
}

export default ScrollTopButton;
