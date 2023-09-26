import Header from "./components/pages/Header";
import ProductsData from "./components/ProductsData";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Logining";
import { useState } from "react";
import Footer from "./components/pages/Footer";
import "./App.css";
import SingleProduct from "./components/SingleProduct";
import { CartProvider } from "./context/CartContext";
import Register from "./components/pages/Register";

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
          <Route path="/signup" element={<Register />} />
        </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;

//cart = { cart };

//I had a problem with passing the props, setIsShowCart from ProductsData to Head and App.
