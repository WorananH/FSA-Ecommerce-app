import { createContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
  clearCart: () => {},
});

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [clear, setClear] = useState(false);

  const addToCart = item => {
    if (cart.find(i => i.id === item.id)) {
      console.log("itemAlreadyExit");
      const index = cart.findIndex(i => i.id === item.id);
      cart[index].amount++;
      console.log(cart[index]);
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, amount: 1 }]);
    }
  };

  const removeFromCart = index => {
    setCart(cart.filter((item, i) => i !== index));
  };

  // clear cart
  const clearCart = () => {
    setClear([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        // increaseQuantity,
        // decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
//clg
