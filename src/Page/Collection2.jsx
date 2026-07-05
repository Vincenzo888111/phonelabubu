import { Link } from "react-router-dom";

function Collection2() {
  const benefits = [
    { icon: "fa-truck-fast", title: "Free Shipping", text: "On selected orders" },
    { icon: "fa-shield-halved", title: "Warranty", text: "Clear product support" },
    { icon: "fa-headset", title: "Support", text: "Helpful customer service" },
    { icon: "fa-tag", title: "Deals", text: "Special tech offers" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white shadow-sm border border-gray-100 p-6 md:p-10 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full font-semibold">
              Limited Time Offer
            </p>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900">
              Mega Tech Sale
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl">
              Browse selected smartphones, accessories, and gaming products with
              special discounts.
            </p>

            <Link
              to="/deals"
              className="mt-8 inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700"
            >
              View Deals
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-gray-50 p-5 border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>

                <h3 className="mt-4 font-bold">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Collection2;