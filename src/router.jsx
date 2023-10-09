import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artist from './pages/Artist';

import Gallery from './pages/Gallery';
const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'artist',
    element: <Artist />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
]);

export default router;
