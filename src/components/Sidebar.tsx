import { useEffect, useState } from 'react';
import '@styles/main.scss';
import logo from '../assets/images/logo1.png';
import { getCartCount } from "../utils/cart";

export default function Sidebar() {

    const isMobile = () => window.innerWidth >= 768;

    const expandSearch = () => {
        if (!isMobile()) return;
        document.getElementById("search-box")?.classList.add("active");
        document.querySelector(".sidebar")?.classList.add("search-active");
    };

    const closeSearch = () => {
        if (!isMobile()) return;
        document.getElementById("search-box")?.classList.remove("active");
        document.querySelector(".sidebar")?.classList.remove("search-active");
    };

    useEffect(() => {
        const currentPath = window.location.pathname;

        // Loop through all nav links
        document.querySelectorAll(".nav-links a").forEach(link => {
            // Remove old active classes first
            link.classList.remove("active");

            // If link href matches current path
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("active");
            }
        });
    }, []);


    //Cart Update Functionality
    const [cartCount, setCartCount] =  useState(getCartCount());

    useEffect(() => {
        const updateCount = () => setCartCount(getCartCount());

        // Initial Load
        updateCount();

        // Listen to storage changes
        window.addEventListener("storage", updateCount);

        return () => {
            window.removeEventListener("storage", updateCount);
        };
    }, []);
    return (
        <nav className="sidebar">
            <div className="header">
                <div className="top-action">
                    <a href="#" className="action-btn search" id="search-trigger">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="42px" fill="#ffffff"><path d="M779.38-153.85 528.92-404.31q-30 25.54-69 39.54t-78.38 14q-96.1 0-162.67-66.53-66.56-66.53-66.56-162.57 0-96.05 66.53-162.71 66.53-66.65 162.57-66.65 96.05 0 162.71 66.56Q610.77-676.1 610.77-580q0 41.69-14.77 80.69t-38.77 66.69l250.46 250.47-28.31 28.3ZM381.54-390.77q79.61 0 134.42-54.81 54.81-54.8 54.81-134.42 0-79.62-54.81-134.42-54.81-54.81-134.42-54.81-79.62 0-134.42 54.81-54.81 54.8-54.81 134.42 0 79.62 54.81 134.42 54.8 54.81 134.42 54.81Z"/></svg>
                        </span>
                    </a>
                    <a href="/cart" className="action-btn">
                        <span>
                            <svg className="svg symbol symbol--cart low-dpi" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 7H4.85375C3.25513 7 1.93732 8.25356 1.85749 9.85019L1.15749 23.8502C1.07181 25.5637 2.43806 27 4.15375 27H19.8463C21.5619 27 22.9282 25.5637 22.8425 23.8502L22.1425 9.85019C22.0627 8.25356 20.7449 7 19.1463 7H17M7 7V5C7 2.79086 8.79086 1 11 1H13C15.2091 1 17 2.79086 17 5V7M7 7H17" stroke="#B0B0B1" strokeWidth="2"></path>
                            </svg>
                            <small>{cartCount}</small>
                        </span>
                    </a>
                    <a href="#" className="nav-trigger action-btn" id="nav-trigger">
                        <span>
                           <svg xmlns="http://www.w3.org/2000/svg" height="42px" viewBox="0 -960 960 960" width="42px" fill="#ffffff"><path d="M160-269.23v-33.85h640v33.85H160Zm0-193.85v-33.84h640v33.84H160Zm0-193.84v-33.85h640v33.85H160Z"/></svg>
                        </span>
                    </a>
                </div>
                <a href="/" className="logo">
                    <img src={logo} alt="" />
                </a>
            </div>
            <div className="content" id="menu-content">
                <div className="close" id="nav-closer">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px" fill="#e3e3e3"><path d="m253.9-229.79-24.11-24.11L455.9-480 229.79-706.1l24.11-24.11L480-504.1l226.1-226.11 24.11 24.11L504.1-480l226.11 226.1-24.11 24.11L480-455.9 253.9-229.79Z"/></svg>
                    </span>
                </div>
                <ul className="nav-links">
                    <li><a href="/curated-works">Curated Works</a></li>
                    <li><a href="/virtual-gallery">Virtual Gallery</a></li>
                    {/* <li><a href="/fine-art-prints">Fine Art Prints</a></li> */}
                    <li><a href="/agora-fashion">Agora Fashion</a></li>
                    <li><a href="/mission">Mission Statement</a></li>
                    <li><a href="/collections/shop">Shop</a></li>
                    
                    <div className="mwy-weithredu">
                        {/* <li><a href="/studio-circle" className="artist-community">Studio Circle</a></li> */}
                        <li><a href="/join-the-movement" className="sign-up">Join the Movement</a></li>
                        <li><a href="/foundation" className="foundation">Foundation</a></li>
                    </div>
                </ul>
                <ul className="social-links">
                    <li><a href="mailto: mail@theartagora.com" target="_blank"><i className="bx bxl-gmail"></i></a></li>
                    <li><a href="https://twitter.com/theartagora" target="_blank"><i className="bx bxl-twitter"></i></a></li>
                    <li><a href="https://instagram.com/theartagora" target="_blank"><i className="bx bxl-instagram"></i></a></li>
                </ul>
            </div>
            <form action="#" id="search-box">
                <input type="search" placeholder="Search..." onFocus={expandSearch} />
                <button className="search-btn">
                   <svg  xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" fill="currentColor" viewBox="0 0 24 28" >
                        <path d="m18,10c0-4.41-3.59-8-8-8S2,5.59,2,10s3.59,8,8,8c1.85,0,3.54-.63,4.9-1.69l5.1,5.1,1.41-1.41-5.1-5.1c1.05-1.36,1.69-3.05,1.69-4.9Zm-14,0c0-3.31,2.69-6,6-6s6,2.69,6,6-2.69,6-6,6-6-2.69-6-6Z"></path>
                    </svg>
                </button>
                <button className="search-close" id="search-closer" onClick={closeSearch}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </span>
                </button>
            </form>
        </nav>
    );
}
