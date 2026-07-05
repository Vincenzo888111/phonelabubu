import { useState } from "react";
import { Link } from "react-router-dom";

function Header({ notification }) {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Services", path: "/services" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold text-blue-600">
              SmartTech Store
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/deals"
              className="hidden xl:block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-2 rounded-full font-medium"
            >
              Shop Now
            </Link>

            <Link to="/login" className="hidden md:block" aria-label="Login">
              <i className="fa-regular fa-user text-xl"></i>
            </Link>

            <Link to="/payment" className="relative" aria-label="Cart">
              <i className="fa-solid fa-cart-shopping text-xl"></i>

              {notification > 0 && (
                <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full px-1.5 font-bold">
                  {notification}
                </span>
              )}
            </Link>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2"
              aria-label="Toggle menu"
            >
              <i className="fa-solid fa-bars text-xl"></i>
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div className="md:hidden fixed top-16 left-0 w-full z-40 bg-white border-b shadow-md px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setOpen(false)}
              className="block text-gray-700 font-medium"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/login"
            onClick={() => setOpen(false)}
            className="block text-gray-700 font-medium"
          >
            Login
          </Link>
        </div>
      )}
    </>
  );
}

export default Header;