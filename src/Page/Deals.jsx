import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { products } from "../data/products";

function Deals({ cart = [], setCart, setQuantities }) {
  const [searchTerm, setSearchTerm] = useState("");

  const dealProducts = products.filter((product) => product.deal === true);

  const filteredDeals = dealProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
    <main className="pt-24 pb-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
          <div>
            <p className="text-blue-600 font-semibold">Special Offers</p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Product Deals
            </h1>
            <p className="mt-3 text-gray-600">
              Find discounted tech products and add them to your cart.
            </p>
          </div>

          <input
            type="search"
            placeholder="Search deals..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-80 rounded-2xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDeals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default Deals;