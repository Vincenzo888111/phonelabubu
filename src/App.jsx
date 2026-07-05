import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";

import Home from "./Page/Home";
import Premium from "./Page/Premium";
import Collection from "./Page/Collection";
import Collection1 from "./Page/Collection1";
import Collection2 from "./Page/Collection2";
import Product from "./Page/Product";
import Product1 from "./Page/Product1";
import ProductDetail from "./Page/ProductDetail";
import Deals from "./Page/Deals";

import About from "./Components/About";
import Contact from "./Components/Contact";
import Services from "./Components/Service";
import Login from "./Components/Login";
import Login1 from "./Components/Login1";
import Payment from "./Components/Payment";

function App() {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState({});

  const notification = Object.values(quantities).reduce((sum, qty) => {
    return sum + qty;
  }, 0);

  return (
    <>
      <Header notification={notification} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Premium />
              <Collection
                cart={cart}
                setCart={setCart}
                setQuantities={setQuantities}
              />
              <Collection1 />
              <Collection2 />
              <Footer />
            </>
          }
        />

        <Route
          path="/product"
          element={
            <>
              <Product />
              <Product1
                cart={cart}
                setCart={setCart}
                setQuantities={setQuantities}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetail
              cart={cart}
              setCart={setCart}
              setQuantities={setQuantities}
            />
          }
        />

        <Route
          path="/deals"
          element={
            <>
              <Deals
                cart={cart}
                setCart={setCart}
                setQuantities={setQuantities}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/payment"
          element={
            <Payment
              cart={cart}
              setCart={setCart}
              quantities={quantities}
              setQuantities={setQuantities}
            />
          }
        />

        <Route path="/about" element={<><About /><Footer /></>} />
        <Route path="/contact" element={<><Contact /><Footer /></>} />
        <Route path="/services" element={<><Services /><Footer /></>} />

        <Route path="/login" element={<Login />} />
        <Route path="/login1" element={<Login1 />} />
      </Routes>
    </>
  );
}

export default App;