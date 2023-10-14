import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artist from './pages/Artist';
import Gallery from './pages/Gallery';
import NavBar from './components/NavBar';

const router = createBrowserRouter([
  {
    element: <NavBar />,
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
]);

export default router;
