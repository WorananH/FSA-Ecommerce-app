import { useEffect, useState, useContext } from "react";
import { getSingleProduct } from "../api/api";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Cart from "./Cart";
import Filter from "./Filter";
import SortCat from "./SortCat";

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

  const DollarUsd = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Filter />
      <div className="flex-1 flex flex-col self-stretch items-center min-w-[100px] border-2 border-['lightgray'] px-2 mr-5  mt-7 rounded-lg">
        <p className="font-bold">{product.category}</p>
        {/* text */}
        <h3 className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
          {product.title}
        </h3>
        <span className="font-bold text-blue-600">
          {DollarUsd.format(product.price)}
        </span>
        {/* image & text wrapper */}
        <img
          className="h-[400px] w-[500px] max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg
           hover:shadow-black/70 overflow-auto touch-pan-y mt-8  "
          src={product.image}
          alt={product.title}
        />
        {/* text */}
        <p className="mb-8 mt-8">{product.description}</p>
      </div>
      <div>
        <button
          className="bg-gray-300 w-[500px] rounded-lg py-1  text-green-800 mb-2 hover:bg-gray-400 hover:text-white font-bold"
          onClick={() => addToCart(product)}
        >
          ADD TO CART
        </button>
        <hr />
        <button
          className="bg-gray-300 w-[500px] rounded-lg py-1  text-green-800 mb-2 hover:bg-gray-400 hover:text-white font-bold"
          onClick={() => navigate("/")}
        >
          Back to Home page
        </button>
      </div>
      {isShowCart && <Cart cart={cart} setIsShowCart={setIsShowCart} />}
    </>
  );
};

export default SingleProduct;
