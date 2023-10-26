import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
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
        path: '/all-artists',
        element: <AllArtists />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/artists/:artist_title',
        element: <Artists />,
      },
    ],
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

export default router;
