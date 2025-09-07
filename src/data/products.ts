export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  oldPrice: number;
  sizes: string[];
  collection: string;
  details: string[];
  dimensions: string[];
}

// Fetch from backend and transform into the shape your frontend expects
export async function fetchProducts(): Promise<Product[]> {
  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/products/`);
  const data = await res.json();

  const products = data.map((product: any) => ({
    id: product.id,
    image: product.image, // should already be absolute now
    name: product.name,
    description: product.description,
    price: Number(product.price),
    oldPrice: Number(product.old_price),
    sizes: product.sizes.map((s: any) => s.value),
    collection: product.collection.name,
    details: product.details.map((d: any) => d.value),
    dimensions: product.dimensions.map((dim: any) => dim.value),
  }));

  // ✅ Debug log
  console.log("Fetched products:", products.map((p: Product) => p.image));

  return products;
}
