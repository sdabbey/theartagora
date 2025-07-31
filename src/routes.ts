import { lazy } from 'react';

const Home = lazy(() => import('./pages/home/HomePage'))
const Shop = lazy(() => import('./pages/shop/ShopPage'))
const ProductDetail = lazy(() => import('./pages/shop/ProductDetailPage'))


const routes = [
    { path: '/', component: Home},
    { path: '/collections/shop', component: Shop},
    { path: 'collections/shop/products/:id', component: ProductDetail}
]

export default routes;