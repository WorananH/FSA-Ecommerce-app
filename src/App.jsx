import Header from "./components/pages/Header";
import ProductsData from "./components/ProductsData";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import { useState } from "react";

import "./App.css";
import SingleProduct from "./components/SingleProduct";

function App() {
  const [isShowCart, setIsShowCart] = useState(false);
  const [cart, setCart] = useState([]);
  //Handle add cart
  const handleAddToCart = product => {
    setCart(prev => {
      const findProductInCart = prev.find(item => item.id === product.id);
      if (findProductInCart) {
        return prev.map(item =>
          item.id === product.id ? { ...item, anmount: item.amount + 1 } : item
        );
      }
      // firten add to cart
      return [...prev, { product, amount: 1 }];
    });
  };

  return (
    <div>
      <Header setIsShowCart={setIsShowCart} cart={cart} />
      <Routes>
        <Route
          path="/"
          element={
            <ProductsData
              isShowCart={isShowCart}
              setIsShowCart={setIsShowCart}
              handleAddToCart={handleAddToCart}
            />
          }
        />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

//cart = { cart };

//I had a problem with passing the props, setIsShowCart from ProductsData to Head and App.
