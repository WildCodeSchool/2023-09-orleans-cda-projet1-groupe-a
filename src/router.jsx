import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import ArtistCollection from './pages/ArtistCollection';
import AllArtists from './pages/AllArtists';
import Layout from './components/Layout';

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: '/artist',
        element: <Artist />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
    ],
  },
  {
    path: '/artist-collection',
    element: <ArtistCollection />,
  },
  {
    path: '/all-artists',
    element: <AllArtists />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

export default router;
