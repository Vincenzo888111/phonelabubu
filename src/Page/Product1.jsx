import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { products } from "../data/products";

function Product1({ cart = [], setCart, setQuantities }) {
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const brands = ["All", ...new Set(products.map((product) => product.brand))];

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

  const filteredProducts = products
    .filter((product) => selectedBrand === "All" || product.brand === selectedBrand)
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <main className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-72 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 h-fit">
            <h2 className="font-bold text-lg">
              <i className="fa-solid fa-filter mr-2"></i>
              Filters
            </h2>

            <p className="mt-5 font-semibold">Brands</p>

            <div className="mt-3 space-y-2">
              {brands.map((brand) => (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`w-full text-left px-4 py-2 rounded-xl ${
                    selectedBrand === brand
                      ? "bg-blue-600 text-white"
                      : "bg-gray-50 hover:bg-gray-100"
                  }`}
                >
                  {brand}
                </button>
              ))}
            </div>
          </aside>

          <section className="flex-1">
            <input
              type="search"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-2xl border border-gray-300 px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="mt-5 text-gray-600">
              Showing {filteredProducts.length} products
            </p>

            <div className="mt-6 grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Product1;