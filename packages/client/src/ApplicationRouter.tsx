import { Restart, Shutdown } from './pages';
import { Home } from './pages/Home';
import { PageTemplate } from './components/layouts/PageTemplate';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export function ApplicationRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageTemplate />,
      children: [
        {
          path: '/shutdown',
          element: <Shutdown />,
        },
        {
          path: '/restart',
          element: <Restart />,
        },
        {
          path: '/',
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
