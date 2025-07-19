import { lazy } from 'react';

const Shop = lazy(() => import('./pages/shop/ShopPage'))
const ProductDetail = lazy(() => import('./pages/shop/ProductDetailPage'))
const routes = [
    { path: '/collections/shop', component: Shop},
    { path: 'collections/shop/products/:id', component: ProductDetail}
]

export default routes;