import { useState, useEffect } from 'react';

function Artist() {
  const [index, setIndex] = useState(0);
  const cards = [
    { id: '1', image: '/public/1.jpeg', title: 'Titre 1' },
    { id: '2', image: '/public/2.jpeg', title: 'Titre 2' },
    { id: '3', image: '/public/3.jpeg', title: 'Titre 3' },
    { id: '4', image: '/public/4.jpeg', title: 'Titre 4' },
    { id: '5', image: '/public/5.jpeg', title: 'Titre 5' },
    { id: '6', image: '/public/6.jpeg', title: 'Titre 6' },
    { id: '7', image: '/public/7.jpeg', title: 'Titre 7' },
  ];

  const title = cards[index].title;

  const mod = (n, m) => {
    let result = n % m;
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((index + 1) % cards.length);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, [index]);

  return (
    <div>
      <h1 className="text-center my-20 text-5xl font-medim drop-shadow-md">
        {title}
      </h1>
      <div className="container w-full h-full">
        <div className="carousel flex items-center w-full h-full">
          {cards.map((item, i) => {
            const indexLeft = mod(index - 1, cards.length);
            const indexRight = mod(index + 1, cards.length);
            const indexLeft2 = mod(index + 1, cards.length);
            const indexRight2 = mod(index - 1, cards.length);
            const indexLeft3 = mod(index - 2, cards.length);
            const indexRight3 = mod(index + 2, cards.length);

            let className = '';

            if (i === index) {
              className = 'card card--active opacity-100 z-[99] scale-100';
            } else if (i === indexRight) {
              className =
                'card card--right duration-500 opacity-90 scale-[0.8] translate-x-[125%]';
            } else if (i === indexLeft) {
              className =
                'card card--left duration-500 opacity-90 scale-[0.8] translate-x-[-125%]';
            } else if (i === indexRight2) {
              className =
                'card card--right2 duration-500 opacity-60 scale-[0.8] translate-x-[150%]';
            } else if (i === indexLeft2) {
              className =
                'card card--left2 duration-500 opacity-60 scale-[0.8] translate-x-[-150%]';
            } else if (i === indexRight3) {
              className =
                'card card--right3 duration-500 opacity-10 scale-[0.8] translate-x-[100%]';
            } else if (i === indexLeft3) {
              className =
                'card card--left3 duration-500 opacity-10 scale-[0.8] translate-x-[-100%]';
            } else {
              className = 'card';
            }

            return (
              <div key={item.id} className="carousel-item">
                <img
                  src={item.image}
                  alt=""
                  className={`${className} absolute top-0 bottom-0 right-0 left-0 m-auto w-[350px] h-[525px] object-cover opacity-0 duration-500 grayscale hover:grayscale-0`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Artist;
