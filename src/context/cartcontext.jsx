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

  // //Handle add cart
  // const increaseQuantity = product => {
  //   setCart(prev => {
  //     const findProductInCart = prev.find(item => item.id === product.id);
  //     if (findProductInCart) {
  //       return prev.map(
  //         item =>
  //           item.id === product.id ? { ...item, amount: item.amount + 1 } : item // : { item }
  //       );
  //     }

  //     return [...prev, { ...product, amount: 1 }];
  //   });
  // };

  // const decreaseQuantity = id => {
  //   setCart(prev => {
  //     return prev.reduce((cal, item) => {
  //       if (item.id !== id) {
  //         if (item.amount === 1) return cal;
  //         return [...cal, { ...item, amount: item.amount - 1 }];
  //       }
  //     }, []);
  //   });
  // };

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
