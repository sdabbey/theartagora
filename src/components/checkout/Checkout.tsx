import { useState, useEffect } from "react";
import paystack from "../../assets/images/paystack.png";
import { getCart } from "../../utils/cart";
import type { CartItem } from "../cart/Cart";
export default function Checkout(){
    const [cart, setCart] = useState<CartItem[]>([]);

    // Load cart on mount + whenever "storage" changes
    useEffect(() => {
        const updateCart = () => setCart(getCart());
        updateCart();

        window.addEventListener("storage", updateCart);
        return () => window.removeEventListener("storage", updateCart);
    }, []);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    return (
        <div className="checkout-section">
            <div className="checkout-header">
                <h1>Free Shipping on all orders over GH₵450</h1>
            </div>
            <div className="checkout-container">
                <div className="contact-details">
                    <div className="contact">
                        <h3>Contact</h3>
                        <form action="">
                            <input type="email" name="email" id="email" placeholder="Email"/>
                            <div>
                                <input type="checkbox" name="subscribe" id="subscribe"/>
                                <label htmlFor="subscribe">Subscribe to our newsletter</label>
                            </div>
                        </form>
                    </div>
                    <div className="delivery">
                        <h3>Delivery</h3>
                        <form action="">
                            <select name="country" id="country">
                                <option value="">Select your country</option>
                                <option value="us">United States</option>
                                <option value="ca">Canada</option>
                                <option value="uk">United Kingdom</option>
                            </select>
                            <div>
                                <input type="text" name="firstName" id="firstName" placeholder="First name"/>
                                <input type="text" name="lastName" id="lastName" placeholder="Last name"/>
                            </div>
                            <input type="text" name="address" id="address" placeholder="Address"/>
                            <input type="text" name="apartment" id="apartment" placeholder="Apartment, suite, etc. (optional)"/>
                            <div>
                                <input type="text" name="city" id="city" placeholder="City"/>
                                <input type="text" name="postalCode" id="postalCode" placeholder="Postal code (optional)"/>
                            </div>
                            <input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone"/>
                        </form>
                    </div>
                    <div className="payment">
                        <h3>Payment</h3>
                        <span>All transactions are secure and encrypted</span>
                        <div>
                            <small><i className="bx bx-lock"></i> Secure and encrypted</small>
                            <img src={paystack} alt="" />
                        </div>
                        <button className="pay-now">Pay now</button>
                    </div>
                </div>
                <div className="product-summary">
                    <h3>Product Summary</h3>
                    <div className="product-card-list">
                       {cart.map((item) => (
                        <div className="product-card">
                            <div className="img">
                                <img src={item.image} alt="" />
                                <span className="quantity">{item.quantity}</span>
                            </div>
                            <div className="product-content">
                                <div className="product-detail">
                                    <p className="title">{item.name}</p>
                                    <span>{item.size}</span>
                                </div>
                                <p className="price">
                                    GH₵{item.price.toFixed(2)}
                                </p>
                            </div>
                        </div>
                       ))}
                    </div>
                    <form action="" className="discount-form">
                        <input type="text" placeholder="Discount code" />
                        <button>Apply</button>
                    </form>
                    <div className="amount-summary">
                        <div className="subtotal">
                            <span>Subtotal . {cart.length} item(s)</span>
                            <span>{totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="delivery">
                            <span>Total</span>
                            <span>GH₵{totalPrice.toFixed(2)}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}