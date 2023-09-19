import React from "react";

const Cart = ({ setIsShowCart }) => {
  return (
    <div
      className="fixed inset-0 bg-[rgba(0,0,0,0.7)]"
      onClick={() => setIsShowCart(false)}
    >
      <div
        onClick={e => e.stopPropagation()}
        className="bg-white w-[250px] h-full absolute right-0"
      >
        <h1 className="bg-gray-300 py-2 text-center ">CART</h1>
      </div>
    </div>
  );
};

export default Cart;

// my cart doesnt work properly at 9.25pm
