import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { Product } from "../../data/products";
import { fetchProducts } from "../../data/products";

export default function ShopCollection() {
  const { slug } = useParams<{ slug: string }>(); // e.g. "maniacal-nightmares-collection"
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchProducts()
        .then((allProducts) => {
          const filtered = allProducts.filter(
            (product) => product.collection.replace(/-/g, " ").toLowerCase() === slug.replace(/-/g, " ").toLowerCase()
          );
          setProducts(filtered);
        })
        .finally(() => setLoading(false));
    }
  }, [slug]);

  return (
    <div className="shop">
      <h1>
        {slug ? slug.replace(/-/g, " ") : "Collection"}
      </h1>

      {loading ? (
        <p>Loading collection...</p>
      ) : (
        <div className="card-container">
          {products.length > 0 ? (
            products.map((product) => (
              <a
                key={product.id}
                href={`products/${product.id}`}
                className="card"
              >
                <div className="card-image">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="description">
                  <p>{product.name}</p>
                  <small>
                    GH₵{product.price.toFixed(2)}{" "}
                    <s>GH₵{product.oldPrice.toFixed(2)}</s>
                  </small>
                </div>
              </a>
            ))
          ) : (
            <p>No products available in this collection yet.</p>
          )}
        </div>
      )}

      <p className="info">
        "Get ready! Exclusive pieces from this curated collection are coming soon.
        Stay tuned for updates."
      </p>
    </div>
  );
}
