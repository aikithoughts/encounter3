import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Home from './routes/home';
import Encounter from './components/Encounter';
import SpellBook from './components/Spellbook';
import MonsterManual from './components/Monstermanual';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/',
        element: <Home/>
      },
      {
        path: 'encountertracker',
        element: <Encounter/>
      },
      {
        path: 'spellbook',
        element: <SpellBook/>
      },
      {
        path: 'monstermanual',
        element: <MonsterManual />
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
