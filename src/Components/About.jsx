function About() {
  const features = [
    {
      icon: "fa-truck-fast",
      title: "Fast Delivery",
      text: "We provide quick and reliable delivery for customers in Cambodia.",
    },
    {
      icon: "fa-shield-halved",
      title: "Genuine Products",
      text: "All products are selected carefully with clear product information.",
    },
    {
      icon: "fa-headset",
      title: "Helpful Support",
      text: "We help customers compare phones and choose the right device.",
    },
  ];

  const stats = [
    { number: "20+", label: "Products" },
    { number: "6+", label: "Brands" },
    { number: "24/7", label: "Support" },
    { number: "100%", label: "Responsive" },
  ];

  return (
    <main className="pt-20 bg-gray-50">
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 px-4 py-16 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="font-semibold">About Us</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold">
            About SmartTech Store
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-white/90">
            SmartTech Store is a responsive e-commerce website project for
            browsing smartphones, tech products, deals, and shopping cart items.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-blue-600 font-semibold">Our Goal</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
            A clean shopping experience for tech products
          </h2>
          <p className="mt-5 text-gray-600 leading-relaxed">
            This project focuses on simple navigation, product cards, search,
            brand filtering, cart quantity control, and checkout flow. It was
            built to practice React components, state, props, arrays, and
            responsive design.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <i className={`fa-solid ${item.icon}`}></i>
                </div>
                <div>
                  <h3 className="font-bold text-gray-900">{item.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          alt="Smartphone on a table"
          className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
        />
      </section>

      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white p-6 text-center shadow-sm border border-gray-100"
            >
              <h3 className="text-3xl font-bold text-blue-600">
                {item.number}
              </h3>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;