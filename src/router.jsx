import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ArtistCollection from './pages/ArtistCollection';
import Gallery from './pages/Gallery';
import NavBar from './components/NavBar';
import AllArtist from './pages/AllArtist';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    element: <NavBar />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/artist-collection',
        element: <ArtistCollection />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
    ],
  },
  {
    path: '/all-artist',
    element: <AllArtist />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

export default router;
