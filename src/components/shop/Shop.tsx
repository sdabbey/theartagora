import { products } from "../../data/products";

export default function Shop() {
    return (
        <div className="shop">
            <h1>Shop Our Apparels</h1>
            <div className="card-container">
                {products.map((product) => (
                    <a key={product.id} href={`products/${product.id}`} className="card">
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
