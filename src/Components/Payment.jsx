import { useState } from "react";

function Payment({
  cart = [],
  setCart,
  quantities = {},
  setQuantities,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [customer, setCustomer] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  const formatMoney = (amount) => {
    return amount.toFixed(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setCustomer({
      ...customer,
      [name]: value,
    });
  };

  const changeQty = (id, number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + number, 1),
    }));
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);

    setQuantities((prev) => {
      const newQuantities = { ...prev };
      delete newQuantities[id];
      return newQuantities;
    });
  };

  const subtotal = cart.reduce((sum, item) => {
    const qty = quantities[item.id] || 1;
    return sum + item.price * qty;
  }, 0);

  const totalItems = cart.reduce((sum, item) => {
    const qty = quantities[item.id] || 1;
    return sum + qty;
  }, 0);

  const shipping = cart.length > 0 ? 2 : 0;
  const total = subtotal + shipping;

  const openCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty.");
      return;
    }

    setModalOpen(true);
  };

  const handleSendOrder = () => {
    if (!customer.fullName || !customer.phone || !customer.address) {
      alert("Please fill in all shipping information.");
      return;
    }

    const orderItems = cart
      .map((item) => {
        const qty = quantities[item.id] || 1;
        return `${item.name} x ${qty} = $${formatMoney(item.price * qty)}`;
      })
      .join("\n");

    const message = `
NEW ORDER
--------------------
Name: ${customer.fullName}
Phone: ${customer.phone}
Address: ${customer.address}

Items:
${orderItems}

Total Items: ${totalItems}
Subtotal: $${formatMoney(subtotal)}
Shipping: $${formatMoney(shipping)}
Total: $${formatMoney(total)}
`;

    navigator.clipboard.writeText(message);

    window.open("https://t.me/Nakk1234", "_blank");

    setModalOpen(false);
    alert("Order copied. Please paste it in Telegram chat.");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <p className="text-blue-600 font-semibold">Checkout</p>
          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            Shopping Cart
          </h1>
          <p className="mt-3 text-gray-600">
            Review your items before placing your order.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-2xl font-semibold mb-6">Cart Items</h2>

            {cart.length === 0 ? (
              <div className="text-center py-16">
                <i className="fa-solid fa-cart-shopping text-5xl text-gray-300"></i>
                <p className="mt-4 text-gray-500">Your cart is empty.</p>
              </div>
            ) : (
              <div className="space-y-5">
                {cart.map((item) => {
                  const qty = quantities[item.id] || 1;

                  return (
                    <div
                      key={item.id}
                      className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-gray-100 pb-5"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full sm:w-24 h-40 sm:h-24 rounded-xl object-cover bg-gray-100"
                      />

                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.brand}</p>
                        <p className="mt-2 font-semibold text-blue-600">
                          ${formatMoney(item.price * qty)}
                        </p>
                      </div>

                      <div className="flex sm:flex-col items-center justify-between gap-3">
                        <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                          <button
                            onClick={() => changeQty(item.id, -1)}
                            className="px-3 py-2 hover:bg-gray-100"
                          >
                            -
                          </button>

                          <span className="w-10 text-center font-semibold">
                            {qty}
                          </span>

                          <button
                            onClick={() => changeQty(item.id, 1)}
                            className="px-3 py-2 hover:bg-gray-100"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-sm font-medium hover:underline"
                        >
                          <i className="fa-solid fa-trash mr-1"></i>
                          Remove
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>

          <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-500">Items</span>
                <span className="font-medium">{totalItems}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium">${formatMoney(subtotal)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium">${formatMoney(shipping)}</span>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>${formatMoney(total)}</span>
              </div>
            </div>

            <button
              onClick={openCheckout}
              className="mt-6 w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700 transition"
            >
              Checkout
            </button>
          </aside>
        </div>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-2xl font-bold text-center mb-6">
              Shipping Details
            </h2>

            <div className="space-y-4">
              <input
                name="fullName"
                value={customer.fullName}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full name"
              />

              <input
                name="phone"
                value={customer.phone}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Phone number"
              />

              <textarea
                name="address"
                value={customer.address}
                onChange={handleInputChange}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Delivery address"
                rows="4"
              ></textarea>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => setModalOpen(false)}
                className="px-5 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Cancel
              </button>

              <button
                onClick={handleSendOrder}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default Payment;