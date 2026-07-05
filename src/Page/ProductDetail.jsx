import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetail({ cart = [], setCart, setQuantities }) {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors[0]);

  if (!product) {
    return (
      <main className="pt-24 text-center min-h-screen">
        <h1 className="text-3xl font-bold">Product not found</h1>
        <Link to="/product" className="text-blue-600 font-semibold">
          Back to products
        </Link>
      </main>
    );
  }

  const addToCart = () => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setQuantities((prev) => ({
        ...prev,
        [product.id]: (prev[product.id] || 1) + quantity,
      }));
    } else {
      setCart([...cart, product]);
      setQuantities((prev) => ({
        ...prev,
        [product.id]: quantity,
      }));
    }

    alert("Product added to cart.");
  };

  return (
    <main className="bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
        <div>
          <img
            src={selectedColor.image}
            alt={product.name}
            className="w-full h-[420px] object-cover rounded-2xl shadow-sm bg-white"
          />

          <div className="mt-4 flex gap-3">
            {product.colors.map((color) => (
              <button
                key={color.name}
                onClick={() => setSelectedColor(color)}
                className={`w-10 h-10 rounded-full ${color.className} ${
                  selectedColor.name === color.name
                    ? "ring-2 ring-blue-600 ring-offset-2"
                    : ""
                }`}
                title={color.name}
              ></button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <p className="text-blue-600 font-semibold">{product.brand}</p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-4 text-gray-600">{product.description}</p>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold">${product.price}</span>
            <span className="text-gray-400 line-through">
              ${product.oldPrice}
            </span>
          </div>

          <p className="mt-4 text-gray-600">{product.warranty}</p>

          <div className="mt-6">
            <label className="font-semibold">Quantity</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="ml-4 w-20 border rounded-lg px-3 py-2 text-center"
            />
          </div>

          <button
            onClick={addToCart}
            className="mt-6 w-full bg-blue-600 text-white rounded-xl py-3 font-semibold hover:bg-blue-700"
          >
            Add To Cart
          </button>

          <div className="mt-8">
            <h2 className="font-bold text-xl">Key Features</h2>
            <ul className="mt-3 space-y-2">
              {product.features.map((feature) => (
                <li key={feature} className="text-gray-600">
                  <i className="fa-solid fa-check text-green-500 mr-2"></i>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;