import '@styles/main.scss';
import logo from '../assets/images/logo1.png'
export default function Sidebar(){

    const isMobile = () => window.innerWidth >= 768; // Adjust breakpoint as needed

    const expandSearch = () => {
        if (!isMobile()) return;
        document.getElementById("search-box")?.classList.add("active");
        document.querySelector(".sidebar")?.classList.add("search-active");
    }

    const closeSearch = () => {
        if (!isMobile()) return;

        document.getElementById("search-box")?.classList.remove("active");
        document.querySelector(".sidebar")?.classList.remove("search-active");
    }

    return (
        <nav className="sidebar">
            <div className="header">
                <div className="top-action">
                    {/* <a href="#" className="action-btn favorite">
                        <span className="material-symbols-outlined">
                        favorite
                        </span>
                    </a> */}
                    <a href="#" className="action-btn search" id="search-trigger">
                        <span className="material-symbols-outlined">
                        search
                        </span>
                    </a>
                    <a href="#" className="action-btn">
                        {/* <span className="material-symbols-outlined">
                            shopping_bag
                            <small>0</small>
                        </span> */}
                        <span>
                            <svg className="svg symbol symbol--cart low-dpi" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 7H4.85375C3.25513 7 1.93732 8.25356 1.85749 9.85019L1.15749 23.8502C1.07181 25.5637 2.43806 27 4.15375 27H19.8463C21.5619 27 22.9282 25.5637 22.8425 23.8502L22.1425 9.85019C22.0627 8.25356 20.7449 7 19.1463 7H17M7 7V5C7 2.79086 8.79086 1 11 1H13C15.2091 1 17 2.79086 17 5V7M7 7H17" stroke="#B0B0B1" strokeWidth="2"></path>
                            </svg>
                            <small>0</small>
                        </span>
                    </a>
                    <a href="#" className="nav-trigger action-btn" id="nav-trigger">
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </a>
                </div>
                <a href="/" className="logo">
                    <img src={logo} alt="" />
                    
                </a>
            </div>
            <div className="content" id="menu-content">
                <div className="close" id="nav-closer">
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </div>
                <ul className="nav-links">
                    <li><a href="/curated-works">Curated Works</a></li>
                    <li><a href="/virtual-gallery">Virtual Gallery</a></li>
                    <li><a href="/fine-art-prints">Fine Art Prints</a></li>
                    <li><a href="/agora-fashion">Agora Fashion</a></li>
                    <li><a href="/mission">Mission Statement</a></li>
                    <li><a href="/collections/shop">Shop</a></li>
                    
                    <div className="mwy-weithredu">
                        <li><a href="/studio-circle" className="artist-community">Studio Circle</a></li>
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
                <button className="search-btn"><i className='bx bx-search'></i></button>
                <button className="search-close" id="search-closer" onClick={closeSearch}>
                    <span className="material-symbols-outlined">
                        close
                    </span>
                </button>
            </form>
        </nav>
    )
}