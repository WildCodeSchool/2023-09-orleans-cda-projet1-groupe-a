import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
  {
    path: '/404',
    element: <NotFound />,
  },
]);

export default router;
