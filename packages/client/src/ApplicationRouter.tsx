import { Home } from './pages/Home';
import { PageTemplate } from './pages/PageTemplate';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ActionPageHeader } from './components/ActionPageHeader';

export function ApplicationRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <PageTemplate />,
      children: [
        {
          path: '/shutdown',
          element: <ActionPageHeader title="Shutdown Options" />,
        },
        {
          path: '/restart',
          element: <ActionPageHeader title="Restart Options" />,
        },
        {
          path: '/hibernate',
          element: <ActionPageHeader title="Hibernate Options" />,
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
