export interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    size?: string;
    quantity: number;
}

const CART_KEY = 'cart';

export function getCart(): CartItem[] {
    const data = localStorage.getItem(CART_KEY);
    return data ? JSON.parse(data) : [];
}

export function saveCart(cart: CartItem[]): void {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(item: CartItem): void {
    const cart = getCart();
    const existingItem = cart.find(cartItem => cartItem.id === item.id && cartItem.size === item.size);

    if (existingItem) {
        existingItem.quantity += item.quantity;
    } else {
        cart.push({ ...item, quantity: item.quantity || 1 });
    }

    saveCart(cart);
    window.dispatchEvent(new Event("storage")); // trigger Sidebar updates
}

export function incrementItem(id: number, size?: string): void {
    const cart = getCart();
    const item = cart.find(cartItem => cartItem.id === id && cartItem.size === size);
    if (item) {
        item.quantity += 1;
        saveCart(cart);
        window.dispatchEvent(new Event("storage"));
    }
}

export function decrementItem(id: number, size?: string): void {
    let cart = getCart();
    const item = cart.find(cartItem => cartItem.id === id && cartItem.size === size);
    if (item) {
        if (item.quantity > 1) {
            item.quantity -= 1;
        } else {
            // remove item if it reaches 0
            cart = cart.filter(cartItem => !(cartItem.id === id && cartItem.size === size));
        }
        saveCart(cart);
        window.dispatchEvent(new Event("storage"));
    }
}

export function removeFromCart(id: number, size?: string): void {
    const cart = getCart().filter(cartItem => !(cartItem.id === id && cartItem.size === size));
    saveCart(cart);
    window.dispatchEvent(new Event("storage"));
}

export function getCartCount(): number {
    return getCart().reduce((total, item) => total + item.quantity, 0);
}

export function clearCart(): void {
    saveCart([]);
    window.dispatchEvent(new Event("storage"));
}
