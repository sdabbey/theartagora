import { useEffect, useState } from "react";
import { getCart, removeFromCart, incrementItem, decrementItem } from "../../utils/cart";

export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    size?: string;
    quantity: number;
}


export default function Cart() {
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
    <div className="cart-section">
      <div className="cart-header">
        <h1>Free Shipping on all orders over GH₵450</h1>
      </div>

      <div className="cart-content">
        <h2>Shopping Cart</h2>
        <small>{cart.length} product{cart.length !== 1 ? "s" : ""} in your cart</small>

        <div className="selected-items-container">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div className="cart-card" key={`${item.id}-${item.size}`}>
                <div className="img">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-card-content">
                  <p className="title">
                    {item.name} {item.size && `(${item.size})`}
                  </p>
                  <p className="price">
                    GH₵{item.price.toFixed(2)}
                  </p>
                </div>

                <div className="cart-card-action">
                  <button onClick={() => decrementItem(item.id, item.size)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => incrementItem(item.id, item.size)}>+</button>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id, item.size)}
                  >
                    ×
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div className="instructions-box">
              <textarea
                name="instructions"
                placeholder="Special instructions for seller..."
              />
            </div>

            <div className="cart-summary">
              <div>
                <h1 className="total-price">
                  Total: <span>GH₵{totalPrice.toFixed(2)}</span>
                </h1>
                <small>Taxes and shipping calculated at checkout</small>
              </div>
              <button className="check-out" onClick={() => window.location.href = '/checkout'}>Check Out</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
