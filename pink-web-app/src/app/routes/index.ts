import { RouteObject } from 'react-router-dom';
import Home from '../../components/Home';
import About from '../../components/About';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
];

export default routes;