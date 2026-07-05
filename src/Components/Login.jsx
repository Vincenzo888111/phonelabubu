import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.firstName || !form.email || !form.password || !form.agree) {
      alert("Please complete the form and accept the terms.");
      return;
    }

    alert("Account created successfully.");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden grid md:grid-cols-2">
        <div className="hidden md:block relative">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Phone shop"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/40"></div>
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-3xl font-bold">SmartTech Store</h1>
            <p className="mt-2 text-white/90">
              Create an account to manage your orders.
            </p>
          </div>
        </div>

        <div className="p-6 md:p-10">
          <h2 className="text-3xl font-bold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-gray-600">
            Already have an account?{" "}
            <Link to="/login1" className="text-blue-600 font-semibold">
              Login
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                type="text"
                placeholder="First name"
                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                type="text"
                placeholder="Last name"
                className="rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="flex items-center gap-3 text-sm text-gray-600">
              <input
                name="agree"
                type="checkbox"
                checked={form.agree}
                onChange={handleChange}
              />
              I agree to the terms and privacy policy.
            </label>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default Login;