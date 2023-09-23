import { useEffect, useState, useContext } from "react";
import { getSingleProduct } from "../api/api";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
export const SingleProduct = ({ isShowCart, setIsShowCart }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  //const { addToCart } = useContext(CartContext);
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getproduct = async () => {
      const result = await getSingleProduct(id);
      setProduct(result);
      console.log(result);
      console.log(product);
    };
    getproduct();
  }, [id]);

  return (
    <>
      <div className="container">
        <h3>{product.title}</h3>
        <span>{product.price}</span>
        <p>{product.category}</p>
        <p>{product.description}</p>
        <img src={product.image} alt={product.title} />
        <button onClick={() => addToCart(product)}>ADD TO CART</button>
        <hr />
        <button onClick={() => navigate("/")}>Back to Home page</button>
      </div>
      {isShowCart && <Cart cart={cart} setIsShowCart={setIsShowCart} />}
    </>
  );
};

export default SingleProduct;
