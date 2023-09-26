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
  // const [clear, setClear] = useState(false);

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

  const removeFromCart = item => {
    const itemIndex = cart.findIndex(i => i.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[itemIndex].amount > 1) {
        updatedCart[itemIndex].amount--;
      } else {
        updatedCart.splice(itemIndex, 1);
      }
      setCart(updatedCart);
    }
    console.log(cart);
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, CartContext };
