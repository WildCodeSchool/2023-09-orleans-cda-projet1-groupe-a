import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Artist from './pages/Artist';

const router = createBrowserRouter([
  {
    path: '',
    element: <Home />,
  },
  {
    path: 'artist',
    element: <Artist />,
  },
]);

export default router;
