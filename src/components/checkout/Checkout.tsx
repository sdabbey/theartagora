import { useState, useEffect } from "react";
import paystack from "../../assets/images/paystack.png";
import { getCart } from "../../utils/cart";
import type { CartItem } from "../cart/Cart";

// Simple country list (could be moved to a separate utils/countries.ts)
const countries = [
    { code: "US", name: "United States" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "GH", name: "Ghana" },
    { code: "NG", name: "Nigeria" },
    { code: "KE", name: "Kenya" },
    { code: "ZA", name: "South Africa" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "IN", name: "India" },
    { code: "CN", name: "China" },
    { code: "JP", name: "Japan" },
    // ...you can add all ISO country codes if you want
];

export default function Checkout() {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [formData, setFormData] = useState({
        email: "",
        subscribe: false,
        country: "",
        firstName: "",
        lastName: "",
        address: "",
        apartment: "",
        city: "",
        postalCode: "",
        phoneNumber: "",
        discount: "",
    });

    // Load cart on mount + whenever "storage" changes
    useEffect(() => {
        const updateCart = () => setCart(getCart());
        updateCart();
        window.addEventListener("storage", updateCart);
        return () => window.removeEventListener("storage", updateCart);
    }, []);

    // Detect user country via IP geolocation
    useEffect(() => {
        fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => {
                if (data && data.country) {
                    setFormData((prev) => ({
                        ...prev,
                        country: data.country, // uses ISO country code (e.g. "GH")
                    }));
                }
            })
            .catch((err) => console.error("Country detection failed:", err));
    }, []);

    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        let fieldValue: string | boolean = value;
        if (type === "checkbox" && e.target instanceof HTMLInputElement) {
            fieldValue = e.target.checked;
        }
        setFormData((prev) => ({
            ...prev,
            [name]: fieldValue,
        }));
    };
    
    const isFormValid = () => {
        return (
            formData.email.trim() &&
            formData.country.trim() &&
            formData.firstName.trim() &&
            formData.lastName.trim() &&
            formData.address.trim() &&
            formData.city.trim() &&
            formData.phoneNumber.trim()
        );
    };
    const handlePayment = () => {
        const payload = {
            ...formData,
            cart,
            totalPrice,
        };
        console.log("Submitting checkout data:", payload);
        // TODO: send payload to backend
    };

    return (
        <div className="checkout-section">
            <div className="checkout-header">
                <h1>Free Shipping on all orders over GH₵450</h1>
            </div>
            <div className="checkout-container">
                <div className="contact-details">
                    <div className="contact">
                        <h3>Contact</h3>
                        <form>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            <div>
                                <input
                                    type="checkbox"
                                    name="subscribe"
                                    checked={formData.subscribe}
                                    onChange={handleChange}
                                />
                                <label htmlFor="subscribe">Subscribe to our newsletter</label>
                            </div>
                        </form>
                    </div>
                    <div className="delivery">
                        <h3>Delivery</h3>
                        <form>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            >
                                <option value="">Select your country</option>
                                {countries.map((c) => (
                                    <option key={c.code} value={c.code}>
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                            <div>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First name"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last name"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="apartment"
                                placeholder="Apartment, suite, etc. (optional)"
                                value={formData.apartment}
                                onChange={handleChange}
                            />
                            <div>
                                <input
                                    type="text"
                                    name="city"
                                    placeholder="City"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                />
                                <input
                                    type="text"
                                    name="postalCode"
                                    placeholder="Postal code (optional)"
                                    value={formData.postalCode}
                                    onChange={handleChange}
                                />
                            </div>
                            <input
                                type="tel"
                                name="phoneNumber"
                                placeholder="Phone"
                                value={formData.phoneNumber}
                                onChange={handleChange}
                                required
                            />
                        </form>
                    </div>
                    <div className="payment">
                        <h3>Payment</h3>
                        <span>All transactions are secure and encrypted</span>
                        <div>
                            <small>
                                <i className="bx bx-lock"></i> Secure and encrypted
                            </small>
                            <img src={paystack} alt="Paystack" />
                        </div>
                        <button className="pay-now" disabled={!isFormValid()} onClick={handlePayment}>
                            Pay now
                        </button>
                    </div>
                </div>
                <div className="product-summary">
                    <h3>Product Summary</h3>
                    <div className="product-card-list">
                        {cart.map((item) => (
                            <div className="product-card" key={`${item.id}-${item.size}`}>
                                <div className="img">
                                    <img src={item.image} alt={item.name} />
                                    <span className="quantity">{item.quantity}</span>
                                </div>
                                <div className="product-content">
                                    <div className="product-detail">
                                        <p className="title">{item.name}</p>
                                        <span>{item.size}</span>
                                    </div>
                                    <p className="price">GH₵{item.price.toFixed(2)}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form className="discount-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="text"
                            name="discount"
                            placeholder="Discount code"
                            value={formData.discount}
                            onChange={handleChange}
                        />
                        <button disabled={!formData.discount.trim()}>Apply</button>
                    </form>
                    <div className="amount-summary">
                        <div className="subtotal">
                            <span>Subtotal . {cart.length} item(s)</span>
                            <span>GH₵{totalPrice.toFixed(2)}</span>
                        </div>
                        <div className="delivery">
                            <span>Total</span>
                            <span>GH₵{totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
