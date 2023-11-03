import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artists from './pages/Artists';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';
import AllArtists from './pages/AllArtists';
import Layout from './components/Layout';
import LegalNotice from './pages/LegalNotice';
import Artworks from './pages/Artworks';

const router = createBrowserRouter(
  [
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
          path: '/artists/:artist_id',
          element: <Artists />,
        },
        {
          path: '/legal-notice',
          element: <LegalNotice />,
        },
        {
          path: '/artworks/:artwork_id',
          element: <Artworks />,
        },
      ],
    },
    {
      path: '/404',
      element: <NotFound />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);

export default router;
