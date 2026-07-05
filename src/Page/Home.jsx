import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const products = [
    {
      name: "iPhone 15 Pro",
      image:  "https://i.pinimg.com/1200x/d8/35/c3/d835c3944ca58d05e142b396f18a146c.jpg",
      description: "AI camera, premium display, and long battery life",
    },
    {
      name: "Samsung Galaxy S24 Ultra",
      image: "https://i.pinimg.com/1200x/5b/d8/93/5bd893c5ec4277bc4cff54fbb3e79afb.jpg",
      description: "Fast performance, titanium design, and advanced camera",
    },
    {
      name: "Xiaomi 14 Ultra",
      image: "https://i.pinimg.com/736x/ad/78/bd/ad78bda243814bb2d5e57e81d972020f.jpg",
      description: "Leica camera, smooth display, and fast charging",
    },
  ];

  const features = [
    {
      icon: "fa-truck-fast",
      title: "Free Shipping",
      subtitle: "24-hour delivery",
    },
    {
      icon: "fa-shield-halved",
      title: "2-Year Warranty",
      subtitle: "Premium protection",
    },
    {
      icon: "fa-headset",
      title: "24/7 Support",
      subtitle: "Expert assistance",
    },
    {
      icon: "fa-users",
      title: "10K+ Customers",
      subtitle: "Trusted service",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-slate-100 to-blue-100 flex flex-col lg:flex-row items-center justify-center gap-10 px-4 md:px-8 lg:px-16 pt-28 pb-16 overflow-hidden">
      <div className="lg:w-1/2 space-y-8">
        <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-full px-5 py-2.5 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-green-500"></span>
          <span className="text-sm font-medium text-blue-700">
            Limited Time Offer
          </span>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Discover Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
              Perfect Smartphone
            </span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed">
            Browse premium smartphones with clean design, clear product
            information, special deals, and simple shopping features.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/product"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl py-3.5 px-8 hover:shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <span>Shop Latest Models</span>
            <i className="fa-solid fa-arrow-right"></i>
          </Link>

          <Link
            to="/deals"
            className="bg-white text-gray-800 font-semibold border border-gray-200 rounded-xl py-3.5 px-8 hover:bg-gray-50 hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            <i className="fa-solid fa-tag text-blue-600"></i>
            <span>View Deals</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="flex flex-col items-center text-center gap-2">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <i className={`fa-solid ${item.icon} text-blue-600 text-xl`}></i>
                </div>

                <h3 className="font-bold text-gray-900 text-sm">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-1/2 relative flex justify-center lg:justify-end">
        <div className="relative max-w-lg w-full">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.name} className="w-full flex-shrink-0 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-[360px] md:h-[500px] object-cover"
                  />

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-white">
                      <h2 className="text-xl font-bold">{product.name}</h2>
                      <p className="text-sm opacity-90">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {products.map((product, index) => (
                <button
                  key={product.name}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Show ${product.name}`}
                  className={`h-2.5 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-white w-8"
                      : "bg-white/50 w-2.5 hover:bg-white"
                  }`}
                ></button>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3.5 rounded-full shadow-lg"
            aria-label="Previous slide"
          >
            <i className="fa-solid fa-chevron-left text-gray-800"></i>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3.5 rounded-full shadow-lg"
            aria-label="Next slide"
          >
            <i className="fa-solid fa-chevron-right text-gray-800"></i>
          </button>

          <div className="absolute -top-4 -right-2 md:-right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white font-bold py-2 px-5 rounded-full shadow-xl">
            -30% OFF
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;