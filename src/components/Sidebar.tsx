import '@styles/main.scss';
import logo from '../assets/images/logo1.png'
export default function Sidebar(){

    const expandSearch = () => {
        document.getElementById("search-box")?.classList.add("active");
        document.querySelector(".sidebar")?.classList.add("search-active");
    }

    const closeSearch = () => {
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
                        <span className="material-symbols-outlined">
                            shopping_bag
                        </span>
                    </a>
                    <a href="#" className="nav-trigger action-btn" id="nav-trigger">
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </a>
                </div>
                <a href="#" className="logo">
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
                    <li><a href="#">Curated Works</a></li>
                    <li><a href="#">Virtual Gallery</a></li>
                    <li><a href="#">Fine Art Prints</a></li>
                    <li><a href="#">Agora Fashion</a></li>
                    <li><a href="#">Mission Statement</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Foundation</a></li>
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