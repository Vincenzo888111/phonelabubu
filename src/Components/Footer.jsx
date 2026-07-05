import { Link } from "react-router-dom";

function Footer() {
  const pages = [
    { name: "Home", path: "/" },
    { name: "Product", path: "/product" },
    { name: "Services", path: "/services" },
    { name: "Deals", path: "/deals" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const socials = [
    { icon: "fa-facebook", link: "#" },
    { icon: "fa-telegram", link: "#" },
    { icon: "fa-instagram", link: "#" },
    { icon: "fa-youtube", link: "https://www.youtube.com/" },
  ];

  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <span className="font-bold">S</span>
            </div>
            <span className="text-2xl font-bold">SmartTech Store</span>
          </Link>

          <p className="mt-5 text-gray-400 leading-relaxed">
            A responsive React e-commerce project for browsing smartphones,
            deals, product details, cart, and checkout.
          </p>

          <div className="mt-5 flex gap-4">
            {socials.map((item) => (
              <a
                key={item.icon}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600"
              >
                <i className={`fa-brands ${item.icon}`}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold">Pages</h2>
          <ul className="mt-5 space-y-3">
            {pages.map((page) => (
              <li key={page.name}>
                <Link to={page.path} className="text-gray-400 hover:text-white">
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-bold">Contact</h2>

          <div className="mt-5 space-y-4 text-gray-400">
            <p>
              <i className="fa-solid fa-phone mr-2"></i>
              087 77 49 11
            </p>
            <p>
              <i className="fa-solid fa-envelope mr-2"></i>
              kornvathanak@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-location-dot mr-2"></i>
              Phnom Penh, Cambodia
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-gray-400 text-sm">
        Copyright 2026. All Rights Reserved by Vathanak.
      </div>
    </footer>
  );
}

export default Footer;