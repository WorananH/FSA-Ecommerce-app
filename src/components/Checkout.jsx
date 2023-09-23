import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../context/cartcontext";
import { useNavigate } from "react-router-dom";

const Checkout = ({ total }) => {
  const { cart, addToCart, removeFormCart } = useContext(CartContext);
  const navigate = useNavigate();

  const checkout = () => {
    navigate("/");
  }


  return (

  )
};

export default Checkout;
