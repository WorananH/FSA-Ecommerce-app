import logo from "../../assets/logo.png";
import { GiShoppingCart } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext";

const Header = ({ setIsShowCart }) => {
  const { login, logout, isLoggedIn } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  return (
    <div className="container mx-auto flex items-center justify-between bg-gray-400 ">
      <img src={logo} alt="logo" className="w-16 h-16 py-0.4 text-white px-0" />
      <div className="flex item-center">
        <div className="flex mt-2 mr-2 ">
          <h3 className="gap-4">Meya's Shop</h3>

          <div className="px-1 ">
            {isLoggedIn ? (
              <div className="font-bold text-gray-600">
                <p onClick={logout}>Logout</p>
              </div>
            ) : (
              <Link to="/login" className="bg-black text-white p-2 rounded-md">
                Login
              </Link>
            )}
          </div>

          <div className="relative" onClick={() => setIsShowCart(true)}>
            <GiShoppingCart className="text-[30px]" />
            {cart.length > 0 && (
              <span className="bg-blue-700 text-white w-5 h-5 rounded-full absolute -top-4 left-2 text-center leading-2">
                {cart.length}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
