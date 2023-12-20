import { App } from '@/components/App';
import { createBrowserRouter } from 'react-router-dom';
import shopRoutes from 'shop/Router';
import adminRoutes from 'admin/Router';

const routes = [
  {
    path: '/',
    element: <App/>,
    //@ts-ignore
    children: [
      ...shopRoutes,
      ...adminRoutes,
    ]
  }
]

export const router = createBrowserRouter(routes);
export default routes;
