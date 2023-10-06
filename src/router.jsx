import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/gallery',
    element: <Gallery />,
  },
]);

export default router;
