import { Link } from "react-router-dom";
import { products } from "../data/products";

function Collection1() {
  const categories = ["Phone", "Laptop", "Accessories", "Gaming"];

  const brands = [
    "https://i.pinimg.com/1200x/9b/9d/52/9b9d52c6d5d63138fcf23658fb17c2a6.jpg",
    "https://i.pinimg.com/1200x/dc/36/c1/dc36c1d02dfe2ec192b7ec6d2289cb2d.jpg",
    "https://i.pinimg.com/736x/a8/49/e0/a849e02b64d20b2c2cb8e520d0a8dcae.jpg",
    "https://i.pinimg.com/736x/14/30/a3/1430a39a31c0be3ef1c6af49a1b28cb8.jpg",
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-blue-600 font-semibold">Shop Faster</p>
          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            Shop By Category
          </h2>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const count = products.filter((product) =>
              product.category.includes(category)
            ).length;

            return (
              <div
                key={category}
                className="rounded-2xl bg-gray-50 border border-gray-100 p-6 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                  <i className="fa-solid fa-layer-group"></i>
                </div>

                <h3 className="mt-5 text-xl font-bold">{category}</h3>
                <p className="mt-1 text-gray-500">{count} products</p>

                <Link
                  to="/product"
                  className="mt-5 inline-block text-blue-600 font-semibold"
                >
                  Explore
                  <i className="fa-solid fa-arrow-right ml-2"></i>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 flex  gap-6 overflow-x-auto pb-3">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="min-w-[180px] h-20 rounded-xl bg-white border border-gray-100 flex items-center justify-center"
            >
              <img
                src={brand}
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-contain rounded-xl"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Collection1;