import { Home } from './pages/Home';
import { PageTemplate } from './pages/PageTemplate';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export function ApplicationRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageTemplate />,
      children: [
        {
          path: '/shutdown',
          element: <></>,
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
