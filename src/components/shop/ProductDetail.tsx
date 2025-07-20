import { useParams } from 'react-router-dom';
import { products } from '../../data/products';
import { useEffect, useRef, useState } from "react";


export default function ProductDetail(){
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);

    const { id } = useParams();
    const product = products.find(p => p.id === Number(id));
    const images = [product?.image, product?.image, product?.image]; // Replace with your real image list

    useEffect(() => {
        const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
            const index = Number((entry.target as HTMLElement).dataset.index);
            setActiveIndex(index);
            }
        });
        }, options);

        imageRefs.current.forEach((el, i) => {
        if (el) {
            el.dataset.index = i.toString();
            observer.observe(el);
        }
        });

        return () => {
        imageRefs.current.forEach((el) => {
            if (el) observer.unobserve(el);
        });
        };
    }, []);

    interface ScrollToImageOptions {
        behavior?: ScrollBehavior;
        block?: ScrollLogicalPosition;
        inline?: ScrollLogicalPosition;
    }

    const scrollToImage = (index: number): void => {
        const target: HTMLDivElement | null | undefined = imageRefs.current[index];
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "center" } as ScrollToImageOptions);
        }
    };

    interface DropdownProps {
        title: string;
        children: React.ReactNode;
    }

    const Dropdown: React.FC<DropdownProps> = ({ title, children }) => {
        const [isOpen, setIsOpen] = useState(false);

        return (
            <div className="dropdown-section">
                <h3 onClick={() => setIsOpen(!isOpen)} className="dropdown-title">
                    {title}
                    <i className={`bx ${isOpen ? "bx-minus": "bx-plus"}`}></i> 
                    
                </h3>
                <div className={`dropdown-content ${isOpen ? "show" : ""}`}>
                    {children}
                </div>
            </div>
        );
    };
    return (
        <div className="product-detail-page">
            <div className="product">
                <div className="content-wrapper">
                    <div className="product-img-slider" ref={sliderRef}>
                        <div className="slider-track" ref={trackRef}>
                           {images.map((src, i) => (
                                <div
                                className="slider-item"
                                ref={(el) => { imageRefs.current[i] = el; }}
                                key={i}
                                >
                                <img src={src} alt={`Product ${i + 1}`} />
                                </div>
                            ))}
                        </div>
                        
                    </div>
                    
                    <div className="product-details" ref={sliderRef}>
                        <div className="slider-controls" ref={sliderRef}>
                            <div className="dots">
                                {images.map((_, i) => (
                                    <span
                                        key={i}
                                        className={`dot ${activeIndex === i ? "active" : ""}`}
                                        onClick={() => scrollToImage(i)}
                                    ></span>
                                ))}
                            </div>
                        </div>
                        <div className="product-info">
                            <small>The Art Agora Signature Collection</small>
                            <h2>{product?.name}</h2>
                            <div>
                                <button className="rating">
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <i className="bx bxs-star"></i>
                                    <span>3 Reviews</span>
                                </button>
                                <p className="price">GH₵{product?.price.toFixed(2)} <s>GH₵{product?.oldPrice.toFixed(2)}</s></p>
                            </div>
                            <p className="description">
                                {product?.description || "This is a placeholder description for the product. It will be replaced with actual product details."}
                            </p>
                            <div className="size">
                                <label htmlFor="size">Size</label>
                                <select name="size" id="size">
                                    {product?.sizes.map((size, i) => (
                                        <option key={i} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="add-to-cart">
                                Add to Cart
                                <span className="material-symbols-outlined shopping-bag">
                                    shopping_bag
                                </span>
                            </button>
                            <div className="extra-details">
                            <Dropdown title="Product Details">
                               {product?.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                               ))}
                               
                               
                            </Dropdown>

                            <Dropdown title="Size">
                                {product?.dimensions.map((dimension, i) => (
                                    <li key={i}>{dimension}</li>
                                ))}
                            </Dropdown>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <div className="customer-reviews">
                <h2>Customer Reviews</h2>
                <div className="rating-overview">
                    <div className="rating">
                        <span className="rating-number">5</span>
                        <div className="detail">
                            <div className="stars">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                            </div>
                            <span>Based on 3 Reviews</span>
                        </div>
                    </div>
                    <div className="rating-bar-overview">
                        <div className="rating-bar">
                            <span>5 <i className="bx bxs-star"></i></span>
                            <span className="filled"></span>
                            <span className="reviews">3</span>
                        </div>
                        <div className="rating-bar">
                            <span>4 <i className="bx bxs-star"></i></span>
                            <span className="filled"></span>
                            <span className="reviews">0</span>
                        </div>
                        <div className="rating-bar">
                            <span>3 <i className="bx bxs-star"></i></span>
                            <span className="filled"></span>
                            <span className="reviews">0</span>
                        </div>
                        <div className="rating-bar">
                            <span>2 <i className="bx bxs-star"></i></span>
                            <span className="filled"></span>
                            <span className="reviews">0</span>
                        </div>
                        <div className="rating-bar">
                            <span>1 <i className="bx bxs-star"></i></span>
                            <span className="filled"></span>
                            <span className="reviews">0</span>
                        </div>
                    </div>
                    <div className="review-action">
                        <a href="#" className="review-btn">Write a Review</a>
                    </div>
                </div>
                <div className="reviews-section">
                    <div className="reviews-header">
                        <div className="sort">
                            <label htmlFor="sort">Sort by:</label>
                            <select name="sort" id="sort">
                                <option value="newest">Most recent</option>
                                <option value="verified-purchase">Verified purchase</option>
                                <option value="highest-rating">Highest Rating</option>
                                <option value="lowest-rating">Lowest Rating</option>
                            </select>
                        </div>
                    </div>
                    <div className="reviews-list">
                        <div className="review">
                            <div className="reviewer">
                                <div className="avatar">
                                    <i className="bx bx-user"></i>
                                </div>
                                <div className="reviewer-info">
                                    <h3>John Doe</h3>
                                    <span><i className="bx bx-check-circle"></i>Verified Buyer</span>
                                </div>
                            </div>
                            <div className="review-content">
                                <div className="heading">
                                    <div className="stars">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                    <span className="tag-line">Love it, so soft and beautiful</span>
                                    <span className="date">14/04/25</span> 
                                </div>
                                <p className="comment">Thank you for the bag. It was a very nice present for x-mas. </p>
                            </div>
                        </div>
                        <div className="review">
                            <div className="reviewer">
                                <div className="avatar">
                                    <i className="bx bx-user"></i>
                                </div>
                                <div className="reviewer-info">
                                    <h3>John Doe</h3>
                                    <span><i className="bx bx-check-circle"></i>Verified Buyer</span>
                                </div>
                            </div>
                            <div className="review-content">
                                <div className="heading">
                                    <div className="stars">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                    <span className="tag-line">Love it, so soft and beautiful</span>
                                    <span className="date">14/04/25</span> 
                                </div>
                                <p className="comment">Thank you for the bag. It was a very nice present for x-mas. </p>
                            </div>
                        </div>
                         <div className="review">
                            <div className="reviewer">
                                <div className="avatar">
                                    <i className="bx bx-user"></i>
                                </div>
                                <div className="reviewer-info">
                                    <h3>John Doe</h3>
                                    <span><i className="bx bx-check-circle"></i>Verified Buyer</span>
                                </div>
                            </div>
                            <div className="review-content">
                                <div className="heading">
                                    <div className="stars">
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                        <i className="bx bxs-star"></i>
                                    </div>
                                    <span className="tag-line">Love it, so soft and beautiful</span>
                                    <span className="date">14/04/25</span> 
                                </div>
                                <p className="comment">Thank you for the bag. It was a very nice present for x-mas. </p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
}