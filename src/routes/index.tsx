import { createBrowserRouter } from 'react-router-dom';
import Login from '../screens/login';
import Habits from '../screens/habits';
import Auth from '../screens/auth';
import { PrivateRoute } from './private-route';

export const route = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute component={<Habits />} />,
  },
  {
    path: '/entrar',
    element: <Login />,
  },
  {
    path: '/autenticacao',
    element: <Auth />,
  },
]);
