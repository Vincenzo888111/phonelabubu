import { products } from "../data/products";

function Product() {
  const brands = [...new Set(products.map((product) => product.brand))];

  return (
    <section className="pt-24 pb-14 px-4 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <p className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full font-semibold">
          <i className="fa-solid fa-circle text-green-300 text-xs"></i>
          Premium Collection
        </p>

        <h1 className="mt-6 text-4xl md:text-5xl font-bold">
          Discover Your Perfect Smartphone
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-white/90">
          Explore a clean product collection with search, brand filter,
          product details, and shopping cart features.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white/15 rounded-2xl p-5">
            <h2 className="text-3xl font-bold">{products.length}</h2>
            <p className="text-white/80">Products</p>
          </div>

          <div className="bg-white/15 rounded-2xl p-5">
            <h2 className="text-3xl font-bold">{brands.length}</h2>
            <p className="text-white/80">Brands</p>
          </div>

          <div className="bg-white/15 rounded-2xl p-5">
            <h2 className="text-3xl font-bold">4.7</h2>
            <p className="text-white/80">Average Rating</p>
          </div>

          <div className="bg-white/15 rounded-2xl p-5">
            <h2 className="text-3xl font-bold">
              <i className="fa-solid fa-check"></i>
            </h2>
            <p className="text-white/80">Responsive UI</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;