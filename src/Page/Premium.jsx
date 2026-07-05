import React from "react";

function Premium() {
  return (
    <div className="bg-gray-50 w-full h-auto p-5">
      <div className="flex justify-center pt-20 pb-10">
        <button className="bg-black/10 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 flex justify-center rounded-2xl px-10 p-2">
          <i className="fa-regular fa-star text-white"></i>
          <p className="text-sm text-white font-mono">Premium Service</p>
          <i className="fa-regular fa-star text-white"></i>
        </button>
      </div>

      {/* header */}
      <h1 className="text-6xl font-bold text-center">
        Beyond Just <br />{" "}
        <span className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent ">
          A Purchase
        </span>
      </h1>
      <p className="text-center p-5 text-gray-500">
        We offer a full range of services that go beyond simple safety. <br />{" "}
        From instant delivery to professional repairs, <br /> our team ensures
        you get fast, reliable, and expert solutions every time. <br /> With
        years of experience and a commitment to quality, <br />
        we make sure your needs are handled efficiently and professionally.
      </p>

      {/* card container */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pt-10 gap-6 justify-items-center max-w-6xl mx-auto">
        {/* card 1: Lightning Fast Delivery */}
        <div className="bg-white shadow-xl rounded-4xl w-80 h-auto p-6 border-2 border-transparent transition-all duration-300 hover:shadow-2xl  hover:border-sky-500">
          <div className="relative w-12 h-12 bg-gradient-to-br from-sky-500 to-sky-300 rounded-xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-truck-fast text-white text-lg"></i>
          </div>
          <div className="flex-1">
            <h1 className="bg-gradient-to-br from-sky-600 to-sky-200 bg-clip-text text-transparent pb-2 font-bold text-xl">
              Lightning Fast Delivery
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Free express shipping on all orders over $499. Get your device in
              24 hours or less.
            </p>
            <div className="mb-6">
              <div className="mb-2">
                <p className="text-sm font-semibold text-gray-800">
                  24-hour delivery
                </p>
                <p className="text-xs text-gray-500">
                  Free shipping • Real-time tracking
                </p>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-br from-blue-500 to-sky-300 text-white rounded-3xl px-4 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center">
            Learn More
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </button>
        </div>

        {/* card 2: Premium Protection */}
        <div className="bg-white shadow-xl rounded-4xl w-80 h-auto p-6 border-2 border-transparent transition-all duration-300 hover:shadow-2xl  hover:border-emerald-500">
          <div className="relative w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-300 rounded-xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-shield-halved text-white text-lg"></i>
          </div>
          <div className="flex-1">
            <h1 className="bg-gradient-to-br from-emerald-600 to-emerald-200 bg-clip-text text-transparent pb-2 font-bold text-xl">
              Premium Protection
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Comprehensive 2-year warranty with accidental damage coverage
              included.
            </p>
            <div className="mb-6">
              <div className="mb-2">
                <p className="text-sm font-semibold text-gray-800">
                  2-year warranty
                </p>
                <p className="text-xs text-gray-500">
                  Accidental damage • Free replacements
                </p>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-br from-emerald-500 to-emerald-300 text-white rounded-3xl px-4 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center">
            Learn More
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </button>
        </div>

        {/* card 3: Hassle-Free Returns */}
        <div className="bg-white shadow-xl rounded-4xl w-80 h-auto p-6 border-2 border-transparent transition-all duration-300 hover:shadow-2xl hover:border-amber-500">
          <div className="relative w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-300 rounded-xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-arrow-rotate-left text-white text-lg"></i>
          </div>
          <div className="flex-1">
            <h1 className="bg-gradient-to-br from-amber-600 to-amber-200 bg-clip-text text-transparent pb-2 font-bold text-xl">
              Hassle-Free Returns
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              30-day no-questions-asked return policy with free return shipping.
            </p>
            <div className="mb-6">
              <div className="mb-2">
                <p className="text-sm font-semibold text-gray-800">
                  30-day returns
                </p>
                <p className="text-xs text-gray-500">
                  Free returns • Instant refunds
                </p>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-br from-amber-500 to-amber-300 text-white rounded-3xl px-4 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center">
            Learn More
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </button>
        </div>
        {/* card 4: Expert Support */}
        <div className="bg-white shadow-xl rounded-4xl w-80 h-auto p-6 border-2 border-transparent transition-all duration-300 hover:border-purple-600">
          <div className="relative w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-300 rounded-xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-headphones text-white text-lg"></i>
          </div>
          <div className="flex-1">
            <h1 className="bg-gradient-to-br from-purple-600 to-purple-200 bg-clip-text text-transparent pb-2 font-bold text-xl">
              24/7 Expert Support
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Free express shipping on all orders over $499. Get your device in
              24 hours or less.
            </p>
            <div className="mb-6">
              <div className="mb-2">
                <p className="text-sm font-semibold text-gray-800">
                  24-hour delivery
                </p>
                <p className="text-xs text-gray-500">
                  Free shipping • Real-time tracking
                </p>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-br from-purple-600 to-purple-300 text-white rounded-3xl px-4 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center">
            Learn More
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </button>
        </div>

        {/* card 5: Premium Protection */}
        <div className="bg-white shadow-xl rounded-4xl w-80 h-auto p-6 border-2 border-transparent transition-all duration-300 hover:border-pink-600">
          <div className="relative w-12 h-12 bg-gradient-to-br from-pink-600 to-pink-300 rounded-xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-mobile-screen text-white text-lg"></i>
          </div>
          <div className="flex-1">
            <h1 className="bg-gradient-to-br from-pink-600 to-pink-200 bg-clip-text text-transparent pb-2 font-bold text-xl">
              Smart-Trade-In Program
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              Comprehensive 2-year warranty with accidental damage coverage
              included.
            </p>
            <div className="mb-6">
              <div className="mb-2">
                <p className="text-sm font-semibold text-gray-800">
                  2-year warranty
                </p>
                <p className="text-xs text-gray-500">
                  Accidental damage • Free replacements
                </p>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-br from-pink-600 to-pink-300 text-white rounded-3xl px-4 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center">
            Learn More
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </button>
        </div>

        {/* card 6: Hassle-Free Returns */}
        <div className="bg-white shadow-xl rounded-4xl w-80 h-auto p-6 border-2 border-transparent transition-all duration-300 hover:border-blue-600">
          <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600  rounded-xl flex items-center justify-center mb-4">
            <i className="fa-solid fa-wrench text-white text-xl"></i>
          </div>
          <div className="flex-1">
            <h1 className="bg-gradient-to-br from-blue-600 to-purple-600  bg-clip-text text-transparent pb-2 font-bold text-xl">
              Hassle-Free Returns
            </h1>
            <p className="text-sm text-gray-600 mb-4">
              30-day no-questions-asked return policy with free return shipping.
            </p>
            <div className="mb-6">
              <div className="mb-2">
                <p className="text-sm font-semibold text-gray-800">
                  30-day returns
                </p>
                <p className="text-xs text-gray-500">
                  Free returns • Instant refunds
                </p>
              </div>
            </div>
          </div>
          <button className="bg-gradient-to-br from-blue-600 to-purple-600  text-white rounded-3xl px-4 py-3 font-medium hover:opacity-90 transition-opacity flex items-center justify-center">
            Learn More
            <i className="fa-solid fa-arrow-right-long ml-2"></i>
          </button>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6">
        <div
          className="flex flex-wrap justify-between items-center gap-6
           rounded-2xl px-8 py-6
           bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
           text-white shadow-lg"
        >
          {/* <!-- Item --> */}
          <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
            <i className="fa-solid fa-rocket text-xl mb-2"></i>
            <p className="text-sm font-medium">Same-day service</p>
          </div>

          <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
            <i className="fa-solid fa-headset text-xl mb-2"></i>
            <p className="text-sm font-medium">24/7 customer support</p>
          </div>

          <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
            <i className="fa-solid fa-truck-fast text-xl mb-2"></i>
            <p className="text-sm font-medium">Free gift wrapping</p>
          </div>

          <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
            <i className="fa-solid fa-certificate text-xl mb-2"></i>
            <p className="text-sm font-medium">Certified sellers</p>
          </div>

          <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
            <i className="fa-solid fa-user-gear text-xl mb-2"></i>
            <p className="text-sm font-medium">Expert consultation</p>
          </div>

          <div className="flex flex-col items-center text-center flex-1 min-w-[120px]">
            <i className="fa-solid fa-money-bill-wave text-xl mb-2"></i>
            <p className="text-sm font-medium">Free safety check</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Premium;
