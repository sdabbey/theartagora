import '@styles/main.scss';
import logo from '../assets/images/logo-alt.png'
import React, { useState } from "react";
export default function Footer(){
    const [form, setForm] = useState({
        email: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
        ) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
       
    
        try {
          const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/subscribe/`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              email: form.email,
              special_requests: ""
            }),
          });
    
          if (response.ok) {
            alert("🎉 Subscription successful!");
            
          } else {
            alert("❌ Something went wrong. Try again later.");
          }
        } catch (err) {
          console.error("Subscription error:", err);
          alert("⚠️ Network error. Try again later.");
        }
      };
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src={logo} alt="Logo" />
                    <p>&copy; 2025 The Art Agora. All rights reserved.</p>
                </div>
                <div className="footer-links">
                    <a href="#" className="active">The Process</a>
                    <a href="#">Handling Fine Art Prints</a>
                    <a href="#">Shipping and Delivery</a>
                    <a href="#">Returns and Refunds</a>
                    <a href="#">Terms</a>
                    <a href="#">Privacy</a>
                    <a href="#">Sustainability</a>
                </div>

            </div>
            <div className="extra-section">
                <div className="socials">
                    <h4>Follow on Social</h4>
                    <ul>
                        <a href="https://facebook.com/theartagora" target="_blank"><i className="bxl bx-facebook-square"></i></a>
                        <a href="https://twitter.com/theartagora" target="_blank"><i className="bxl bx-twitter-x"></i></a>
                        <a href="https://instagram.com/theartagora" target="_blank"><i className="bxl bx-instagram"></i></a>
                        <a href="mailto: info@theartagora.com"><i className="bxl bx-gmail"></i></a>
                    </ul>
                </div>
                <div className="newsletter">
                    <h4>Newsletter</h4>
                    <form action="#">
                        <input type="email" onChange={handleChange} placeholder="Enter your email" required />
                        <button type="submit" onClick={handleSubmit}>
                            <span className="material-symbols-outlined">
                                trending_flat
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    )
}