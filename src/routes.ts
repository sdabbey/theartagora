import { lazy } from 'react';

const Shop = lazy(() => import('./pages/shop/ShopPage'))

const routes = [
    { path: '/', component: Shop}
]

export default routes;