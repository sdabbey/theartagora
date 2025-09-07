import { useEffect, useState } from "react";
import { fetchProducts } from "../../data/products";
import type { Product } from "../../data/products";

export default function Shop() {
    const [products, setProducts] = useState<Product[]>([]);
    useEffect(() => {
        fetchProducts().then(setProducts);
    }, []);
    return (
        <div className="shop">
            <h1>Shop Our Apparels</h1>
            <div className="card-container">
                {products.map((product) => (
                    <a key={product.id} href={`shop/products/${product.id}`} className="card">
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
            <p className="info">
                "Get ready! Our main apparel collection, crafted from stunning artworks — including exclusive limited editions — is coming soon. Stay tuned and keep an eye out for these unique pieces!"
            </p>
        </div>
    );
}
