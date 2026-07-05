import { useState } from "react";
import { Link } from "react-router-dom";

function Login1() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
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

    if (!form.email || !form.password) {
      alert("Please enter your email and password.");
      return;
    }

    alert("Login successful.");
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 flex items-center justify-center">
      <div className="w-full max-w-md bg-white border border-gray-100 rounded-2xl shadow-sm p-6 md:p-8">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
            S
          </div>

          <h1 className="mt-5 text-3xl font-bold text-gray-900">Login</h1>
          <p className="mt-2 text-gray-600">
            Welcome back to SmartTech Store
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              id="email"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>

            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Enter your password"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input
                name="remember"
                type="checkbox"
                checked={form.remember}
                onChange={handleChange}
              />
              Remember me
            </label>

            <a href="#" className="text-blue-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-600 mt-6">
          Do not have an account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold hover:underline">
            Create an account
          </Link>
        </p>

        <div className="flex items-center my-6">
          <div className="flex-grow h-px bg-gray-200"></div>
          <span className="px-4 text-sm text-gray-500">Or</span>
          <div className="flex-grow h-px bg-gray-200"></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="border border-gray-300 text-gray-700 p-3 rounded-xl hover:bg-gray-50">
            <i className="fa-brands fa-facebook mr-2 text-blue-600"></i>
            Facebook
          </button>

          <button className="border border-gray-300 text-gray-700 p-3 rounded-xl hover:bg-gray-50">
            <i className="fa-brands fa-google mr-2 text-red-500"></i>
            Google
          </button>
        </div>
      </div>
    </main>
  );
}

export default Login1;