import { useParams } from 'react-router-dom';
import { fetchProducts } from "../../data/products";
import type { Product } from "../../data/products";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import ReviewForm from './ReviewForm';
import { addToCart, incrementItem, decrementItem, getCart } from '../../utils/cart';

const initialReviews = [
  {
    id: 1,
    name: "John Doe",
    verified: true,
    rating: 5,
    date: "2025-04-14", // ISO format is better for sorting
    comment: "Thank you for the bag. It was a very nice present for x-mas.",
    tag: "Love it, so soft and beautiful",
  },
  {
    id: 2,
    name: "Jane Smith",
    verified: false,
    rating: 3,
    date: "2025-03-22",
    comment: "Decent quality, arrived late.",
    tag: "Arrived late",
  },
  {
    id: 3,
    name: "Emily James",
    verified: true,
    rating: 4,
    date: "2025-07-01",
    comment: "Stylish and comfortable.",
    tag: "Stylish choice",
  },
];


export default function ProductDetail(){
    const sliderRef = useRef<HTMLDivElement | null>(null);
    const trackRef = useRef<HTMLDivElement | null>(null);
    const imageRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const { id } = useParams();
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);
    const product = products.find(p => p.id === Number(id));
    const images = [product?.image, product?.image, product?.image]; // Replace with your real image list
    
    const [cartQuantity, setCartQuantity] = useState(0);
    const [selectedSize, setSelectedSize] = useState(product?.sizes[0] || "");

    useEffect(() => {
        if (product && !selectedSize && product.sizes.length > 0) {
            setSelectedSize(product.sizes[0]); // ✅ default
        }
    }, [product, selectedSize]);

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

    //Image Scrolling
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

    //Dropdown
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

    //Sorting
    const [sortOption, setSortOption] = useState("newest");
    const [reviews, setReviews] = useState(initialReviews);

    interface Review {
        id: number;
        name: string;
        verified: boolean;
        rating: number;
        date: string;
        comment: string;
        tag: string;
    }

    interface SortChangeEvent extends React.ChangeEvent<HTMLSelectElement> {}

    const handleSortChange = (e: SortChangeEvent): void => {
        const option: string = e.target.value;
        setSortOption(option);

        const sorted: Review[] = [...reviews].sort((a, b) => {
            switch (option) {
                case "newest":
                    return new Date(b.date).getTime() - new Date(a.date).getTime();
                case "verified-purchase":
                    return Number(b.verified) - Number(a.verified);
                case "highest-rating":
                    return b.rating - a.rating;
                case "lowest-rating":
                    return a.rating - b.rating;
                default:
                    return 0;
            }
        });

        setReviews(sorted);
    };

    //Rating
    interface RatingsResult {
        averageRating: string | number;
        starCounts: number[];
        totalReviews: number;
    }



    const calculateRatings = (reviews: Review[]): RatingsResult => {
        const totalReviews: number = reviews.length;
        const starCounts: number[] = [0, 0, 0, 0, 0]; // Index 0 for 1-star, 4 for 5-star

        let sum: number = 0;
        reviews.forEach(({ rating }) => {
            starCounts[rating - 1]++;
            sum += rating;
        });

        const averageRating: string | number = totalReviews ? (sum / totalReviews).toFixed(1) : 0;

        return {
            averageRating,
            starCounts,
            totalReviews,
        };
    };

    const { averageRating, starCounts, totalReviews } = calculateRatings(initialReviews);

    const navigate = useNavigate();
    const location = useLocation();
    const modalType = new URLSearchParams(location.search).get('type');


    //Cart Update Functionality
    useEffect(() => {
        const updateQuantity = () => {
            if (!product) return;
            const cart = getCart();
            console.log(cart)
            console.log("Product ID:", product.id, "Selected Size:", selectedSize)
            const item = cart.find(c => c.id === product.id && c.size === selectedSize);
            setCartQuantity(item ? item.quantity : 0);
        };

        updateQuantity();
        window.addEventListener("storage", updateQuantity);
        return () => window.removeEventListener("storage", updateQuantity);
    }, [product, selectedSize, products]);

    console.log(cartQuantity)
    if (!product) return <div>Product not found</div>;
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
                           {/* Size selector */}
                            <div className="size">
                                <label htmlFor="size">Size</label>
                                <select
                                    id="size"
                                    value={selectedSize}
                                    onChange={(e) => setSelectedSize(e.target.value)}
                                >
                                    {product.sizes.map((size, i) => (
                                        <option key={i} value={size}>{size}</option>
                                    ))}
                                </select>
                            </div>
                            {cartQuantity === 0 ? (
                                <button 
                                className="add-to-cart"
                                onClick={() => {
                                    if (!product) return;
                                    const size = (document.getElementById("size") as HTMLSelectElement)?.value;

                                    addToCart({
                                    id: product.id,
                                    name: product.name,
                                    price: product.price,
                                    image: product.image,
                                    size,
                                    quantity: 1
                                    });
                                }}
                                >
                                    Add to Cart
                                    <span className="material-symbols-outlined shopping-bag">
                                        shopping_bag
                                    </span>
                                </button>
                                ) : (
                                    <>
                                    <div className="cart-control">
                                        <button onClick={() => decrementItem(product.id, selectedSize)}><i className="bx bx-minus"></i></button>
                                        <span>{cartQuantity}</span>
                                        <button onClick={() => incrementItem(product.id, selectedSize)}><i className="bx bx-plus"></i></button>
                                    </div>
                                    <button
                                      className="checkout-btn"
                                        onClick={() => (window.location.href = "/cart")}
                                        >
                                        Proceed to Cart
                                    </button>
                                    </>
                                )
                            }

                            
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
                        <span className="rating-number">{averageRating}</span>
                        <div className="detail">
                        <div className="stars">
                            {[...Array(5)].map((_, i) => (
                            <i
                                key={i}
                                className={`bx ${i < Math.round(Number(averageRating)) ? "bxs-star" : "bx-star"}`}
                            ></i>
                            ))}
                        </div>
                        <span>Based on {totalReviews} Review{totalReviews !== 1 ? "s" : ""}</span>
                        </div>
                    </div>

                    <div className="rating-bar-overview">
                        {[5, 4, 3, 2, 1].map((star) => {
                        const count = starCounts[star - 1];
                        const percent = totalReviews ? (count / totalReviews) * 100 : 0;

                        return (
                            <div className="rating-bar" key={star}>
                            <span>{star} <i className="bx bxs-star"></i></span>
                            <span className="filled-container">
                                <span
                                className="filled"
                                style={{ width: `${percent}%` }}
                                ></span>
                            </span>
                            <span className="reviews">{count}</span>
                            </div>
                        );
                        })}
                    </div>

                    <div className="review-action">
                        <a href="#" onClick={() => navigate('?type=review')} className="review-btn">Write a Review</a>
                    </div>
                </div>

                <div className="reviews-section">
                    <div className="reviews-header">
                        <div className="sort">
                        <label htmlFor="sort">Sort by:</label>
                        <select id="sort" value={sortOption} onChange={handleSortChange}>
                            <option value="newest">Most recent</option>
                            <option value="verified-purchase">Verified purchase</option>
                            <option value="highest-rating">Highest Rating</option>
                            <option value="lowest-rating">Lowest Rating</option>
                        </select>
                        </div>
                    </div>

                    <div className="reviews-list">
                        {reviews.map((review) => (
                        <div className="review" key={review.id}>
                            <div className="reviewer">
                            <div className="avatar">
                                <i className="bx bx-user"></i>
                            </div>
                            <div className="reviewer-info">
                                <h3>{review.name}</h3>
                                {review.verified && (
                                <span>
                                    <i className="bx bx-check-circle"></i>Verified Buyer
                                </span>
                                )}
                            </div>
                            </div>

                            <div className="review-content">
                            <div className="heading">
                                <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <i key={i} className="bx bxs-star"></i>
                                ))}
                                {[...Array(5 - review.rating)].map((_, i) => (
                                    <i key={i} className="bx bx-star"></i>
                                ))}
                                </div>
                                <span className="tag-line">{review.tag}</span>
                                <span className="date">{new Date(review.date).toLocaleDateString()}</span>
                            </div>
                            <p className="comment">{review.comment}</p>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
                {modalType === 'review' && (
                <ReviewForm
                    onClose={() => {
                    const params = new URLSearchParams(location.search);
                    params.delete('type'); // remove ?type=review
                    navigate({ search: params.toString() }, { replace: true });
                    }}
                />
                )}

            </div>

            <div className="similar-products">
                <div className="header">
                    <h1>From the same drop</h1>
                    <a href="#" className="all-products-btn">View all products</a>
                </div>
                <div className="card-container">
                    {products
                    .filter((product) => product.collection === "The Art Agora Signature Collection")
                    .slice(0, 4).map((product) => (
                        <a key={product.id} href={`/collections/shop/products/${product.id}`} className="card">
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="description">
                                <p>{product.name}</p>
                                <small>GH₵{product.price.toFixed(2)} <s>GH₵{product.oldPrice.toFixed(2)}</s></small>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}