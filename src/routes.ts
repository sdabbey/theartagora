import { lazy } from 'react';

const Home = lazy(() => import('./pages/home/HomePage'))
const Shop = lazy(() => import('./pages/shop/ShopPage'))
const ProductDetail = lazy(() => import('./pages/shop/ProductDetailPage'))
const Mission = lazy(() => import('./pages/mission/MissionPage'))
const Movement = lazy(() => import('./pages/accounts/ChooseAccountPage'))
const AgoraFashion = lazy(() => import('./pages/fashion/AgoraFashion'))



const routes = [
    { path: '/', component: Home},
    { path: 'collections/shop', component: Shop},
    { path: 'collections/shop/products/:id', component: ProductDetail},
    { path: 'mission/', component: Mission},
    { path: 'join-the-movement/', component: Movement},
    { path: 'agora-fashion/', component: AgoraFashion},
]

export default routes;