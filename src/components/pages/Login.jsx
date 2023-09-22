import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import httpRequest from "../../utils/request";
import { loginUser } from "../../api/api";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);
  // useEffect(() => {
  //   if (authUser.email) {
  //     navigate("/");
  //   }
  // }, [authUser.email, navigate]);

  const handleChange = e => {
    setUser(prev => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    // login(user);

    if (!user.email || !user.password) {
      alert("Please fill all the fields");
      return;
    }
    try {
      const token = await loginUser(user.email, user.password);
      login(token);
      navigate("/");
    } catch (err) {
      console.log("login failed", err);
    }
  };

  return (
    <div className=" inset-0 bg-[rgba(0,0,0,0.7)">
      <div className="">
        <form className="flex flex-col gap-2">
          <h1 className="text-[2.5rem]">Login</h1>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              onChange={handleChange}
              className="border border-gray-500 pl-2"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={user.email}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              onChange={handleChange}
              className="border border-gray-500 pl-2"
              type="password"
              id="password"
              placeholder="Enter your password"
              value={user.password}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 text-white  w-full py-1 font-bold"
          >
            Login
          </button>
          <div>
            <Link className="text-right text-[0.8rem]" to="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
