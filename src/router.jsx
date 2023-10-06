import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Galerie from './pages/galerie';
const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: '/galerie',
    element: <Galerie />,
  },
]);

export default router;
