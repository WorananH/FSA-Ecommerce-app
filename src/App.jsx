import Header from "./components/pages/Header";
import ProductsData from "./components/ProductsData";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import { useState, useEffect } from "react";

import "./App.css";
import SingleProduct from "./components/SingleProduct";
import { CartProvider } from "./context/cartcontext";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);

  return (
    <div>
      <CartProvider>
        <Header setIsShowCart={setIsShowCart} />
        <Routes>
          <Route
            path="/"
            element={
              <ProductsData
                isShowCart={isShowCart}
                setIsShowCart={setIsShowCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct
                isShowCart={isShowCart}
                setIsShowCart={setIsShowCart}
              />
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;

//cart = { cart };

//I had a problem with passing the props, setIsShowCart from ProductsData to Head and App.
