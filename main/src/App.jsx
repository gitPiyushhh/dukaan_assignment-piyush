import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './components/layout/AppLayout';
import Payouts from './components/layout/Payouts';
import Home from './components/ui/Home';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/payouts',
        element: <Payouts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
