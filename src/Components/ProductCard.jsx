import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-60 object-cover"
      />

      <div className="p-5">
        <div className="flex justify-between text-sm">
          <span className="text-gray-500">{product.brand}</span>
          <span className="text-yellow-500">
            <i className="fa-solid fa-star mr-1"></i>
            {product.rating}
          </span>
        </div>

        <h3 className="mt-3 text-lg font-bold text-gray-900">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-gray-500">
          {product.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {product.specs.map((item) => (
            <span
              key={item}
              className="text-xs bg-gray-100 px-3 py-1 rounded-full"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex justify-between items-center">
          <p className="text-xl font-bold">${product.price}</p>
          <p className="text-sm text-gray-500 line-through">
            ${product.oldPrice}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <Link
            to={`/product/${product.id}`}
            className="text-center border border-gray-300 rounded-xl py-2 font-semibold hover:bg-gray-50"
          >
            Detail
          </Link>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white rounded-xl py-2 font-semibold hover:bg-blue-700"
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;