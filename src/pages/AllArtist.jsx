import { useState, useEffect } from 'react';
import { fetchArtworks } from '../api';

function AllArtist() {
  const [artworks, setArtworks] = useState([]);
  const [index, setIndex] = useState(0);
  const [search, setSearch] = useState('Georgia');

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetchArtworks(search, 20, signal)
      .then((data) => {
        setArtworks(data);
      })
      .catch((error) => {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error,
        );
      });
    return function cleanup() {
      controller.abort();
    };
  }, [search]);

  return (
    <>
      <div></div>
    </>
  );
}

export default AllArtist;
