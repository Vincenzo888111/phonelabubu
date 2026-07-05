import ProductCard from "../Components/ProductCard";
import { products } from "../data/products";

function Collection({ cart = [], setCart, setQuantities }) {
  const featuredProducts = products.slice(0, 3);

  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setQuantities((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 1) + 1,
      }));
    } else {
      setCart([...cart, product]);
      setQuantities((prev) => ({
        ...prev,
        [product.id]: 1,
      }));
    }
  };

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-blue-600 font-semibold">Curated Collection</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Featured Products
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            A small selection of popular products from the full shop.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection;