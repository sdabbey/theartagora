import { lazy } from 'react';

const Home = lazy(() => import('./pages/home/HomePage'))
const Shop = lazy(() => import('./pages/shop/ShopPage'))
const ProductDetail = lazy(() => import('./pages/shop/ProductDetailPage'))
const Mission = lazy(() => import('./pages/mission/MissionPage'))
const Movement = lazy(() => import('./pages/accounts/ChooseAccountPage'))
const AgoraFashion = lazy(() => import('./pages/agora-fashion/AgoraFashion'))
const CuratedWorks = lazy(() => import('./pages/curated-works/CuratedWorks'))
const VirtualGalleryPage = lazy(() => import('./pages/virtual-gallery/VirtualGallery'))
const Cart = lazy(() => import('./pages/cart/CartPage'))
const Checkout = lazy(() => import('./pages/checkout/CheckoutPage'))

const routes = [
    { path: '/', component: Home},
    { path: 'collections/shop/', component: Shop},
    { path: 'collections/shop/products/:id', component: ProductDetail},
    { path: 'mission/', component: Mission},
    { path: 'join-the-movement/', component: Movement},
    { path: 'agora-fashion/', component: AgoraFashion},
    { path: 'curated-works/', component: CuratedWorks},
    { path: 'virtual-gallery/', component: VirtualGalleryPage},
    { path: 'cart/', component: Cart},
    { path: 'checkout/', component: Checkout},
]

export default routes;